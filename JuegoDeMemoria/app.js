const arrayMemori = [
    {
       name:'fries',
       img: 'images/fries.png',
    }
    ,{
        name:'cheeseburger',
        img: 'images/cheeseburger.png',
     }
     ,{
        name:'pizza',
        img: 'images/pizza.png',
     },
     ,{
        name:'hotdog',
        img: 'images/hotdog.png',
     },
     {
        name:'white',
        img: 'images/white.png',
     },
     {
        name:'ice-cream',
        img: 'images/ice-cream.png',
     },
     {
        name:'milkshake',
        img: 'images/milkshake.png',
     },
     {
        name:'blank',
        img: 'images/blank.png',
     },
     
     

]
arrayMemori.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid-memori');

function createBoard() {
    for (let i = 0; i < arrayMemori.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/pizza.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click',flipCard)

        gridDisplay.appendChild(card)
        console.log(card)
    }

}
createBoard();

function flipCard() {
const cardId =  this.getAttribute('data-id');
console.log('clicked', cardId)
}
