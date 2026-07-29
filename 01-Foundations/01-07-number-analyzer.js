const maxNumber = 20;

for (let i = 0; i <= maxNumber; i++){

    if (i === 0) {

        console.log(i)
    }

    else if (i%3 === 0 && i%5 === 0){
        console.log("Full Inspection")
        continue
    }
    
    else if (i%3 === 0) {
        console.log("Cargo check")
    }    

    else if (i%5 === 0){
        console.log("Engine Check")
    }

    else {
        console.log(i)
    }

}