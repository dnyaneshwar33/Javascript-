//simple function
function multi(a,b){
    return a*b;
}

let ans = multi(1,2);
document.write("Answer is:",ans);

//Arrow function
let val=(a,b)=>{
    let sum=a+b;
    document.write(sum);
}

val(7,8);
//takes string as argument print its vowels
function vowels(name){
    for(const ch of name){
        // if(ch=='a' || ch=='e'){
            // document.write(ch);
            console.log(ch);
        // }
    }
}

vowels('same');