console.log(myfunction);//here it will print undefined as var myfunction is a varanle in which function will store in the memory and it is not executed yet
//so myfunction is assigned ti undefined in the creation phase
var myfunction = function(){
    console.log("hello world!");
}
console.log(myfunction);//now here it will print the whole function as it is executed in the code execution phase