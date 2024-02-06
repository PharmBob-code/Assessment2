//ARRAY
//Create an array containing the numbers 1 to 10.
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Access the third element of the array
let thirdElement = arrayOfNumbers[2]
console.log(thirdElement)

//Change the value of the last element to 0. (reassign 0 to the last element)
//How do we access the last element? we access it through the last index number
//what is the last index number? [length of array - 1] 
let lastElement = arrayOfNumbers[arrayOfNumbers.length-1]
lastElement = 0
console.log(lastElement)

//Add a new element to the end of the array.
arrayOfNumbers.push(`Bob`)

//Remove the first element from the array.
arrayOfNumbers.shift()
console.log(arrayOfNumbers)

//Find the index of the number 5 in the array.
let checkIndexOfElement = arrayOfNumbers.indexOf(5)
console.log(checkIndexOfElement)

//Check if the array contains the number 8.
let checkIfInclude = arrayOfNumbers.includes(8)
console.log(checkIfInclude)

//Reverse the order of the elements in the array.
let reverseArray = arrayOfNumbers.reverse()
console.log(reverseArray)

//Sort the array in ascending order.
arrayOfNumbers.sort(function(a,b){
    return a-b
})

//Create a new array containing only the even numbers from the original array.
let evenArray = []
arrayOfNumbers.forEach(function(element, index){
    if(element%2 === 0){
        evenArray.push(element)
    }
})
console.log(evenArray)

//Filter method to filter out only even numbers
let evenNumbers = arrayOfNumbers.filter(element => element%2==0)
alert(evenNumbers)


//WHILE LOOP
let loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Write a while loop that prints the numbers from 1 to 10.
let i = 0;
while(i<=10){
    console.log(i)
    i++
}

//Write a while loop that sums all the numbers in an array.
let x = 0
let sum=0
while(x<loopArray.length){
    sum+=loopArray[x]
    x++
}
console.log(sum)


//Write a while loop that finds the largest number in an array.
let y= 0 
let result = 0
while (y < loopArray.length){

    if (loopArray[y] > result){
    
        result = loopArray[y]
    }
    y++
}
console.log(result)

//Write a while loop that prompts the user for input until they enter a valid email address.
let validEmail = false
let userEmail;
while(validEmail === false){
    userEmail = `a@gmail.com`
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validEmail = emailCheck.test(userEmail)

    if(validEmail === false){
        alert(`wrong email`)
    }

    else if(validEmail === true){
    alert(`succes`)
    break
    }
}





//Write a while loop that simulates a dice roll until a 6 is rolled
let check = false
 let attempt = 0
 let score = 9

 while(check === false){
     diceRoll = Math.floor(Math.random()*6)+1
     check = diceRoll === 6
     alert `try again`

    if(check === true){
     alert(`u won`)
     console.log(`your score is ${score}`)
    }
     else if(attempt === 3){
         alert(`time up`)
         console.log(`your score is ${score}`)
         break
        }
 attempt++
 score-=3
 } 


 //FOR EACH
 //.Use the forEach method to print each element of an array.

 let arrayElements = [`Bob`, `Kemka`, `Zak`, `Tochukwu`, `Winnie`, `Anne`, `Prisca`, `Shola`, 1, 30, 56, 78, 89, 90, 100]
 arrayElements.forEach(function(arrayFiles, index, array){

    console.log( arrayFiles)
 })
 

 //Use the forEach method to double each element of an array
let doubleArray =[]
arrayElements.forEach(function(files){
    doubleArray.push(files, files)
    
 })
 console.log(doubleArray)

 //Use the forEach method to create a new array containing only the strings from a mixed array
let stringArray =[]
 arrayElements.forEach(function(strings, index, arraY){
    if(strings === ""){
        stringArray.push(strings)
    }
 })
 console.log(stringArray)