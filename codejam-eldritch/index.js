const ancient = document.querySelectorAll('.img');
const difficulty = document.querySelectorAll('.button');
const shufflingButton = document.querySelector('.shuffling-button');
const shufflingCards = document.querySelector('.shuffling-cards');
console.log(ancient);

//выбор древнего
function choiceAncient() {

    for(let i = 0; i < ancient.length; i++) {
        ancient[i].addEventListener ('click', () => {
            for(let img of ancient) {
                img.classList.remove('img-active');
            };
            ancient[i].classList.toggle('img-active');
            shufflingButton.classList.add('shuffling-button-active');
            shufflingCards.classList.remove('shuffling-cards-active');
        });
    };
}
choiceAncient();
function level() {
    for(let i = 0; i < difficulty.length; i++) {
        difficulty[i].addEventListener ('click', () => {
            for(let butt of difficulty) {
                butt.classList.remove('button-active');
            };
            difficulty[i].classList.toggle('button-active');
            shufflingButton.classList.add('shuffling-button-active');
        });
    };
}
level();
    shufflingButton.addEventListener('click', () => {
        shufflingButton.classList.toggle('shuffling-button-active');
        shufflingCards.classList.toggle('shuffling-cards-active');
    });




