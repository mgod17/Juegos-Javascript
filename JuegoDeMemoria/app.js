const arrayMemori = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
]
arrayMemori.sort(() => 0.5 - Math.random())
const resultDisplay = document.querySelector('#result-memori')
const gridDisplay = document.querySelector('#grid-memori');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];


function createBoard() {
    for (let i = 0; i < arrayMemori.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/pizza.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }

}
createBoard();

function checkMatch() {

    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    const cards = document.querySelectorAll('img');
    if (optionOneId == optionTwoId) {
        console.log('hiciste click en la misma imagen');
        cards[cardsChosenId[0]].setAttribute('src', 'images/pizza.png');
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        cards[cardsChosenId[0]].setAttribute('src', 'images/white.png');
        cards[cardsChosenId[1]].setAttribute('src', 'images/white.png');
        cards[cardsChosenId[0]].removeEventListener('click', flipCard);
        cards[cardsChosenId[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    else {
        cards[cardsChosenId[0]].setAttribute('src', 'images/pizza.png');
        cards[cardsChosenId[1]].setAttribute('src', 'images/pizza.png');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length * 10;
    if  (cardsWon.length === arrayMemori.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
};

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(arrayMemori[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', arrayMemori[cardId].img);
    console.log(cardsChosen);
    console.log(cardsChosenId);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}


