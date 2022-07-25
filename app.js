const acender = document.querySelector('.acender');
const apagar = document.querySelector('.apagar');
const lamp_div = document.getElementById('lamp');


const lightOn = () => {
    lamp.src = './img/ligada.jpg';
};

const lightOff = () => {
    lamp.src = './img/desligada.jpg';
};

const brokenLamp = () => {
    lamp.src = './img/quebrada.jpg';
    lamp_div.addEventListener('mouseout', brokenLamp);
    lamp_div.addEventListener('mouseover', brokenLamp);
    acender.addEventListener('click', brokenLamp);
    apagar.addEventListener('click', brokenLamp);
};

acender.addEventListener('click', lightOn);
apagar.addEventListener('click', lightOff);
lamp_div.addEventListener( 'dblclick', brokenLamp);
lamp_div.addEventListener('mouseover', lightOn);
lamp_div.addEventListener('mouseout', lightOff);







