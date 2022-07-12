const burgerItem = document.querySelector('.header-burger');
const nav = document.querySelector('.nav');
const menuClose = document.querySelector('.window-close');
const menuLink = document.querySelectorAll('.nav-link');

burgerItem.addEventListener('click', () => {
    nav.classList.add('nav-active');

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


// console.log(`Score 110/100\n
// 1. Вёрстка валидная +10\n
//     -для проверки валидности вёрстки используйте сервис https://validator.w3.org/\n
//     -валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью.
//     -если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований\n
// 2. Вёрстка семантическая +20\n
//     В коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше):\n
//     -<header>, <main>, <footer> +3\/
//     -четыре элемента <section> (по количеству секций) +3\n
//     -только один заголовок <h1> +3\n
//     -три заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3\n
//     -один элемент <nav> (панель навигации) +3\n
//     -два списка ul > li > a (панель навигации, ссылки на соцсети) +3\n
//     -четыре кнопки <button> +2\n
// 3. Вёрстка соответствует макету +48\n
//     -блок <header> +6\n
//     -секция preview +9\n
//     -секция steps +9\n
//     -секция destinations +9\n
//     -секция stories +9\n
//     -блок <footer> +6\n
// 4. Требования к css + 12\n
//     -для построения сетки используются флексы или гриды +2\n
//     -при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n
//     -фоновый цвет тянется на всю ширину страницы +2\n
//     -иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\n
//     -изображения добавлены в формате .jpg +2\n
//     -есть favicon +2\n
// 5. Интерактивность, реализуемая через css +20\n
//     -плавная прокрутка по якорям +5\n
//     -иконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса (допускается добавление своих вариантов иконок github или RSSchool) https://rs.school/js-stage0/ +5\n
//     -интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\n
//     -обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5`)