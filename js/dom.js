import { baseUrl } from './constant.js';
import { onclickImg, onDblClickImg } from './listener.js';

async function createContainer(){
    const container = document.createElement('div');
    container.classList.add('container');

    return container;
}

function generateCardDom(baseUrlCard = baseUrl){
    const img = document.createElement('img');
    img.src = baseUrlCard + '/?text=Mistery Card';
    img.onclick = onclickImg;
    img.ondblclick = onDblClickImg; 
    return img;
}

export function gameCardPlateform(){
    const body = document.body;
    createContainer()
    .then(containerCreated => {
        body.appendChild(containerCreated);
        return containerCreated;
    })
    .then(containerCreated => {
        Array(52).fill().forEach(__ => {
            containerCreated.appendChild(generateCardDom());
        });
        console.log(containerCreated);
    })
}