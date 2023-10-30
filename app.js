const palos = [ '♠', '♣', '♥', '♦' ];
const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

document.generarCarta = () => {
    const palo = obtenerPaloAleatorio();
    const valor = obtenerValorAleatorio();
    const tarjetaEstado = { palo, valor };
    renderizar(tarjetaEstado);
};

const obtenerPaloAleatorio = () => {
    const randomIndex = Math.floor(Math.random() * palos.length );
    return palos[randomIndex];
};

const dameElColor = (palo) => {
    return (palo === '♥' || palo === '♦') ? 'red' : 'black';
}

const obtenerValorAleatorio = () => {
    const randomIndex = Math.floor(Math.random() * valores.length );
    return valores[randomIndex];
};

const renderizar = (tarjeta) => {
    const color = dameElColor(tarjeta.palo);

    const card = document.querySelector('.card');
    card.style.setProperty('--color', color);

    const figuraTopLeft = document.querySelector('.top-left');
    const numero = document.querySelector('.number');
    const figuraBottomRight = document.querySelector('.bottom-right');
    numero.innerHTML = tarjeta.valor;
    figuraTopLeft.innerHTML = tarjeta.palo;
    figuraBottomRight.innerHTML = tarjeta.palo;
};

