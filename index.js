const inAscendingOrder = function(numbers){
  if (numbers.length == 1) {
    return true;
  }

  return numbers[0] < numbers[1] && 
    inAscendingOrder(numbers.slice(1))
}


module.exports = inAscendingOrder;