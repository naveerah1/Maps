// // //Array map method
let arr = [1,2,3,4];
let arr2= arr.map((value,index,array)=>{
  console.log(value,index,array);
  return value+1;
})
console.log(arr2);
// //Array Filter method
let arr2 = [1,2,3,4,5,10,234];
let arr3 = arr2.filter((a)=>{
  return a<10;
})
console.log(arr3);
//Array reduce method
let d = [1,2,3,4,5,6,7];
let f = d.reduce((h1,h2)=>{
  return h1+h2;
})
console.log(f);