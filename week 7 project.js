
// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

    // a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        //Do not use numbers to reference the last element, find it programmatically.
        //ages[7] - ages[0] is not allowed!


        
    // b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).


    // c. Use a loop to iterate through the array and calculate the average age.

    // 1
    // using the let array allowed me to plug in the age values 
    let ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log("Ages:", ages);
    
    // a.
    // the minusAge with the ages.length allowed me to subtract from the first and last value 
    let minusAges = ages[ages.length - 1] - ages[0];
    console.log("minusAge", minusAges);
    
    // b
    // push value allowed me to add the new value into the equation 
    ages.push(45);
    console.log("ages after pushing a new value", ages);
    let minusAgePush = ages[ages.length - 1] - ages[0];
    console.log("minusAge", minusAgePush);
    
    // c
    // with the for array i was able to loop and iterate the new average with the new value added
    let sumOfAges = 0;

    for (let i = 0; i < ages.length;  i++) {
        sumOfAges += ages[i];
        console.log("index:",i,"sumOfAge:", sumOfAges);
    }
    console.log("Total Sum", sumOfAges);
    let average = sumOfAges / ages.length;
    console.log("Average", average);
    

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

    // a. Use a loop to iterate through the array and calculate the average number of letters per name.

    // b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

    //2 + 2a
    //created the array for the names and i can console log it out but i did the rest of the problem.
    
    let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    let totalChars = 0;
  
    for (let i = 0; i < names.length; i++) {
        totalChars += names[i].length;
        console.log("index:", i, "name:", names[i], "totalChars:",
        totalChars);
    }     
    let averageName = totalChars / names.length;
    console.log("Average of Names:", averageName);

    //2b.

    let concatNames = "";
    for (let i = 0; i, names.length; i++) {
        // use the concat to pass names through and make sure they have space
        concatNames = concatNames.concat(names[i] + " ");
        // use to see names concatenated
        console.log("Names concatenated", concatNames);
    }

// 3. How do you access the last element of any array?
    // references the last array from previous code above 
    console.log("last element of ages array:", ages[ages.length - 1]);



// 4. How do you access the first element of any array?
    console.log("First element of ages array:", ages[0]);


// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

// new variable and container for the array
    let nameLengths = [];
    for (let i = 0; i < names.length; i++) {
        // can console.log to check if it prints.  
   // push the name lengths of each variable. 
    nameLengths.push(names [i].length);
    console.log("Name lengths array:", nameLengths);
}

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

    let charsTotal = 0;
    for (let i = 0; i < nameLengths.length; i++) {
    //  console.log(i, "test");
    charsTotal += nameLengths[i];
    console.log("CharsTotal", charsTotal);
}

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

// use the function tag and make sure it runs by calling it
    
    function concatWords(word, n) {
        console.log("Word Par:", word, "n Par:", n);
        let concat = word.repeat(n);
        console.log(concat);
}
    concatWords("Hello", 3); 

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
//  write a function as normal but with a space using " " then call it 
    function fullName(firstName, lastName){
       let fullName = firstName + " " + lastName
       console.log(fullName);
    } 
//  use name to check and see if it works
    fullName("Courtney", "Lewis");

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
    let numbers1 = [100,200,300,400];
    let numbers2 = [1,2,3,4];

    function sumNumbersArray(array) {
        let total = 0;

        for (let i = 0; i < array.length; i++){
        // console.log(i, "test");
        // run each array using the index i
        total += array[i];
        console.log("Total;", total);
    }
//  use the if statements to make sure it would return true or false using the console log.
    if (total> 100) {
        console.log('Total',total,true);
        return true
    } else {
        console.log('total',total,false);
        return false
    }
}
sumNumbersArray(numbers1);

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
    function calculateNumberAverage(array){
        let total = 0;

        for (let i = 0; i < array.length; i++) {
        //  console.log(i, "test");
        total += array[1]
        console.log("calculate Function", "total:", total);
        }

        let average = total / array.length
        console.log(" Average of numbers:", average)
        return average; 
    }
    calculateNumberAverage(numbers1);


// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
//  set some values so we can see if the code is true or false
//  the function sets to two arrays to make an average
//  for statement
    let numbers3 = [100, 100, 100];
    let numbers4 = [100, 100, 99];

    function twoAverages(array1, array2) {
        console.log("Parameters:", array1, array2);
        let total1 = 0;
        let total2 = 0;

        for (const number of array1) {
        total1 += number
        console.log("current number loop1:", number, "Total:", total);
        }

        for (const number of array2) {
        total2 += number;
        console.log("Current number loop2:", number, "Total2:", total2);
        }
        let average1 = total1 / array1.length;
        let average2 = total2 / array2.length;

        console.log("Averages:", average1, average2);

        if (average1 > average2) {
            console.log(true);
            return true;
        } else if (average1 < average2) {
            console.log(false);
            return false;
        } else {
            console.log("Numbers are equal:");
        }
    }
    twoAverages(numbers3, numbers4);


// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
//   set the function WillBuyDrink with two parameters
//  log them out and then set it to true or false to see that function is running 

    function willBuyDrink(isHotOutside, moneyInPocket) {
    console.log("Parameters:", isHotOutside,  moneyInPocket);
    let buydrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log("By a drink", buydrink);
    return buydrink;
    }

willBuyDrink(true, 12)