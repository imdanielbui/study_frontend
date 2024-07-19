const numbers = [15, 50, 25];

function getSum(total, num) {
  return total + num;
}

console.log(numbers.reduce(getSum)) 