Calculadora Científica — Ionic + AngularAplicación móvil de calculadora científica desarrollada con Ionic Framework y Angular (Standalone Components), compilada de forma nativa para Android mediante Capacitor.🎯 FuncionalidadesOperaciones básicas: Suma, resta, multiplicación, división (con validación de división entre 0).Funciones científicas: sin, cos, tan, log (base 10), ln (logaritmo natural), √ (raíz cuadrada).Potencias y exponentes: Potencia arbitraria ($x^y$) y cuadrado ($x^2$).Constantes matemáticas: $\pi$ y $e$.Jerarquía y símbolos: Paréntesis para expresiones compuestas, porcentaje (%) y cambio de signo (±).Modo angular: Alternar entre Grados (DEG) y Radianes (RAD).Edición en pantalla: Borrado de un carácter (⌫) y borrado completo (AC).Manejo de errores: Captura de expresiones matemáticas inválidas u operaciones indefinidas.🛠️ Tecnologías UtilizadasIonic Framework v8Angular v19 (Standalone Components + Signals)Capacitor (Bridge nativo para Android)TypeScript & SCSSJava 21 LTS (OpenJDK Temurin) & Gradle 8.x📂 Estructura del ProyectoPlaintextsrc/
├── app/
│   ├── calculadora/
│   │   ├── calculadora.page.ts      # Lógica y evaluación de expresiones
│   │   ├── calculadora.page.html    # Interfaz de usuario (teclado y pantalla)
│   │   └── calculadora.page.scss    # Estilos CSS / SCSS
│   ├── home/                        # Página por defecto de Ionic
│   └── app.routes.ts                # Enrutamiento de la aplicación
android/                             # Proyecto nativo Android generado por Capacitor
🚀 Instalación y Ejecución LocalRequisitos PreviosNode.js (v18 o superior)npmIonic CLI:Bashnpm install -g @ionic/cli
Pasos para Ejecutar en NavegadorClonar el repositorio:Bashgit clone https://github.com/SANTY3001/calculadora-cientifica-ionic.git
cd calculadora-cientifica-ionic
Instalar dependencias:Bashnpm install
Ejecutar servidor de desarrollo:Bashionic serve
La aplicación estará disponible en http://localhost:8100📱 Compilación del APK Android (CLI Sin Android Studio)Este proyecto está configurado para compilar directamente a un paquete ejecutable .apk utilizando Java 21 LTS y el Wrapper de Gradle desde la terminal PowerShell de Windows:Requisitos de Entorno AndroidJDK: Java 21 LTS (Eclipse Temurin jdk-21.0.6.7-hotspot).Android SDK: Platforms 36 / Build-Tools 35.Variable de entorno: JAVA_HOME apuntando al JDK 21.Comandos de CompilaciónGenerar los archivos web optimizados:PowerShellionic build
Sincronizar el código web con la plataforma Android:PowerShellnpx cap sync android
Navegar a la carpeta nativa y compilar el APK ejecutable:PowerShellcd android
.\gradlew assembleDebug
Ubicación del APK GeneradoEl archivo ejecutable listo para instalar queda en la siguiente ruta:Plaintextandroid/app/build/outputs/apk/debug/app-debug.apk
👤 AutorSantiago Riaño SotoEstudiante de Ingeniería — Escuela Tecnológica Instituto Técnico Central (ETITC)Bogotá, Colombia📄 LicenciaProyecto académico desarrollado con fines educativos.
