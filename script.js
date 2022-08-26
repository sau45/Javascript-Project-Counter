const decrease = document.querySelector('.Decrease');
const reset = document.querySelector('.Reset');
const increase =document.querySelector('.Increase');
const counterfirst = document.querySelector('.counterfirst');
const first =document.querySelector('.first')
const second =document.querySelector('.second')
const third =document.querySelector('.third')


let cnt =0;
let html ='';

decrease.addEventListener('click',function(){
    cnt--;
   decrease.classList
    if(cnt==-31){
        cnt = 0;
       
        first.innerHTML =`<button disabled class="Decrease">Decrease</button>`;

    }
    else {
        counterfirst.textContent = `Counter: ${cnt}`
    }
 
    
})

increase.addEventListener('click',function(){
    cnt++;
    if(cnt==101){
        third.innerHTML =`<button disabled class="Decrease">Decrease</button>`
    }
    else{

        counterfirst.textContent = `Counter: ${cnt}`
    }
    
})
reset.addEventListener('click',function(){
   cnt =0;
    counterfirst.textContent = `Counter: ${cnt}`
    
})