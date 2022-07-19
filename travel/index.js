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