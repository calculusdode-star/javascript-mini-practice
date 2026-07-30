function connectVessel(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve("Vessel Connected");

        },1000);

    });

}


function getCargo(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve("Cargo Data Received");

        }, 1000);

    });

}


function getReport(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve("Report Generated");

        },1000);

    });

}


connectVessel()

.then((message)=>{

    console.log(message);

    return getCargo();

})

.then((cargo)=>{

    console.log(cargo);

    return getReport();

})

.then((report)=>{

    console.log(report)

})


