const delayOperation = function delayOperation(){

    const delay = true;

    return new Promise((resolve, reject) => {

        if(delay) {

           setTimeout(() => {

            resolve("Vessel has delayed in operation")

           }, 3000
        ) 

        }
        
        else {

            reject("No delay in operation");
        }
    } 
)
}

delayOperation()

.then((message) => {

    console.log(message);

})

.catch((error) => {

    console.log(error)

});