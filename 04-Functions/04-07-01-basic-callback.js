function uploadCargo(data, onComplete){

    console.log("Uploading cargo...");

    console.log(data);

    onComplete();

}

uploadCargo(

    {

        vessel:"MT Atlantic",

        cargo:"Crude Oil"

    },

    () => {

        console.log("Cargo upload complete.");

    }

);