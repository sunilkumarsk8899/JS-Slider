$(document).ready(function(){
    const left_btn = document.querySelector('.arrow_left');
    const right_btn = document.querySelector('.arrow_right');
    const slider = document.querySelector('.slider');
    const sliderImg = document.querySelectorAll('.slider_img');

    const sliderImageCount = sliderImg.length;
    var sliderNumber = 0;


    for(var i=0;i<sliderImageCount;i++){
        $('#dot').append('<button id="'+i+'" class="pagi_slider_btn">'+i+'</button>');
    }

    const pagi_slider_btn = document.querySelectorAll('.pagi_slider_btn');
    pagi_slider_btn[0].style.background = 'blue';
    pagi_slider_btn[0].style.color = '#fff';

    

    pagi_slider_btn.forEach((button,i) => {
        button.addEventListener('click',function(){
            var pageNumber = $(this).attr('id');
            if(pageNumber != 1){
                pagi_slider_btn[pageNumber-1].style.background = '#fff';
                pagi_slider_btn[pageNumber-1].style.color = 'blue';
            }
            slider.style.transform = `translateX(-${(pageNumber)*800}px)`;
            pagi_slider_btn[pageNumber].style.background = 'blue';
            pagi_slider_btn[pageNumber].style.color = '#fff';
        });
    });


    right_btn.addEventListener('click',()=>{
        sliderNumber++;
        if(sliderImageCount == sliderNumber){
            sliderNumber = 0;
        }
        var px = sliderNumber*800;
        slider.style.transform = `translateX(-${px}px)`;
    });

    left_btn.addEventListener('click',()=>{
        if(sliderNumber > 0){
            slider.style.transform = `translateX(-${(sliderNumber-1)*800}px)`;
            sliderNumber--;
        }else{
            var px = (sliderImageCount-1)*800;
            slider.style.transform = `translateX(-${px}px)`;
            sliderNumber = (sliderImageCount-1);
        }

    });


    setInterval(() => {
        slider.style.transform = `translateX(-${(sliderNumber)*800}px)`;
    }, 2000);

    // settime();

});