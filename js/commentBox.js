/**
 

document.getElementById('btn').addEventListener('click', function(){
    const textarea = document.getElementById('textarea')
    const newComment = textarea.value ;

    const commentContainer = document.getElementById('comment_container');
    const p = document.createElement('p')
    p.innerText = newComment;
    commentContainer.appendChild(p) // added p-tag text 

    textarea.value =  '';
})

document.getElementById('btn').addEventListener('click', function(){
    const textArea = document.getElementById('textArea');
    const newComment = textArea.value;

    const commentContainer = document.getElementById('comment_container');
    const p = document.createElement('p')
    p.innerText =newComment;
    commentContainer.appendChild(p)
    textArea.value = ''; //input e text set korar jonno .value  use korte hoy

}) */