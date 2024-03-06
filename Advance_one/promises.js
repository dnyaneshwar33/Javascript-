const promiseOne=new Promise(function(resolve,reject){
   //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async1 task is compelete');
        resolve()
    }, 2000)

})

promiseOne.then(function(){
    console.log("Promise1 resolved");
})

//Anothewr way of doing same thing 
//as follow function has settimout 1 ms it will wxecute first
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async2 is completes")
    },1000)
    resolve()
}).then(function(){
    console.log("Promise2 is consumed")
})


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()