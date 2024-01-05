# 1. What are loops and why are they used?
## Loops are used to repeat the same block of code determined number of times based on a condition.
### Example :

      let temp = 0;
     while (temp < 3) {
        console.log('OK');
        temp++;
     }     
     // 'OK'
     // 'OK'
     // 'OK'
# 2. What are the different types of loops? Provide examples.
## The different types of loops are :
# The while() loop :
## The while loop is based on truthy and falsy conditions. While the condition is truthy the loop will execute the code inside it's body. Once the conditions becomes falsy the loop stops and the program continues with the next statement after the loop.
### Example:
     let temp = 0;
     while (temp < 3) <- condition {
        console.log('OK');
        temp++;
     }     
     // 'OK'
     // 'OK'
     // 'OK'
# The do-while() loop:
## The do-while loop is the same as while loop with only one exception. No matter if the condition is truthy or falsy at the end of the first run, the code inside it's body will execute at least once before checking the condition.
### Example :
    let temp = true;
    do {
     console.log('OK');
      } while (temp === false);
# The for() loop :
## The for loop is most commonly used. It consists of 3 expressions `initialization`, `condition`, `updater` and `statement` .
    for (initializer; condition; counter) {
        statement
    }
## First the `initialization` initializes a counter, then the `condition` is checked and if it evaluates to true the `statement` inside the loop's body is executed. After the execution the counter is updated and the condition is checked again, until it evaluates to false. Then the loop stops and the program continues with the next statement after the loop.The for loop can be used to iterate over every iterable object's properties and values (strings,arrays,objects, etc).For example if we want to iterate over an array it will look like this :
### Example:
      let arr = ['OK', 'NO', 'YES'];
      for (let i = 0; i < arr.length; i++) {
        console.log(i);
        // 0
        // 1
        // 2
        console.log(arr[i]);
        // 'OK'
        // 'NO'
        // 'YES'
      }
## In the example above we iterate trough an array's elements using the array's length. Printing only `i` will show us the indices of each element in the array. Printing `arr[i]` will show us the element that each indice holds. We can can control the flow inside the loops body with `break` and `continue`.`break` keyword will make the loop stop completely and the program will continue with what's next after the loop. `continue` keyword will only skip everything inside the loops body for the current element and update to the next.
### Example :
     let string = 'Hello' 
     for (let i = 0; i < string.length; i++) {
        if (string[i] === 'l') {
            break;
        } else {
            console.log(string[i])
        }
     }
     // H
     // e
### Example :
       let string = 'Hello' 
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'l') {
            continue;
        } else {
            console.log(string[i])
        }
     }
     // H
     // e
     // o
# The for..in() loop :
## The for...in loop iterates over the enumerable string properties of an object.
### Example:
    let object = {a:1, b:2, c:3}
    for (property in object){
        console.log(property);
        //a
        //b
        //c
    }
## In the example above we iterate over the enumerable properties of the object.`property` receives objects's enumerable string properties names.If we try to get different properties names with the same names `property` will receive the property's name with the bigger value.
### Example:
        let object = {a:1,a:2,c:3}

    for (property in object) {
    console.log(object[property])
    //2
    //3
    }
## Any property added to the object during the iteration will not be printed, because all of the object's own properties were saved before the loop.
### Example:
    let object = {a:1,b:2,c:3}
 
    for (property in object) {
    console.log(object[property])
    object.p = 4;
    }
    // 1
    // 2
    // 3
## In general, it is best not to add, modify, or remove properties from the object during iteration, other than the property currently being visited. 

# The for...of() loop
## The `for...of()` loop iterates over the values of an iterable object(arrays,strings,etc). It is composed of `variable` which receives a value of the sequence of each iteration and `iterable` which the loop operates on.
### Example
    let arr = [1,5,6];
     for (variable of arr) {
        console.log(variable);
     } 
     // 1
     // 5
     // 6
## The difference between ``for...in()`` and ``for...of()`` loops is that for...in() iterates over the enumerable string properties of an object while `for...of()` iterates only over the values of an object.