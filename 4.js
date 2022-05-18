//const and let case 
console.log(firstname);//it will give error : Cannot access 'firstname' before initializationas in the case of let and const the memory will be given in creation phase but it will be unintilized 
const firstname = "ritish";//same in the case of let it will give error as it is not defined in the creation phase
console.log(firstname);//it will print ritish as now the value will be changed from unitlized to ritish 
console.log(lastname)

