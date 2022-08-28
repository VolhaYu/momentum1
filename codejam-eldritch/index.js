
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
            shufflingCards.classList.remove('shuffling-cards-active');
            for(let butt of difficulty) {
                butt.classList.remove('button-active');
            };
            randomCards.innerHTML = '';
            shirtCard.style.display = 'flex'; 
            if(ancient[i] === ancient[0]) {
                azathoth();
            };
            if(ancient[i] === ancient[1]) {
                cthulhu();
            };
            if(ancient[i] === ancient[2]) {
                iogSothoth();
            };
            if(ancient[i] === ancient[3]) {
                shubNiggurath();
            };
                      
        });
    };
}
choiceAncient();

function level() { // выбор уровня
    for(let i = 0; i < difficulty.length; i++) {
        difficulty[i].addEventListener ('click', () => {
            for(let butt of difficulty) {
                butt.classList.remove('button-active');
            };
            if(difficulty[i] === difficulty[2]) {
                difficulty[i].classList.toggle('button-active');
                shufflingButton.classList.add('shuffling-button-active');
            } else {
                shufflingButton.classList.remove('shuffling-button-active');
            }

        });
    };
}
level();

// кнопка замешать калоду

shufflingButton.addEventListener('click', () => { 
    shufflingButton.classList.toggle('shuffling-button-active');
    shufflingCards.classList.toggle('shuffling-cards-active');
});

const blueCard = ['blue/blue1', 'blue/blue2', 'blue/blue3', 'blue/blue4', 'blue/blue5', 'blue/blue6', 'blue/blue7', 'blue/blue8', 'blue/blue9', 'blue/blue10', 'blue/blue11', 'blue/blue12'];
const brownCard = ['brown/brown1', 'brown/brown2', 'brown/brown3', 'brown/brown4', 'brown/brown5', 'brown/brown6', 'brown/brown7', 'brown/brown8', 'brown/brown9', 'brown/brown10', 'brown/brown11', 'brown/brown12', 'brown/brown13', 'brown/brown14', 'brown/brown15', 'brown/brown16', 'brown/brown17', 'brown/brown18', 'brown/brown19', 'brown/brown20', 'brown/brown21'];
const greenCard = ['green/green1', 'green/green2', 'green/green3', 'green/green4', 'green/green5', 'green/green6', 'green/green7', 'green/green8', 'green/green9', 'green/green10', 'green/green11', 'green/green12', 'green/green13', 'green/green14', 'green/green15', 'green/green16', 'green/green17', 'green/green18'];

//рандомный элемент массива

function getRandomArrayElement(arr){
    return arr[Math.floor(Math.random()*arr.length)]
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
let stageOne;
let stageTwo;
let stageThree;

function azathoth() {

    //замешать 3 калоды карт по цветам
    let blCard = blueCard.concat();
    let brCard = brownCard.concat();
    let grCard = greenCard.concat();
 let deckGreen = [];

 for(let i = 0; i < 5; i++) {
    let a = getRandomArrayElement(grCard);
    if(!deckGreen.includes(a)) {
        deckGreen.push(a);
        let ind = grCard.indexOf(a);
        grCard.splice(ind, 1);
    };
 };
 console.log(deckGreen);

 let deckBrown = [];

 for(let i = 0; i < 9; i++) {
    let a = getRandomArrayElement(brCard);
    if(!deckBrown.includes(a)) {
        deckBrown.push(a);
        let ind = brCard.indexOf(a);
        brCard.splice(ind, 1);
    };
 }
 console.log(deckBrown);

 let deckBlue = [];

 for(let i = 0; i < 2; i++) {
   let a = getRandomArrayElement(blCard);
   if(!deckBlue.includes(a)) {
       deckBlue.push(a);
       let ind = blCard.indexOf(a);
       blCard.splice(ind, 1);
   };
 }
 console.log(deckBlue);
 //замешать карты из разных калод по уровням

 // stageOne
 stageOne = [];
 for(let i = 0; i < 2; i++) {
    let a = getRandomArrayElement(deckBrown);
    if(!stageOne.includes(a)) {
        stageOne.push(a);
        let ind = deckBrown.indexOf(a);
        deckBrown.splice(ind, 1);
    };
    
 };
 stageOne.push(getRandomArrayElement(deckBlue));
 stageOne.push(getRandomArrayElement(deckGreen));
 
 stage1[0].textContent = 1;
 stage1[1].textContent = 2;
 stage1[2].textContent = 1;
 console.log(stageOne);

  stageTwo = [];
 for(let i = 0; i < 2; i++) {
    let a = getRandomArrayElement(deckGreen);
    if(!stageTwo.includes(a)) {
        stageTwo.push(a);
        let ind = deckGreen.indexOf(a);
        deckGreen.splice(ind, 1);
    };
 };
 stageTwo.push(getRandomArrayElement(deckBlue));
 for(let i = 0; i < 3; i++) {
    let a = getRandomArrayElement(deckBrown);
    if(!stageTwo.includes(a)) {
        stageTwo.push(a);
        let ind = deckBrown.indexOf(a);
        deckBrown.splice(ind, 1);
    };
 };
 stage2[0].textContent = 2;
 stage2[1].textContent = 3;
 stage2[2].textContent = 1;
 console.log(stageTwo);

 //  stageThree
 stageThree = [];
 for(let i = 0; i < 2; i++) {
    let a = getRandomArrayElement(deckGreen);
    if(!stageThree.includes(a)) {
        stageThree.push(a);
        let ind = deckGreen.indexOf(a);
        deckGreen.splice(ind, 1);
    };
 };
 for(let i = 0; i < 4; i++) {
    let a = getRandomArrayElement(deckBrown);
    if(!stageThree.includes(a)) {
        stageThree.push(a);
        let ind = deckBrown.indexOf(a);
        deckBrown.splice(ind, 1);
    };
 };
 stage3[0].textContent = 2;
 stage3[1].textContent = 4;
 stage3[2].textContent = 0;
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

function iogSothoth() {
    //замешать 3 калоды карт по цветам
    let blCard = blueCard.concat();
    let brCard = brownCard.concat();
    let grCard = greenCard.concat();
 let deckGreen = [];

 for(let i = 0; i < 5; i++) {
    let a = getRandomArrayElement(grCard);
    if(!deckGreen.includes(a)) {
        deckGreen.push(a);
        let ind = grCard.indexOf(a);
        grCard.splice(ind, 1);
    };
 };
 console.log(deckGreen);

 let deckBrown = [];

 for(let i = 0; i < 9; i++) {
    let a = getRandomArrayElement(brCard);
    if(!deckBrown.includes(a)) {
        deckBrown.push(a);
        let ind = brCard.indexOf(a);
        brCard.splice(ind, 1);
    };
 }
 console.log(deckBrown);

 let deckBlue = [];

 for(let i = 0; i < 2; i++) {
   let a = getRandomArrayElement(blCard);
   if(!deckBlue.includes(a)) {
       deckBlue.push(a);
       let ind = blCard.indexOf(a);
       blCard.splice(ind, 1);
   };
 }
 console.log(deckBlue);
 //замешать карты из разных калод по уровням

 // stageOne
 stageOne = [];
 for(let i = 0; i < 2; i++) {
    let a = getRandomArrayElement(deckBrown);
    if(!stageOne.includes(a)) {
        stageOne.push(a);
        let ind = deckBrown.indexOf(a);
        deckBrown.splice(ind, 1);
    };    
 };
 stageOne.push(getRandomArrayElement(deckBlue));

 stage1[0].textContent = 0;
 stage1[1].textContent = 2;
 stage1[2].textContent = 1;
 console.log(stageOne);

 //  stageTwo
 stageTwo = [];
 for(let i = 0; i < 2; i++) {
    let a = getRandomArrayElement(deckGreen);
    if(!stageTwo.includes(a)) {
        stageTwo.push(a);
        let ind = deckGreen.indexOf(a);
        deckGreen.splice(ind, 1);
    };
 };
 for(let i = 0; i < 3; i++) {
    let a = getRandomArrayElement(deckBrown);
    if(!stageTwo.includes(a)) {
        stageTwo.push(a);
        let ind = deckBrown.indexOf(a);
        deckBrown.splice(ind, 1);
    };
 };
 stageTwo.push(getRandomArrayElement(deckBlue));
 stage2[0].textContent = 2;
 stage2[1].textContent = 3;
 stage2[2].textContent = 1;
 console.log(stageTwo);

 //  stageThree
 stageThree = [];
 for(let i = 0; i < 3; i++) {
    let a = getRandomArrayElement(deckGreen);
    if(!stageThree.includes(a)) {
        stageThree.push(a);
        let ind = deckGreen.indexOf(a);
        deckGreen.splice(ind, 1);
    };
 };
 for(let i = 0; i < 4; i++) {
    let a = getRandomArrayElement(deckBrown);
    if(!stageThree.includes(a)) {
        stageThree.push(a);
        let ind = deckBrown.indexOf(a);
        deckBrown.splice(ind, 1);
    };
 };
 stage3[0].textContent = 3;
 stage3[1].textContent = 4;
 stage3[2].textContent = 0;
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

function cthulhu() {
    //замешать 3 калоды карт по цветам
    let blCard = blueCard.concat();
    let brCard = brownCard.concat();
    let grCard = greenCard.concat();
 let deckGreen = [];

 for(let i = 0; i < 4; i++) {
    let a = getRandomArrayElement(grCard);
    if(!deckGreen.includes(a)) {
        deckGreen.push(a);
        let ind = grCard.indexOf(a);
        grCard.splice(ind, 1);
    };
 };
 console.log(deckGreen);

 let deckBrown = [];

 for(let i = 0; i < 9; i++) {
    let a = getRandomArrayElement(brCard);
    if(!deckBrown.includes(a)) {
        deckBrown.push(a);
        let ind = brCard.indexOf(a);
        brCard.splice(ind, 1);
    };
 }
 console.log(deckBrown);

 let deckBlue = [];

 for(let i = 0; i < 2; i++) {
   let a = getRandomArrayElement(blCard);
   if(!deckBlue.includes(a)) {
       deckBlue.push(a);
       let ind = blCard.indexOf(a);
       blCard.splice(ind, 1);
   };
 }
 console.log(deckBlue);
 //замешать карты из разных калод по уровням

 // stageOne
 stageOne = [];
 for(let i = 0; i < 2; i++) {
    let a = getRandomArrayElement(deckBrown);
    if(!stageOne.includes(a)) {
        stageOne.push(a);
        let ind = deckBrown.indexOf(a);
        deckBrown.splice(ind, 1);
    };    
 };
 for(let i = 0; i < 2; i++) {
    let a = getRandomArrayElement(deckBlue);
    if(!stageOne.includes(a)) {
        stageOne.push(a);
        let ind = deckBlue.indexOf(a);
        deckBlue.splice(ind, 1);
    };
 }
 stage1[0].textContent = 0;
 stage1[1].textContent = 2;
 stage1[2].textContent = 2;
 console.log(stageOne);

 //  stageTwo
 stageTwo = [];
 stageTwo.push(getRandomArrayElement(deckGreen));
 for(let i = 0; i < 3; i++) {
    let a = getRandomArrayElement(deckBrown);
    if(!stageTwo.includes(a)) {
        stageTwo.push(a);
        let ind = deckBrown.indexOf(a);
        deckBrown.splice(ind, 1);
    };
 };
 stage2[0].textContent = 1;
 stage2[1].textContent = 3;
 stage2[2].textContent = 0;
 console.log(stageTwo);

 //  stageThree
 stageThree = [];
 for(let i = 0; i < 3; i++) {
    let a = getRandomArrayElement(deckGreen);
    if(!stageThree.includes(a)) {
        stageThree.push(a);
        let ind = deckGreen.indexOf(a);
        deckGreen.splice(ind, 1);
    };
 };
 for(let i = 0; i < 4; i++) {
    let a = getRandomArrayElement(deckBrown);
    if(!stageThree.includes(a)) {
        stageThree.push(a);
        let ind = deckBrown.indexOf(a);
        deckBrown.splice(ind, 1);
    };
 };
 stage3[0].textContent = 3;
 stage3[1].textContent = 4;
 stage3[2].textContent = 0;
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

function shubNiggurath() {
    //замешать 3 калоды карт по цветам
    let blCard = blueCard.concat();
    let brCard = brownCard.concat();
    let grCard = greenCard.concat();
 let deckGreen = [];

 for(let i = 0; i < 6; i++) {
    let a = getRandomArrayElement(grCard);
    if(!deckGreen.includes(a)) {
        deckGreen.push(a);
        let ind = grCard.indexOf(a);
        grCard.splice(ind, 1);
    };
 };
 console.log(deckGreen);

 let deckBrown = [];

 for(let i = 0; i < 8; i++) {
    let a = getRandomArrayElement(brCard);
    if(!deckBrown.includes(a)) {
        deckBrown.push(a);
        let ind = brCard.indexOf(a);
        brCard.splice(ind, 1);
    };
 }
 console.log(deckBrown);

 let deckBlue = [];

 for(let i = 0; i < 2; i++) {
   let a = getRandomArrayElement(blCard);
   if(!deckBlue.includes(a)) {
       deckBlue.push(a);
       let ind = blCard.indexOf(a);
       blCard.splice(ind, 1);
   };
 }
 console.log(deckBlue);
 //замешать карты из разных калод по уровням

 // stageOne
 stageOne = [];
 stageOne.push(getRandomArrayElement(deckGreen));
 stageOne.push(getRandomArrayElement(deckBlue));
 for(let i = 0; i < 2; i++) {
    let a = getRandomArrayElement(deckBrown);
    if(!stageOne.includes(a)) {
        stageOne.push(a);
        let ind = deckBrown.indexOf(a);
        deckBrown.splice(ind, 1);
    };    
 };
 stage1[0].textContent = 1;
 stage1[1].textContent = 2;
 stage1[2].textContent = 1;
 console.log(stageOne);

 //  stageTwo
 stageTwo = [];
 for(let i = 0; i < 3; i++) {
    let a = getRandomArrayElement(deckGreen);
    if(!stageTwo.includes(a)) {
        stageTwo.push(a);
        let ind = deckGreen.indexOf(a);
        deckGreen.splice(ind, 1);
    };
 };
 stageTwo.push(getRandomArrayElement(deckBlue));
 
 for(let i = 0; i < 2; i++) {
    let a = getRandomArrayElement(deckBrown);
    if(!stageTwo.includes(a)) {
        stageTwo.push(a);
        let ind = deckBrown.indexOf(a);
        deckBrown.splice(ind, 1);
    };
 };
 stage2[0].textContent = 3;
 stage2[1].textContent = 2;
 stage2[2].textContent = 1;
 console.log(stageTwo);

 //  stageThree
 stageThree = [];
 for(let i = 0; i < 2; i++) {
    let a = getRandomArrayElement(deckGreen);
    if(!stageThree.includes(a)) {
        stageThree.push(a);
        let ind = deckGreen.indexOf(a);
        deckGreen.splice(ind, 1);
    };
 };
 for(let i = 0; i < 4; i++) {
    let a = getRandomArrayElement(deckBrown);
    if(!stageThree.includes(a)) {
        stageThree.push(a);
        let ind = deckBrown.indexOf(a);
        deckBrown.splice(ind, 1);
    };
 };
 stage3[0].textContent = 2;
 stage3[1].textContent = 4;
 stage3[2].textContent = 0;
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
    const img = document.createElement('img');           
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
randomCard();

