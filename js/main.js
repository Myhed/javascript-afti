window.onload = async function(){
    const helloWorld = 'hello World synchrone';

    setTimeout(function(){
        console.log('hello World asynchrone');
    }, 2000);

    setTimeout(function(){
        console.log('0');
    }, 0);

    console.log(helloWorld); // il s'éxécute en premier (synchrone)

    function sayHello(name, done){
        done(`hello ${name}`);
    }

    sayHello('toto', function(result){
        console.log(result);
    });

    // Promise

    function sayHello2(name){
        return new Promise((resolve, reject) => {
            if(name.length > 0){
                resolve(`hello ${name}`);
            }else{
                reject(new Error('name is not defined'));
            }
        });
    }

    sayHello2('')
        .then(result => { 
            console.log('vanilla result: ', result);
            return result+'0';
        })
        .then(resultChanged => {
            console.log('resultChanged: ', resultChanged);
            return resultChanged;
        })
        .catch(e => {
            console.log('error catched: ',e.message);
        });

    // Request API

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(vanillaResult => {
            return vanillaResult.json();
        })
        .then(resultParsedToJson => {
            console.log('resultJson: ', resultParsedToJson);
        })
        .catch(e => {
            console.log('error: ', e);
        });
    
        async function sayHello3(){
            return 'toto';
        }

        async function main(isAsync = true){
            // console.log('async syntaxe : ', await sayHello3());
            if(!isAsync){
                return new Error('function is not async');
            }
            return await sayHello3();
        }

        try {
            const result = await main(true);
            console.log('try catch result: ', result);
        }catch(e){
            console.log('error asyn try catch: ', e);
        }
}