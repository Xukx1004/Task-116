'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = [];
  for(let i = 0;i<collectionA.length;i++){
    for(let j = 0;j<collectionB.length;j++){
     if(collectionA[i] === collectionB[j]){
       result.push(collectionA[i]);
     }
    }
  }
  console.log(result);
  return result;
}

const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
const collectionB = ['a', 'd', 'e', 'f'];
collectSameElements(collectionA, collectionB);
module.exports = collectSameElements;