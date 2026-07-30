const randomPromise = new Promise((resolve, reject) => {

    const success = Math.random() >= 0.5;

    if (success) {

        resolve("Operation Successful");

    } else {

        reject("Operation Failed");

    }

});


async function checkResult() {

    try {

        const result = await randomPromise;

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}


checkResult();