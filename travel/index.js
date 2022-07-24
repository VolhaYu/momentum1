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

  // pop-up

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

  // slider
  // Desktop

const slider = document.querySelector('.wrap-destinations');
const slides = document.querySelectorAll('.destination');
const slide1 = document.querySelector('.destination1');
const slide2 = document.querySelector('.destination2');
const slide3 = document.querySelector('.destination3');
const arrowLeft = document.querySelectorAll('.arrow-left');
const arrowRight = document.querySelectorAll('.arrow-right');
const ellipse = document.querySelectorAll('.ellipse');

slide1.addEventListener('click', () => {
    slide2.classList.add('destination2-activ');
    ellipse[0].classList.add('ellipse-active');
    ellipse[1].classList.add('ellipse-non-active');
});
slide2.addEventListener('click', () => {
    slide3.classList.add('destination3-activ');
    ellipse[1].classList.add('ellipse-active');
    ellipse[1].classList.remove('ellipse-non-active');
    ellipse[0].classList.remove('ellipse-active');
    ellipse[2].classList.remove('ellipse-active');
});
slide3.addEventListener('click', () => {
    slide1.classList.add('destination1-activ');
    slide2.classList.add('destination2-activ');
    ellipse[2].classList.add('ellipse-active');
    ellipse[1].classList.remove('ellipse-active');
    ellipse[0].classList.remove('ellipse-active');
});

  // mobile

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


console.log(`Score 125/100\n
1. Слайдер изображений в секции destinations +50\n
    -на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели (например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа). Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20\n
    -Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20\n
    -Анимации плавного перемещения для слайдера +10\n
2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50\n
    -логин попап соответствует верстке его закрытие происходит при клике вне попапа +25\n
    -логин попап имеет 2 инпута (email и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25\n
3.Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25`);