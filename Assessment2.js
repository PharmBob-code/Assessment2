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
arrayOfNumbers.sort((a,b) => a-b
)
console.log(arrayOfNumbers)

//Create a new array containing only the even numbers from the original array.
let evenArray = []
arrayOfNumbers.forEach((element, index) => {
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

//Write a while loop that sums all the numbers in an array. (we can use reduce method to solve this too)
let x = 0
let sum=0
while(x<loopArray.length){
    sum+=loopArray[x]
    x++
}
console.log(sum)


//Write a while loop that finds the largest number in an array. (we can use reduce method to solve this too)
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
     else if(attempt === 2){
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
let bons = arrayElements.forEach((arrayFiles, index, array) => arrayFiles)

 

 //Use the forEach method to double each element of an array
let doubleArray =[]
arrayElements.forEach(files =>
    doubleArray.push(files, files)
    )
 console.log(doubleArray)

 //map method to achiev the above
 let duplicateArray =[]
 arrayElements.map(e => duplicateArray.push(e, e))


 //Use the forEach method to create a new array containing only the strings from a mixed array
let stringArray =[]
 arrayElements.forEach(function(elements, index, arraY){
    if(typeof elements === `string`){
        stringArray.push(elements)
    }
 })
 console.log(stringArray)

 //filter method to achieve the above
 arrayElements.filter(elements => {if(typeof elements === `string`) stringArray.push(elements)})

//.Use the forEach method to find the sum of all even numbers in an array.
let sumAll = 0
arrayElements.forEach(e => {if(e>sumAll) sumAll =e})
console.log(sumAll)

//reduce method to achieve the above
let largestNumber = arrayElements.reduce((acc, curr) => {
    if(curr>acc)
        acc=curr
        return acc
}, 0)
console.log(largestNumber)


//Use the forEach method to filter an array based on a certain condition.
let evenNUM = []
arrayElements.forEach(e => {
    if(e%2 === 0)
    evenNUM.push(e)

})
console.log(evenNUM)

//Alternatively with filter method
let evenNums = arrayElements.filter(e =>
    e%2===0
)
console.log(evenNums)

//REST PARAMETERS
//Define a function that accepts any number of arguments using rest parameters.
function restParameter (...num1){
    nNums = []
   num1.forEach((e)=>{
    if(e%2===0){
        let saved = {
            even:e
        }
        nNums.push(saved)
    }
    else if(e%2===1){
        saved = {
            odd:e
        }
        nNums.push(saved)
    }

    else{
        saved = {
            string : e
        }
        nNums.push(saved)
    }
   })
}
restParameter(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, `Bob`, `Anawo`, `Osteo`)
console.log(nNums)

let checks = nNums.filter(e=>e.string)
console.log(checks)


//Use rest parameters to create a function that calculates the average of a list of numbers
function averageOf(...nNumss){
   let sum = 0
    nNumss.forEach((e) =>{
    sum+=e
})
let ave = sum%nNumss.length
return ave
}
console.log(averageOf(1, 2, 3, 4,8))



//Use rest parameters to create a function that logs all the arguments passed to it.
function returnAll(...all){
    return `these are all the numbers you fed me ${all} noticed they are all odd numbers?`
}
console.log(returnAll(1, 3, 5, 7, 9))


//Use rest parameters to create a function that combines multiple arrays into a single array
function meergeArray(...b){
    const mergeArray = [b]
   return mergeArray
 }

 console.log(meergeArray(arrayElements, arrayOfNumbers))

