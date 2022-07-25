const acender = document.querySelector('.acender');
const apagar = document.querySelector('.apagar');
const lamp_div = document.getElementById('lamp');


const lightOn = () => {
    lamp.src = './img/ligada.jpg';
};

const lightOff = () => {
    lamp.src = './img/desligada.jpg';
};

const BrokenLamp = () => {
    lamp.src = './img/quebrada.jpg';
    lamp_div.addEventListener('mouseout', BrokenLamp);
    lamp_div.addEventListener('mouseover', BrokenLamp);
    acender.addEventListener('click', BrokenLamp);
    apagar.addEventListener('click', BrokenLamp);
};

acender.addEventListener('click', lightOn);
apagar.addEventListener('click', lightOff);
lamp_div.addEventListener( 'dblclick', BrokenLamp);
lamp_div.addEventListener('mouseover', lightOn);
lamp_div.addEventListener('mouseout', lightOff);







