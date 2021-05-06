const typeCard = ['Coeur', 'Trefle', 'Pique', 'Carreau'];
const nameCard = ['Roi', 'Valet', 'Dame', 'As'];
const numberCard = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const whichCardIsCreate = function(cardBuilded, usecaseCards = []){
    if(!usecaseCards.length) return;
    return cardBuilded === 'numberCard' ? usecaseCards[0].length : usecaseCards[1].length; 
}

const buildCard = (cardToBuild) => 
    Array(whichCardIsCreate(cardToBuild, [nameCard, typeCard]))
     .fill(null)
     .map((__, i) => 
        Array(whichCardIsCreate(cardToBuild, [numberCard, typeCard]))
         .fill(null)
         .map((__, j) => cardToBuild === 'numberCard' ? `${typeCard[i]} ${numberCard[j]}` : `${nameCard[j]} ${typeCard[i]}`));


const generateColorCards = (numberColorCards = 52) =>
    Array(numberColorCards)
    .fill()
    .map((__, index) => 
      Array(6)
       .fill('')
       .reduce(acc => acc += Math.floor(Math.random() * 16).toString(16), ''));
       
// main element to import
const colorCards = generateColorCards();
const gameCards = buildCard().concat(buildCard('numberCard'));
const baseUrl =  'https://via.placeholder.com/150';

export {gameCards, colorCards, baseUrl}