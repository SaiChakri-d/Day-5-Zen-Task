// 3. Do the below programs in arrow functions.


// a. Print odd numbers in an array.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // declared an array containing the numbers from 1 to 10
let odd = array.filter((number) => number % 2 != 0) // filter() method will create a new array filled with output values,
// that will pass the condition declared in the function. 
console.log(odd);
//output=>  [ 1, 3, 5, 7, 9 ]


//b. Convert all the strings to title caps in a string array.

let array1 = ["sai", "chakri", "rv", "college", "graduate"];
let Titlecase = array1.map((string) => string.charAt(0).toUpperCase() + string.substring(1).toLowerCase());
console.log(Titlecase);
//output=> [ 'Sai', 'Chakri', 'Rv', 'College', 'Graduate' ]

//c. Sum of all numbers in an array.

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = array2.reduce((total, number) => total += number , 0);
//reduce() method reduces the array to a single value and executes the declared function for each element of the array. 
console.log(sum);
// output=> 55


//d. Return all the prime numbers in an array.

let arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isPrime = (num) =>{
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }
  console.log(arrnum.filter(isPrime));
//output=>  [ 2, 3, 5, 7 ]


//e. Return all the palindromes in an array.

const mixarray =["madam", 123321, "tenet", 12345, "inception"];
var palindrome=(mixarray) =>
{
  var stringvalue = mixarray.toString();
  let lenstring = stringvalue.length;
  for(var i = 0;i<lenstring/2;i++)
  {
      if(stringvalue.charAt(i)!=stringvalue.charAt(lenstring-i-1))
      {
        return false;
      }   
  }
  return true;
}
console.log(mixarray.filter(palindrome)); //the function will return only if the word or number is a palindrome.
//output=>  [ 'madam', 123321, 'tenet' ] 
