//MUltiple of 5
// let num=prompt("Enter a number");
// if(num%5==0){
//     document.write(num,"Number is multiple of 5");
// }
// else if(num%3==0){
//     document.write(num,"Number is multiple of 3");
// }
// else{
//     document.write(num,"Number is not multiple ");
// }

//Assign grade to student acc to marks

let marks=prompt("Enter your mark");
if(marks>=85 && marks<=100 ){
    document.write("Your grade is A");
}
else if(marks>=55 && marks<=84 ){
    document.write("Your grade is B");
}
else if(marks>=1 && marks<=34 ){
    document.write("Your grade is FAIL");
}
else{
    document.write("Enter valid number");
}
