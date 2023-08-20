const three_dots = document.querySelector('.three-dots');

const container = document.querySelector('.container');

const cut = document.querySelector('.cut');


three_dots.addEventListener('click',()=>{
    container.style.width = '50vw';
})

cut.addEventListener('click',()=>{
    container.style.width = '0vw';
})


