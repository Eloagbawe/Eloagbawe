
/* Defining a function that takes one parameter (whole number/integer) 
 and checks if numbers ranging from 1 to the given parameter are divisible 
 by 2,3 and 5 while replacing them with unique strings depending on their 
 divisibility by 2,3 and 5 */

function checkDivisibilty(x){
 // Declaring the output array
    var myArray = [];

 // looping through the range of numbers and checking their divisibility
 
    for (var i = 1; i <= x; i++){
         //checking if the number is divible by 2, 3 and 5
        if ((i % 2 === 0) && (i % 3 === 0) && (i % 5===0)){
            myArray.push("yu-gi-oh");
        }
         //checking if the number is divible by 2 and 3
        else if ((i % 2 === 0) && (i % 3 === 0)){
            myArray.push("yu-gi");
        }
         //checking if the number is divible by 2 and 5
        else if ((i % 2 === 0) && (i % 5 === 0)){
            myArray.push("yu-oh");
        }
         //checking if the number is divisible by 3 and 5
        else if ((i % 3 === 0) && (i % 5 === 0)){
            myArray.push("gi-oh");
        }
         //checking if the number is divisible by 5
        else if (i % 5 === 0){
            myArray.push("oh");
        }
         //checking if the number is divisible by 3
        else if (i % 3 === 0){
            myArray.push("gi");
        }
         //checking if the number is divisible by 2
        else if (i % 2 === 0){
            myArray.push("yu");
        }
         //checking if the number is not divible by either 2, 3 or 5
        else {
            myArray.push(i);
        }
    }
    document.write("Passing " + x + " into the function, The resulting array is [" + myArray +"]" +"<br/>" + "<br/>");
    console.log(myArray);
    return(myArray);
}
 checkDivisibilty(100);
 checkDivisibilty(57);

