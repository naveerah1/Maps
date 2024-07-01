 // question no 1
let arr1 = [1,3,2,6];
let a = 18;
arr1.push(a);
console.log(arr1);
 //question no 2
let arr2 = [1,3,2,6];
do{
  let arr1 = [1,3,2,6];
  let a = 5;
  arr1.push(a);
  console.log(arr1);
}while(a!=0);
console.log(arr1);
 //question no 3
let arr = [4,5,10,4,6,15,20];
let newarr = arr.filter((x)=>{
  return x%10==0;
})
console.log(newarr);
//question no 4
let arr = [4,5,10,4,6,15,20];
let newarr = arr.map((x)=>{
  return x*x
})
console.log(newarr);
//question no 5
let arr = [1,2,3,4,5];
let newarr = arr.reduce((x1,x2)=>{
  return x1*x2;
})
console.log(newarr);