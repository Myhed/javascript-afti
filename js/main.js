window.onload = function(){
    // get element on the DOM
    const p = document.getElementsByTagName('p');
    const maClass = document.getElementsByClassName('maClass');
    const paragraphe1 = document.getElementById('paragraphe1');
    console.log('getElementsByTagName: ',p);
    console.log('getElementsByClassName: ', maClass);
    console.log('getElementById: ', paragraphe1);

    console.log('Array from: ',Array.from(p));
    const pQuerySelector = document.querySelector('.paragraphe');
    console.log(pQuerySelector);

    // CreateElement
    const body = document.body;
    const div = document.createElement('div');
    const pDiv = document.createElement('p');
    const textNodeP = document.createTextNode('div text');
    pDiv.appendChild(textNodeP);
    div.appendChild(pDiv);
    
    console.log('created element: ', div);
    // add class, remove class, add Attribute, set Attribute
      div.classList.add('div');
      div.classList.remove('div');
      div.setAttribute('id', 'div1');
      div.removeAttribute('id');
      div.removeAttribute('class');
    body.appendChild(div);

    // Event Listener 
    div.addEventListener('click', (event) => {
        console.log(event.target);
    });

    const input = document.querySelector('input');

    console.log(input);
    input.addEventListener('keydown', (event) => {
        console.log(event);
    });

    input.addEventListener('keyup', (event) => {
        console.log(event.target.value);
    });

    window.addEventListener('scroll', function(event){
        console.log(event.target);
        console.log(this.scrollY);
        console.log(this.scrollX);
    });

    const form = document.querySelector('form');
    const submit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    form.addEventListener('submit', submit);

    form.removeEventListener('submit', submit);
    // Les dates

    const date = new Date();
    console.log(date.getMinutes());
    console.log(date.getDay());
    console.log(date.getHours());
    console.log(date.getFullYear());
    console.log(date.getSeconds());
    
}