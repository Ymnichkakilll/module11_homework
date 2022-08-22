let firstNumber = 5;
let secondNumber = 15;
counter();

function counter(){
   let i = firstNumber;
   let n = secondNumber;
   timer = setInterval(function () {
        if (i <= n) {
            console.log(i)
            i++;
        } else {
            clearInterval(timer)
        }
    }, 1000);
}