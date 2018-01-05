'use strict';

 function collectSameElements(collectionA, collectionB) {
  let result = [];
  let arr = [];
  for(let j = 0;j<collectionB.length;j++){
    if(Array.isArray(collectionB[j])){
       arr = collectionB[j]; 
      }
    }
 
  for(let i = 0;i<collectionA.length;i++){
    for(let m = 0;m<arr.length;m++){
          if(collectionA[i] === arr[m]){
             result.push(arr[m]);
           }
        }
    }
  console.log(result);
  return result;
}
const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
const collectionB = [['a', 'd', 'e', 'f']];
collectSameElements(collectionA, collectionB)
module.exports =collectSameElements;