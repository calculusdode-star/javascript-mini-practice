function processTask(taskName, onStart, onFinish){

    onStart();

    console.log("Processing: " + taskName);

    onFinish();

}


processTask(

    "Build Portfolio",

    () => {

        console.log("Starting...");

    },

    () => {

        console.log("Completed!");

    }

);