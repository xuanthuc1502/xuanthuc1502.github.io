document.addEventListener("DOMContentLoaded",function(){
    var button = document.querySelectorAll('.button-slides ul li');
    var slides = document.querySelectorAll('.slides ul li');
    for (let i = 0; i < button.length; i++) {
        button[i].onclick = function(){
            for (let i = 0; i < button.length; i++) {
                button[i].classList.remove('active');
                slides[i].classList.remove('active')
            }
            this.classList.add('active');
            slides[i].classList.add('active')
        }
    }

    var slider_bg = document.querySelectorAll('.anh')
    window.addEventListener('scroll',function(){
        var l = window.pageYOffset/3;
        for (let i = 0; i < slider_bg.length; i++) {
           slider_bg[i].style.transform = 'translateY('+l+'px)';
        }
    },false)
},false)