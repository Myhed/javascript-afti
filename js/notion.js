/**
 * @Function
 */

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

