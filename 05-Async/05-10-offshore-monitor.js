function connectVessel() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("✅ Connected to vessel.");

        }, 1000);

    });

}


function loadWeather() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = Math.random() >= 0.5;

            if (success) {

                resolve("🌤️ Weather: Calm Seas");

            } else {

                reject("Unable to load weather data.");

            }

        }, 1000);

    });

}


function loadCargo() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("📦 Cargo: 50,000 MT Crude Oil");

        }, 1000);

    });

}


function loadFuelStatus() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("⛽ Fuel Status: 78% Remaining");

        }, 1000);

    });

}


async function monitorVessel() {

    console.log("Starting Offshore Monitoring System...\n");

    try {

        const vessel = await connectVessel();
        console.log(vessel);

        const weather = await loadWeather();
        console.log(weather);

        const cargo = await loadCargo();
        console.log(cargo);

        const fuel = await loadFuelStatus();
        console.log(fuel);

        console.log("\n✅ Monitoring completed successfully.");

    } catch (error) {

        throw new Error(`❌ Monitoring Failed: ${error}`);

    } finally {

        console.log("\n🔒 Connection closed.");
        console.log("Thank you for using the Offshore Monitoring System.");

    }

}

monitorVessel().catch(error => {

    console.log(error.message);

});