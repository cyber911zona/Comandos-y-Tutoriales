// =====================================================
// DATOS: Aquí se almacena toda la información de las tarjetas
// =====================================================
// Array principal que contiene objetos. Cada objeto es una "tarjeta".
const misNotas = [
    //CATEGORIA DE CMD
    
    {
        categoria: "cmd",
        titulo: "Informe de Salud de la Batería",
        comando: "powercfg /batteryreport",
        descripcion: "Genera un reporte HTML con ciclos de carga y capacidad real de la batería.",
        contenidoTutorialHtml: `
            <h3>🔋 Diagnóstico de Energía Avanzado</h3>
            <p>Este comando crea un archivo HTML detallado que muestra el uso de la batería, su capacidad de fábrica y su capacidad actual.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Abrir Terminal como Administrador</h4>
                <p>Es necesario tener permisos elevados para acceder a los datos de hardware del sistema.</p>
                
                <h4>Paso 2: Generar el Reporte</h4>
                <p>Escribe el siguiente comando para que Windows cree el informe en tu carpeta de usuario:</p>
                
                <div class="contenedor-comando">
                    <code>powercfg /batteryreport</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 3: Ver los Resultados</h4>
                <p>Windows te dará una ruta (ej: C:\\Users\\TuUsuario\\battery-report.html). Copia esa ruta y pégala en tu navegador para ver la gráfica de ciclos y salud.</p>
            </div>
            
            <p style="margin-top: 15px;"><i>Nota: Este reporte es ideal para revisar el estado de una laptop usada antes de comprarla o venderla.</i></p>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/watch?v=ociFoDkNLzI"
            }
        ],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Reparación de Archivos del Sistema (SFC)",
        comando: "sfc /scannow",
        descripcion: "Escanea y repara automáticamente archivos dañados o faltantes del sistema operativo Windows.",
        contenidoTutorialHtml: `
            <h3>🛠️ System File Checker (SFC)</h3>
            <p>Esta utilidad es la primera que debes usar si Windows presenta errores de pantalla azul, lentitud extrema o si algunas aplicaciones del sistema no abren correctamente.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Abrir CMD como Administrador</h4>
                <p>Para modificar archivos protegidos del sistema, es obligatorio tener permisos elevados:</p>
                
                <ul style="list-style: none; padding: 0; margin-bottom: 20px;">
                    <li>Pulsa la tecla <kbd>Win</kbd>, escribe <strong>"cmd"</strong>.</li>
                    <li>Haz clic derecho en el resultado y elige <strong>Ejecutar como administrador</strong>.</li>
                </ul>

                <h4>Paso 2: Ejecutar el Análisis Completo</h4>
                <p>Escribe el comando y presiona <kbd>Enter</kbd>. El proceso suele tardar entre 5 y 15 minutos según la velocidad de tu disco:</p>
                
                <div class="contenedor-comando">
                    <code>sfc /scannow</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <h4>Paso 3: Entender los Mensajes</h4>
                <p>Al terminar, el sistema te dará uno de estos reportes:</p>
                <ul>
                    <li><strong>"No encontró infracciones":</strong> Tu sistema está íntegro y saludable.</li>
                    <li><strong>"Encontró archivos dañados y los reparó":</strong> El error ha sido corregido. Debes reiniciar la PC.</li>
                    <li><strong>"No pudo reparar algunos archivos":</strong> En este caso, revisa nuestro tutorial de <strong>DISM</strong> para una reparación más profunda.</li>
                </ul>

                <p style="margin-top: 15px;"><i>Nota: También puedes usar este comando <kbd>sfc /?</kbd> te mostrara los comandos que puedes utilizar.</i></p>
            </div>
        `,
        links: [
            {
                texto: "Soporte Oficial de Microsoft",
                url: "https://support.microsoft.com/es-es/topic/use-la-herramienta-comprobador-de-archivos-de-sistema-para-reparar-los-archivos-de-sistema-que-faltan-o-est%C3%A1n-da%C3%B1ados-79aa86cb-ca52-166a-92a3-966e85d4094e"
            },
            {
                texto: "Video tutorial",
                url: "https://www.youtube.com/watch?v=OlLYiFcWG6g"
            }
        ],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Consultar Dirección IP (ipconfig)",
        comando: "ipconfig",
        descripcion: "Identifica la dirección IP, máscara de subred y puerta de enlace de todos los adaptadores de red.",
        contenidoTutorialHtml: `
            <h3>🌐 Identificación de Red Local</h3>
            <p>Este comando es vital para verificar si tu configuración de IP estática se aplicó correctamente en tu red local.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Ejecución en CMD</h4>
                <p>Abre el Símbolo del Sistema y escribe el comando básico:</p>
                <div class="contenedor-comando">
                <code>ipconfig</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-search"></i> CLIC PARA VER CÓMO INTERPRETAR LOS DATOS
                    </summary>
                    <div class="tutorial-pasos" style="margin: 0; background: transparent; border: none;">
                        <ul>
                            <li><strong>Dirección IPv4:</strong> Es el número de identificación de tu computadora en la red ej: <code>192.168.1.1</code></li>
                            <li><strong>Máscara de subred:</strong> Define el tamaño de la red (usualmente). <code>255.255.255.0</code></li>
                            <li><strong>Puerta de enlace:</strong> Es la dirección del router o equipo que provee internet.</li>
                        </ul>
                    </div>
                </details>

                <h4>Paso 2: Información Detallada (/all)</h4>
                <p>Si necesitas saber la <strong>Dirección Física (MAC)</strong> o los servidores DNS, usa la variante completa:</p>
                <div class="contenedor-comando">
                    <code>ipconfig /all</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
            <p style="margin-top: 15px;"><i>Tip: Si el comando muestra "Medio desconectado", verifica que tu cable Ethernet esté bien conectado en ambos extremos.</i></p>
        `,
        links: [
            {
                texto: "Video tutorial",
                url: "https://www.youtube.com/shorts/aeXvAgZ1enI"
            }
        ],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Comando: dir (Listar)",
        comando: "dir",
        descripcion: "Muestra la lista de archivos y subdirectorios en el directorio actual.",
        contenidoTutorialHtml: `
            <h3>📂 Exploración de Directorios</h3>
            <p>Es el comando básico para saber qué archivos hay dentro de la carpeta donde estás parado.</p>
            <div class="tutorial-pasos">
                <p><strong>Truco Pro:</strong> Usa el siguiente comando para que la lista se detenga cada vez que llene la pantalla, permitiéndote leer con calma:</p>
                <div class="contenedor-comando">
                    <code>dir /p</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Comando: cls (Limpiar)",
        comando: "cls",
        descripcion: "Limpia la pantalla de la consola (muy útil cuando hay mucho texto acumulado).",
        contenidoTutorialHtml: `
            <h3>🧹 Limpieza de Consola</h3>
            <p>Utiliza este comando para borrar todo el texto anterior y empezar con una pantalla limpia.</p>
            <div class="tutorial-pasos">
                <div class="contenedor-comando">
                    <code>cls</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Video tutorial", url: "https://www.youtube.com/watch?v=7EfgxtpAAQY" }
        ],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Comando: cd (Navegar)",
        comando: "cd",
        descripcion: "Cambia de directorio (carpeta). Es la base para moverte por el sistema.",
        contenidoTutorialHtml: `
            <h3>📂 Navegación de Carpetas</h3>
            <p>Permite entrar o salir de directorios específicos desde la terminal.</p>
            
            <div class="tutorial-pasos">
                <h4>Entrar a una carpeta:</h4>
                <div class="contenedor-comando">
                    <code>cd Descargas</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <h4>Regresar a la carpeta anterior:</h4>
                <div class="contenedor-comando">
                    <code>cd ..</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Video tutorial", url: "https://www.youtube.com/shorts/oyTaS8MWXZ8" }
        ],
        pasos: []        
    },
    {
        categoria: "cmd",
        titulo: "Comando: mkdir (Crear)",
        comando: "mkdir",
        descripcion: "Crea una nueva carpeta en la ubicación actual.",
        contenidoTutorialHtml: `
            <h3>📁 Creación de Directorios</h3>
            <div class="tutorial-pasos">
                <h4>Comando básico:</h4>
                <div class="contenedor-comando">
                    <code>mkdir NuevaCarpeta</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <p><strong>Nota:</strong> Si el nombre de tu carpeta tiene espacios, debes usar comillas:</p>
                <div class="contenedor-comando">
                    <code>mkdir "Mis Fotos 2024"</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Comando: rmdir (Borrar)",
        comando: "rmdir",
        descripcion: "Elimina carpetas del sistema. Tiene opciones para borrado profundo.",
        contenidoTutorialHtml: `
            <h3>🗑️ Borrado de Carpetas</h3>
            <div class="tutorial-pasos">
                <h4>Borrar carpeta vacía:</h4>
                <div class="contenedor-comando">
                    <code>rmdir NombreCarpeta</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-exclamation-triangle"></i> BORRAR CARPETAS CON CONTENIDO
                    </summary>
                    <div class="tutorial-pasos" style="margin: 0; background: transparent; border: none;">
                        <p>Si la carpeta tiene archivos, usa el modo recursivo (/s) y silencioso (/q):</p>
                        <div class="contenedor-comando">
                            <code>rmdir /s /q NombreCarpeta</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                <i class="fas fa-copy"></i> Copiar
                            </button>
                        </div>
                    </div>
                </details>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Comando: copy (Duplicar)",
        comando: "copy",
        descripcion: "Copia archivos de un directorio a otro sin eliminar el original.",
        contenidoTutorialHtml: `
            <h3>📋 Copiado de Archivos</h3>
            <div class="tutorial-pasos">
                <p>Estructura: <code>copy [archivo] [destino]</code></p>
                <div class="contenedor-comando">
                    <code>copy nota.txt Documentos</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Comando: move (Mover)",
        comando: "move",
        descripcion: "Traslada archivos a otra ubicación. También sirve para renombrar.",
        contenidoTutorialHtml: `
            <h3>🚚 Movimiento de Archivos</h3>
            <div class="tutorial-pasos">
                <p>Estructura: <code>move [archivo] [destino]</code></p>
                <div class="contenedor-comando">
                    <code>move foto.jpg Imagenes</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Comando: del (Eliminar)",
        comando: "del",
        descripcion: "Elimina uno o varios archivos de forma definitiva desde la terminal.",
        contenidoTutorialHtml: `
            <h3>🗑️ Borrado de Archivos Individuales</h3>
            <p>El comando <code>del</code> funciona de manera similar a <code>rmdir</code>, pero está diseñado exclusivamente para archivos sueltos como imágenes o documentos.</p>
            
            <div class="tutorial-pasos">
                <h4>Ejemplo 1: Borrar un archivo específico</h4>
                <p>Para eliminar un archivo conociendo su nombre exacto:</p>
                <div class="contenedor-comando">
                    <code>del foto.jpg</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-exclamation-triangle"></i> USO DE COMODINES (¡CUIDADO!)
                    </summary>
                    <div class="tutorial-pasos" style="margin: 0; background: transparent; border: none;">
                        <p>Puedes borrar todos los archivos de un mismo tipo usando el asterisco (*):</p>
                        <div class="contenedor-comando">
                            <code>del *.jpg</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                <i class="fas fa-copy"></i> Copiar
                            </button>
                        </div>
                        <p><small><i>Esto borraría todas las imágenes JPG en la carpeta actual.</i></small></p>
                    </div>
                </details>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Comando: ren (Renombrar)",
        comando: "ren",
        descripcion: "Cambia el nombre o la extensión de uno o varios archivos.",
        contenidoTutorialHtml: `
            <h3>✏️ Renombrado de Archivos</h3>
            <div class="tutorial-pasos">
                <h4>Cambiar nombre básico:</h4>
                <div class="contenedor-comando">
                    <code>ren viejo.txt nuevo.txt</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <h4>Cambiar extensión (Truco Pro):</h4>
                <p>Ideal para convertir archivos .txt a .bat o .html rápidamente:</p>
                <div class="contenedor-comando">
                    <code>ren index.txt index.html</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Comando: winget upgrade",
        comando: "winget upgrade",
        descripcion: "Gestor de paquetes de Windows para actualizar software instalado.",
        contenidoTutorialHtml: `
            <h3>🆙 Actualización de Software</h3>
            <div class="tutorial-pasos">
                <h4>Actualizar un programa específico:</h4>
                <div class="contenedor-comando">
                    <code>winget upgrade Google.Chrome</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <h4>Actualizar TODO el sistema:</h4>
                <div class="contenedor-comando">
                    <code>winget upgrade --all</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Comando: winget download",
        comando: "winget download --id",
        descripcion: "Descarga el instalador de un programa sin ejecutar la instalación.",
        contenidoTutorialHtml: `
            <h3>📥 Descarga de Instaladores</h3>
            <p>Útil para descargar programas y llevarlos a computadoras sin internet.</p>
            <div class="tutorial-pasos">
                <div class="contenedor-comando">
                    <code>winget download --id [Nombre.Programa]</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "cmd",
        titulo: "Consejos Pro de Consola",
        comando: "cmd",
        descripcion: "Atajos vitales para ser más rápido trabajando en la terminal de Windows.",
        contenidoTutorialHtml: `
            <h3>💡 Tips de Productividad</h3>
            <div class="tutorial-pasos">
                <ul>
                    <li><strong>Autocompletar:</strong> Escribe el inicio de un nombre y pulsa <kbd>Tab</kbd>.</li>
                    <li><strong>Historial:</strong> Usa las <strong>Flechas Arriba/Abajo</strong> para repetir comandos anteriores.</li>
                    <li><strong>Detener Proceso:</strong> Si un comando se traba, pulsa <kbd>Ctrl</kbd> + <kbd>C</kbd>.</li>
                    <li><strong>Rutas rápidas:</strong> Arrastra una carpeta desde Windows directamente a la consola para obtener su ruta.</li>
                </ul>
            </div>
        `,
        links: [],
        pasos: []
    },
    //CATEGORIA ATAJOS
    {
        categoria: "atajos",
        titulo: "Script de Consola: Administrador Pro",
        comando: ".BAT Script",
        descripcion: "Menú interactivo para herramientas de Windows. Ahora con vista contraíble.",
        contenidoTutorialHtml: `
            <h3>🔧 Consola de Administración Rápida</h3>
            <p>Este script agrupa herramientas vitales de red y sistema en un solo menú.</p>
            
            <div class="tutorial-pasos">
            <h4>Paso 1: Instrucciones</h4>
            <p>Copia el código y guárdalo como 
            
            <div class="contenedor-comando">
                <code>Menu_Sistemas.bat</code></p>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-code"></i> CLIC PARA MOSTRAR EL CÓDIGO
                    </summary>
                    <div class="contenedor-comando" style="margin: 0;">
<pre class="codigo-consola">
@echo off
title Central de Ingenieria - Menu de Atajos
:inicio
cls
echo ============================================
echo      CENTRAL DE INGENIERIA - ATAJOS PRO
echo ============================================
echo [1] Informacion del Sistema (msinfo32)
echo [2] Conexiones de Red (ncpa.cpl)
echo [3] Propiedades del Sistema (Nombre/Grupo)
echo [4] Desinstalar Programas (appwiz.cpl)
echo [5] Administrador de Servicios (services.msc)
echo [6] Administrador de Tareas (taskmgr)
echo [7] Administrador de Discos (diskmgmt.msc)
echo [8] Herramientas de Diagnostico DirectX
echo [9] Abrir Panel de Control Clasico
echo [10] Editor del Registro (regedit)
echo [11] Salir
echo ============================================
set /p opcion=Selecciona una herramienta (1-11): 

if %opcion%==1 start msinfo32
if %opcion%==2 start ncpa.cpl
if %opcion%==3 start sysdm.cpl
if %opcion%==4 start appwiz.cpl
if %opcion%==5 start services.msc
if %opcion%==6 start taskmgr
if %opcion%==7 start diskmgmt.msc
if %opcion%==8 start dxdiag
if %opcion%==9 start control
if %opcion%==10 start regedit
if %opcion%==11 exit

goto inicio
    </pre>
                        <button class="btn-copiar-interno" onclick="copiarComando(this)">
                            <i class="fas fa-copy"></i> Copiar Script
                        </button>
                    </div>
                </details>

                <h4>Paso 2: Ejecución</h4>
                <p>Haz clic derecho y selecciona <strong>Ejecutar como administrador</strong> para habilitar todas las funciones.</p>
            </div>
        `,
        links: [
            {
                texto: "Descargar Archivo",
                url: "https://drive.google.com/file/d/1kx9-V82F8wJrqUhRj9_c15cAvNkc242k/view?usp=drive_link"
            }     
        ],
        pasos: []
    },
    {
        categoria: "atajos",
        titulo: "Información del Sistema",
        comando: "msinfo32",
        descripcion: "Muestra detalles completos sobre el hardware, componentes del sistema y entorno de software.",
        contenidoTutorialHtml: `
            <h3>💻 Diagnóstico de Hardware</h3>
            <p>Utilízalo para conocer el modelo exacto de tu placa base, versión de BIOS y memoria RAM instalada sin abrir la PC.</p>
            <div class="contenedor-comando">
                <code>msinfo32</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "atajos",
        titulo: "Conexiones de Red",
        comando: "ncpa.cpl",
        descripcion: "Acceso directo a los adaptadores de red para configurar IPs y protocolos rápidamente.",
        contenidoTutorialHtml: `
            <h3>🔌 Gestión de Adaptadores</h3>
            <p>Es la ruta más rápida para llegar a las propiedades de tu tarjeta Ethernet y configurar la IP fija de tu red local.</p>
            <div class="contenedor-comando">
                <code>ncpa.cpl</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "atajos",
        titulo: "Propiedades del Sistema",
        comando: "sysdm.cpl",
        descripcion: "Ventana directa para cambiar el nombre del equipo y el Grupo de Trabajo (WORKGROUP).",
        contenidoTutorialHtml: `
            <h3>🆔 Identidad de Red</h3>
            <p>Ideal para realizar el <strong>Paso 4</strong> de tu guía de red: cambiar el nombre del equipo y unirlo a un grupo de trabajo común.</p>
            <div class="contenedor-comando">
                <code>sysdm.cpl</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
            </div>
        `,
        links: [],
        pasos: []
    },    
    {
        categoria: "atajos",
        titulo: "Panel de Firewall de Windows",
        comando: "firewall.cpl",
        descripcion: "Configuración rápida de reglas de entrada y salida para permitir conexiones en red local.",
        contenidoTutorialHtml: `
            <h3>🛡️ Gestión de Seguridad de Red</h3>
            <p>Ruta directa para habilitar el "Uso compartido de archivos e impresoras" si la red local está bloqueada.</p>
            
            <div class="tutorial-pasos">
                <div class="contenedor-comando">
                    <code>firewall.cpl</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <h4>Configuración recomendada:</h4>
                <ul>
                    <li>Entra en <strong>"Permitir una aplicación..."</strong></li>
                    <li>Asegúrate de que <strong>"Uso compartido de archivos"</strong> esté marcado en redes Privadas.</li>
                </ul>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "atajos",
        titulo: "Características de Windows",
        comando: "optionalfeatures",
        descripcion: "Activa o desactiva componentes avanzados como Hyper-V, Telnet, IIS o el Subsistema para Linux.",
        contenidoTutorialHtml: `
            <h3>⚙️ Herramientas de Ingeniería Ocultas</h3>
            <p>Ideal para habilitar el <strong>Cliente Telnet</strong> o <strong>Hyper-V</strong> sin navegar por los menús modernos de Windows 11.</p>
            
            <div class="tutorial-pasos">
                <p>Ejecuta el comando para ver la lista de características:</p>
                <div class="contenedor-comando">
                    <code>optionalfeatures</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <p><strong>Dato:</strong> Casi todos los cambios aquí requieren reiniciar la computadora.</p>
            </div>
        `,
        links: [],
        pasos: []
    },

    //CATEGORIA DE BASICOS
    {
        categoria: "basicos",
        titulo: "Google Chrome",
        comando: "https://www.google.com/intl/es-419/chrome/",
        descripcion: "El navegador más utilizado, diseñado para ofrecer velocidad y sincronización total con servicios de Google.",
        contenidoTutorialHtml: `
            <h3>🌐 Instalador de Google Chrome</h3>
            <p>Chrome es la base para la mayoría de las herramientas web de ingeniería actuales.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace de descarga directa:</h4>
                <div class="contenedor-comando">
                    <code>https://www.google.com/intl/es-419/chrome/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Dato Técnico:</strong> Si necesitas instalarlo en varias PC sin internet, busca el "Chrome Standalone Installer" para descargar el paquete completo de ~100MB.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial Chrome", url: "https://www.google.com/intl/es-419/chrome/" }
        ],
        pasos: []
    },
    {
        categoria: "basicos",
        titulo: "Mozilla Firefox",
        comando: "https://www.mozilla.org/es-ES/firefox/new/",
        descripcion: "Navegador de código abierto centrado en la privacidad y la personalización avanzada.",
        contenidoTutorialHtml: `
            <h3>🦊 Navegador Mozilla Firefox</h3>
            <p>Ideal para ingenieros que necesitan herramientas de desarrollo web potentes y un control estricto sobre el rastreo de datos.</p>
            
            <div class="tutorial-pasos">
                <h4>Obtener instalador:</h4>
                <div class="contenedor-comando">
                    <code>https://www.mozilla.org/es-ES/firefox/new/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Ventaja:</strong> Su motor de renderizado es independiente de Chromium, lo que lo hace una excelente alternativa de prueba.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial Firefox", url: "https://www.mozilla.org/es-ES/firefox/new/" }
        ],
        pasos: []
    },
    {
        categoria: "basicos",
        titulo: "Microsoft Edge",
        comando: "https://www.microsoft.com/es-es/edge",
        descripcion: "Navegador oficial de Windows basado en Chromium, optimizado para el ahorro de batería y memoria RAM.",
        contenidoTutorialHtml: `
            <h3>🌏 Microsoft Edge (Chromium)</h3>
            <p>La mejor opción si trabajas en Windows 10/11, ya que consume menos recursos que Chrome al estar integrado al sistema.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace oficial:</h4>
                <div class="contenedor-comando">
                    <code>https://www.microsoft.com/es-es/edge</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Tip:</strong> Puedes instalar cualquier extensión de la Chrome Web Store directamente en Edge.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial Edge", url: "https://www.microsoft.com/es-es/edge" }
        ],
        pasos: []
    },
    {
        categoria: "basicos",
        titulo: "Java Runtime",
        comando: "https://www.java.com/es/download/manual.jsp",
        descripcion: "Entorno indispensable para ejecutar aplicaciones y sistemas contables o de ingeniería antiguos.",
        contenidoTutorialHtml: `
            <h3>☕ Instalación de Java (Manual)</h3>
            <p>Para asegurar una instalación estable, evita el instalador web y usa las versiones <strong>Fuera de línea</strong>.</p>
            
            <div class="tutorial-pasos">
                <h4>1. Identificar versiones:</h4>
                <ul>
                    <li><strong>Windows Fuera de línea:</strong> Para apps de 32 bits.</li>
                    <li><strong>Windows Fuera de línea (64 bits):</strong> Para apps modernas.</li>
                </ul>

                <h4>2. Instalación Correcta:</h4>
                <p>Si no sabes cuál necesitas, instala ambas en este orden:</p>
                <ol>
                    <li>Ejecuta el de 32 bits (normal).</li>
                    <li>Ejecuta el de 64 bits.</li>
                </ol>
            </div>
        `,
        links: [
            { texto: "Descarga Manual Java", url: "https://www.java.com/es/download/manual.jsp" }
        ],
        pasos: []
    },
    {
        categoria: "basicos",
        titulo: "Adobe Acrobat Reader",
        comando: "https://get.adobe.com/es/reader/",
        descripcion: "El estándar para visualizar, imprimir y firmar documentos PDF de forma profesional.",
        contenidoTutorialHtml: `
            <h3>📄 Instalación Limpia de Adobe Reader</h3>
            <p>¡Cuidado! El sitio oficial intenta instalar software no deseado por defecto.</p>
            
            <div class="tutorial-pasos" style="background: rgba(226, 230, 37, 0.1); border-left-color: #ee8019;">
                <h4>⚠️ ATENCIÓN ANTES DE DESCARGAR</h4>
                <p>Debes <strong>desmarcar</strong> estas casillas en la web de Adobe:</p>
                <ul>
                    <li>Instalar McAfee Security Scan</li>
                    <li>Instalar Adobe Express</li>
                </ul>
            </div>
            
            <div class="contenedor-comando" style="margin-top: 15px;">
                <code>https://get.adobe.com/es/reader/</code>
                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                    <i class="fas fa-copy"></i> Copiar Link
                </button>
            </div>
        `,
        links: [
            { texto: "Sitio Oficial Adobe", url: "https://get.adobe.com/es/reader/" }
        ],
        pasos: []
    },
    {
        categoria: "basicos",
        titulo: "K-Lite Codec Pack",
        comando: "https://www.codecguide.com/download_kl.htm",
        descripcion: "Permite que tu PC reproduzca cualquier formato de video (MKV, MOV, FLV) sin errores.",
        contenidoTutorialHtml: `
            <h3>🎬 Codecs de Video Universales</h3>
            <p>K-Lite repara los problemas de 'Formato no soportado' en el Reproductor de Windows Media.</p>
            
            <div class="tutorial-pasos">
                <h4>Recomendación:</h4>
                <p>Descarga la versión <strong>"Basic"</strong> o <strong>"Standard"</strong>. Son suficientes para el 99% de los usuarios.</p>
                
                <div class="contenedor-comando">
                    <code>https://www.codecguide.com/download_kl.htm</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Descargar K-Lite", url: "https://www.codecguide.com/download_kl.htm" }
        ],
        pasos: []
    },

    //CATEGORIA PROGRAMAS
    {
        categoria: "programas",
        titulo: "Programas Virtuales PC",
        comando: "https://www.programasvirtualespc.net/",
        descripcion: "Biblioteca extensa de software, juegos y utilidades para Windows.",
        contenidoTutorialHtml: `
            <h3>📦 Repositorio de Software Pro</h3>
            <p>Uno de los sitios más confiables para descargar herramientas técnicas y programas de ingeniería.</p>
            
            <div class="tutorial-pasos">
                <h4>🔑 Contraseña de descompresión:</h4>
                <p>Copia esta clave para extraer los archivos descargados:</p>
                <div class="contenedor-comando">
                    <code>www.programasvirtualespc.net</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.programasvirtualespc.net/" }
        ],
        pasos: []
    },
    {
        categoria: "programas",
        titulo: "Descarga.xyz",
        comando: "https://www.descarga.xyz/",
        descripcion: "Portal de descargas directas con una interfaz limpia y organizada.",
        contenidoTutorialHtml: `
            <h3>💾 Descargas Directas</h3>
            <p>Ideal para encontrar versiones específicas de programas populares con instaladores limpios.</p>
            
            <div class="tutorial-pasos">
                <h4>🔑 Contraseña de descompresión:</h4>
                <div class="contenedor-comando">
                    <code>www.descarga.xyz</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.descarga.xyz/" }
        ],
        pasos: []
    },
    {
        categoria: "programas",
        titulo: "Programas Dixguel",
        comando: "http://programasdixguel.blogspot.com/",
        descripcion: "Blog especializado en software portable y herramientas de mantenimiento.",
        contenidoTutorialHtml: `
            <h3>🛠️ Utilidades y Portables</h3>
            <p>Excelente fuente para herramientas que no requieren instalación, ideales para técnicos de soporte.</p>
            
            <div class="tutorial-pasos">
                <h4>🔑 Contraseña de descompresión:</h4>
                <div class="contenedor-comando">
                    <code>programasdixguel.blogspot.com</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "http://programasdixguel.blogspot.com/" }
        ],
        pasos: []
    },
    {
        categoria: "programas",
        titulo: "AwDescargas",
        comando: "https://awdescargas.com/",
        descripcion: "Sitio web con gran variedad de sistemas operativos y software técnico.",
        contenidoTutorialHtml: `
            <h3>💿 Sistemas y Software Técnico</h3>
            <p>Un recurso valioso para encontrar imágenes ISO y suites completas de programas de diseño.</p>
            
            <div class="tutorial-pasos">
                <h4>🔑 Contraseña de descompresión:</h4>
                <div class="contenedor-comando">
                    <code>awdescargas.com</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://awdescargas.com/" }
        ],
        pasos: []
    },
    {
        categoria: "programas",
        titulo: "Tecno Programas",
        comando: "https://tecnoprogramas.com/",
        descripcion: "Guías y descargas de programas para optimización y personalización de PC.",
        contenidoTutorialHtml: `
            <h3>⚙️ Optimización y Herramientas</h3>
            <p>Encuentra las últimas versiones de software para mejorar el rendimiento de tu sistema operativo.</p>
            
            <div class="tutorial-pasos">
                <h4>🔑 Contraseña de descompresión:</h4>
                <div class="contenedor-comando">
                    <code>www.tecnoprogramas.com</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://tecnoprogramas.com/" }
        ],
        pasos: []
    },    
    {
        categoria: "programas",
        titulo: "Yelitzon PC",
        comando: "https://www.yelitzonpc.com/",
        descripcion: "Canal y sitio web con tutoriales de instalación paso a paso.",
        contenidoTutorialHtml: `
            <h3>🎥 Tutoriales e Instaladores</h3>
            <p>Recurso complementado con guías visuales para asegurar una instalación correcta de cada programa.</p>
            
            <div class="tutorial-pasos">
                <h4>🔑 Contraseña de descompresión:</h4>
                <div class="contenedor-comando">
                    <code>www.yelitzonpc.com</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.yelitzonpc.com/" }
        ],
        pasos: []
    },
    {
        categoria: "programas",
        titulo: "Programasfully",
        comando: "https://programasfully.com/",
        descripcion: "Portal alternativo para la descarga de software variado y utilidades.",
        contenidoTutorialHtml: `
            <h3>📁 Repositorio Alternativo</h3>
            <p>Una base de datos constante de software actualizado para diversas necesidades técnicas.</p>
            
            <div class="tutorial-pasos">
                <p><strong>Nota:</strong> Este sitio usualmente no requiere contraseña, pero verifica siempre la descripción de la descarga.</p>
                <div class="contenedor-comando">
                    <code>Sin Contraseña Requerida</code>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://programasfully.com/" }
        ],
        pasos: []
    },

    // CATEGORIA APLICACIONES
    // Herramientas de Sistema y Almacenamiento
    {
        categoria: "aplicaciones",
        titulo: "CrystalDiskInfo",
        comando: "http://crystalmark.info/download/index-e.html",
        descripcion: "Monitor de salud y temperatura para unidades de almacenamiento (HDD y SSD).",
        contenidoTutorialHtml: `
            <h3>🔍 Diagnóstico de Almacenamiento</h3>
            <p>Es la herramienta estándar para verificar si un disco duro o SSD tiene sectores dañados o si su vida útil está por terminar.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace de descarga oficial:</h4>
                <div class="contenedor-comando">
                    <code>http://crystalmark.info/download/index-e.html</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Dato Técnico:</strong> Si el estado aparece en <em>"Riesgo"</em> (amarillo), es el momento ideal para realizar un respaldo inmediato de tu información.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "http://crystalmark.info/download/index-e.html" },
            { texto: "Video Tutorial", url: "https://www.youtube.com/shorts/vvaxeR2-6zQ" }
        ],
        pasos: []
    },
    {
        categoria: "aplicaciones",
        titulo: "AIDA64",
        comando: "https://www.aida64.com/downloads",
        descripcion: "Diagnóstico avanzado y consulta detallada de todos los componentes de hardware del sistema.",
        contenidoTutorialHtml: `
            <h3>📊 Información Detallada del Hardware</h3>
            <p>Proporciona un informe exhaustivo de cada chip, sensor y componente instalado en la computadora.</p>
            
            <div class="tutorial-pasos">
                <h4>Obtener instalador:</h4>
                <div class="contenedor-comando">
                    <code>https://www.aida64.com/downloads</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Uso Pro:</strong> Ideal para verificar las temperaturas bajo carga de trabajo y los voltajes de la fuente de poder.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.aida64.com/downloads" }
        ],
        pasos: []
    },
    
    // Multimedia y Edición
    {
        categoria: "aplicaciones",
        titulo: "HandBrake",
        comando: "https://handbrake.fr/downloads.php",
        descripcion: "Transcodificador de código abierto para comprimir y convertir videos de un formato a otro.",
        contenidoTutorialHtml: `
            <h3>🗜️ Transcodificación de Video</h3>
            <p>Utilízalo para reducir el tamaño de tus videos sin perder calidad visual notable.</p>
            
            <div class="tutorial-pasos">
                <h4>Descarga directa:</h4>
                <div class="contenedor-comando">
                    <code>https://handbrake.fr/downloads.php</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Tip:</strong> Es compatible con aceleración por hardware (NVIDIA NVENC / Intel QuickSync) para conversiones ultra rápidas.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://handbrake.fr/downloads.php" },
            { texto: "Video Tutorial", url: "https://www.youtube.com/shorts/d00YqovfUhM" }
        ],
        pasos: []
    },
    {
        categoria: "aplicaciones",
        titulo: "MP3TAG",
        comando: "https://www.mp3tag.de/download.html",
        descripcion: "Editor universal de metadatos (etiquetas) para archivos de audio y carátulas.",
        contenidoTutorialHtml: `
            <h3>🏷️ Editor de Etiquetas de Audio</h3>
            <p>Permite organizar tu biblioteca musical cambiando nombres, autores, géneros y carátulas de forma masiva.</p>
            
            <div class="tutorial-pasos">
                <h4>Página de descarga:</h4>
                <div class="contenedor-comando">
                    <code>https://www.mp3tag.de/download.html</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.mp3tag.de/download.html" }
        ],
        pasos: []
    },
    {
        categoria: "aplicaciones",
        titulo: "MKVToolNix",
        comando: "https://www.fosshub.com/MKVToolNix.html",
        descripcion: "Herramientas para unir o separar pistas de audio, video y subtítulos en archivos MKV.",
        contenidoTutorialHtml: `
            <h3>🎬 Herramientas para Contenedores MKV</h3>
            <p>La herramienta definitiva para el 'multiplexado' de archivos de video profesional.</p>
            
            <div class="tutorial-pasos">
                <h4>Repositorio de descarga:</h4>
                <div class="contenedor-comando">
                    <code>https://www.fosshub.com/MKVToolNix.html</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Función Clave:</strong> Permite eliminar pistas de audio innecesarias o idiomas sobrantes de una película para ahorrar espacio.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.fosshub.com/MKVToolNix.html" }
        ],
        pasos: []
    },
    {
        categoria: "aplicaciones",
        titulo: "FastStone Viewer",
        comando: "https://www.faststone.org/FSIVDownload.htm",
        descripcion: "Visor y editor ligero de fotos con soporte para archivos RAW y conversión por lotes.",
        contenidoTutorialHtml: `
            <h3>🖼️ Visor y Editor Fotográfico</h3>
            <p>Es una de las mejores alternativas al visor de Windows por su velocidad y capacidad de comparar imágenes lado a lado.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace de descarga:</h4>
                <div class="contenedor-comando">
                    <code>https://www.faststone.org/FSIVDownload.htm</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.faststone.org/FSIVDownload.htm" }
        ],
        pasos: []
    },
    // Periféricos
    {
        categoria: "aplicaciones",
        titulo: "CORSAIR iCUE",
        comando: "https://www.corsair.com/us/en/downloads",
        descripcion: "Software de gestión para configurar iluminación y funciones en periféricos de la marca Corsair.",
        contenidoTutorialHtml: `
            <h3>🖱️ Gestión de Periféricos Corsair</h3>
            <p>Controla desde un solo lugar el RGB de tu teclado, los perfiles del mouse y el rendimiento de tus ventiladores Corsair.</p>
            
            <div class="tutorial-pasos">
                <h4>Centro de descargas:</h4>
                <div class="contenedor-comando">
                    <code>https://www.corsair.com/us/en/downloads</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.corsair.com/us/en/downloads" }
        ],
        pasos: []
    },
    
    // CATEGORIA APLICACIONES ONLINEA
    {
        categoria: "onlinea",
        titulo: "remove.bg (Quitar Fondo)",
        comando: "https://www.remove.bg/",
        descripcion: "Elimina el fondo de cualquier imagen de forma automática en segundos usando inteligencia artificial.",
        contenidoTutorialHtml: `
            <h3>🖼️ Eliminación Automática de Fondos</h3>
            <p>Es la herramienta líder para separar sujetos del fondo sin necesidad de usar editores complejos como Photoshop.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace de acceso:</h4>
                <div class="contenedor-comando">
                    <code>https://www.remove.bg/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Uso Rápido:</strong> Solo arrastra tu imagen a la página y descarga el resultado en formato PNG transparente.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.remove.bg/" }
        ],
        pasos: []
    },
    {
        categoria: "onlinea",
        titulo: "BigJPG (Agrandar Imagen)",
        comando: "https://bigjpg.com/",
        descripcion: "Utiliza redes neuronales para aumentar el tamaño de imágenes y dibujos sin perder calidad.",
        contenidoTutorialHtml: `
            <h3>🔍 Ampliación con Inteligencia Artificial</h3>
            <p>Ideal para ilustraciones y arte digital que necesitas imprimir o ver en alta resolución sin que se pixelen.</p>
            
            <div class="tutorial-pasos">
                <h4>Acceso a la herramienta:</h4>
                <div class="contenedor-comando">
                    <code>https://bigjpg.com/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Configuración:</strong> Selecciona "Artwork" para dibujos y elige el nivel de reducción de ruido "Highest" para mejores resultados.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://bigjpg.com/" }
        ],
        pasos: []
    },
    {
        categoria: "onlinea",
        titulo: "WordArt (Nubes de Palabras)",
        comando: "https://wordart.com/",
        descripcion: "Crea nubes de palabras personalizadas con formas creativas y tipografías variadas.",
        contenidoTutorialHtml: `
            <h3>🎨 Diseño de Nubes de Palabras</h3>
            <p>Convierte listas de términos técnicos o personales en composiciones visuales con formas como naves espaciales, corazones o logos.</p>
            
            <div class="tutorial-pasos">
                <h4>Ir al editor:</h4>
                <div class="contenedor-comando">
                    <code>https://wordart.com/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://wordart.com/" }
        ],
        pasos: []
    },
    {
        categoria: "onlinea",
        titulo: "WatermarkRemover",
        comando: "https://www.watermarkremover.io/es",
        descripcion: "Elimina marcas de agua de imágenes de forma gratuita detectando y reconstruyendo los píxeles.",
        contenidoTutorialHtml: `
            <h3>🛡️ Remoción de Marcas de Agua</h3>
            <p>Utiliza IA para limpiar imágenes de logotipos o textos superpuestos sin afectar la nitidez del archivo original.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace oficial:</h4>
                <div class="contenedor-comando">
                    <code>https://www.watermarkremover.io/es</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.watermarkremover.io/es" }
        ],
        pasos: []
    },
    {
        categoria: "onlinea",
        titulo: "I Love PDF",
        comando: "https://www.ilovepdf.com/es",
        descripcion: "Plataforma integral para unir, dividir, comprimir y convertir documentos PDF.",
        contenidoTutorialHtml: `
            <h3>📄 Suite Completa para PDF</h3>
            <p>La herramienta definitiva para el manejo de documentos sin necesidad de instalar software pesado.</p>
            
            <div class="tutorial-pasos">
                <h4>Acceso rápido:</h4>
                <div class="contenedor-comando">
                    <code>https://www.ilovepdf.com/es</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Funciones populares:</strong> Unir PDF, Convertir PDF a Word y Comprimir archivos para enviar por correo.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.ilovepdf.com/es" }
        ],
        pasos: []
    },
    {
        categoria: "onlinea",
        titulo: "Key-Test (Prueba de Teclado)",
        comando: "https://en.key-test.ru/",
        descripcion: "Utilidad técnica para probar el rendimiento y respuesta de cada tecla en tiempo real.",
        contenidoTutorialHtml: `
            <h3>⌨️ Diagnóstico de Periféricos</h3>
            <p>Verifica si tu teclado tiene problemas de 'ghosting' o si alguna tecla física está fallando o trabada.</p>
            
            <div class="tutorial-pasos">
                <h4>Abrir probador:</h4>
                <div class="contenedor-comando">
                    <code>https://en.key-test.ru/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Uso:</strong> Simplemente pulsa las teclas y verás cómo se iluminan en pantalla si funcionan correctamente.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://en.key-test.ru/" }
        ],
        pasos: []
    },
    // CATEGORIA WINDOWS
    {
        categoria: "windows",
        titulo: "Hiren's BootCD PE",
        comando: "https://www.hirensbootcd.org/download/",
        descripcion: "Entorno de rescate basado en Windows PE para recuperar archivos y reparar sistemas dañados.",
        contenidoTutorialHtml: `
            <h3>💊 Entorno de Rescate Profesional</h3>
            <p>Es una herramienta indispensable para técnicos. Permite arrancar la PC desde una USB cuando el Windows original falla.</p>
            
            <div class="tutorial-pasos">
                <h4>Instrucciones de descarga:</h4>
                <div class="contenedor-comando">
                    <code>https://www.hirensbootcd.org/download/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Dato Pro:</strong> Incluye herramientas preinstaladas para recuperar contraseñas, clonar discos y analizar hardware.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.hirensbootcd.org/download/" },
            { texto: "Video Tutorial", url: "https://www.youtube.com/shorts/GegBAeM6eQY" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "Rufus (USB Booteable)",
        comando: "https://rufus.ie/es/",
        descripcion: "La utilidad más rápida para crear unidades USB de arranque a partir de imágenes ISO.",
        contenidoTutorialHtml: `
            <h3>💾 Creación de USB Booteables</h3>
            <p>Rufus es el estándar para grabar instaladores de Windows, Linux o herramientas de rescate en una memoria USB.</p>
            
            <div class="tutorial-pasos">
                <h4>Enlace oficial:</h4>
                <div class="contenedor-comando">
                    <code>https://rufus.ie/es/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Configuración:</strong> Si instalas Windows 11 en una PC vieja, Rufus permite omitir los requisitos de TPM y Secure Boot automáticamente.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://rufus.ie/es/" },
            { texto: "Video Tutorial", url: "https://www.youtube.com/shorts/IT7EFZ819WM" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "Ventoy (Multiboot)",
        comando: "https://www.ventoy.net/en/download.html",
        descripcion: "Crea una USB multibooteo donde solo necesitas copiar y pegar tus archivos ISO.",
        contenidoTutorialHtml: `
            <h3>📂 Multiboot USB (Ventoy)</h3>
            <p>A diferencia de Rufus, con Ventoy no necesitas formatear la USB cada vez que quieres cambiar de sistema.</p>
            
            <div class="tutorial-pasos">
                <h4>Descarga Ventoy:</h4>
                <div class="contenedor-comando">
                    <code>https://www.ventoy.net/en/download.html</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Ventaja:</strong> Puedes tener Windows 10, Windows 11 y Linux en la misma USB y elegir cuál arrancar desde un menú visual.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://www.ventoy.net/en/download.html" },
            { texto: "Video Tutorial", url: "https://www.youtube.com/shorts/mDQPW0lCeu0" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "Massgrave (Activación)",
        comando: "https://massgrave.dev/",
        descripcion: "Scripts de código abierto para la descarga y activación legal de Windows y Office.",
        contenidoTutorialHtml: `
            <h3>🔑 Activación y Descarga de ISOs</h3>
            <p>Utiliza métodos limpios (HWID, KMS38) que no requieren instalar programas externos sospechosos.</p>
            
            <div class="tutorial-pasos">
                <h4>Sitio de referencia:</h4>
                <div class="contenedor-comando">
                    <code>https://massgrave.dev/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Seguridad:</strong> Al ser Open Source, el código de los scripts es transparente y revisado por la comunidad.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://massgrave.dev/" },
            { texto: "Video Tutorial", url: "https://www.youtube.com/shorts/ex8aygMpG3s" }
        ],
        pasos: []
    },
    {
        categoria: "windows",
        titulo: "ISO Verifier",
        comando: "https://genuine-iso-verifier.weebly.com/",
        descripcion: "Verifica que tu archivo ISO de Windows sea original comparándolo con los hashes oficiales de Microsoft.",
        contenidoTutorialHtml: `
            <h3>✅ Verificador de Integridad ISO</h3>
            <p>Asegúrate de que el instalador de Windows que descargaste no haya sido modificado por terceros.</p>
            
            <div class="tutorial-pasos">
                <h4>Acceso a la herramienta:</h4>
                <div class="contenedor-comando">
                    <code>https://genuine-iso-verifier.weebly.com/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                <p><strong>Concepto:</strong> El programa lee el <em>Hash</em> (firma digital) del archivo y lo compara con la base de datos de MSDN/VLSC.</p>
            </div>
        `,
        links: [
            { texto: "Sitio oficial", url: "https://genuine-iso-verifier.weebly.com/" }            
        ],
        pasos: []
    },
    
    //CATEGORIA TUTORIAL
    
    {
        categoria: "tutoriales",
        titulo: "Eliminar Clave de Windows",
        comando: "NET USER",
        descripcion: "Si has olvidado la clave de usuario de tu Windows, realiza estos pasos para recuperar el acceso.",
        contenidoTutorialHtml: `
            <h3>👤 Método de Sustitución de Sistema</h3>
            <p>Este proceso permite abrir una terminal con privilegios de <strong>SYSTEM</strong> desde la pantalla de inicio de sesión (Login).</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Acceder al Símbolo del Sistema</h4>
                <p>Presiona la tecla <kbd>Shift</kbd> y haz clic en <kbd>Reiniciar</kbd> para abrir el menú de recuperación. Ve a: <strong>Solucionar problemas > Opciones avanzadas > Símbolo del sistema</strong>.</p>
                
                <div class="contenedor-comando">
                    <code>cd c:\\windows\\system32</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 2: Renombrar el Teclado en Pantalla</h4>
                <p>Escribimos el siguiente comando para renombrar el archivo original:</p>
                
                <div class="contenedor-comando">
                    <code>osk.exe osk.old</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 3: Sustituir por el CMD</h4>
                <p>Ahora hacemos que el sistema crea que la consola es el teclado para poder abrirla en el inicio:</p>
                
                <div class="contenedor-comando">
                    <code>copy cmd.exe osk.exe</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 4: Buscamos nuestro Usuario</h4>
                <p>Reinicia la PC de forma normal. En la pantalla donde pide la clave, abre <strong>Accesibilidad > Teclado en pantalla</strong>. Se abrirá el CMD. Escribe el comando para listar los usuarios:</p>
                
                <div class="contenedor-comando">
                    <code>NET USER</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>

                <h4>Paso 5: Cambiar la Contraseña</h4>
                <p>Escribimos nuestro Usuario entre <strong>comillas</strong>, dejamos un espacio y escribimos un asterisco (*):</p>
                
                <div class="contenedor-comando">
                    <code>NET USER "NOMBRE_USUARIO" *</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p style="margin-top: 15px;"><i>Nota: Presiona <kbd>Enter</kbd> dos veces para dejar la contraseña en blanco y poder entrar directamente sin clave.</i></p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/watch?v=JFRXBNPYFRA&t=163s"
            }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Verificar Activación de Office",
        comando: "cscript ospp.vbs /dstatus",
        descripcion: "Consulta el estado de la licencia de Microsoft Office y su fecha de expiración desde la terminal.",
        contenidoTutorialHtml: `
            <h3>🔑 Estado de Licencia de Office</h3>
            <p>Este procedimiento utiliza el script de administración de licencias de Office para verificar si el producto está activado y qué tipo de clave utiliza.</p>
            
            <div class="tutorial-pasos">
                <p><strong>⚠️ Requisito:</strong> Debes ejecutar el Símbolo del Sistema (CMD) como <strong>Administrador</strong>.</p>

                <h4>Paso 1: Localizar la carpeta de Office</h4>
                <p>Primero, debes situar la terminal en la carpeta donde se encuentra instalado Office (usualmente la versión 16). Copia y pega esta ruta:</p>
                
                <div class="contenedor-comando">
                    <code>cd "C:\\Program Files\\Microsoft Office\\Office16"</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p><i>Nota: Si usas Office de 32 bits en un Windows de 64 bits, la ruta será: <br><code>"C:\\Program Files (x86)\\Microsoft Office\\Office16"</code></i></p>

                <h4>Paso 2: Ejecutar la consulta de estado</h4>
                <p>Una vez dentro de la carpeta, ejecuta el script de estado para ver la información de la licencia:</p>
                
                <div class="contenedor-comando">
                    <code>cscript ospp.vbs /dstatus</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p style="margin-top: 15px;">Al finalizar, busca la línea que dice <strong>LICENSE STATUS</strong>. Si aparece como <strong style="color: #2ecc71;">"--- LICENSED ---"</strong>, tu Office está correctamente activado.</p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/watch?v=kHcCPqy6hO4"
            }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Saltar Correo en Windows 11",
        comando: "oobe\\bypassnro", 
        descripcion: "Instala Windows 11 sin cuenta obligatoria de Microsoft para poder crear una cuenta local de usuario.",
        contenidoTutorialHtml: `
            <h3>⏭️ Omitir cuenta de Microsoft</h3>
            <p>Cuando llegues a la pantalla de <strong>"Vamos a conectarte a una red"</strong> y el sistema no te permita continuar sin internet, realiza lo siguiente:</p>
            
            <div class="tutorial-pasos">
                <p><strong>Paso Inicial:</strong> Abre la consola de comandos presionando: <kbd>Mayús</kbd> + <kbd>F10</kbd></p>
                
                <p><small><i>Nota: En algunas laptops debes usar <kbd>Fn</kbd> + <kbd>Mayús</kbd> + <kbd>F10</kbd>.</i></small></p>

                <h4>Paso 1: Desconectar adaptadores (Opcional)</h4>
                <p>Si tienes un cable Ethernet conectado, puedes usar este comando para abrir las conexiones y desactivarlo temporalmente:</p>
                
                <div class="contenedor-comando">
                    <code>ncpa.cpl</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 2: Comando de Salto Maestro</h4>
                <p>Escribe el siguiente comando para reiniciar el equipo y habilitar la opción de omitir el registro:</p>
                
                <div class="contenedor-comando">
                    <code>oobe\\bypassnro</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p style="margin-top: 15px;"><i>El equipo se reiniciará automáticamente. Al volver a la configuración, verás un botón nuevo que dice <strong>"No tengo internet"</strong>. Selecciónalo para continuar con una cuenta local.</i></p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/shorts/OdncvO2Dg6A"
            },
            {
                texto: "Opción 2",
                url: "https://www.youtube.com/shorts/_zrV3RpxX38"
            }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Estado de Activación de Windows",
        comando: "slmgr /xpr",
        descripcion: "Verifica si tu sistema está activado permanentemente y conoce el tipo de licencia instalada (Retail, OEM o Volumen).",
        contenidoTutorialHtml: `
            <h3>✅ Consulta de Licenciamiento del Sistema</h3>
            <p>Utiliza la herramienta <em>Software Licensing Management Tool</em> para auditar el estado legal de tu sistema operativo.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Verificar expiración de la activación</h4>
                <p>Este comando abre una pequeña ventana emergente que confirma si el equipo está activado de forma permanente:</p>
                
                <div class="contenedor-comando">
                    <code>slmgr /xpr</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 2: Identificar el tipo de licencia</h4>
                <p>Para determinar si la licencia es de canal <strong>Retail</strong> (comercial), <strong>OEM</strong> (fabricante) o <strong>Volume</strong> (empresa), ejecuta el siguiente comando:</p>
                
                <div class="contenedor-comando">
                    <code>slmgr /dli</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <p style="margin-top: 15px;"><i>Nota: También puedes usar estos comandos desde la ventana Ejecutar presionando <kbd>Win</kbd> + <kbd>R</kbd> y escribiendo <strong>slmgr.vbs /xpr</strong>.</i></p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/shorts/iOL5uP7Xdoo"
            },
            {
                texto: "Video Tutorial (Opcion 2)",
                url: "https://www.youtube.com/shorts/7KAHY-eQwyc"
            }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Recuperar Clave de Windows Original",
        comando: "regedit",
        descripcion: "Encuentra la licencia de Windows instalada en tu PC usando el Editor del Registro.",
        contenidoTutorialHtml: `
            <h3>🔎 Localización de Licencia OEM/Retail</h3>
            <p>Este método permite ver la clave de activación directamente desde el registro del sistema, sin necesidad de instalar aplicaciones externas.</p>
            
            <div class="tutorial-pasos">
                <p><strong>⚠️ Importante:</strong> No modifiques otros valores dentro del registro, ya que podrías dañar la estabilidad del sistema.</p>

                <h4>Paso 1: Acceder al Registro</h4>
                <p>Presiona la combinación de teclas <kbd>Win</kbd> + <kbd>R</kbd> y ejecuta el siguiente comando:</p>
                
                <div class="contenedor-comando">
                    <code>regedit</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 2: Ruta del Registro</h4>
                <p>Copia y pega la siguiente ubicación en la barra de direcciones superior del Editor del Registro:</p>
                
                <div class="contenedor-comando">
                    <code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\SoftwareProtectionPlatform</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                
                <h4>Paso 3: Leer la Clave</h4>
                <p>Una vez en la carpeta, busca en el panel de la derecha el valor llamado: <strong>BackupProductKeyDefault</strong>.</p>
                <p>El código de 25 caracteres que aparece en la columna "Datos" es la licencia original de tu Windows.</p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/shorts/gmheirF-HlM"
            }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Controlar 2+ PCs con un solo Mouse",
        comando: "Mouse Without Borders",
        descripcion: "Utiliza un solo teclado y mouse para controlar hasta 4 computadoras de forma inalámbrica y compartir el portapapeles.",
        contenidoTutorialHtml: `
            <h3>🖱️ Un solo Teclado y Mouse para todo</h3>
            <p><strong>Mouse Without Borders</strong> es un proyecto de Microsoft Garage que te permite mover el puntero entre diferentes monitores de PCs distintos como si fuera una sola computadora extendida.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Descarga e Instalación</h4>
                <p>Debes descargar e instalar la aplicación en <strong>todas</strong> las computadoras que quieras conectar (soporta hasta 4).</p>
                
                <div class="contenedor-comando">
                    <code>Microsoft Garage Mouse Without Borders</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Nombre
                    </button>
                </div>

                <h4>Paso 2: Vincular las Computadoras</h4>
                <p>Al abrir el programa por primera vez:</p>
                <ul>
                    <li>En la PC principal, verás un <strong>Security Code</strong> y el <strong>Computer Name</strong>.</li>
                    <li>En la segunda PC, introduce esos datos para establecer el enlace seguro.</li>
                </ul>
                <br>
                <h4>Paso 3: Configuración del Orden</h4>
                <p>Una vez conectadas, arrastra los iconos de los monitores en la aplicación para que coincidan con su posición física en tu escritorio.</p>
                
                <p style="margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
                    <strong>💡 Tip Pro:</strong> ¡También puedes arrastrar archivos de una PC a otra simplemente moviéndolos con el mouse a través de los bordes!
                </p>
            </div>
        `,
        links: [
            {
                texto: "Descargar de Microsoft Center",
                url: "https://www.microsoft.com/en-us/download/details.aspx?id=35460"
            },
            {
                texto: "Video Tutorial 1",
                url: "https://www.youtube.com/shorts/NDWXuikArOY"
            },
            {
                texto: "Video Tutorial 2",
                url: "https://www.youtube.com/shorts/1wKjAcat7FM"
            }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Conexión Red de PC a PC (Peer-to-Peer)",
        comando: "ping 192.168.1.x",
        descripcion: "Guía completa para conectar dos computadoras mediante Ethernet para compartir archivos y enviar mensajes sin internet.",
        contenidoTutorialHtml: `
            <h3>🔗 Configuración de Red Local Directa</h3>
            <p>Este manual guía la conexión de dos equipos mediante cable Ethernet utilizando tecnología <strong>Auto-MDIX</strong> para compartir recursos sin routers externos.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Hardware y Cableado (T568B)</h4>
                <p>Debes ponchar ambos extremos del cable bajo la norma T568B en el siguiente orden:</p>
                <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; margin-bottom: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <td style="padding: 5px;">1. B-Naranja</td>
                        <td style="padding: 5px;">2. Naranja</td>
                        <td style="padding: 5px;">3. B-Verde</td>
                        <td style="padding: 5px;">4. Azul</td>
                    </tr>
                    <tr>
                        <td style="padding: 5px;">5. B-Azul</td>
                        <td style="padding: 5px;">6. Verde</td>
                        <td style="padding: 5px;">7. B-Café</td>
                        <td style="padding: 5px;">8. Café</td>
                    </tr>
                </table>
                
                <p><i>Verificación: Los LEDs del puerto Ethernet deben encenderse al conectar ambos equipos.</i></p>

                <h4>Paso 2: Configuración de IPs Estáticas</h4>
                <p>Ambas PC deben estar en el mismo rango de red.</p>
                <p><strong>Ruta:</strong> Panel de control -> Centro de redes y recursos compartidos -> Cambiar configuración del adaptador -> clic derecho - propiedades -> Protocolo de Internet versión 4(TCP/IPv4) -> utilizar la siguiente dirección IP:</p>
                <ul>
                    <li><strong>PC 1:</strong> IP <code>192.168.1.1</code> | Máscara <code>255.255.255.0</code></li>
                    <li><strong>PC 2:</strong> IP <code>192.168.1.2</code> | Máscara <code>255.255.255.0</code></li>
                </ul>

                <h4>Paso 3: Configurar Uso Compartido Avanzado</h4>
                <p><strong>Ruta:</strong> Panel de control -> Centro de redes y recursos compartidos -> Cambiar configuración uso compartido avanzado.</p>
                <p>Activa los siguientes interruptores en ambas PC:</p>
                <ul style="font-size: 0.9rem;">
                    <li>Detección de redes.</li>
                    <li>Uso compartido de archivos e impresoras (las dos).</li>
                    <li>Uso compartido de carpetas públicas (En Todas las redes).</li>
                    <li>Uso compartido con protección por contraseña:
                        <ul>
                            <li><strong>Opción A (Fácil):</strong> Desactivado (Entras directo).</li>
                            <li><strong>Opción B (Segura):</strong> Activado (Te pedirá usuario y contraseña, funciona mejor).</li>
                        </ul>
                    </li>
                </ul>

                <h4>Paso 4: Establecer Perfil "Privado"</h4>
                <p>Es vital establecer el perfil como <strong>Privado</strong> para permitir el flujo de datos.</p>
                <p><strong>Ruta:</strong> Configuración -> Red e Internet -> Ethernet -> Seleccionar perfil: Privada.</p>
                
                <p><strong>⚠️ ¿Problemas?</strong> Si Windows muestra "Red no identificada" y no te deja cambiar, usa este comando en <strong>PowerShell (Admin)</strong> para ver el nombre de la interfaz:</p>
                <div class="contenedor-comando">
                    <code>Get-NetConnectionProfile</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p>Luego, fuerza el perfil privado (cambia "Ethernet" por el nombre que obtuviste):</p>
                <div class="contenedor-comando">
                    <code>Set-NetConnectionProfile -InterfaceAlias "Ethernet" -NetworkCategory Private</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h4>Paso 5: Verificación de Conexión (Ping)</h4>
                <p>Desde la PC 1, comprueba si hay comunicación con la PC 2:</p>
                <div class="contenedor-comando">
                    <code>ping 192.168.1.2</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small><i>Si responde con el tiempo en ms, la conexión funciona correctamente.</i></small></p>

                <h4>Paso 6: Mensajería por CMD (Comando MSG)</h4>
                <p>Primero, guarda las credenciales de la otra PC:</p>
                <div class="contenedor-comando">
                    <code>cmdkey /add:192.168.1.2 /user:USUARIO_PC2 /pass:CLAVE_PC2</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p>Luego envía el mensaje:</p>
                <div class="contenedor-comando">
                    <code>msg * /server:192.168.1.2 "Prueba de red exitosa"</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h4>💡 Pro Tip: Identificación de Usuario</h4>
                <p>Para saber el nombre exacto, ejecuta esto en la PC destino:</p>
                <div class="contenedor-comando">
                    <code>whoami</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <p style="margin-top: 15px;"><strong>⚠️ Solución a errores:</strong> Si el mensaje falla, habilita la recepción remota en el registro:</p>
                <div class="contenedor-comando">
                    <code>reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server" /v AllowRemoteRPC /t REG_DWORD /d 1 /f</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [
            { texto: "Manual PDF", url: "https://drive.google.com/file/d/1SzM3IcmnkqjyLqIg-u00Rt11uPVXzvep/view?usp=drive_link" }
        ],
        pasos: []
    },
    {
        categoria: "tutoriales",
        titulo: "Compartir Carpetas y Gestión de Credenciales",
        comando: "whoami",
        descripcion: "Configuración profesional para compartir archivos en red local, incluyendo permisos de carpeta y creación de credenciales de Windows.",
        contenidoTutorialHtml: `
            <h3>📂 Protocolo de Intercambio de Archivos</h3>
            <p>Este tutorial explica cómo configurar la visibilidad de red y los permisos necesarios para que dos equipos se comuniquen de forma segura y permitan el acceso a archivos.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Configurar Uso Compartido Avanzado</h4>
                <p><strong>Ruta:</strong> Abre Panel de Control -> Centro de redes y recursos compartidos -> Cambiar configuración uso compartido avanzado.</p>
                <p><strong>Activa los siguientes interruptores en ambas PC:</strong></p>
                <ul>
                    <li>Detección de redes.</li>
                    <li>Uso compartido de archivos e impresoras.</li>
                    <li>Uso compartido de carpetas públicas (En "Todas las redes").</li>
                    <li>Uso compartido con protección por contraseña:
                        <ul>
                            <li><strong>Opción A (Fácil):</strong> Desactivado (Entras directo).</li>
                            <li><strong>Opción B (Segura):</strong> Activado (Te pedirá usuario y contraseña, funciona mejor).</li>
                        </ul>
                    </li>
                </ul>

                <h4>Paso 2: Establecer Perfil "Privado"</h4>
                <p>Es vital establecer el perfil como <strong>Privado</strong> para permitir el flujo de datos.</p>
                <p><strong>Ruta:</strong> Configuración -> Red e Internet -> Ethernet -> Seleccionar perfil: Privada.</p>
                
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-exclamation-triangle"></i> CLIC SI NO PUEDES CAMBIAR A RED PRIVADA
                    </summary>
                    <div class="tutorial-pasos" style="margin: 0; background: transparent; border: none;">
                        <p>Si Windows no te deja cambiar a Privada desde ajustes, usa este truco en <strong>PowerShell (Admin)</strong>:</p>
                        <div class="contenedor-comando">
                            <code>Get-NetConnectionProfile</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                        <p>Identifica el nombre de tu red (ej: "Ethernet") y ejecuta este comando para forzar el perfil privado:</p>
                        <div class="contenedor-comando">
                            <code>Set-NetConnectionProfile -InterfaceAlias "Ethernet" -NetworkCategory Private</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                        </div>
                    </div>
                </details>

                <h4>Paso 3: Compartir una Carpeta (Configuración Completa)</h4>
                <h5>1. Preparación</h5>
                <ul>
                    <li>Clic derecho en la carpeta -> <kbd>Propiedades</kbd> -> Pestaña <kbd>Compartir</kbd>.</li>
                </ul>

                <h5>2. Uso Compartido Avanzado (Permisos de Red)</h5>
                <ul>
                    <li>Botón <kbd>Uso compartido avanzado...</kbd> -> Marca <strong>"Compartir esta carpeta"</strong>.</li>
                    <li>En <kbd>Permisos</kbd>, marca <strong>"Control total"</strong> para "Todos".</li>
                </ul>

                <h5>3. Permisos de Usuario (Acceso Final)</h5>
                <ul>
                    <li>Botón <kbd>Compartir...</kbd> -> Selecciona <strong>"Todos"</strong> (Everyone) y haz clic en <kbd>Agregar</kbd>.</li>
                    <li>Cambia el nivel a <strong>"Lectura y escritura"</strong> y dale a <kbd>Compartir</kbd>.</li>
                </ul>

                <p><strong>💡 Pro Tip:</strong> Si falla el guardado, verifica en la pestaña <kbd>Seguridad</kbd> que el grupo "Todos" tenga permisos de "Modificar".</p>

                <h4>Paso 4: Identificación de Red</h4>
                <p>Para crear la credencial, debes saber el nombre del equipo y usuario destino. Ejecuta esto en la PC a la que te vas a conectar:</p>
                <div class="contenedor-comando">
                    <code>whoami</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><small><i>Ejemplo de resultado: juan\\alumno</i></small></p>

                <h4>Paso 5: Crear Credencial de Windows</h4>
                <p>Ve a <strong>Panel de Control > Administrador de credenciales > Credenciales de Windows</strong> e ingresa los datos de la PC2:</p>
                <ul>
                    <li><strong>Dirección:</strong> Nombre de la PC2 (ej: juan).</li>
                    <li><strong>Usuario:</strong> Usuario de la PC2 (ej: alumno).</li>
                    <li><strong>Contraseña:</strong> Clave de inicio de la PC2.</li>
                </ul>

                <h4>Paso 6: Grupo de Trabajo</h4>
                <p>Ambas PC deben estar en el mismo grupo (ej: WORKGROUP). Cámbialo en <em>Sistema > Información > Dominio o grupo de trabajo</em>.</p>

               <details class="acordeon-tutorial" style="margin-top: 15px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-search"></i> CLIC SI TU PC NO APARECE EN LA RED
                    </summary>
                    <div class="tutorial-pasos" style="margin: 0; background: transparent; border: none;">
                        <p>Si ves otras computadoras pero no la tuya, abre <strong>services.msc</strong> y busca el servicio:</p>
                        <p><strong>Publicación de recursos de detección de función</strong>.</p>
                        <p>Cámbialo a tipo de inicio <strong>Automático</strong> e inícialo para activar la visibilidad local.</p>
                    </div>
                </details>

                <h4>Soluciones Rápidas</h4>
                <p>Entrada rápida: <kbd>Win</kbd> + <kbd>R</kbd> ➔ \\\\[Nombre de la PC]</p>
                <p>Si el acceso remoto falla, habilita RPC en el registro:</p>
                <div class="contenedor-comando">
                    <code>reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server" /v AllowRemoteRPC /t REG_DWORD /d 1 /f</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [
            { texto: "Manual de PDF", url: "https://drive.google.com/file/d/1rHUsdqXC-5nmUxs04-RCeA8GHeD2XKZm/view?usp=drive_link" }
        ],
        pasos: []
    },
            
    //CATEGORIA PROGRAMACION
    // =====================================================
    // CATEGORIA PROGRAMACIÓN
    // =====================================================

    {
        categoria: "programacion",
        titulo: "Python",
        comando: "python --version",
        descripcion: "Lenguaje versátil para automatización, ciencia de datos y desarrollo web.",
        contenidoTutorialHtml: `
            <h3>🐍 Instalación Profesional de Python</h3>
            <p>Python es la base de la ingeniería moderna. Al instalarlo en Windows, el éxito depende de un solo clic.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Descarga del instalador</h4>
                <div class="contenedor-comando">
                    <code>https://www.python.org/downloads/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>

                <h4>Paso 2: ¡Paso Crucial! (PATH)</h4>
                <div style="background: rgba(231, 76, 60, 0.1); border-left: 4px solid #e74c3c; padding: 10px; margin: 10px 0;">
                    <p style="margin: 0;"><strong>⚠️ OBLIGATORIO:</strong> Marca la casilla <kbd>Add Python to PATH</kbd> al inicio del instalador.</p>
                </div>

                <h4>Paso 3: Verificación</h4>
                <div class="contenedor-comando">
                    <code>python --version</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [{ texto: "Sitio Oficial de Python", url: "https://www.python.org/downloads/" }],
        pasos: []
    },

    {
        categoria: "programacion",
        titulo: "Arduino IDE",
        comando: "arduino-cli",
        descripcion: "Entorno para programar placas Arduino y microcontroladores compatibles.",
        contenidoTutorialHtml: `
            <h3>♾️ Configuración de Hardware (Arduino)</h3>
            <p>El IDE permite cargar Sketches a tu placa mediante comunicación serial USB.</p>
            <div class="tutorial-pasos">
                <h4>1. Instalación de Drivers</h4>
                <p>Acepta todos los controladores de <strong>"Arduino srl"</strong> durante la instalación para evitar errores de puerto.</p>
                
                <h4>2. Selección de Placa</h4>
                <p>En el menú <strong>Herramientas > Placa</strong>, elige tu modelo (ej: Arduino Uno).</p>
            </div>
        `,
        links: [{ texto: "Descargar Arduino", url: "https://www.arduino.cc/en/software" }],
        pasos: []
    },

    {
        categoria: "programacion",
        titulo: "Docker Desktop",
        comando: "docker --version",
        descripcion: "Plataforma para contenedores que garantiza que el software funcione igual en cualquier PC.",
        contenidoTutorialHtml: `
            <h3>🐋 Virtualización con Contenedores</h3>
            <div class="tutorial-pasos">
                <h4>Requisito Crítico: WSL 2</h4>
                <p>En Windows, Docker requiere el <strong>Subsistema de Linux</strong> activo. Ejecuta como Admin:</p>
                <div class="contenedor-comando">
                    <code>wsl --install</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
            <p style="margin-top: 15px;"><small><i>Nota: Requiere suscripción paga para empresas de +250 empleados.</i></small></p>
        `,
        links: [{ texto: "Sitio Docker", url: "https://www.docker.com/products/docker-desktop" }],
        pasos: []
    },

    {
        categoria: "programacion",
        titulo: "IntelliJ IDEA Community",
        comando: "idea64.exe",
        descripcion: "IDE potente para Java, Kotlin y desarrollo Android profesional.",
        contenidoTutorialHtml: `
            <h3>💻 Entorno de Desarrollo Java (IDEA)</h3>
            <div class="tutorial-pasos">
                <h4>Paso Importante</h4>
                <p>Al instalar, marca: <strong>"Add bin folder to the PATH"</strong> para abrir proyectos desde la consola.</p>
            </div>
        `,
        links: [{ texto: "Descargar IntelliJ", url: "https://www.jetbrains.com/idea/download/" }],
        pasos: []
    },

    {
        categoria: "programacion",
        titulo: "Visual Studio Code",
        comando: "code .",
        descripcion: "El editor de código estándar de la industria, ligero y extensible.",
        contenidoTutorialHtml: `
            <h3>📝 Editor Multi-lenguaje (VS Code)</h3>
            <div class="tutorial-pasos">
                <h4>Atajo Maestro</h4>
                <p>Abre la terminal en cualquier carpeta y escribe este comando para empezar a programar al instante:</p>
                <div class="contenedor-comando">
                    <code>code .</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [{ texto: "Sitio VS Code", url: "https://code.visualstudio.com/" }],
        pasos: []
    },

    {
        categoria: "programacion",
        titulo: "XAMPP (Servidor Local)",
        comando: "xampp-control.exe",
        descripcion: "Entorno que integra Apache, MariaDB (MySQL) y PHP para pruebas web locales.",
        contenidoTutorialHtml: `
            <h3>🌐 Servidor Local de Pruebas</h3>
            <div class="tutorial-pasos">
                <div style="background: rgba(243, 156, 18, 0.1); border-left: 4px solid #f39c12; padding: 10px; margin-bottom: 15px;">
                    <h4>⚠️ Advertencia de Permisos (UAC)</h4>
                    <p>Evita <code>C:\\Program Files</code>. Instala siempre en la raíz: <code>C:\\xampp</code>.</p>
                </div>
                <p>Ideal para WordPress local y prácticas de PHP.</p>
            </div>
        `,
        links: [{ texto: "Sitio XAMPP", url: "https://www.apachefriends.org/" }],
        pasos: []
    },

    {
        categoria: "programacion",
        titulo: "MySQL Community",
        comando: "mysql -u root -p",
        descripcion: "Gestión de bases de datos relacionales para aplicaciones robustas.",
        contenidoTutorialHtml: `
            <h3>🐬 Gestión de Datos (MySQL)</h3>
            <div class="tutorial-pasos">
                <h4>Acceso por Terminal</h4>
                <p>Escribe el siguiente comando (te pedirá la clave configurada):</p>
                <div class="contenedor-comando">
                    <code>mysql -u root -p</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
                <p><strong>Tip:</strong> Instala <em>MySQL Workbench</em> para gestión gráfica.</p>
            </div>
        `,
        links: [{ texto: "Descargar MySQL", url: "https://dev.mysql.com/downloads/installer/" }],
        pasos: []
    },

    {
        categoria: "programacion",
        titulo: "PSeInt (Lógica)",
        comando: "Pseudocódigo",
        descripcion: "Herramienta pedagógica para aprender algoritmos mediante pseudocódigo en español.",
        contenidoTutorialHtml: `
            <h3>🧩 Lógica de Programación</h3>
            <div class="tutorial-pasos">
                <h4>1. Perfil de Configuración</h4>
                <ul>
                    <li><strong>Flexible:</strong> Para principiantes.</li>
                    <li><strong>Estricto:</strong> Prepara para lenguajes reales (puntos y comas obligatorios).</li>
                </ul>

                <h4>2. Diagramas de Flujo</h4>
                <p>Usa el icono <strong>Dibujar Diagrama</strong> para ver tu algoritmo de forma visual.</p>
            </div>
        `,
        links: [{ texto: "Sitio Oficial PSeInt", url: "https://pseint.sourceforge.net/" }],
        pasos: []
    },

    {
        categoria: "programacion",
        titulo: "Java Development Kit (JDK) 22",
        comando: "javac --version",
        descripcion: "Kit oficial de Oracle para compilar y crear aplicaciones Java.",
        contenidoTutorialHtml: `
            <h3>🏗️ Configuración del Entorno Java</h3>
            <div class="tutorial-pasos">
                <h4>Paso 1: Instalación</h4>
                <p>Ruta por defecto: <code>C:\\Program Files\\Java\\jdk-22</code></p>
                
                <h4>Paso 2: Variable JAVA_HOME (Crítico)</h4>
                <p>Configura esta variable de entorno para que los IDEs reconozcan el SDK:</p>
                <ul>
                    <li>Nombre: <strong>JAVA_HOME</strong></li>
                    <li>Valor: <code>C:\\Program Files\\Java\\jdk-22</code></li>
                </ul>

                <h4>Paso 3: Verificación</h4>
                <div class="contenedor-comando">
                    <code>javac -version</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)"><i class="fas fa-copy"></i> Copiar</button>
                </div>
            </div>
        `,
        links: [{ texto: "Descargas Oracle", url: "https://www.oracle.com/mx/java/technologies/downloads/#jdk22-windows" }],
        pasos: []
    },

    {
        categoria: "programacion",
        titulo: "Java Online Compiler",
        comando: "println(\"Hello\");",
        descripcion: "Compilador web para pruebas instantáneas sin instalaciones locales.",
        contenidoTutorialHtml: `
            <h3>☁️ Entorno de Pruebas Rápido</h3>
            <div class="tutorial-pasos">
                <h4>Ventajas:</h4>
                <ul>
                    <li><strong>Interactividad:</strong> Prueba entradas de teclado (Scanner).</li>
                    <li><strong>Portabilidad:</strong> Funciona en cualquier navegador.</li>
                </ul>
                <p><strong>Recomendación:</strong> Úsalo para traducir tus algoritmos de PSeInt a código real.</p>
            </div>
        `,
        links: [{ texto: "Abrir Compilador Web", url: "https://www.programiz.com/java-programming/online-compiler/" }],
        pasos: []
    },
    //CATEGORIA EXCEL
    {
        categoria: "excel",
        titulo: "Quitar Protección de Hoja (Sin Clave)",
        comando: ".zip",
        descripcion: "Elimina la protección de una hoja de Excel modificando su XML interno para recuperar el acceso a la edición.",
        contenidoTutorialHtml: `
            <h3>🔓 Desbloqueo de Hoja Protegida</h3>
            <p>Este método es infalible cuando olvidas la contraseña de una hoja específica de Excel y necesitas editarla con urgencia.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Cambiar a formato ZIP</h4>
                <p>Haz una copia de seguridad y cambia la extensión del archivo original de <strong>.xlsx</strong> a <strong>.zip</strong>. Ábrelo con tu descompresor preferido.</p>
                
                <h4>Paso 2: Localizar la Hoja</h4>
                <p>Navega a la siguiente ruta interna del archivo comprimido:</p>
                <div class="contenedor-comando">
                    <code>xl/worksheets/</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Ruta
                    </button>
                </div>
                <p>Extrae el archivo <strong>.xml</strong> de la hoja bloqueada (ejemplo: <code>sheet1.xml</code>) a tu escritorio.</p>
                
                <h4>Paso 3: Editar el archivo XML</h4>
                <p>Abre el archivo con el <strong>Bloc de Notas</strong>, presiona <kbd>Ctrl</kbd> + <kbd>F</kbd> y busca la siguiente etiqueta <code>&lt;sheetProtection ... /&gt;</code>
                 para borrarla desde el signo <strong>&lt;</strong> hasta el <strong>/&gt;</strong></p>
                
                <h4>Paso 4: Guardar y Finalizar</h4>
                <p>Guarda los cambios en el archivo, reemplaza el original dentro del ZIP con esta nueva versión y regresa la extensión del archivo a <strong>.xlsx</strong>.</p>
            </div>
        `,
        links: [
            {
                texto: "Video Tutorial",
                url: "https://www.youtube.com/shorts/gcMF7Yu0u6Y"
            }
        ],
        pasos: []
    },
    //CATEGORIA UTILIDADES    
    // =====================================================
    // CATEGORIA UTILIDADES
    // =====================================================
    {
        categoria: "utilidades",
        titulo: "Encender PC con Alexa (Wake on LAN)",
        comando: "Alexa Skill + WOL",
        descripcion: "Configura tu computadora para encenderla mediante comandos de voz usando la tecnología Wake on LAN.",
        contenidoTutorialHtml: `
            <h3>🗣️ Domótica: Wake on LAN con Alexa</h3>
            <p>Este tutorial te permite encender tu PC desde cualquier lugar usando un dispositivo Echo o la app de Alexa.</p>
            
            <div class="tutorial-pasos">
                <h4>Paso 1: Activar la Skill</h4>
                <p>Busca en la tienda de Amazon la Skill <strong>"Encender por red"</strong> (Wake on LAN) y actívala con tu cuenta.</p>

                <h4>Paso 2: Obtener la Dirección MAC</h4>
                <p>Necesitas la identificación física de tu tarjeta de red. Ejecuta este comando en el CMD:</p>
                <div class="contenedor-comando">
                    <code>getmac /v /fo list</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <p><small><i>Alternativa: Panel de control -> Redes -> Ethernet -> Detalles -> Dirección física.</i></small></p>
                
                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-external-link-alt"></i> CLIC PARA CONFIGURACIÓN WEB
                    </summary>
                    <div class="tutorial-pasos" style="margin: 0; background: transparent; border: none;">
                        <ol>
                            <li>Entra a la web oficial de la skill:</li>
                            <div class="contenedor-comando">
                                <code>https://www.wolskill.com/</code>
                                <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                    <i class="fas fa-copy"></i> Copiar Link
                                </button>
                            </div>
                            <li>Inicia sesión con tu cuenta de Amazon.</li>
                            <li>Registra tu equipo (ej: <strong>Computadora</strong>) y pega la <strong>MAC</strong> que obtuviste antes.</li>
                        </ol>
                    </div>
                </details>

                <h4>Paso 3: Sincronizar con Alexa</h4>
                <p>En tu App móvil: <strong>Dispositivos</strong> ➔ <strong>Añadir (+)</strong> ➔ <strong>Otro</strong> ➔ <strong>Wi-Fi</strong> ➔ <strong>Detectar dispositivos</strong>.</p>
            </div>
            
            <p style="margin-top: 15px; font-size: 0.85rem; color: #ffcc00;">
                <i class="fas fa-exclamation-circle"></i> <strong>Importante:</strong> Debes habilitar "Wake on LAN" en la BIOS y en las propiedades del adaptador de red en Windows.
            </p>
        `,
        links: [
            { texto: "Ver Tutorial", url: "https://www.youtube.com/watch?v=q24Sg1tWGVY" },
            { texto: "Activar Wake-On-LAN", url: "https://www.youtube.com/watch?v=EyrfE6jXVbU" }
        ],
        pasos: []
    },
    {
        categoria: "utilidades",
        titulo: "Atajos de Teclado para Navegador",
        comando: "Atajos de Navegador",
        descripcion: "Muévete entre pestañas y busca información como un experto sin usar el ratón.",
        contenidoTutorialHtml: `
            <h3>⌨️ Atajos de Teclado Vitales</h3>
            <p>Domina Chrome, Edge o Firefox con estas combinaciones esenciales:</p>
            
            <div class="tutorial-pasos">
                <h4>Navegación de Pestañas:</h4>
                <ul style="list-style: none; padding-left: 0;">
                    <li style="margin-bottom: 8px;"><kbd>Ctrl</kbd> + <kbd>Tab</kbd> : Pestaña siguiente.</li>
                    <li style="margin-bottom: 8px;"><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> : Pestaña anterior.</li>
                    <li style="margin-bottom: 8px;"><kbd>Ctrl</kbd> + <kbd>L</kbd> : Ir a la barra de direcciones.</li>
                </ul>

                <h4>Búsqueda en la Página:</h4>
                <p>Para localizar palabras específicas al instante:</p>
                <div class="contenedor-comando">
                    <code>Ctrl + F</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `,
        links: [],
        pasos: []
    },
    {
        categoria: "utilidades",
        titulo: "Atajos de teclado para Windows",
        comando: "Atajos de Teclado",
        descripcion: "Guía definitiva organizada por niveles, desde los imprescindibles hasta los comandos de terminal avanzado.",
        contenidoTutorialHtml: `
            <h3>📖 Diccionario de Productividad</h3>
            <p>Dominar estos atajos reduce el uso del mouse en un 40% y acelera el soporte técnico significativamente.</p>
            
            <div class="tutorial-pasos">
                
                <details class="acordeon-tutorial">
                    <summary class="acordeon-header">
                        <i class="fas fa-star"></i> NIVEL 1: LOS IMPRESCINDIBLES
                    </summary>
                    <div class="tutorial-pasos" style="margin: 0; background: transparent; border: none;">
                        <p>Uso cada 5 minutos. Son los pilares de la navegación en Windows.</p>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>V</kbd> / <kbd>X</kbd></td>
                                <td style="padding: 8px;">Copiar, Pegar y Cortar.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Ctrl</kbd> + <kbd>Z</kbd> / <kbd>Y</kbd></td>
                                <td style="padding: 8px;">Deshacer y Rehacer acción.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Alt</kbd> + <kbd>Tab</kbd></td>
                                <td style="padding: 8px;">Cambiar entre aplicaciones.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Win</kbd> + <kbd>D</kbd> / <kbd>L</kbd></td>
                                <td style="padding: 8px;">Mostrar escritorio / Bloquear.</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px;"><kbd>Win</kbd> + <kbd>E</kbd> / <kbd>R</kbd></td>
                                <td style="padding: 8px;">Explorador / Ventana Ejecutar.</td>
                            </tr>
                        </table>
                    </div>
                </details>

                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-desktop"></i> NIVEL 2: SISTEMA Y PANTALLA
                    </summary>
                    <div class="tutorial-pasos" style="margin: 0; background: transparent; border: none;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd></td>
                                <td style="padding: 8px;">Administrador de tareas.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Win</kbd> + <kbd>V</kbd></td>
                                <td style="padding: 8px;">Historial del Portapapeles.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd></td>
                                <td style="padding: 8px;">Recorte de pantalla selectivo.</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px;"><kbd>Win</kbd> + <kbd>Flechas</kbd></td>
                                <td style="padding: 8px;">Ajustar ventanas a los lados.</td>
                            </tr>
                        </table>
                    </div>
                </details>

                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-folder-open"></i> NIVEL 3: ARCHIVOS Y DIÁLOGOS
                    </summary>
                    <div class="tutorial-pasos" style="margin: 0; background: transparent; border: none;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>F2</kbd> / <kbd>F5</kbd></td>
                                <td style="padding: 8px;">Renombrar / Actualizar.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px;"><kbd>Alt</kbd> + <kbd>Enter</kbd></td>
                                <td style="padding: 8px;">Propiedades del elemento.</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px;"><kbd>Win</kbd> + <kbd>I</kbd> / <kbd>X</kbd></td>
                                <td style="padding: 8px;">Configuración / Menú rápido.</td>
                            </tr>
                        </table>
                    </div>
                </details>

                <details class="acordeon-tutorial" style="margin-top: 10px;">
                    <summary class="acordeon-header">
                        <i class="fas fa-user-tie"></i> NIVEL 4: MODO EXPERTO
                    </summary>
                    <div class="tutorial-pasos" style="margin: 0; background: transparent; border: none;">
                        <p>Para usuarios que manejan entornos virtuales y terminales:</p>
                        
                        <div class="contenedor-comando">
                            <code>Win + Ctrl + D</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                <i class="fas fa-copy"></i> Copiar Combo
                            </button>
                        </div>
                        <p><small>Crear un nuevo Escritorio Virtual limpio.</small></p>

                        <div class="contenedor-comando" style="margin-top: 10px;">
                            <code>Win + .</code>
                            <button class="btn-copiar-interno" onclick="copiarComando(this)">
                                <i class="fas fa-copy"></i> Copiar Combo
                            </button>
                        </div>
                        <p><small>Abrir panel de Emojis, Símbolos técnicos y Kaomojis.</small></p>
                    </div>
                </details>

                <div style="background: rgba(52, 152, 219, 0.1); border-left: 4px solid #3498db; padding: 12px; margin-top: 20px; border-radius: 4px;">
                    <p style="margin: 0;"><i class="fas fa-lightbulb" style="color: #f1c40f;"></i> <strong>Pro Tip:</strong> Activa el historial del portapapeles con <kbd>Win</kbd> + <kbd>V</kbd> para no perder nunca lo que copiaste anteriormente.</p>
                </div>

            </div>
        `,
        links: [
            {
                texto: "Lista Completa de Microsoft",
                url: "https://support.microsoft.com/es-es/windows/métodos-abreviados-de-teclado-de-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec"
            },
            {   texto: "Manual Word Original", 
                url: "https://docs.google.com/document/d/1VcbOgtIhIHOAZeEHkfTZuuAsXDJzU-v_/edit?usp=drive_link" 
            }
        ],
        pasos: []
    },
    {
        categoria: "utilidades",
        titulo: "WhatsApp Directo",
        comando: "https://wa.me/[número]",
        descripcion: "Envía mensajes a números de WhatsApp sin necesidad de guardarlos en tu lista de contactos.",
        contenidoTutorialHtml: `
            <h3>📲 Mensajería Rápida</h3>
            <p>Ideal para ventas o trámites rápidos donde no quieres llenar tu agenda de contactos temporales.</p>
            
            <div class="tutorial-pasos">
                <h4>Cómo usarlo:</h4>
                <p>Escribe la estructura en tu navegador seguida del número con código de país (sin el signo +):</p>
                
                <div class="contenedor-comando">
                    <code>https://wa.me/521234567890</code>
                    <button class="btn-copiar-interno" onclick="copiarComando(this)">
                        <i class="fas fa-copy"></i> Copiar Link
                    </button>
                </div>
                
                <div style="background: rgba(52, 152, 219, 0.1); border-left: 4px solid #3498db; padding: 10px; margin-top: 15px; border-radius: 4px;">
                    <p style="margin: 0;"><i class="fas fa-info-circle"></i> <strong>Nota:</strong> Sustituye el número de ejemplo por el real. El chat se abrirá automáticamente en WhatsApp Web o la App.</p>
                </div>
            </div>
        `,
        links: [{ texto: "Generador de Enlaces", url: "https://create.wa.link/" }],
        pasos: []
    },
    {
        categoria: "utilidades",
        titulo: "Formato de Texto Rápido en WhatsApp",
        comando: "Símbolos de formato",
        descripcion: "Aprende a poner negritas, cursivas y subrayado en plataformas como WhatsApp o editores Markdown.",
        contenidoTutorialHtml: `
            <h3>✍️ Trucos de Escritura</h3>
            <p>Utiliza símbolos antes y después de las palabras para cambiar su apariencia:</p>
            
            <div class="tutorial-pasos">
                <ul>
                    <li><strong>Negrita:</strong> Envuelve el texto con asteriscos <code>*texto*</code></li>
                    <li><em>Cursiva:</em> Envuelve el texto con guiones bajos <code>_texto_</code></li>
                    <li><del>Tachado:</del> Envuelve el texto con virgulillas <code>~texto~</code></li>
                    <li>Monospace: Usa tres comillas invertidas <code>\`\`\`texto\`\`\`</code></li>
                </ul>
            </div>
        `,
        links: [],
        pasos: []
    },
            
];

// =====================================================
// 2. SELECTORES
// Aquí JavaScript “atrapa” elementos del HTML por su ID.
// Esto permite modificarlos dinámicamente.
// =====================================================
const listaRecursos = document.getElementById('lista-recursos');
// ↳ <section id="lista-recursos"></section>

const buscador = document.getElementById('inputBusqueda');
// ↳ <input id="inputBusqueda">

const modal = document.getElementById('modal-tutorial');
// ↳ <div id="modal-tutorial">

const cuerpoTutorial = document.getElementById('tutorial-cuerpo');
// ↳ <div id="tutorial-cuerpo">


// =====================================================
// 3. UTILIDAD
// Convierte texto normal en formato Título (Title Case)
// =====================================================
function titleCase(str) {
    return str
        .toLowerCase()              // Convierte todo a minúsculas
        .split(' ')                 // Separa palabras
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )                           // Primera letra mayúscula
        .join(' ');                 // Une las palabras
}

// =====================================================
// 4. MOTOR DE RENDERIZADO
// Esta función CREA las tarjetas dinámicamente en HTML
// =====================================================
function mostrarNotas(notasAMostrar) {

    // Limpia el contenido anterior para evitar duplicados
    listaRecursos.innerHTML = '';

    // Recorre cada nota del arreglo recibido
    notasAMostrar.forEach((nota) => {

        // Crea un <div> para cada tarjeta
        const tarjeta = document.createElement('div');

        // Asigna clases CSS (tarjeta + categoría)
        tarjeta.className = `tarjeta ${nota.categoria}`;

        // Busca el índice real en la base de datos original
        const originalIndex = misNotas.findIndex(
            n => n.titulo === nota.titulo
        );
        // cuenta cuantas notas hay en cada categoria 
        document.querySelectorAll('.tab').forEach(boton => {
        const cat = boton.getAttribute('onclick').match(/'([^']+)'/)[1];
        const cantidad = (cat === 'todas') 
            ? misNotas.length 
            : misNotas.filter(n => n.categoria === cat).length;
            
        // Busca si ya existe un span de contador, si no lo crea
        let badge = boton.querySelector('.count-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'count-badge';
            boton.appendChild(badge);
        }
        badge.innerText = cantidad;
    });


        // =================================================
        // LINKS: Solo se crean si existen
        // =================================================
        let htmlLinks = (nota.links && nota.links.length > 0)
            ? `
                <div class="links-seccion">
                    ${nota.links.map(link =>
                        `<a href="${link.url}" target="_blank" class="link-item">
                            <i class="fas fa-external-link-alt"></i> ${link.texto}
                        </a>`
                    ).join('')}
                </div>
            `
            : "";

        // =================================================
        // BOTÓN GUÍA: Solo aparece si hay pasos
        // =================================================
        // Ahora el botón sale si hay pasos O si hay contenido HTML avanzado
        let btnTutorial = ( (nota.pasos && nota.pasos.length > 0) || nota.contenidoTutorialHtml )
            ? `
                <button class="btn-accion btn-tutorial"
                        onclick="abrirTutorial(${originalIndex})">
                    <i class="fas fa-book"></i> Guía
                </button>
              `
            : "";
        // =================================================
        // HTML FINAL DE LA TARJETA
        // =================================================
        tarjeta.innerHTML = `
            <div class="tarjeta-header">
                <span class="etiqueta ${nota.categoria}">
                    ${nota.categoria.toUpperCase()}
                </span>
                <h3>${(nota.titulo)}</h3>
            </div>

            <code>${nota.comando}</code>

            <p>${nota.descripcion}</p>

            ${htmlLinks}

            <div class="panel-controles">
                <button class="btn-accion btn-copiar"
                        onclick="copiarComando(this)">
                    <i class="fas fa-copy"></i> Copiar
                </button>
                ${btnTutorial}
            </div>
        `;

        // Inserta la tarjeta en el HTML
        listaRecursos.appendChild(tarjeta);
    });
}


// =====================================================
// 5. TUTORIALES (MODAL)
// Abre la ventana y muestra los pasos
// =====================================================
function abrirTutorial(index) {
    const nota = misNotas[index];

    // Decidimos qué mostrar en el cuerpo: El HTML avanzado o la lista de pasos
    const contenidoPrincipal = nota.contenidoTutorialHtml 
        ? nota.contenidoTutorialHtml 
        : `<h4>📝 Pasos detallados:</h4>
           <ol>${nota.pasos.map(p => `<li>${p}</li>`).join('')}</ol>`;

    cuerpoTutorial.innerHTML = `
        <div class="tutorial-header">
            <div class="titulo-grupo">
                <h2 style="color: var(--primary); font-size: 2.5rem;">${nota.titulo}</h2>
                <span class="etiqueta ${nota.categoria}">${nota.categoria.toUpperCase()}</span>
            </div>
            <button onclick="window.print()" class="btn-pdf">
                <i class="fas fa-file-pdf"></i> Guía PDF
            </button>
        </div>

        <div class="tutorial-contenido-pro">
            ${contenidoPrincipal}
        </div>

        <p class="comando-referencia" style="margin-top: 20px; border-top: 1px solid #eee; pt-10px;">
            <em>Comando base: <code>${nota.comando}</code></em>
        </p>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Bloquea el scroll de fondo

    // --- SOLUCIÓN DE SCROLL GARANTIZADA ---
    setTimeout(() => {
        const contenedorCuerpo = document.querySelector('.modal-contenido');
        if (contenedorCuerpo) {
            contenedorCuerpo.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, 10);
}

// Cierra el tutorial
function cerrarTutorial() {
    modal.classList.add('hidden');
    // ESTA ES LA LÍNEA QUE FALTA:
    document.body.style.overflow = 'auto'; 
}

// Cierra el modal si se da clic fuera del contenido
window.onclick = function (event) {
    if (event.target === modal) {
        cerrarTutorial();
    }
};

// =====================================================
// 6. FUNCIONES GLOBALES
// Modo oscuro y copiar comandos
// =====================================================
function toggleDarkMode() {
    // Agrega o quita la clase dark-mode al body
    document.body.classList.toggle('dark-mode');

    // Cambia el icono (luna ↔ sol)
    const icono = document.querySelector('.global-tools button i');
    icono.classList.toggle('fa-moon');
    icono.classList.toggle('fa-sun');
}

function copiarComando(btn) {
    // Evita clics repetidos mientras dice "Copiado"
    if (btn.innerText.includes("Copiado")) return;

    // --- ESTRATEGIA DE BÚSQUEDA INTEGRADA ---
    
    // 1. Intentamos buscar un vecino inmediato (justo antes del botón)
    let elementoCodigo = btn.previousElementSibling;

    // 2. Si no es código, buscamos dentro del mismo contenedor (útil para el nuevo script .BAT)
    // Ahora incluimos 'pre' en la búsqueda
    if (!elementoCodigo || (elementoCodigo.tagName !== 'CODE' && elementoCodigo.tagName !== 'PRE' && !elementoCodigo.classList.contains('caja-negra'))) {
        elementoCodigo = btn.parentElement.querySelector('code, pre, .caja-negra');
    }

    // 3. Si sigue sin aparecer, buscamos en la tarjeta completa (casos de comandos rápidos)
    if (!elementoCodigo) {
        const tarjeta = btn.closest('.tarjeta');
        if (tarjeta) elementoCodigo = tarjeta.querySelector('code, pre, .caja-negra');
    }

    // Si después de todo no hay nada, salimos para evitar errores
    if (!elementoCodigo) return;

    const textoACopiar = elementoCodigo.innerText;

    // --- ACCIÓN DE COPIAR Y FEEDBACK VISUAL ---
    navigator.clipboard.writeText(textoACopiar).then(() => {
        const contenidoOriginal = btn.innerHTML;
        const colorOriginal = btn.style.background;

        // Mezclamos lo mejor de ambos mundos:
        // Usamos el icono de check y el color verde que ya tenías configurado
        btn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
        btn.style.background = '#2ecc71'; 
        btn.classList.add('copiado-exito'); // Añadimos la clase por si usas el CSS nuevo

        setTimeout(() => {
            btn.innerHTML = contenidoOriginal;
            btn.style.background = colorOriginal;
            btn.classList.remove('copiado-exito');
        }, 1500);
    });
}

// =====================================================
// 7. BUSCADOR Y FILTROS MEJORADO
// =====================================================
if (buscador) {
    buscador.addEventListener('input', () => {
        // Texto escrito por el usuario en minúsculas
        const texto = buscador.value.toLowerCase().trim();

        // Si el buscador está vacío, mostramos todo y salimos
        if (texto === "") {
            mostrarNotas(misNotas);
            return;
        }

        // Filtra notas revisando múltiples campos
        const filtradas = misNotas.filter(n => {
            return (
                n.titulo.toLowerCase().includes(texto) ||      // Busca en el título
                n.categoria.toLowerCase().includes(texto) ||   // Busca en la categoría
                n.descripcion.toLowerCase().includes(texto) || // Busca en la descripción
                n.pasos.some(p => p.toLowerCase().includes(texto)) // Busca dentro de los pasos de la guía
            );
        });

        // Redibuja las tarjetas encontradas
        mostrarNotas(filtradas);

        // Opcional: Si no hay resultados, puedes mostrar un mensaje
        if (filtradas.length === 0) {
            listaRecursos.innerHTML = `<p class="no-results">No se encontraron comandos o guías con "${texto}"</p>`;
        }
    });
}

function filtrarPorCategoria(cat) {
    // 1. Quita la clase active de todos los botones
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    // 2. Busca el botón exacto que se clickeó usando su atributo onclick
    const botonActivo = document.querySelector(`button[onclick="filtrarPorCategoria('${cat}')"]`);
    
    // 3. Si lo encuentra, le pone el color (clase active)
    if (botonActivo) {
        botonActivo.classList.add('active');
    }

    // 4. Filtra los datos
    const final = (cat === 'todas')
        ? misNotas
        : misNotas.filter(n => n.categoria === cat);

    mostrarNotas(final);
}

// =====================================================
// 8. INICIO
// Se ejecuta al cargar la página
// =====================================================

// 1. Desactivamos la restauración automática del navegador para que no nos "ayude" a volver abajo
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// 2. Primero dibujamos las tarjetas para que la página tenga "altura"
mostrarNotas(misNotas); 

// 3. Ahora que hay contenido, movemos la pantalla al inicio
window.scrollTo(0, 0);


