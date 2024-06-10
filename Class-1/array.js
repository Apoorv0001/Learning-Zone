console.log(" 1. WAP to print even Numbers in an array");

const ages = [12, 14, 16, 17, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

for (let i =0;i<ages.length;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}

console.log(" 2. WAP to print even Numbers in an array");

const ages2 = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
const numberOfPeople = ages2.length;
for (let i =0;i<numberOfPeople;i++){
    if(ages2[i]%2==0){
        console.log(ages2[i]);
    }
}


console.log(" 3. WAP to print the biggest number in an array.");


















console.log(" 4. WAP that prints all the male people's first name given a complex object.");

const personArray = [ "apoorv","lata","kundu"];
const genderArray = ["male", "female", "male"];
const numberOfUsers = personArray.length;

for (let i = 0; i<numberOfUsers; i++) {
    if(genderArray[i] == "male"){
        console.log(personArray[i]);
    }
}




console.log(" 5. WAP that reverses all the elements of an array.");
