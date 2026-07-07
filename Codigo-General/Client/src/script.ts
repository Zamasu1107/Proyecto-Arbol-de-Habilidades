import { asistente, estado } from './raphtalia.js';

function actualizarInterfaz():void {
    for (const tema in misHabilidades) {
        const h = misHabilidades[tema];

        if(h) {

            document.getElementById(h.idNivel)!.textContent = h.nivel.toString();
            document.getElementById(h.idBarra)!.style.width = h.xp + "%";
            
            if (h.idNombre && h.titulos[h.nivel]) {
                document.getElementById(h.idNombre)!.textContent = h.titulos[h.nivel] || "Conocimiento Max";
            }

            if (h.idDescrip && h.descripciones[h.nivel]) {
                document.getElementById(h.idDescrip)!.textContent = h.descripciones[h.nivel] || "Nivel Max";
            }

            if (h.nivel >= 10) {
                const botonMax = document.getElementById(h.idBoton) as HTMLButtonElement;
                if (botonMax) { // Verificamos que el botón exista
                    botonMax.disabled = true;
                    botonMax.classList.add('maestria-activa')
                    botonMax.textContent = "MAESTRÍA LOGRADA";
                }
            }
        }
    }
}

interface habilidadesInfo {
    xp: number; nivel: number; idBoton: string; idBarra: string; idNivel: string; idNombre: string; titulos: string[]; idDescrip:string; descripciones:string[];
};

interface habilidadesNombre {
    [titulo:string]: habilidadesInfo;
};

const misHabilidades:habilidadesNombre = {
    prog: { xp: 0, nivel: 0, idBoton: 'prog-btn', idBarra: 'bar-prog', idNivel: 'nivel-prog', idNombre : 'hab-prog', titulos : ['Noob de Programacion', 'Lógica de Bloques', 'Sintaxis Fundamental', 'Estructuras de Datos', 'Control de Versiones', 'Programación Orientada a Objetos (POO)', 'Consumo de APIs', 'Bases de Datos', 'Arquitectura de Software', 'Despliegue y Cloud', 'Arquitecto de Sistemas'], idDescrip : 'desc-prog', descripciones : ['Aprender conceptos basicos', 'Entender algoritmos básicos (IF, ELSE, loops)', 'Dominar un lenguaje (Python o JavaScript) y variables', 'Listas, diccionarios y arrays', 'Uso fluido de Git y GitHub', 'Clases, herencia y polimorfismo', 'Conectar tu código con el mundo exterior', 'SQL y diseño de esquemas relacionales', 'Patrones de diseño y código limpio (Clean Code)', ' Subir aplicaciones a la nube (Docker, AWS)', 'Capacidad de diseñar sistemas escalables y complejos']},
    bl3d: { xp: 0, nivel: 0, idBoton: 'bl3d-btn', idBarra: 'bar-bl3d', idNivel: 'nivel-bl3d', idNombre : 'hab-bl3d', titulos : ['Noob de Blender', 'Navegación y Primitivas', 'Modelado Poligonal', 'Modificadores', 'Esculpido Digital', 'UV Unwrapping', 'Texturizado y PBR', 'Iluminación de Escena', 'Rigging Básico', 'Animación', 'Render Final'], idDescrip : 'desc-bl3d', descripciones : ['Aprender conceptos basicos', 'Manipular objetos básicos en el espacio 3D', 'Extrusiones, cortes y topología básica', 'Uso de simetría (Mirror), subdivisiones y booleanas', 'Modelado orgánico (estilo arcilla)', '"Desplegar" el objeto para poder pintarlo', 'Aplicar materiales realistas (madera, metal, vidrio)', 'Crear atmósfera con luces y sombras', 'Crear el esqueleto interno de un modelo', 'Dar vida al modelo mediante keyframes', 'Optimización de motores de renderizado para realismo']},
    math: { xp: 0, nivel: 0, idBoton: 'math-btn', idBarra: 'bar-math', idNivel: 'nivel-math', idNombre : 'hab-math', titulos : ['Noob de Matematicas', 'Aritmética Mental', 'Álgebra Básica', 'Geometría y Trigonometría', 'Funciones y Gráficas',  'Cálculo Diferencial', 'Álgebra Lineal', 'Estadística Descriptiva', 'Cálculo Integral', 'Probabilidad Avanzada', 'Matemática Aplicada'], idDescrip : 'desc-math', descripciones : ['Aprender conceptos basicos', 'Agilidad en operaciones básicas y porcentajes', 'Resolución de ecuaciones y despeje de variables', 'Funciones seno/coseno (vital para el modelado 3D)', 'Entender cómo se comportan los datos visualmente', 'El estudio del cambio y las derivadas', 'Matrices y vectores (el motor de la programación y el 3D)', 'Análisis de datos y tendencias', 'Sumas infinitas y áreas bajo la curva', 'Modelado de incertidumbre y toma de decisiones', 'Resolución de problemas reales mediante modelos complejos']},
    cond: { xp: 0, nivel: 0, idBoton: 'cond-btn', idBarra: 'bar-cond', idNivel: 'nivel-cond', idNombre : 'hab-cond', titulos : ['Noob de Conduccion', 'Teoría Vial', 'Mecánica Básica', 'Control del Vehículo', 'Maniobras en Recinto', 'Tráfico Urbano', 'Autopistas y Velocidad', 'Conducción Nocturna', 'Clima Adverso', 'Conducción Defensiva', 'Experto en Ruta'], idDescrip : 'desc-cond', descripciones : ['Aprender conceptos basicos', 'Conocimiento de señales y reglamento', 'Saber cambiar una llanta y revisar niveles', 'Dominio de pedales, marchas y dimensiones', 'Estacionamiento perfecto y marcha atrás', 'Conducción segura en calles concurridas', 'Incorporaciones y cambios de carril a alta velocidad', 'Adaptación a baja visibilidad', 'Manejo en lluvia, niebla o terrenos difíciles', 'Anticipar errores de otros conductores', 'Capacidad de cruzar países y reaccionar ante emergencias']},
    finz: { xp: 0, nivel: 0, idBoton: 'finz-btn', idBarra: 'bar-finz', idNivel: 'nivel-finz', idNombre : 'hab-finz', titulos : ['Noob de Financiero', 'Registro de Gastos', 'Presupuesto Mensual', 'Fondo de Emergencia', 'Eliminación de Deuda', 'Entendimiento Fiscal', 'Inversión Pasiva', 'Protección', 'Diversificación', 'Planificación de Retiro', 'Independencia Financiera'], idDescrip : 'desc-finz', descripciones : ['Aprender conceptos basicos', 'Saber exactamente a dónde va cada centavo', 'Controlar el gasto antes de que ocurra', 'Tener ahorrados de 3 a 6 meses de gastos', 'Estrategias para liquidar intereses altos', 'Saber cómo funcionan tus impuestos', 'Primeros pasos en fondos indexados o ETFs', 'Seguros de salud, vida y hogar adecuados', 'Múltiples fuentes de ingresos o activos', 'Proyecciones a largo plazo', 'Tus activos cubren todos tus gastos de vida'] }, 
    japo: { xp: 0, nivel: 0, idBoton: 'japo-btn', idBarra: 'bar-leng', idNivel: 'nivel-japo', idNombre : 'hab-japo', titulos : ['Noob de Japones', 'Kana Master', 'Supervivencia (N5)', 'Conversación Diaria (N4)', 'Umbral de Comprensión (N3)', 'Lectura Adaptada', 'Fluidez Intermedia (N2)', 'Kanji Avanzado', 'Inmersión Total', 'Maestría (N1)', 'Bilingüe'], idDescrip : 'desc-japo', descripciones : ['Aprender conceptos basicos', 'Lectura y escritura fluida de Hiragana y Katakana', 'Gramática básica y unos 100 Kanji esenciales', 'Capacidad de hablar de rutinas y deseos', 'Entender puntos clave de noticias y blogs', 'Leer manga sencillo o artículos con furigana', 'Capacidad de trabajar en entornos de habla japonesa', 'Dominio de los 2,000 Joyo Kanji (uso común)', 'Consumir medios nativos (novelas, anime sin subs)', 'Comprensión de textos abstractos y lenguaje honorífico (Keigo)', 'Capacidad de matizar ideas y entender dialectos locales']} 
};

async function cargarDatos() {
    try {
        const respuesta = await fetch('http://localhost:2712/api/progreso')

        const datosCargados = await respuesta.json() 

        if(datosCargados.xp === 0) {
        console.log('¡Nueva Partida! Empecemos de cero.')
        actualizarInterfaz()
        return ;
    }
    
        for (let fila of datosCargados) {
            
            // Extraemos el nombre del tema (ej. 'prog') para usarlo como llave
            const clave = fila.tema as keyof typeof misHabilidades;
            
            // Escudo extra: Confirmamos que la llave exista en tu diccionario de habilidades
            if (misHabilidades[clave]) {
                misHabilidades[clave].xp = fila.xp;
                misHabilidades[clave].nivel = fila.nivel;
            }
        }
    actualizarInterfaz();
    console.log('Partida cargada ¡Bienvenido de vuelta!');
    } catch (error) {
        console.error('No se encontraron datos guardados')
    }
}

cargarDatos();

async function guardarDatos(temaEntrenado: string) {
    try {

        const paqueteChiquito = {
            tema: temaEntrenado,
            nivel: misHabilidades[temaEntrenado].nivel,
            xp: misHabilidades[temaEntrenado].xp
        };

      const respuesta = await fetch('http://localhost:2712/api/entrenar', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(paqueteChiquito)
        });  
        if (respuesta.ok) {
            console.log("¡Progreso respaldado en la base de datos!");
        }
    } catch (error) {
        console.error('No se encontro nada')
    }    
    
    } 

// const datosGuardados = localStorage.getItem('ProgresoPersonal');

// if(datosGuardados) {
//     const datosCargados: habilidadesNombre = JSON.parse(datosGuardados);
    
//     for(let tema in datosCargados) {

//             misHabilidades[tema]!.xp = datosCargados[tema]!.xp;
//             misHabilidades[tema]!.nivel = datosCargados[tema]!.nivel;
//     }

//     actualizarInterfaz();
//     console.log('Partida cargada ¡Bienvenido de vuelta!');
// } else {
//     actualizarInterfaz();
//     console.log('¡Nueva Partida! Empecemos de cero.');
// }

let intervaloEscritura:number;

export function escribirDialogo(texto:string) {
    const cuadro = document.getElementById('dialogo-raphtalia');
    let i:number = 0;

    clearInterval(intervaloEscritura);

    if(cuadro) {
        cuadro.textContent = "";
    }

    intervaloEscritura = setInterval(() => {
        if(i < texto.length && cuadro) {
            cuadro.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervaloEscritura);
        }
    }, 50);
}

function entrenar(tema:string, event:MouseEvent) {

    if(asistente.energia <= 0) {
        escribirDialogo(`${asistente.nombre}: Andrik-sama, no puedo más, necesito descansar`);
        return;
    }

    estado();
    
    let habilidad = misHabilidades[tema];

    if(habilidad) {
        habilidad.xp += 10;
        console.log(habilidad.xp +'%');

        if(habilidad.xp >= 100) {
            console.log('¡You have max xp!. You Level up!');
            habilidad.xp = 0;
            habilidad.nivel ++;

            document.getElementById(habilidad.idNivel)!.textContent = habilidad.nivel.toString();

            if(habilidad.nivel < habilidad.titulos.length) {
                let nuevoNombre = habilidad.titulos[habilidad.nivel];
                if(nuevoNombre) {
                document.getElementById(habilidad.idNombre)!.textContent = nuevoNombre;
                }
        }

            if(habilidad.nivel < habilidad.descripciones.length) {
                let nuevaDescrip = habilidad.descripciones[habilidad.nivel];
                if(nuevaDescrip) {
                document.getElementById(habilidad.idDescrip)!.textContent = nuevaDescrip;
                }
        }
        }

        document.getElementById(habilidad.idBarra)!.style.width = habilidad.xp + "%";
        document.getElementById('bar-rapthalia')!.style.width = asistente.maxEnergia + "%";

        if(habilidad.nivel >=10) {
            const botonActivo = event.target as HTMLButtonElement;
            botonActivo.disabled = true;
            botonActivo.classList.add('maestria-activa');
            botonActivo.textContent = "MAESTRÍA LOGRADA";
            console.log('¡Llegaste al nivel máximo en ' + tema + '!');
        }
    }

        //localStorage.setItem('ProgresoPersonal', JSON.stringify(misHabilidades));  
    guardarDatos(tema);
}



let botonEntrenar = document.querySelectorAll<HTMLButtonElement>('.train-btn'); 

botonEntrenar.forEach(boton => {
    
    // 3. Le pegamos el evento a cada botón
    boton.addEventListener('click', (event: MouseEvent) => {
        
        // Magia de TypeScript: Le decimos que el elemento al que dimos clic es un Botón
        const elementoClickeado = event.currentTarget as HTMLButtonElement;
        
        // Extraemos la información invisible del HTML (el 'data-tema')
        const temaSeleccionado = elementoClickeado.dataset.tema;

        // Si el botón sí tenía el data-tema, disparamos tu función
        if (temaSeleccionado) {
            entrenar(temaSeleccionado, event);
        }
    });
});