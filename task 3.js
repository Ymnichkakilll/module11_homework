function first(firstNumb) {
  function second(secondNumb) {
    return firstNumb + secondNumb;
  }
  return second(2);
}

let sum = first(3);
console.log(sum);
