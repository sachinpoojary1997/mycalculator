let display =document.getElementById('display');
let displayvalue='';
buttons=document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
    
    
    if (buttonText== 'x')
    {
        buttonText='*';
        displayvalue+= buttonText;
        display.value =displayvalue;
        console.log(displayvalue)
    }
    else if(buttonText == 'C'){
        displayvalue="";
        display.value=displayvalue;

    }
    else if(buttonText == '='){
        display.value = eval(displayvalue)
        
    }
    else{
       displayvalue +=buttonText;
       display.value = displayvalue;

   }
})
}