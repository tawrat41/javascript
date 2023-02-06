
// Problem-1
// mindGame function will take positive number as input and return the result by multiplying by 3, adding 10, dividing by 2, subtracting 2


function mindGame(positiveNumber) {
    if (positiveNumber < 0) {
        return "Please give positive number as input!";
    }
    else
        return (positiveNumber * 3 + 10) / 2 - 5;
}



// Problem-2
// evenOdd function will take string as input and return "even" if the total number of characters in that string is even otherwise return "odd".

function evenOdd(inputString) {

    if (typeof (inputString) == 'number' || typeof (inputString) == "boolean" || typeof (inputString) == "object") {
        return "Please give String as input!"
    }

    else {
        let count = 0;

        for (var i = 0; i < inputString.length; i++) {
            count++;
        }

        if (count % 2 == 0) {
            return "even"
        }
        else
            return "odd"
    }
}



// Problem-3
// isLGSeven will take number as input and return (input-7) if (input-7 <7) otherwise return input*2 

function isLGSeven(inputValue) {

    if (typeof (inputValue) == "number") {
        if (inputValue - 7 < 7)
            return inputValue - 7;
        else
            return inputValue * 2;
    }
    else
        return "Please give number as input!"


}


// Problem-4
// findingBadData fucntion will return the count of negative number (less than zero) of an array 

function findingBadData(inputArray) {
    const arrayCheck = Array.isArray(inputArray)
    if (arrayCheck) {
        let badCount = 0;
        for (let characters = 0; characters < inputArray.length; characters++) {
            if (inputArray[characters] < 0) {
                badCount++;
            }
        }

        return badCount;
    }
    else
        return "Please give array as input!"
}



// Problem-5
// gemsToDiamond funtion will multiply first, second and third argument with 21,32,43 respectively and return their total sum after multiplication if  result is less than  2000, if result is greater than 2000, then return total sum - 2000

function gemsToDiamond(n_gem1, n_gem2, n_gem3) {

    const powerOfGem_1 = 21;
    const powerOfGem_2 = 32;
    const powerOfGem_3 = 43;

    if (arguments.length == 3) {
        const n_diamond = n_gem1 * powerOfGem_1 + n_gem2 * powerOfGem_2 + n_gem3 * powerOfGem_3;

        if (n_diamond > 2000)
            return n_diamond - 2000;
        else
            return n_diamond
    }
    else
        return "Hey! I need 3 arguments. \nPlease give 3 numbers or arguments as input."

}

