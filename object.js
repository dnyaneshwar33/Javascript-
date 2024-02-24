let myData={
    name:"VD",
    salary:980000,
    Edu:"Comp",

}
console.log(myData)//print whole object
console.log(myData.salary);//1st method to access
console.log(myData["salary"]);//2nd method
myData.salary=7800000;//overwrite values
console.log(myData["salary"]);
// Object.freeze(myData);
myData.salary=88800000;//will not update value as obj is freezed
console.log(myData["salary"]);

myData.greet=()=>{
    console.log("hello JS user");
}
myData.greetTwo=function(){
    console.log(`Hello JS user ,${this.name}`);
}

console.log(myData.greet());
console.log(myData.greetTwo());

