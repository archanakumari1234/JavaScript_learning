let buttons = document.querySelectorAll('.button')
// console.log(buttons);

const body = document.querySelector('body')


const red = document.getElementById('red')

// red.addEventListener( 'click',()=>{
//     body.style.backgroundColor = 'red'
// })
// const green = document.getElementById('green')
// green.addEventListener( 'click',()=>{
//     body.style.backgroundColor = 'green'
// })
// const black = document.getElementById('black')
// black.addEventListener( 'click',()=>{
//     body.style.backgroundColor = 'black'
// })
// const blue = document.getElementById('blue')
// blue.addEventListener( 'click',()=>{
//     body.style.backgroundColor = 'blue'
// })
// const yellow = document.getElementById('yellow')
// yellow.addEventListener( 'click',()=>{
//     body.style.backgroundColor = 'yellow'
// })
// const pink = document.getElementById('pink')
// pink.addEventListener( 'click',()=>{
//     body.style.backgroundColor = 'pink'
// })
// const purple = document.getElementById('purple')
// purple.addEventListener( 'click',()=>{
//     body.style.backgroundColor = 'purple'
// })


buttons.forEach((btn) => {
    console.log(btn);
    btn.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id
        }
       
    })
})
