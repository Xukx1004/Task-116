'use strict';
 function countSameElements(collection) {
  let result = [];
  let obj = {};
  let b = -1;
  for(let item of collection ){
    if(item.length > 1){
      let ch = item[0];
      let count = item[2];
      if(!obj[ch]){
        obj[ch] = {} ;
        obj[ch].name= ch ;
        obj[ch].summary= parseInt(count);
      }else{
        obj[ch].name= ch ;
        obj[ch].summary += parseInt(count); 
      } 
    }
    else{
      if(!obj[item]){
        obj[item] = {} ;
        obj[item].name = item ;
        obj[item].summary = 1;
      }
      else{
        obj[item].summary ++;   
      } 
    }
   
  }
  for(let item in obj)
  {
    result.push(obj[item]);
  }
  console.log(result);
  return result;
}

const collection = [
  'a', 'a', 'a',
  'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
  't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c:8',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd-5'
];

countSameElements(collection) ;
module.exports =  countSameElements;

