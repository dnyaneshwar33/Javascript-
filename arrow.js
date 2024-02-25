//this keyword refres to current context
const emp={
    uname:"hitesh",
    price:888,
    msg:()=>{
    console.log(`${this.uname},welcome to webpage`)}
}
emp.msg()
//Simple function

const chai =function(){
    console.log("Chai")
}
chai()

const chai1=()=>{
    console.log("Chaiiiii")

}
chai1()

const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(2,3));

//Immediately invoked function IIFE
// place function in para() will work now
(function chai(){
    console.log(`DB CONNECTED`)
})();

( ()=>{
    console.log(`DB CONNECTED AGAIN`)
})()