//compilation phase  code execuation
//compilation phase consist of three phases for the code to be executed
//tokenizing  parsing codegeneration
//first we will divide the code into number of chunks called tokens and then we will parse the tokens to get the code in the form of abstract syntax tree (AST)  and then we will generate the code in the form of machine code
//we go to the compilation phase for two reasons: first early error checking  and second for determing scope for variable declarations


//early error checking 


console.log("hello world");
console.log(firstname)  ;
var firstname = ."ritish";//here it will give error because we are adding .
//here it will fdirecctly gioive errorand not print helloworls and firstyname because in javascript it will gove to compliler phase where error checking is done first before executing the code  so it will print error
