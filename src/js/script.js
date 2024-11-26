window.addEventListener("load", () => {

    var slider2 = new Swiper(".mySwiper2", {
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet2 ' + className + '"></span>';
            }
        },
        breakpoints: {
            // 1020: {
            //     slidesPerView: 6
            // }
        }
    });

    var slider2 = new Swiper(".mySwiper3", {
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination3",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet3 ' + className + '"></span>';
            }
        },
        breakpoints: {
            1020: {
                slidesPerView: 4
            }
        }
    });

    var slider2 = new Swiper(".mySwiper4", {
        navigation: {
            nextEl: ".swiper-button-next4",
            prevEl: ".swiper-button-prev4"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination4",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet4 ' + className + '"></span>';
            }
        },
        breakpoints: {
            1020: {
                slidesPerView: 8
            }
        }
    });

    var slider2 = new Swiper(".mySwiper5", {
        navigation: {
            nextEl: ".swiper-button-next5",
            prevEl: ".swiper-button-prev5"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination5",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet5 ' + className + '"></span>';
            }
        },
        breakpoints: {
            1020: {
                slidesPerView: 1
            }
        }
    });

    var slider2 = new Swiper(".mySwiper6", {
        navigation: {
            nextEl: ".swiper-button-next6",
            prevEl: ".swiper-button-prev6"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination6",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet6 ' + className + '"></span>';
            }
        },
        breakpoints: {
            1020: {
                slidesPerView: 1
            }
        }
    });

     
})



let blockIngenieria = document.querySelector('.bloque6item1');
let contentIngenieria = document.querySelector('.bloque6BlockItem1');
let blockEducacion = document.querySelector('.bloque6item2');
let contentEducacion = document.querySelector('.bloque6BlockItem2');
let blockGestion = document.querySelector('.bloque6item3');
let contentGestion = document.querySelector('.bloque6BlockItem3');
let blockCiencias = document.querySelector('.bloque6item4');
let contentCiencias = document.querySelector('.bloque6BlockItem4');
let blockSalud = document.querySelector('.bloque6item5');
let contentSalud = document.querySelector('.bloque6BlockItem5');

blockIngenieria.addEventListener('click', () => {
    contentIngenieria.classList.toggle('bloque6BlockItemShow');
});

blockEducacion.addEventListener('click', () => {
    contentEducacion.classList.toggle('bloque6BlockItemShow2');
});

blockGestion.addEventListener('click', () => {
    contentGestion.classList.toggle('bloque6BlockItemShow3');
});

blockCiencias.addEventListener('click', () => {
    contentCiencias.classList.toggle('bloque6BlockItemShow4');
});

blockSalud.addEventListener('click', () => {
    contentSalud.classList.toggle('bloque6BlockItemShow5');
});