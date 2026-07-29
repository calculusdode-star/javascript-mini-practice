let attempts = 5;
let passwordCorrect = false;

while (!passwordCorrect && attempts > 0) {

    console.log("remaining attempts is ", attempts);

    

    if (attempts === 1){
        
        console.log ("Access Granted")
        passwordCorrect = true;
        

    }

    else {
        console.log("Account lock")
    }

    attempts --;
}