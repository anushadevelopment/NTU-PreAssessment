/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
 
    if (typeof x == 'number' && typeof y == 'number')
    {       
        x = x+y;
        y = x-y;
        x = x-y;
        console.log("After Swapping:\nValue of x : " + x +"\n"+ " Value of y : " + y)      
    }

    else{        
        return -1;
    }
}

// Task 2: Add code here
//print the swapped values if x and y is numeric
swap(1,3);

// return -1 if x and y is not numeric
var retunVar = swap(1, '20');
console.log(retunVar);


module.exports = swap;
