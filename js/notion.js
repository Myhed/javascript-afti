/**
 * @Variable
 */

var maVariable = ""; // à ne plus utiliser
const maConstante = 1; // défini une constante
let maVariableLet = ""; // une variable qui sera amené à être changé durant l'éxécution du code

console.log('nombre entier type: ', typeof 1);
console.log('nombre à virgule type: ', typeof 1.4);

console.log('chaine de caractère type: ', typeof "hello World!");
console.log('boolean type: ', typeof false);

console.log('type tableau: ', typeof []);
console.log('type tableau: ', typeof {});

console.log('calcul: ', 4.5 + 9);

// function

function sayHello(nom, done){
     done(`hello ${nom}`);
}

sayHello('toto', function(result){
    console.log('result: ', result);
});

const maFunction = function(){
    console.log(this);
    return 'hello';
}

maFunction()

const arrowFunction = () => {
    console.log(this);
}

const arrowFunctionReturn = () => 'toto';

arrowFunction();
// console.log('variable function: ', maFunction());

// LOOP

const array = ['toto', 'titi', 'tutu', 1];

array.forEach(function(item, index){
    console.log('item: ', item);
    console.log('index: ', index);
});

const newArray = array.map(function(item, index){
    return item + 1;
});

const onlyNumberArray = array.filter(function(item, index){
    return typeof item === "number";
});

console.log('onlyNumberArray: ', onlyNumberArray);

console.log('newArray: ', newArray);

// Collections

const collection = {
    key1: 'toto', 
    key2: 1,
    key3: 3.5,
    key4: false,
    key5: [],
    key6: {},
    key7: function(){
        return 'collection function';
    },
}

const maChaine = ''

console.log('key1: ', collection.key1);
console.log('key2: ', collection.key2);
console.log('key3: ', collection.key3);
console.log('key4: ', collection.key4);
console.log('key5: ', collection.key5);
console.log('key6: ', collection.key6);
console.log('key7: ', collection.key7());

// Object

console.log(Object.keys(collection));
Object.values(collection).forEach(function(value, index){
    if(typeof value === 'function'){
        console.log('value: ', value());
    }else{
        console.log('value: ', value);
    }
});


const MaClass1 = function(param1, param2){
    this.param1 = param1;
    this.param2 = param2;
}

// console.log(maClass.helloWorld());
// const maClass = new MaClass1();

MaClass1.prototype.helloWorld = function(){
    console.log('toto');
}

class MaClass2 {
    sayHello(){
        return 'hello';
    }
}

class MaClass extends MaClass2 {
    constructor(param1, param2) {
        super();
        this.param1 = param1;
        this.param2 = param2;
    }

    get getParam1(){
        return this.param1;
    }

    set setParam1(newParam1){
        this.param1 = newParam1;
    }

    sayHello(){
        return 'hello World';
    }
}

const maClass = new MaClass('toto', 'titi');

console.log('getteur param1: ', maClass.getParam1);
maClass.setParam1 = 'tutu';
console.log('getteur param1: ', maClass.getParam1);

console.log('hello World class: ', maClass.sayHello());

// WEB

