const flatary = ['a','b','c']
const x = [1,3,4,5,6,7]

const result = x.map((value, index) => {
  if(flatary[index]!==undefined){
    return [value, flatary[index]]
  }else{
    return [value]
  }
})

console.log(result)