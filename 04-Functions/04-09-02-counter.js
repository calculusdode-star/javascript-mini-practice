function createCounter(){

    let count = 0;

    return function(){

        count++;

        console.log(count);

    };

}

const counterOne = createCounter();
const counterTwo = createCounter();

counterOne();
counterOne();
counterOne();
counterTwo();
counterTwo();
counterOne();
counterTwo();