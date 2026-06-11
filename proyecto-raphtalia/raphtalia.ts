interface personajeVirtual {
    nombre:string;
    rango:string; 
    energia:number; 
    maxEnergia:number;
    activa:string[]
    cansada:string[] 
    bienvenidas:string[]
}


const usuario = {
    nombre: 'Andrik',
    rango: 'Amo'
}

const asistente:personajeVirtual = {
    nombre : 'Raphtalia',
    rango : 'Esclava',
    energia : 10,
    maxEnergia : 0,
    activa : [`¡Yo soy su espada, ${usuario.nombre}-sama! No importa qué tan difícil sea ese tema, lo superaremos juntos.`, `¿Un nuevo nivel desbloqueado? ¡Sabía que lo lograría! Cada día se vuelve un mejor ingeniero ${usuario.nombre}-sama.`, `¡No te rindas ahora! Concéntrate en el objetivo. Yo estaré aquí cubriéndole la espalda mientras estudia.`, `Ese tema se ve complicado, pero usted es fuerte. ¡Vamos a dominar este nivel ${usuario.nombre}-sama!`, `¡Impresionante ${usuario.rango}! Ha dominado ese tema bastante bien. ¡Sigamos trabajando así de bien!`, `Tú me diste un propósito, ahora es mi turno de apoyarte. ¡Dime qué habilidad vamos a subir de nivel hoy!`, `¡Aún tenemos mucha energía! Si seguimos a este ritmo, completaremos el árbol de habilidades muy pronto.`],
    cansada : [`${usuario.nombre}-sama... mi espada se siente un poco pesada hoy... ¿cree que podamos guardar el progreso un momento?`, `Hemos avanzado mucho hoy... mis ojos se están cerrando un poquito... pero si me necesita, seguiré a su lado ${usuario.rango}.`, `Uff... derrotar tantos bugs agota a cualquiera... ¿Nos tomamos un pequeño descanso para recuperar energia ${usuario.nombre}-sama?`, `Incluso los héroes más fuertes necesitan dormir... y tu cerebro también necesita descansar para asimilar todo lo que estudio ${usuario.nombre}-sama.`, `Sigo aquí contigo... solo... déjame sentarme un momento a recuperar energía... ahh...`, `He dado muchos clics por hoy... ¿qué tal si dejamos que la computadora se enfríe y descansamos nosotros también?`, `Mi nivel de energía está en rojo... prometo esforzarme más mañana si me deja recargar fuerzas ahora ${usuario.nombre}-sama...`],
    bienvenidas : [`Raphtalia: Buenos dias ${usuario.nombre}-sama estoy lista para acompañarlo en lo que deseé estudiar!`, `Raphtalia: Buenas tardes ${usuario.rango} ${usuario.nombre}. Listo para una tarde productiva, digame en que le puedo ser de ayuda ${usuario.rango}`, `Raphtalia: Buenas noches ${usuario.rango}. Estudiando tan noche? Hagamos un repaso rapido para que pueda descansar bien ${usuario.nombre}-sama`]
}

function obtenerSaludo() {
    let horaActual:number = new Date().getHours();
    
    if (horaActual < 12) {
        return asistente.bienvenidas[0];
    } else if(horaActual < 19) {
        return asistente.bienvenidas[1];
    } else {
        return asistente.bienvenidas[2];
    }
}

obtenerSaludo();
let btn = document.querySelector('train-btn');

function estado():void {
    let listaUsar:string[] = (asistente.energia > 5) ? asistente.activa : asistente.cansada;
    let randomIndex:number = Math.floor(Math.random() * listaUsar.length);
    
    asistente.energia --;
    asistente.maxEnergia +=10;
}

let btnRaphtalia = document.getElementById('descanasar-btn');

function descansar():void {
    asistente.energia = 10;
    asistente.maxEnergia = 0;
}