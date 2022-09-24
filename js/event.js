console.log('welcome to our new event');

function darkMode() {
    document.body.style.backgroundColor= 'black';
}

function lightMood() {
    document.body.style.backgroundColor= 'white';
}

function redMood(){
    document.body.style.backgroundColor= 'red';
}

const makeBlueMode = document.getElementById('blue');
makeBlueMode.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor= 'blue';
}

const makePurple =  document.getElementById('purple')
makePurple.onclick = function makaPurple(){
    document.body.style.backgroundColor= 'purple'
}