let arr = [0, 2, 7, "f", 6, 5];

function checkNumbersChetNechet() {
  let nChetn = 0,
    nNeChetn = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
      if (arr[i] % 2 === 0) {
        nChetn++;
      } else {
        nNeChetn++;
      }
    }
  }

  console.log(nChetn + " четных", nNeChetn + " нечетных");
}

checkNumbersChetNechet();
