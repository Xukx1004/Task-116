'use strict';

 function collectSameElements(collectionA, objectB) {
  let arr1 = [];
  let arr2 = [];
  let result = [];
  for(let i  = 0;i<collectionA.length;i++){
    for (let j in collectionA[i]){
      arr1.push(collectionA[i][j]);
    }
  }
  for(let m in objectB){
    arr2 = objectB[m];
  }
  for(let i = 0;i<arr1.length;i++){
    for(let j = 0;j<arr2.length;j++){
      if(arr1[i] === arr2[j]){
        result.push(arr1[i]);
      }
    }
  }
  console.log(result);
  return result;
}

const collectionA = [
  {key: 'a'}, {key: 'e'}, {key: 'h'}, {key: 't'}, {key: 'f'}, {key: 'c'}, {key: 'g'}, {key: 'b'}, {key: 'd'}
];
const objectB = {value: ['a', 'd', 'e', 'f']};
collectSameElements(collectionA, objectB);
module.exports =collectSameElements;