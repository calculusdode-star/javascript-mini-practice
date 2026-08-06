class Vessel {

    constructor(name, imoNumber) {

        this.name = name;
        this.imoNumber = imoNumber;

    }

    startEngine() {

        console.log(
            `${this.name}: engine started`
        );

    }

    static validateIMO(imoNumber) {
        
        return (
            typeof imoNumber === "string" &&
            /^IMO\d{7}$/.test(imoNumber)
        );

    }

}


const isValid = Vessel.validateIMO("IMO1234567");
const notValid = Vessel.validateIMO("ABC123");

console.log(isValid);
console.log(notValid);