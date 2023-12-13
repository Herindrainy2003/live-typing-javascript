let typing = document.querySelector('#typing')
let  living = document.querySelector('#living')

typing.addEventListener('keyup',(event)=>{
    living.textContent = typing.value
    living.classList.add('myclass')
})