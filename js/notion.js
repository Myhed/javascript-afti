/**
 * @OBJECT @CLASS AND @PROTOTYPE
 */
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

