//function execuation context
let foo="foo";
console.log(foo);
function getFullName(firstName,lastName){
    console.log(arguments);
    let myVar="var inside func";
    console.log(myVar); 
    const fullName=firstName+" "+lastName;
    return fullName;
}

