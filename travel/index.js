const burgerItem = document.querySelector('.header-burger');
const nav = document.querySelector('.nav');
const menuClose = document.querySelector('.window-close');
const menuLink = document.querySelectorAll('.nav-link');

burgerItem.addEventListener('click', (e) => {
    nav.classList.add('nav-active');
    e.stopPropagation();
});

menuClose.addEventListener('click', () => {
    nav.classList.remove('nav-active');
});

for(let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener ('click', () => {
        nav.classList.remove('nav-active');
    });
}
document.addEventListener('click', e => {
    let target = e.target;
    let its_nav = target == nav || nav.contains(target);
    let its_burger = target == burgerItem;
    let menu_is_active = nav.classList.contains('nav-active');
    
    if (!its_nav && !its_burger && menu_is_active) {
        nav.classList.remove('nav-active');
    }    
});

const login = document.querySelectorAll('.login-click');
const popup = document.querySelector('.pop-up');
const popupcontent = document.querySelector('.pop-up-content');
const signup = document.querySelector('.sign-up');
const register = document.querySelector('.register');
const form = document.querySelectorAll('.form-sabmit');
const signIn = document.querySelector('.sign-in');
const input = document.querySelectorAll('.input');
  
for(let i = 0; i < login.length; i++) {
    login[i].addEventListener('click', () => {
        popup.classList.add('pop-up-active');
    });
};
popup.addEventListener('click', event => {
    if(event.target.classList.contains('pop-up')) {
        popup.classList.toggle('pop-up-active');
    };
});
register.addEventListener('click', () => {
    signup.classList.add('sign-up-active');
    popupcontent.classList.add('pop-up-non-active');
});
signIn.addEventListener('click', () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    alert(email.value + " " + password.value);
    
});

const slider = document.querySelector('.wrap-destinations');
const slides = document.querySelectorAll('.destination');
const slide1 = document.querySelector('.destination1');
const slide2 = document.querySelector('.destination2');
const slide3 = document.querySelector('.destination3');
const arrowLeft = document.querySelectorAll('.arrow-left');
const arrowRight = document.querySelectorAll('.arrow-right');
const ellipse = document.querySelectorAll('.ellipse');

slide1.addEventListener('click', () => {
    slider.classList.add('wrap-destinations-active1');
    slider.classList.remove('wrap-destinations-active2');
    ellipse[0].classList.add('ellipse-active');
    ellipse[0].classList.remove('ellipse-non-active');
    ellipse[1].classList.toggle('ellipse-non-active');
    ellipse[2].classList.toggle('ellipse-non-active', 'ellipse-active');
});
slide2.addEventListener('click', () => {
    slider.classList.remove('wrap-destinations-active1');
    slider.classList.toggle('wrap-destinations-active2');
    slider.classList.remove('wrap-destinations-active3');
    ellipse[1].classList.add('ellipse-active');
    ellipse[1].classList.remove('ellipse-non-active');
    ellipse[0].classList.toggle('ellipse-non-active', 'ellipse-active');
    ellipse[2].classList.toggle('ellipse-non-active', 'ellipse-active');
});
slide3.addEventListener('click', () => {
    slider.classList.remove('wrap-destinations-active2');
    slider.classList.toggle('wrap-destinations-active3');
    ellipse[2].classList.add('ellipse-active');
    ellipse[2].classList.remove('ellipse-non-active');
    ellipse[0].classList.toggle('ellipse-non-active', 'ellipse-active');
    ellipse[1].classList.toggle('ellipse-non-active');
});

let index = 0;
const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('destination-active');
    }
    slides[n].classList.add('destination-active');
}
const activeEllipse = n => {
    for(ellips of ellipse) {
        ellips.classList.remove('ellipse-active');
    }
    ellipse[n].classList.add('ellipse-active');
}

const nextSlide = () => {
    if(index == slides.length -1) {
        index = 0;
        activeSlide(index);
        activeEllipse(index);
    } else {
        index++;
        activeSlide(index);
        activeEllipse(index);
    };
    arrowRight[0].classList.remove('arrow-non-active');
    arrowLeft[0].classList.add('arrow-non-active');
}
const prevSlide = () => {
    if(index == 0) {
        index = slides.length -1;
        activeSlide(index);
        activeEllipse(index);
    } else {
        index--;
        activeSlide(index);
        activeEllipse(index);
    }; 
    arrowRight[0].classList.add('arrow-non-active');
    arrowLeft[0].classList.remove('arrow-non-active');
};

arrowRight[0].addEventListener('click', nextSlide);
arrowLeft[0].addEventListener('click', prevSlide);
// for(let i = 0; i <= 2; i++) {
//     if(i = 1) {
//         arrowRight[0].addEventListener('click', () => {
//             slider.classList.add('wrap-destinations-active');
//             slide3.classList.add('destination3-non');
//         });
//     }
// }

// arrowRight[0].addEventListener('click', () => {
//     slider.classList.add('wrap-destinations-active');
//     slide3.classList.add('destination3-non');
// });

    // arrowRight[0].addEventListener('click', () => {
    //     slide2.classList.add('destination-active');
    //     slide1.classList.add('destination-non-active');
    //     slide3.classList.add('destination-non-active');
    // });
    // arrowRight[0].addEventListener('click', () => {
    //     slide3.classList.remove('destination-active');
    //     slide2.classList.remove('destination-non-active', 'destination-active');
    //  });


console.log(arrowRight);

console.log(`Score 85/75\n
1. Вёрстка соответствует макету.Ширина экрана 390px +48\n
    -блок <header> +6\n
    -секция preview +9\n
    -секция steps +9\n
    -секция destinations +9\n
    -секция stories +9\n
    -блок <footer> +6\n
2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n
    -нет полосы прокрутки при ширине страницы от 1440рх до 390px +7\n
    -нет полосы прокрутки при ширине страницы от 390px до 320рх +8\n
3.На ширине экрана 390рх и меньше реализовано адаптивное меню +22\n
    -при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2\n
    -при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n
    -адаптивное меню соответствует макету +4\n
    -при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n
    -ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)\n
    при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4`)