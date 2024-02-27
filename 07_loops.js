//for loop
// for(let i=1;i<=10;i++){
//     console.log(`Table of ${i}`)
//     for(let j=1;j<=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

//Break
// for (let index = 1; index <= 20; index++) {
//     const element = index;
//     if(index==5){
//         break
//     }
//     console.log(element);
    
// }

//Continue
// for (let index = 1; index <= 20; index++) {
//     const element = index;
//     if(index%5==0){//will skip iteration multiple of 5
//         continue
//     }
//     console.log(element);
    
// }

//While loop
// let i=0;
// while(i<=10){
//     console.log(`value of i is ${i}`)
//     i+=2;
// }
// let i=0;
// while(i<=10){
//     if(i==2){
//         break
//     }
//     console.log(`value of i is ${i}`)
//     i++;
// }

//do while loop
let myArr=[12,23,45,76]
i=0;
do{
    console.log(myArr[i]);
    i++;
}
while(    i<myArr.length   )
