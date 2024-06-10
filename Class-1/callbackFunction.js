// function square(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }

// function sumofsquare(a,b){
// const val1 = square(2);
// const val2 = square(9);
// return val1+val2; 
// }

// function sumofcube(a,b){
//     const val1 = cube(2);
//     const val2 = cube(9);
//     return val1+val2; 
// }   

// console.log(sumofsquare(2,9));
// console.log(sumofcube(2,9));


function square(a){
    return a * a
}

function someOfSomething(a, b, callb){
    const val1 = callb(a);
    const val2 = callb(b);
    return val1+val2; 
}

console.log(someOfSomething(3, 4, square));