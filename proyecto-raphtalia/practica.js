// 1. Se crea un objeto del usuario.
const usuario = {
    nombre : 'Andrik' ,
    rango : 'Amo' 
};

// 2. Se crea un objeto asistente donde definimos sus caracteristicas y frases a usar.
const raphtalia = {
    nombre : 'Raphtalia',
    rango : 'Esclava',
    energia : 10,
    maxEnergia : 0,
    activa : [`¡Yo soy su espada, ${usuario.nombre}-sama! No importa qué tan difícil sea ese tema, lo superaremos juntos.`, `¿Un nuevo nivel desbloqueado? ¡Sabía que lo lograría! Cada día se vuelve un mejor ingeniero ${usuario.nombre}-sama.`, `¡No te rindas ahora! Concéntrate en el objetivo. Yo estaré aquí cubriéndole la espalda mientras estudia.`, `Ese tema se ve complicado, pero usted es fuerte. ¡Vamos a dominar este nivel ${usuario.nombre}-sama!`, `¡Impresionante ${usuario.rango}! Ha dominado ese tema bastante bien. ¡Sigamos trabajando así de bien!`, `Tú me diste un propósito, ahora es mi turno de apoyarte. ¡Dime qué habilidad vamos a subir de nivel hoy!`, `¡Aún tenemos mucha energía! Si seguimos a este ritmo, completaremos el árbol de habilidades muy pronto.`],
    cansada : [`${usuario.nombre}-sama... mi espada se siente un poco pesada hoy... ¿cree que podamos guardar el progreso un momento?`, `Hemos avanzado mucho hoy... mis ojos se están cerrando un poquito... pero si me necesita, seguiré a su lado ${usuario.rango}.`, `Uff... derrotar tantos bugs agota a cualquiera... ¿Nos tomamos un pequeño descanso para recuperar energia ${usuario.nombre}-sama?`, `Incluso los héroes más fuertes necesitan dormir... y tu cerebro también necesita descansar para asimilar todo lo que estudio ${usuario.nombre}-sama.`, `Sigo aquí contigo... solo... déjame sentarme un momento a recuperar energía... ahh...`, `He dado muchos clics por hoy... ¿qué tal si dejamos que la computadora se enfríe y descansamos nosotros también?`, `Mi nivel de energía está en rojo... prometo esforzarme más mañana si me deja recargar fuerzas ahora ${usuario.nombre}-sama...`],
    bienvenidas : [`Raphtalia: Buenos dias ${usuario.nombre}-sama estoy lista para acompañarlo en lo que deseé estudiar!`, `Raphtalia: Buenas tardes ${usuario.rango} ${usuario.nombre}. Listo para una tarde productiva, digame en que le puedo ser de ayuda ${usuario.rango}`, `Raphtalia: Buenas noches ${usuario.rango}. Estudiando tan noche? Hagamos un repaso rapido para que pueda descansar bien ${usuario.nombre}-sama`]
}

// 3. Definimos una funcion horario que acceda a la hora de nuestra computadora y elija ciertas frases especificadas.
function obtenerSaludoHorario() {
    const hora = new Date().getHours(); // La variable que consigue la hora.
    let momento;

    // El bloque logico que asigna cierto lapso de horas a ciertas frases. 
    if (hora < 12) {
        return momento = raphtalia.bienvenidas[0];
    } else if (hora < 19) {
        return momento = raphtalia.bienvenidas[1];
    } else {
        return momento = raphtalia.bienvenidas[2];
    }
    
}

// 4. Conseguimos el lugar donde aparecera el texto en el html usando el DOM y asignando la funcion.
document.getElementById('intro-raphtalia').textContent = obtenerSaludoHorario();
// 5. Conseguimos el boton por el cual entrenamos y subimos xp.
let btn = document.querySelector('train-btn')

// 6. 
function estado() {
    
    let listaUsar = (raphtalia.energia > 5) ? raphtalia.activa : raphtalia.cansada;
    let randomIndex = Math.floor(Math.random() * listaUsar.length);
    
    raphtalia.energia--;
    raphtalia.maxEnergia+=10;
    
    escribirDialogo(`${raphtalia.nombre}: ${listaUsar[randomIndex]} (Energía: ${raphtalia.energia}/10)`);
};

let btnRaphtalia = document.getElementById('descanasar-btn')

function descansarRaphtalia(descansar, event) {
            raphtalia.energia = 10;
            raphtalia.maxEnergia = 0;
            escribirDialogo(`${raphtalia.nombre}: Gracias por el descanso ${usuario.rango} ${usuario.nombre}, sigamos esforzandonos juntos (Energía: ${raphtalia.energia}/10)`);
            document.getElementById('bar-rapthalia').style.width = raphtalia.maxEnergia + "%";
}
 


