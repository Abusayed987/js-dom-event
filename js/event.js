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
//finall 01
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
   })
//finall 02
   document.getElementById('make-pink').addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink';
})
//finall 03
document.getElementById('make-tomato').addEventListener('click',function(){
    document.body.style.backgroundColor = 'tomato';
})
//finall 04
document.getElementById('make-indianred').addEventListener('click', function(){
    document.body.style.backgroundColor = 'indianred'
})
//finall 05
document.getElementById('make-yellow').addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
})
//finall 06
document.getElementById('make-skyblue').addEventListener('click',function(){
    document.body.style.backgroundColor = 'skyblue';
})