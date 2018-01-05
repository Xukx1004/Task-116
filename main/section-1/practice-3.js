'use strict';

function collectSameElements(collectionA, objectB) {
  let result = [];
  let arr = [];
  arr =  objectB.value;
  for(let i  = 0;i< collectionA.length;i++){
    for(let j = 0;j< arr.length;j++){
      if(collectionA[i] === arr[j]){
        result.push(collectionA[i]);
      }
    }
      
  }
  
  
  console.log(result);
 
  return result;
}
collectSameElements(['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'],
 {value: ['a', 'd', 'e', 'f']});
module.exports =  collectSameElements;