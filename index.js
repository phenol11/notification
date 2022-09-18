// alert('Hello world')
let rN = document.querySelectorAll('.rn')
let nNum = document.querySelector('.bnu')

let nNNum = nNum.innerText;

nNNum = rN.length;


nNum.innerText = nNNum;
console.log(rN)



for(let i =0; i<rN.length; i++){
    let state = false;
    rN[i].addEventListener('click', function(){
         if(!state){
            nNNum = nNNum - 1;
            nNum.innerText = nNNum; 
            state = true;
         }
         rN[i].style.background = '#fff';
       })
  }


let mAsR =document.querySelector('.turn0');

mAsR.addEventListener('click', function(){
  $(".rn").css('background', '#fff');
  nNum.innerText = "0";
})

