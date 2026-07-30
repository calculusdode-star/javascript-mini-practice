function getWeather() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve("Weather: Clear");

        }, 2000);

    });

}


function getCargo() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve("Cargo: 5000 tonnes loaded");

        }, 3000);

    });

}


async function displayInformation() {

    const weather = await getWeather();

    const cargo = await getCargo();

    console.log(weather);

    console.log(cargo);

}


displayInformation();