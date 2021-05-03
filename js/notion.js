/**
 * @LOOP AND @ARRAY
 */
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