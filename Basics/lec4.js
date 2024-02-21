let names=[23,34,6467];

document.write(names);
for(let i=0;i<names.length;i++){
    document.write(names[i]);
}

// let cities=["SH","NSK","PUNE","BNG"];
// for(let city of cities){
//     console.log(city);
// }

//Find the average of students marks
// let marks=[34,67,89,43,23,89,98];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//      sum=sum+marks[i];
// }
// console.log("Average of students marks",sum/marks.length);

//changing array elemet by applying 10% off
// let prices=[250,645,300,900,50];

// for(let val of prices){
//       let discount=val/10;
//       console.log(`price is ${val} and its offer is ${discount}`);
      
// }

//Array methods
let companies=["bloomberg","amazon","google","tcs"];
//Remove first element
companies.shift();
//add at last
companies.push("Facebook");
console.log(companies);