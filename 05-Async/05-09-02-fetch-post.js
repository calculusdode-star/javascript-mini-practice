async function createVessel(){

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/posts",

        {

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify({

                vessel:"MT Atlantic",

                cargo:"Crude Oil"

            })

        }

    );

    const data = await response.json();

    console.log(data);

}

createVessel();