//Suddip Paul Arnab
//2022-1-60-356

//Exercise 1: Check whether a string is blank

function isBlank(text){
    if (text.length===0){return true;} 
    return false;
}
console.log(isBlank("Hello"))
console.log(isBlank("")) 

//Exercise 2: Split a string and convert it to an array
function stringToArray(input){
    const arr=input.split(" ")
    return arr
}
console.log(stringToArray("Robin Singh"))

//Exercise 3: Convert a first and last name to abbreviated form
function abbreviateName(name){
    const arr=name.split(" ")
    let str =``
    for (let i=0;i<arr.length;i++){
        if(i===arr.length-1) str+=`${arr[i][0]}. `
        else {str+=`${arr[i]} `}
    }
    return str
}

console.log(abbreviateName("Robin Singh"))

//Exercise 4: Convert a string to title case

function titleCase(input){
const arr=input.split(" ")
    let str =``
    for (let i=0;i<arr.length;i++){
        str+=`${arr[i][0].toUpperCase()}${arr[i].substring(1).toLowerCase()} `
    }
    return str
}
console.log(titleCase('JavaScript exercises. python exercises.'))

//Exercise 5: Get the first n elements of an array

function firstN(array, n){
    if(n===undefined){ return array.at(0)}
    else if(n<0){return []} 
    else if(n>array.length){return array}
    else {
        let newArr=[]
        for (var i=0;i<n;i++){
            newArr.push(array[i])
        }
        return newArr
    }
}

console.log(firstN([7, 9, 0, -2]));
console.log(firstN([],3));
console.log(firstN([7, 9, 0, -2],3));
console.log(firstN([7, 9, 0, -2],6));
console.log(firstN([7, 9, 0, -2],-3));

//Exercise 6: Get the last n elements of an array

function lastN(array, n){
    if(n===undefined){ return array.at(-1)}
    else if(n<0){return []} 
    else if(n>array.length){return array}
    else {
        let newArr=[]
        for (var i=1;i<=n;i++){
            newArr.unshift(array.at(-i))
        }
        return newArr
    }
}

console.log(lastN([7, 9, 0, -2]))
console.log(lastN([7,9,0,-2],3))
console.log(lastN([7, 9, 0, -2],6))

//Exercise 7: Pair of consecutive elements that sum to target

function  sumPair(numbers, target){
    const n=numbers.length
    for(let i=0;i<n;i++){
        let temp=target-numbers[i]
        if(temp===numbers[i+1] && i!=n-1)return[i,i+1]
    }
    return [-1, -1];
}

const numbers= [10,20,10,40,50,60,70], target=50;
console.log(sumPair(numbers, target));

//Exercise 8: Challenge, move an item from one position to another
function move(array, from, to){
    if(from<0) from+=array.length
    if(to<0) to+=array.length
    var element = array[from];
    array.splice(from, 1);
    array.splice(to, 0, element)
    return array;
}

console.log(move([10, 20, 30, 40, 50], 0, 2)) //[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2)) //[10, 20, 30, 50, 40] 