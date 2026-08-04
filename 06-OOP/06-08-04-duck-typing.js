const tanker = {

    name: "MT Atlantic",

    operate() {

        console.log(
            `${this.name} is conducting cargo operations`
        );

    }

};

const tugboat = {

    name: "Harbour Tug 01",

    operate() {

        console.log(
            `${this.name} is performing harbor maneuvering`
        );

    }

};

const robot = {

    name: "Engine Room Robot",

    operate() {

        console.log(
            `${this.name} is performing automated inspection`
        );

    }

};

function executeOperation(object) {

    if (
        typeof object.operate === "function"
    ) {

        object.operate();

    }
    else {

        console.log(
            "Object cannot perform this operation."
        );

    }

}

executeOperation(tanker);

executeOperation(tugboat);

executeOperation(robot);

executeOperation({
    name: "Computer"
});