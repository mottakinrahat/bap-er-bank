document.getElementById('submit-btn').addEventListener('click',function(){
    const email=document.getElementById('mail').value;
    const password=document.getElementById('pass').value;
   
    if(email==='sirajbabarbank@gmail.com' && password==='sujana'){
        window.location.href='bank.html';
    }
    else{
        alert('tui password vhule gesos?? tui ek takao pabina.');
    }
})