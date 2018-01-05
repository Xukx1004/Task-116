'use strict';

function countSameElements(collection) {
  let obj = {};
  let answer = [];
   for(let item of collection){
       if(!obj[item]){
          obj[item] = {};
          obj[item].key = item;
          obj[item].count = 1;
       }
       else{
          obj[item].count++;
       }
   }
   for (let key in obj){
       answer.push(obj[key]);
   }
  
  console.log(answer);
  return answer;
  
  }




const collection = [
  'a', 'a', 'a',
  'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
  't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd', 'd', 'd', 'd', 'd'
];
countSameElements(collection);
module.exports =  countSameElements;