const slides = document.querySelectorAll('.container .slide');

const index = Math.floor(Math.random()*slides.length); // 0-4

slides[index].classList.add('active'); 


for(let i=0; i<slides.length; i++){
    slides[i].addEventListener('click', function(){
        document.querySelector('.container .slide.active').classList.remove('active');
        slides[i].classList.add('active');
    })
}


