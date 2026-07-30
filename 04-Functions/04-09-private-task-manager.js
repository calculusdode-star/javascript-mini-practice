function createTaskManager(){

    let completedTasks = 0;

    return {

        completeTask(){

            completedTasks++;

            console.log(

                "Completed:",

                completedTasks

            );

        },

        getCompletedTasks(){

            return completedTasks;

        }

    };

}


const manager = createTaskManager();

manager.completeTask();

manager.completeTask();

manager.completeTask();

console.log(

    manager.getCompletedTasks()

);