import { gameCards, colorCards, baseUrl } from './constant.js';
const copyGameCards = gameCards.slice();
const copyColorCards = colorCards.slice();
function onclickImg(e){
    // if(typeof e.target.data !== "undefined")
    console.log(e.target.getAttribute('data-click'));
    if(e.target.getAttribute('data-click') === null){
        const indexArrayCard = Math.floor(Math.random() * copyGameCards.length);
        const indexNameCard = Math.floor(Math.random() * copyGameCards[indexArrayCard].length);
        const randomColor = Math.floor(Math.random() * copyColorCards.length);
        
        e.target.src = `${baseUrl}/${copyColorCards[randomColor]}/FFFFFF?text=${copyGameCards[indexArrayCard][indexNameCard]}`;
        e.target.setAttribute('data-click', 'true');
        copyGameCards[indexArrayCard].splice(indexNameCard, 1);
        copyColorCards.splice(randomColor, 1);
        
        if(!copyGameCards[indexArrayCard].length){
            copyGameCards.splice(indexArrayCard, 1);
        }
    }


    console.log('gameCards:', gameCards);
}


function onDblClickImg(e){
    e.target.src = `${baseUrl}?text=Mystery Card`;
}

export { onclickImg, onDblClickImg }
