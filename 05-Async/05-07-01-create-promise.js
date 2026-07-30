const vesselConnection = new Promise((resolve, reject)=>{

    let connected = true;


    if(!connected){

        resolve("Vessel connected successfully");

    }else{

        reject("Connection failed");

    }

});


vesselConnection

.then((message)=>{

    console.log(message);

})

.catch((error)=>{

    console.log(error);

})

.finally(()=>{

    console.log("Operation completed");

});

// Promise with timer
function loadVesselData(){

    return new Promise((resolve,reject)=>{


        setTimeout(()=>{

            resolve("Vessel data loaded");

        },3000);


    });

}

loadVesselData()

.then(data=>{

    console.log(data);

});