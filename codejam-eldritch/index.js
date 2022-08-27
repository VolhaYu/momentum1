
const ancients = document.querySelector('.ancients');
const ancient = document.querySelectorAll('.img');
const difficulty = document.querySelectorAll('.button');
const shufflingButton = document.querySelector('.shuffling-button');
const shufflingCards = document.querySelector('.shuffling-cards');
const stage1 = document.querySelectorAll('.stage1');
const stage2 = document.querySelectorAll('.stage2');
const stage3 = document.querySelectorAll('.stage3');
const shirtCard = document.querySelector('.shirt-card');
const randomCards = document.querySelector('.random-cards');

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
            randomCards.innerHTML = '';
            shirtCard.style.display = 'flex';           
        });
    };
}
choiceAncient();
function level() { // выюор уровня
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

// кнопка замешать калоду

shufflingButton.addEventListener('click', () => { 
    shufflingButton.classList.toggle('shuffling-button-active');
    shufflingCards.classList.toggle('shuffling-cards-active');
    randomCard();
});

const blueCard = ['blue/blue1', 'blue/blue2', 'blue/blue3', 'blue/blue4', 'blue/blue5', 'blue/blue6', 'blue/blue7', 'blue/blue8', 'blue/blue9', 'blue/blue10', 'blue/blue11', 'blue/blue12'];
const brownCard = ['brown/brown1', 'brown/brown2', 'brown/brown3', 'brown/brown4', 'brown/brown5', 'brown/brown6', 'brown/brown7', 'brown/brown8', 'brown/brown9', 'brown/brown10', 'brown/brown11', 'brown/brown12', 'brown/brown13', 'brown/brown14', 'brown/brown15', 'brown/brown16', 'brown/brown17', 'brown/brown18', 'brown/brown19', 'brown/brown20', 'brown/brown21'];
const greenCard = ['green/green1', 'green/green2', 'green/green3', 'green/green4', 'green/green5', 'green/green6', 'green/green7', 'green/green8', 'green/green9', 'green/green10', 'green/green11', 'green/green12', 'green/green13', 'green/green14', 'green/green15', 'green/green16', 'green/green17', 'green/green18'];

//рандомное число

function getRandomNum(min, max) {  
    min = Math.ceil(min);
    max = Math.floor(max);    
    return (Math.floor(Math.random() * (max - min + 1)) + min);
};
//перемешивание калоды

const shuffle = (deck) => { 
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
};
  let stageOne = [];
  let stageTwo = [];
  let stageThree = [];

function azathoth() {
    //замешать 3 калоды карт по цветам
 let deckGreen = [];

 for(let i = 0; i < 5; i++) {
    let a = shuffle(greenCard)[i];
    if(!deckGreen.includes(a)) {
        deckGreen.push(a);
    } else {
        const temp = shuffle(greenCard)[i];
        shuffle(greenCard)[i] = greenCard[i];
        greenCard[i] = temp;
    }
 };
 console.log(deckGreen);

 let deckBrown = [];

 for(let i = 0; i < 9; i++) {
    let a = shuffle(brownCard)[i];
    if(!deckBrown.includes(a)) {
        deckBrown.push(a);
    }else {
        const temp = shuffle(brownCard)[i];
        shuffle(brownCard)[i] = brownCard[i];
        brownCard[i] = temp;
    }
 }
 console.log(deckBrown);

 let deckBlue = [];

for(let i = 0; i < 2; i++) {
   let a = shuffle(blueCard)[i];
   if(!deckBlue.includes(a)) {
       deckBlue.push(a);
   }else {
    const temp = blueCard[i];
    blueCard[i] = shuffle(blueCard)[i];
    shuffle(blueCard)[i] = temp;
}
}
console.log(deckBlue);
//замешать карты из разных калод по уровням

// stageOne
for(let i = 0; i < 2; i++) {
    let a = shuffle(deckBrown)[i];
    if(!stageOne.includes(a)) {
        stageOne.push(a);
    } else {
        const temp = deckBrown[i];
        deckBrown[i] = shuffle(deckBrown)[i];
        shuffle(deckBrown)[i] = temp;
    }
    // stage1[1].textContent = (deckBrown[i]).length;
 };

 for(let i = 0; i < 1; i++) {
    let a = shuffle(deckBlue)[i];
    let b = shuffle(deckGreen)[i];
    if(!stageOne.includes(a)) {
        stageOne.push(a);
    } else {
        const temp = deckBlue[i];
        deckBlue[i] = shuffle(deckBlue)[i];
        shuffle(deckBlue)[i] = temp;
    };
    if(!stageOne.includes(b)) {
        stageOne.push(b);
    } else {
        const temp = deckGreen[i];
        deckGreen[i] = shuffle(deckGreen)[i];
        shuffle(deckGreen)[i] = temp;
    };
 };
 console.log(stageOne);

//  stageTwo
 for(let i = 0; i < 2; i++) {
    let a = shuffle(deckGreen)[i];
    if(!stageTwo.includes(a && stageOne)) {
        stageTwo.push(a);
    } else {
        const temp = deckGreen[i];
        deckGreen[i] = shuffle(deckGreen)[i];
        shuffle(deckGreen)[i] = temp;
    }
 };
 for(let i = 0; i < 1; i++) {
    let a = shuffle(deckBlue)[i];
    if(!stageTwo.includes(a && stageOne)) {
        stageTwo.push(a);
    } else {
        const temp = deckBlue[i];
        deckBlue[i] = shuffle(deckBlue)[i];
        shuffle(deckBlue)[i] = temp;
    }
 };
 for(let i = 0; i < 3; i++) {
    let a = shuffle(deckBrown)[i];
    if(!stageTwo.includes(a && stageOne)) {
        stageTwo.push(a);
    } else {
        const temp = deckBrown[i];
        deckBrown[i] = shuffle(deckBrown)[i];
        shuffle(deckBrown)[i] = temp;
    }
 };
 console.log(stageTwo);

//  stageThree
 for(let i = 0; i < 2; i++) {
    let a = shuffle(deckGreen)[i];
    if(!stageThree.includes(a && stageOne && stageTwo)) {
        stageThree.push(a);
    } else {
        const temp = deckGreen[i];
        deckGreen[i] = shuffle(deckGreen)[i];
        shuffle(deckGreen)[i] = temp;
    }
 };
 for(let i = 0; i < 4; i++) {
    let a = shuffle(deckBrown)[i];
    if(!stageThree.includes(a && stageOne && stageTwo)) {
        stageThree.push(a);
    } else {
        const temp = shuffle(deckBrown)[i];
        shuffle(deckBrown)[i] = deckBrown[i];
        deckBrown[i] = temp;
    }
 };
 console.log(stageThree);

 // перемешала катры на всех уровнях

 for(let i = 0; i < stageThree.length; i++) {
   shuffle(stageThree)[i];

 };
 for(let i = 0; i < stageTwo.length; i++) {
    shuffle(stageTwo)[i];
 };
 for(let i = 0; i < stageOne.length; i++) {
    shuffle(stageOne)[i];
 };
    console.log(stageThree);
    console.log(stageTwo);
    console.log(stageOne);

};
// вывод карты
function randomCard() {
    azathoth();
    let img = document.createElement('img');           
    shirtCard.addEventListener('click', () => {
        img.src = `assets/MythicCards/${stageOne.pop() || stageTwo.pop() || stageThree.pop()}.png`;
        randomCards.appendChild(img);
        img.style.width = '180px';
        console.log(img);
        if(stageThree.length === 0) {
            shirtCard.style.display = 'none';
        };    
    });
};

function counter() { // счетчик карт
    // stage1[0].textContent
    console.log(stage1);
};
counter();
