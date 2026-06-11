function actualizarInterfaz() {
    for (let tema in misHabilidades) {
        const h = misHabilidades[tema];
        
        // 1. Actualizamos el Nivel y la Barra (lo que ya hacías)
        document.getElementById(h.idNivel).textContent = h.nivel;
        document.getElementById(h.idBarra).style.width = h.xp + "%";
        
        // 2. ¡NUEVO! Actualizamos el Título
        // Verificamos que el ID exista y que el nivel tenga un título definido
        if (h.idNombre && h.titulos[h.nivel]) {
            document.getElementById(h.idNombre).textContent = h.titulos[h.nivel];
        }

        if (h.idDescrip && h.descripciones[h.nivel]) {
            document.getElementById(h.idDescrip).textContent = h.descripciones[h.nivel];
        }

        if (h.nivel >= 10) {
            const botonMax = document.getElementById(h.idBoton);
            if (botonMax) { // Verificamos que el botón exista
                botonMax.disabled = true;
                botonMax.classList.add('maestria-activa')
                botonMax.textContent = "MAESTRÍA LOGRADA";
            }
        }
    }
}

//Hacemos un objeto de las habilidades en conjunto con sus respectivas id y propiedades
const misHabilidades = {
    prog: { xp: 0, nivel: 0, idBoton: 'prog-btn', idBarra: 'bar-prog', idNivel: 'nivel-prog', idNombre : 'hab-prog', titulos : ['Noob de Programacion', 'Lógica de Bloques', 'Sintaxis Fundamental', 'Estructuras de Datos', 'Control de Versiones', 'Programación Orientada a Objetos (POO)', 'Consumo de APIs', 'Bases de Datos', 'Arquitectura de Software', 'Despliegue y Cloud', 'Arquitecto de Sistemas'], idDescrip : 'desc-prog', descripciones : ['Aprender conceptos basicos', 'Entender algoritmos básicos (IF, ELSE, loops)', 'Dominar un lenguaje (Python o JavaScript) y variables', 'Listas, diccionarios y arrays', 'Uso fluido de Git y GitHub', 'Clases, herencia y polimorfismo', 'Conectar tu código con el mundo exterior', 'SQL y diseño de esquemas relacionales', 'Patrones de diseño y código limpio (Clean Code)', ' Subir aplicaciones a la nube (Docker, AWS)', 'Capacidad de diseñar sistemas escalables y complejos']},
    bl3d: { xp: 0, nivel: 0, idBoton: 'bl3d-btn', idBarra: 'bar-bl3d', idNivel: 'nivel-bl3d', idNombre : 'hab-bl3d', titulos : ['Noob de Blender', 'Navegación y Primitivas', 'Modelado Poligonal', 'Modificadores', 'Esculpido Digital', 'UV Unwrapping', 'Texturizado y PBR', 'Iluminación de Escena', 'Rigging Básico', 'Animación', 'Render Final'], idDescrip : 'desc-bl3d', descripciones : ['Aprender conceptos basicos', 'Manipular objetos básicos en el espacio 3D', 'Extrusiones, cortes y topología básica', 'Uso de simetría (Mirror), subdivisiones y booleanas', 'Modelado orgánico (estilo arcilla)', '"Desplegar" el objeto para poder pintarlo', 'Aplicar materiales realistas (madera, metal, vidrio)', 'Crear atmósfera con luces y sombras', 'Crear el esqueleto interno de un modelo', 'Dar vida al modelo mediante keyframes', 'Optimización de motores de renderizado para realismo']},
    math: { xp: 0, nivel: 0, idBoton: 'math-btn', idBarra: 'bar-math', idNivel: 'nivel-math', idNombre : 'hab-math', titulos : ['Noob de Matematicas', 'Aritmética Mental', 'Álgebra Básica', 'Geometría y Trigonometría', 'Funciones y Gráficas',  'Cálculo Diferencial', 'Álgebra Lineal', 'Estadística Descriptiva', 'Cálculo Integral', 'Probabilidad Avanzada', 'Matemática Aplicada'], idDescrip : 'desc-math', descripciones : ['Aprender conceptos basicos', 'Agilidad en operaciones básicas y porcentajes', 'Resolución de ecuaciones y despeje de variables', 'Funciones seno/coseno (vital para el modelado 3D)', 'Entender cómo se comportan los datos visualmente', 'El estudio del cambio y las derivadas', 'Matrices y vectores (el motor de la programación y el 3D)', 'Análisis de datos y tendencias', 'Sumas infinitas y áreas bajo la curva', 'Modelado de incertidumbre y toma de decisiones', 'Resolución de problemas reales mediante modelos complejos']},
    cond: { xp: 0, nivel: 0, idBoton: 'cond-btn', idBarra: 'bar-cond', idNivel: 'nivel-cond', idNombre : 'hab-cond', titulos : ['Noob de Conduccion', 'Teoría Vial', 'Mecánica Básica', 'Control del Vehículo', 'Maniobras en Recinto', 'Tráfico Urbano', 'Autopistas y Velocidad', 'Conducción Nocturna', 'Clima Adverso', 'Conducción Defensiva', 'Experto en Ruta'], idDescrip : 'desc-cond', descripciones : ['Aprender conceptos basicos', 'Conocimiento de señales y reglamento', 'Saber cambiar una llanta y revisar niveles', 'Dominio de pedales, marchas y dimensiones', 'Estacionamiento perfecto y marcha atrás', 'Conducción segura en calles concurridas', 'Incorporaciones y cambios de carril a alta velocidad', 'Adaptación a baja visibilidad', 'Manejo en lluvia, niebla o terrenos difíciles', 'Anticipar errores de otros conductores', 'Capacidad de cruzar países y reaccionar ante emergencias']},
    finz: { xp: 0, nivel: 0, idBoton: 'finz-btn', idBarra: 'bar-finz', idNivel: 'nivel-finz', idNombre : 'hab-finz', titulos : ['Noob de Financiero', 'Registro de Gastos', 'Presupuesto Mensual', 'Fondo de Emergencia', 'Eliminación de Deuda', 'Entendimiento Fiscal', 'Inversión Pasiva', 'Protección', 'Diversificación', 'Planificación de Retiro', 'Independencia Financiera'], idDescrip : 'desc-finz', descripciones : ['Aprender conceptos basicos', 'Saber exactamente a dónde va cada centavo', 'Controlar el gasto antes de que ocurra', 'Tener ahorrados de 3 a 6 meses de gastos', 'Estrategias para liquidar intereses altos', 'Saber cómo funcionan tus impuestos', 'Primeros pasos en fondos indexados o ETFs', 'Seguros de salud, vida y hogar adecuados', 'Múltiples fuentes de ingresos o activos', 'Proyecciones a largo plazo', 'Tus activos cubren todos tus gastos de vida'] }, 
    japo: { xp: 0, nivel: 0, idBoton: 'japo-btn', idBarra: 'bar-leng', idNivel: 'nivel-japo', idNombre : 'hab-japo', titulos : ['Noob de Japones', 'Kana Master', 'Supervivencia (N5)', 'Conversación Diaria (N4)', 'Umbral de Comprensión (N3)', 'Lectura Adaptada', 'Fluidez Intermedia (N2)', 'Kanji Avanzado', 'Inmersión Total', 'Maestría (N1)', 'Bilingüe'], idDescrip : 'desc-japo', descripciones : ['Aprender conceptos basicos', 'Lectura y escritura fluida de Hiragana y Katakana', 'Gramática básica y unos 100 Kanji esenciales', 'Capacidad de hablar de rutinas y deseos', 'Entender puntos clave de noticias y blogs', 'Leer manga sencillo o artículos con furigana', 'Capacidad de trabajar en entornos de habla japonesa', 'Dominio de los 2,000 Joyo Kanji (uso común)', 'Consumir medios nativos (novelas, anime sin subs)', 'Comprensión de textos abstractos y lenguaje honorífico (Keigo)', 'Capacidad de matizar ideas y entender dialectos locales']} 
};

const datosGuardados = localStorage.getItem('ProgresoPersonal');


if (datosGuardados) { 
    const datosCargados = JSON.parse(datosGuardados);

        for (let tema in datosCargados) {

        misHabilidades[tema].xp = datosCargados[tema].xp;
        misHabilidades[tema].nivel = datosCargados[tema].nivel;
        }
        
        actualizarInterfaz();
        console.log('Partida cargada ¡Bienvenido de vuelta!')
    
}  else {   

    actualizarInterfaz();
    console.log('¡Nueva Partida! Empecemos de cero.');
        }

// 2. Buscamos la barra que va a moverse o actualizarse
const barraRelleno = document.querySelector('.progress-fill');

let intervaloEscritura; // Variable para controlar el tiempo

function escribirDialogo(texto) {
    const cuadro = document.getElementById('dialogo-raphtalia');
    let i = 0;
    
    // Si ya se estaba escribiendo algo, lo detenemos para empezar de nuevo
    clearInterval(intervaloEscritura);
    
    // Limpiamos el cuadro antes de empezar
    cuadro.textContent = "";

    // Creamos el intervalo (el "reloj")
    intervaloEscritura = setInterval(() => {
        if (i < texto.length) {
            cuadro.textContent += texto.charAt(i);
            i++;
        } else {
            // Cuando termina de escribir todas las letras, apagamos el reloj
            clearInterval(intervaloEscritura);
        }
    }, 50); // 50ms es una velocidad estándar de RPG, puedes ajustarlo
}

// 3. Le decimos qué hacer cuando le den clic
function entrenar(tema, event) {

    if (raphtalia.energia <= 0) {
                    escribirDialogo(`${raphtalia.nombre}: ${usuario.nombre}-sama, no puedo más, necesito descansar`);
                    return;
                }
                
    estado();


    // 1. Accedemos a los datos de ese tema específico
    let habilidad = misHabilidades[tema];
    
    // 2. Aplicamos la logica de aumento de nivel usando la propiedad del objeto 
    habilidad.xp += 10;
    console.log(habilidad.xp +'%');

    if (habilidad.xp >= 100) {
        console.log('¡You have max xp!. You Level up!')
        habilidad.nivel++;
        habilidad.xp = 0;

        // Actualizamos el texto del nivel usando el ID guardado en el objeto
        document.getElementById(habilidad.idNivel).textContent = habilidad.nivel;
        
        if (habilidad.nivel < habilidad.titulos.length) {
            let nuevoNombre = habilidad.titulos[habilidad.nivel];
            document.getElementById(habilidad.idNombre).textContent = nuevoNombre;
        }

        if (habilidad.nivel < habilidad.descripciones.length) {
            let nuevaDescrip = habilidad.descripciones[habilidad.nivel];
            document.getElementById(habilidad.idDescrip).textContent = nuevaDescrip;
        }
        
    } 
    // 3. Actualizamos la barra usando el ID de la barra guardado en el objeto
    document.getElementById(habilidad.idBarra).style.width = habilidad.xp + "%";

    document.getElementById('bar-rapthalia').style.width = raphtalia.maxEnergia + "%";

    if (habilidad.nivel >= 10) {
        // Usamos el 'event' que recibimos en la función
        const botonActivo = event.target; 
        botonActivo.disabled = true;
        botonActivo.classList.add('maestria-activa')
        botonActivo.textContent = "MAESTRÍA LOGRADA";
        console.log('¡Llegaste al nivel máximo en ' + tema + '!');
    }
    
    function guardarDatos () { 
        localStorage.setItem('ProgresoPersonal', JSON.stringify(misHabilidades));
    }

    guardarDatos(); 
}



