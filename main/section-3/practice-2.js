'use strict';

 function createUpdatedCollection(collectionA, objectB) {
  let cct = objectB.value;
  for(let item of collectionA){
    for(let item1 of cct){
      if(item.key === item1){
        if(item.count >= 3){
          item.count = item.count - parseInt(item.count /3);
        }
      }
    }
  }
return collectionA;
}
module.exports = createUpdatedCollection;
let arr = createUpdatedCollection([
  {key: 'a', count: 3},
  {key: 'e', count: 7},
  {key: 'h', count: 11},
  {key: 't', count: 20},
  {key: 'f', count: 9},
  {key: 'c', count: 8},
  {key: 'g', count: 7},
  {key: 'b', count: 6},
  {key: 'd', count: 5}
],{value: ['a', 'd', 'e', 'f']}) ;
 console.log(arr);

