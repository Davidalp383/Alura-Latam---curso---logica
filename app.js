let titulo = document.querySelector('h1')
let subtitulo = document.querySelector('p')
let botonIntentar = document.getElementById('intentar');
let botonReiniciar = document.getElementById('reiniciar');


titulo.innerHTML = 'Bienvenido a nuestro juego elige!!'
subtitulo.innerHTML = 'Elige un numero del 1 al 10, Tienes 3 intentos'

let intentos = 1;

botonReiniciar.disabled = true;

const numeroRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
valorMaquina = parseInt(numeroRandom(1, 10));

botonIntentar.addEventListener('click', () => {
        let valorUsuario = parseInt(document.querySelector('.container__input').value);

                if (valorUsuario == valorMaquina) {
                    textoCompleto('h1', 'Acertaste, Felicitaciones!!');
                    textoCompleto('p', `El numero secreto era ${valorMaquina} y lo lograste en el intento #${intentos}`);
                    botonIntentar.disabled = true;
                    botonReiniciar.disabled = false;
                } else if(valorUsuario > valorMaquina) {
                    textoCompleto('h1', `uy casi pero todavia no: intento #${intentos}`);
                    textoCompleto('p', `El numero secreto es menor, Ingresa de nuevo`);
                    intentos++
                    if(intentos == 4) {
                        textoCompleto('h1', `Perdiste :c`);
                        textoCompleto('p', `No lo hiciste en 3 intentos, el numero secreto era ${valorMaquina}`);
                        botonesLibertad(true, false)
                    } 
                } else if(valorUsuario < valorMaquina) {
                    textoCompleto('h1', `uy casi pero todavia no: intento #${intentos}`);
                    textoCompleto('p', `El numero secreto es mayor, Ingresa de nuevo`);
                    intentos++;
                    if(intentos == 4) {
                        textoCompleto('h1', `Perdiste :c`);
                        textoCompleto('p', `No lo hiciste en 3 intentos, el numero secreto era ${valorMaquina}`);
                        botonesLibertad(true, false)
                    } 
                }
            }
)

botonReiniciar.addEventListener('click', () => {
    window.location.reload();
})

let textoCompleto = (elemento, texto) => {
    let elementoObtenido = document.querySelector(elemento);
    elementoObtenido.innerHTML = texto;
}

let botonesLibertad = (intentar, reiniciar) => {
    botonIntentar.disabled = intentar;
    botonReiniciar.disabled = reiniciar;
}