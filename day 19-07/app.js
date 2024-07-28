function mySum(a,b){
  console.log(arguments)
  return a+b
}

const sum = (a,b)=>{
  console.log(arguments)
  return a+b
}

// console.log(mySum(1,2,)) // 6
let inxt=0;

console.log([1,2,3,4].reduce((a,b)=>a+b,inxt)) // 3
console.log(inxt)
