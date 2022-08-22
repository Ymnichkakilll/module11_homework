number = prompt('enter number');
let number=+number;

isPrime(number);

function isPrime(number){
   if(number>=1000 || number<2){
      console.log('данные не верны');
   }
   else{
      for(let n=2; n<=number; n++){
         if(number%n===0 && number!==n){
            console.log('это НЕ простое число');
            break;
         } 
         else if(number==n){
            console.log('это простое число');
         }
      }  
   }
}