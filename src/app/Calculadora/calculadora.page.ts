import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  imports: [CommonModule, IonContent],
})
export class CalculadoraPage {
  // Expresión completa que se va construyendo (lo que ve el usuario)
  expresion = signal<string>('');

  // Último resultado calculado (línea pequeña superior, estilo historial)
  ultimoResultado = signal<string>('');

  // Mensaje de error (división por cero, expresión inválida, etc.)
  error = signal<string>('');

  // true = grados, false = radianes
  modoGrados = signal<boolean>(true);

  // ---------- Texto mostrado en pantalla ----------
  get pantalla(): string {
    return this.expresion() === '' ? '0' : this.expresion();
  }

  // ---------- Entrada de dígitos y punto ----------
  ingresarDigito(digito: string) {
    this.error.set('');
    this.expresion.set(this.expresion() + digito);
  }

  ingresarPunto() {
    this.error.set('');
    // Evita poner dos puntos seguidos en el mismo número
    const partes = this.expresion().split(/[+\-×÷^()]/);
    const ultimoNumero = partes[partes.length - 1];
    if (ultimoNumero.includes('.')) return;
    this.expresion.set(this.expresion() + (this.expresion() === '' ? '0.' : '.'));
  }

  // ---------- Operadores binarios ----------
  ingresarOperador(op: '+' | '-' | '×' | '÷' | '^') {
    this.error.set('');
    if (this.expresion() === '' && op !== '-') return; // no iniciar con operador (excepto negativo)
    this.expresion.set(this.expresion() + op);
  }

  // ---------- Paréntesis ----------
  ingresarParentesis(p: '(' | ')') {
    this.error.set('');
    this.expresion.set(this.expresion() + p);
  }

  // ---------- Constantes ----------
  ingresarConstante(c: 'π' | 'e') {
    this.error.set('');
    this.expresion.set(this.expresion() + c);
  }

  // ---------- Funciones científicas (prefijas) ----------
  ingresarFuncion(fn: 'sin(' | 'cos(' | 'tan(' | 'log(' | 'ln(' | '√(') {
    this.error.set('');
    this.expresion.set(this.expresion() + fn);
  }

  // ---------- x² (elevar al cuadrado el número actual) ----------
  aplicarCuadrado() {
    this.error.set('');
    if (this.expresion() === '') return;
    this.expresion.set(this.expresion() + '^2');
  }

  // ---------- % (porcentaje del número actual) ----------
  aplicarPorcentaje() {
    this.error.set('');
    if (this.expresion() === '') return;
    this.expresion.set(this.expresion() + '*0.01');
  }

  // ---------- ± (cambiar signo, solo si la expresión es un número simple) ----------
  alternarSigno() {
    this.error.set('');
    const actual = this.expresion();
    if (/^-?\d*\.?\d*$/.test(actual) && actual !== '') {
      if (actual.startsWith('-')) {
        this.expresion.set(actual.slice(1));
      } else {
        this.expresion.set('-' + actual);
      }
    }
  }

  // ---------- Borrar un carácter (⌫) ----------
  borrarUltimo() {
    this.error.set('');
    this.expresion.set(this.expresion().slice(0, -1));
  }

  // ---------- Borrador de todo (AC) ----------
  borradorDeTodo() {
    this.expresion.set('');
    this.ultimoResultado.set('');
    this.error.set('');
  }

  // ---------- Alternar modo grados / radianes ----------
  alternarModoAngulo() {
    this.modoGrados.set(!this.modoGrados());
  }

  // ---------- Calcular resultado (=) ----------
  calcular() {
    const original = this.expresion();
    if (original === '') return;

    try {
      const jsExpr = this.convertirAExpresionJs(original);

      const gradosARadianes = (g: number) => (g * Math.PI) / 180;
      const usarGrados = this.modoGrados();

      const sinDeg = (x: number) => Math.sin(usarGrados ? gradosARadianes(x) : x);
      const cosDeg = (x: number) => Math.cos(usarGrados ? gradosARadianes(x) : x);
      const tanDeg = (x: number) => Math.tan(usarGrados ? gradosARadianes(x) : x);

      // eslint-disable-next-line no-new-func
      const fn = new Function(
        'sinDeg',
        'cosDeg',
        'tanDeg',
        `"use strict"; return (${jsExpr});`
      );
      const resultado = fn(sinDeg, cosDeg, tanDeg);

      // ---- Validación: división por cero u operación indefinida ----
      if (typeof resultado !== 'number' || !isFinite(resultado) || isNaN(resultado)) {
        this.error.set('Error: operación indefinida (¿división entre 0?)');
        return;
      }

      const formateado = this.formatear(resultado);
      this.ultimoResultado.set(original + ' =');
      this.expresion.set(formateado);
    } catch {
      this.error.set('Error: expresión inválida');
    }
  }

  // ---------- Conversión de la expresión visible a JS evaluable ----------
  private convertirAExpresionJs(expr: string): string {
    let jsExpr = expr;

    // Funciones (deben ir antes que las constantes para no chocar con la "e" de exponentes, etc.)
    jsExpr = jsExpr.replace(/sin\(/g, 'sinDeg(');
    jsExpr = jsExpr.replace(/cos\(/g, 'cosDeg(');
    jsExpr = jsExpr.replace(/tan\(/g, 'tanDeg(');
    jsExpr = jsExpr.replace(/log\(/g, 'Math.log10(');
    jsExpr = jsExpr.replace(/ln\(/g, 'Math.log(');
    jsExpr = jsExpr.replace(/√\(/g, 'Math.sqrt(');

    // Operadores
    jsExpr = jsExpr.replace(/×/g, '*');
    jsExpr = jsExpr.replace(/÷/g, '/');
    jsExpr = jsExpr.replace(/\^/g, '**');

    // Constantes (palabra completa, para no tocar la "e" dentro de otras palabras)
    jsExpr = jsExpr.replace(/π/g, '(Math.PI)');
    jsExpr = jsExpr.replace(/(?<![a-zA-Z])e(?![a-zA-Z(])/g, '(Math.E)');

    return jsExpr;
  }

  // ---------- Utilidades ----------
  private formatear(valor: number): string {
    const redondeado = Math.round(valor * 1e10) / 1e10;
    return redondeado.toString();
  }
}