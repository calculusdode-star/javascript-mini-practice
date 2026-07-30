function startEngine(){

    return new Promise(resolve => {

        setTimeout(() => {

            resolve("Engine Started");

        },2000);

    });

}

async function runEngine() {

    const result = await startEngine();

    console.log(result);

}


runEngine();