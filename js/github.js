/**
document.getElementById('delete_confirm').addEventListener('keyup',function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn');
    if (text === 'DELETE') {
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true)
    }
})
document.getElementById('btn').addEventListener('click',function(){
    const secret = document.getElementById('secret_text');
    secret.style.display = 'none';
})
 */