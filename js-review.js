// Mike Prelesnik
// 1/8/19
// js-review.js


//function calls
fizzBuzz();


//number 1
console.log("Introduction to JavaScript");

//number 2
function fizzBuzz()
{
    for (let i = 1; i <= 100; i++)
    {
        if (i % 3 == 0 && i % 5 != 0)
        {
            console.log("Fizz");
        }

        else if (i % 5 == 0 && i % 3 != 0)
        {
            console.log("Buzz");
        }

        else if (i % 5 == 0 && i % 3 == 0)
        {
            console.log("FizzBuzz");
        }

        else
        {
            console.log(i);
        }
    }
}

