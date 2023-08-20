const three_dots = document.querySelector('.three-dots');
const cross = document.querySelector('.cross');
const content = document.querySelector('.content');

three_dots.addEventListener('click',()=>{
    content.style.width = '54vw';
    content.style.transition = 'width 0.3s ease';
})

cross.addEventListener('click',()=>{
    content.style.width = '0';
    content.style.transition = 'width 0.3s ease';
})


