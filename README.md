🚀 Instalación y Ejecución Local
Requisitos Previos
Node.js (v18 o superior)

npm

Ionic CLI:

Bash
npm install -g @ionic/cli
Pasos para Ejecutar en Navegador
Clonar el repositorio:

Bash
git clone [https://github.com/SANTY3001/calculadora-cientifica-ionic.git](https://github.com/SANTY3001/calculadora-cientifica-ionic.git)
cd calculadora-cientifica-ionic
Instalar dependencias:

Bash
npm install
Ejecutar servidor de desarrollo:

Bash
ionic serve
🌐 La aplicación estará disponible en http://localhost:8100

📱 Compilación del APK Android (CLI Sin Android Studio)
Este proyecto está configurado para compilar directamente a un paquete ejecutable .apk utilizando Java 21 LTS y el Wrapper de Gradle desde PowerShell en Windows:

⚙️ Requisitos de Entorno Android
JDK: Java 21 LTS (Eclipse Temurin jdk-21.0.6.7-hotspot).

Android SDK: Platforms 36 / Build-Tools 35.

Variable de entorno: JAVA_HOME apuntando al JDK 21.

💻 Comandos de Compilación
Generar los archivos web optimizados:

PowerShell
ionic build
Sincronizar el código web con la plataforma Android:

PowerShell
npx cap sync android
Navegar a la carpeta nativa y compilar el APK:

PowerShell
cd android
.\gradlew assembleDebug
📦 Ubicación del APK Generado
El archivo ejecutable listo para instalar queda en:

Plaintext
android/app/build/outputs/apk/debug/app-debug.apk
👤 Autor
Santiago Riaño Soto

Estudiante de Ingeniería — Escuela Tecnológica Instituto Técnico Central (ETITC)

Bogotá, Colombia

📄 Licencia
Proyecto académico desarrollado con fines educativos.
''')


Aquí tienes el archivo **`README.md`** completo en un solo bloque para copiar y pegar directamente:

[file-tag: code-generated-file-50e91a68-173d-4a0f-a22d-78837dbab642]

```markdown
# 🧮 Calculadora Científica — Ionic + Angular

[![Ionic](https://img.shields.io/badge/Ionic-v8-3880FF?logo=ionic&logoColor=white)](https://ionicframework.com/)
[![Angular](https://img.shields.io/badge/Angular-v19-DD0031?logo=angular&logoColor=white)](https://angular.io/)
[![Capacitor](https://img.shields.io/badge/Capacitor-v6-119EFF?logo=capacitor&logoColor=white)](https://capacitorjs.com/)
[![Java](https://img.shields.io/badge/Java-21_LTS-ED8B00?logo=openjdk&logoColor=white)](https://adoptium.net/)

Aplicación móvil de calculadora científica desarrollada con **Ionic Framework** y **Angular** (Standalone Components), compilada de forma nativa para Android mediante **Capacitor**.

---

## 🎯 Funcionalidades

* ➕ **Operaciones básicas:** Suma, resta, multiplicación, división (con validación de división entre 0).
* 📐 **Funciones científicas:** `sin`, `cos`, `tan`, `log` (base 10), `ln` (logaritmo natural), `√` (raíz cuadrada).
* 🔢 **Potencias y exponentes:** Potencia arbitraria ($x^y$) y cuadrado ($x^2$).
* 🌐 **Constantes matemáticas:** $\pi$ y $e$.
* 🔣 **Jerarquía y símbolos:** Paréntesis para expresiones compuestas, porcentaje (`%`) y cambio de signo (`±`).
* 🔄 **Modo angular:** Alternar entre Grados (**DEG**) y Radianes (**RAD**).
* ⌫ **Edición en pantalla:** Borrado de un carácter (`⌫`) y borrado completo (`AC`).
* ⚠️ **Manejo de errores:** Captura de expresiones matemáticas inválidas u operaciones indefinidas.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
| :--- | :--- |
| **Ionic Framework v8** | Framework de UI híbrido para aplicaciones móviles |
| **Angular v19** | Framework web (Standalone Components + Signals) |
| **Capacitor** | Bridge nativo para la compilación en Android |
| **TypeScript & SCSS** | Lenguaje de programación y diseño modular |
| **Java 21 LTS** | Entorno de ejecución OpenJDK Temurin |
| **Gradle 8.x** | Gestor de compilación nativo para Android |

---

## 📂 Estructura del Proyecto

```text
src/
├── app/
│   ├── calculadora/
│   │   ├── calculadora.page.ts      # Lógica y evaluación de expresiones
│   │   ├── calculadora.page.html    # Interfaz de usuario (teclado y pantalla)
│   │   └── calculadora.page.scss    # Estilos CSS / SCSS
│   ├── home/                        # Página por defecto de Ionic
│   └── app.routes.ts                # Enrutamiento de la aplicación
android/                             # Proyecto nativo Android generado por Capacitor
🚀 Instalación y Ejecución Local
Requisitos Previos
Node.js (v18 o superior)

npm

Ionic CLI:

Bash
npm install -g @ionic/cli
Pasos para Ejecutar en Navegador
Clonar el repositorio:

Bash
git clone [https://github.com/SANTY3001/calculadora-cientifica-ionic.git](https://github.com/SANTY3001/calculadora-cientifica-ionic.git)
cd calculadora-cientifica-ionic
Instalar dependencias:

Bash
npm install
Ejecutar servidor de desarrollo:

Bash
ionic serve
🌐 La aplicación estará disponible en http://localhost:8100

📱 Compilación del APK Android (CLI Sin Android Studio)
Este proyecto está configurado para compilar directamente a un paquete ejecutable .apk utilizando Java 21 LTS y el Wrapper de Gradle desde PowerShell en Windows:

⚙️ Requisitos de Entorno Android
JDK: Java 21 LTS (Eclipse Temurin jdk-21.0.6.7-hotspot).

Android SDK: Platforms 36 / Build-Tools 35.

Variable de entorno: JAVA_HOME apuntando al JDK 21.

💻 Comandos de Compilación
Generar los archivos web optimizados:

PowerShell
ionic build
Sincronizar el código web con la plataforma Android:

PowerShell
npx cap sync android
Navegar a la carpeta nativa y compilar el APK:

PowerShell
cd android
.\gradlew assembleDebug
📦 Ubicación del APK Generado
El archivo ejecutable listo para instalar queda en:

Plaintext
android/app/build/outputs/apk/debug/app-debug.apk
👤 Autor
Santiago Riaño Soto

Estudiante de Ingeniería — Escuela Tecnológica Instituto Técnico Central (ETITC)

Bogotá, Colombia

📄 Licencia
Proyecto académico desarrollado con fines educativos.
