'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let cct =  objectB.value;
  for(let item of collectionA){
    for(let item1 of cct){
      if(item.key === item1){
        item.count --;
      }
    }
  }
return collectionA;
}
module.exports = createUpdatedCollection;
let arr = createUpdatedCollection([
  {key: 'a', count: 2},
  {key: 'e', count: 2},
  {key: 'h', count: 2},
  {key: 't', count: 2},
  {key: 'f', count: 2},
  {key: 'c', count: 2},
  {key: 'g', count: 2},
  {key: 'b', count: 2},
  {key: 'd', count: 2}
],{value: ['a', 'd', 'e', 'f']}) ;
 console.log(arr);
