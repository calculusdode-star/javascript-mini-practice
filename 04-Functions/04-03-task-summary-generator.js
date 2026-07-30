function generateTask(taskName, completed) {

    return {

        task: taskName,

        completed: completed

    };

}


const tasks = [

    generateTask("Learn JavaScript", true),

    generateTask("Practice DOM", false),

    generateTask("Build Portfolio", true)

];


tasks.forEach(task => {

    console.log(`Task: ${task.task}`);

    console.log(`Completed: ${task.completed}`);

    console.log("---------------------");

});