/** 
function handleOnClick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'This text is change by the onClick event'
}

document.getElementById('event-listener').addEventListener('click',function(){
    const handlerSTatus = document.getElementById('handler-status');
    handlerSTatus.innerText = 'This Text is Change by the AddEventListener ';
})

function forOnClick() {
    const forOnClickButton =  document.getElementById('changeAblle-text');
    forOnClickButton.innerText = 'This is from onClik Function';
  }
  document.getElementById('event-listener').addEventListener('click',function(){
      const evenetListener = document.getElementById('changeAblle-text')
      evenetListener.innerText = 'this text is from Event listener'
  } )

function forOnClick() {
    const onclickButton = document.getElementById('change_text');
    onclickButton.innerText = 'This is from onclick button';
}
document.getElementById('event_listener').addEventListener('click', function(){
    const eventListener = document.getElementById('change_text')
    // eventListener.style.color= 'tomato';
    eventListener.innerText = 'This Text is from addEventListener';
})

document.getElementById('btn').addEventListener('click', function () {
    const inputField = document.getElementById('input_field')
    const inputText = inputField.value;
    console.log(inputText);

    const p = document.getElementById('input_text_display')
    p.innerText = inputText;
    inputField.value = ''; //inputText const tai neuya jabe na 
})

document.getElementById('btn').addEventListener('click', function(){
    const input_field = document.getElementById('input_text');
    const input_text = input_field.value;

    const p = document.getElementById('display_text');
    p.innerText = input_text
    input_field.value = '';
})
*/