const tasks = [

    {
        name:"Learn JavaScript",
        completed:true
    },

    {
        name:"Practice DOM",
        completed:false
    },

    {
        name:"Build Portfolio",
        completed:true
    }

];


const name = () => {

    tasks.forEach(
    task => {

        console.log(task.name);
    }
)

}


const onlyComplete = () => {

    tasks.filter(
        task => {

          if (task.completed === true){

            console.log(task.name);

          }
        }
    )
}


name();
console.log("");
onlyComplete();



