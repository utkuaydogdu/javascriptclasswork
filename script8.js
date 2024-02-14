
function multiply (result){
    var num1 = 4 ;
    var num2 = 2;
    var num3 = 7;
    console.log(`Here is the result, ` , num1 * num2 * num3);
    return result;
}

multiply();


function reverseWordOrder(str) { 
    const strRev =  str.split('').reverse().join(''); 
    console.log(strRev); 
} 

reverseWordOrder(`value`);


function logUserData(personName , age){
    console.log (`User:` , personName, `is`, age, `years old`);
}

logUserData(`Utku` , 30);