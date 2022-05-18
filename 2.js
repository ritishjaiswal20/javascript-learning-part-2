//code execuation phase 
//in js code executed inside the execuation context
//and it is called global execuation context
//the phase is also consist of two phases 
//creation phase 
//code execution phase 


//creeattion phase 
//in this phase all variables are declared and assigned to undefined
//in js code executed inside the creation execuation context
//here window will be present which will be given by the browser 
//this will bind to windows


//then comes the code execution phase
console.log("this")//it will print windows as this is bind to to windows in creation phase
console.log("window")// it will print windows
console.log(firstname);//it will print undefined as firstname is not defined in the creation phase
console.log(myfunction);//it will print the whole function  as in creation phase myfucntioon is stored in the memory and it is not executed yet

function myfunction(){
    console.log("this is my function");
}
var firstname = "ritish";
console.log(firstname);//it will print ritish


