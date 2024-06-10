console.log("Syntax of function:");

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,3));

function calcarithmetic(a,b, type){
    if(type == "add"){
        return a+b;
    } 
    if(type == "subtract"){
        return a-b;
    }
}
const value = calcarithmetic(1,2,"subtract");
console.log(value);


// callback function

function calculateArithmetic(a,b, arithmeticFinalFunc){
    const ans = arithmeticFinalFunc(a,b)
    return ans;
}

function sum(a,b){
    return a+b;
}

const value1 = calculateArithmetic(1,2,sum);
console.log(value1);