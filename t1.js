
const num = document.querySelector('#num');
let curValue = 0;




const btnIncrement = document.querySelector('#increment');

const btnReset = document.querySelector('#reset');

const btnDecrement = document.querySelector('#Decrement');


btnIncrement.addEventListener('click', ()  => {
    curValue++ ;
    num.textContent = curValue;
//num.style.color = 'green';
if ( curValue>0){
    num.style.color = 'green';
}
});


btnReset.addEventListener('click', ()  => {
    curValue = 0 ;
    num.textContent = curValue;
    //num.style.color = 'yellow';
    if(curValue == 0){
        num.style.color = 'yellow';
    }
});

btnDecrement.addEventListener('click', ()  => {
    curValue-- ;
   num.textContent = curValue;
    //num.style.color = 'red';
    if(curValue < -0){
        num.style.color = 'red'; 
    }
});







