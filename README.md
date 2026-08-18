Calculadora Científica — Ionic + Angular

Aplicación móvil de calculadora científica desarrollada con Ionic Framework y Angular (componentes standalone), compilada a Android mediante Capacitor.

🎯 Funcionalidades
Operaciones básicas: suma, resta, multiplicación, división (con validación de división entre 0)
Funciones científicas: sin, cos, tan, log (base 10), ln (natural), √ (raíz cuadrada)
Potencias (xʸ) y cuadrado (x²)
Constantes matemáticas: π y e
Paréntesis para expresiones compuestas
Porcentaje (%) y cambio de signo (±)
Alternar modo de ángulo entre grados (DEG) y radianes (RAD)
Borrar un carácter (⌫) y borrar todo (AC)
Manejo de errores para expresiones inválidas u operaciones indefinidas
🛠️ Tecnologías utilizadas
Ionic Framework 8
Angular 19 (Standalone Components + Signals)
Capacitor (empaquetado para Android)
TypeScript, SCSS
📂 Estructura del proyecto
src/
├── app/
│   ├── calculadora/
│   │   ├── calculadora.page.ts      # Lógica de la calculadora
│   │   ├── calculadora.page.html    # Interfaz (teclado y pantalla)
│   │   └── calculadora.page.scss    # Estilos
│   ├── home/                        # Página inicial por defecto de Ionic
│   └── app.routes.ts                # Enrutamiento de la aplicación
🚀 Instalación y ejecución local
Requisitos previos
Node.js (v18 o superior)
npm
Ionic CLI: npm install -g @ionic/cli
Pasos
Clonar el repositorio:
bash
   git clone https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
   cd NOMBRE_DEL_REPO
Instalar dependencias:
bash
   npm install
Ejecutar en modo desarrollo (navegador):
bash
   ionic serve
Abrir en el navegador: http://localhost:8100
📱 Compilar APK para Android

Este proyecto se compila a APK usando Capacitor, sin necesidad de abrir Android Studio:

bash
ionic build
npx cap sync android
cd android
.\gradlew.bat assembleDebug

El archivo generado queda en:

android/app/build/outputs/apk/debug/app-debug.apk

Instalación en un dispositivo conectado por USB (con depuración habilitada):

bash
adb install app/build/outputs/apk/debug/app-debug.apk

Requiere tener configurados Java JDK, Android SDK, y las variables de entorno JAVA_HOME y ANDROID_HOME.

👤 Autor

Santiago — Estudiante de Ingeniería de Sistemas, Escuela Tecnológica Instituto Técnico Central (ETITC)

📄 Licencia

Proyecto académico desarrollado con fines educativos.
