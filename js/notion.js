/**
 * @Collections
 */

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


