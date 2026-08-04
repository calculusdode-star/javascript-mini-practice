class BankAccount {

    constructor(owner, balance){

          this.owner = owner;
          this.balance = balance;
    }

    deposit(amount){

        if(amount > 0){

            this.balance += amount;
            console.log(`You have deposited ${amount}. Your balance is ${this.balance}`)
            console.log('')
            return;
        }

        else {

               console.log(`You have entered a wrong range. Try again`);
               console.log('')
       
        }
    }

    withdraw(amount){

        if(amount < 0){

           console.log(`You have entered a wrong range. Try again`);
           console.log('')
        }
        

        else if(amount <= this.balance){
             
                 this.balance -= amount;
                 console.log(`You have withdrawn Ghc ${amount}. Your balance is Ghc ${this.balance}`)
                 console.log('')
                 return
        }

        else{

            console.log(`You have entered insufficient funds`)
            console.log('')
        }
    }

    getBalance(){

        console.log(`${this.owner}, your current balance is Ghc ${this.balance}`)
        console.log('')
    }
}


const firstAccount = new BankAccount(

    "Matthew Ocansey",
    5000
)


firstAccount.getBalance()
firstAccount.withdraw(-1000);
firstAccount.withdraw(2000);
firstAccount.deposit(-1000)
firstAccount.getBalance()
firstAccount.deposit(10000)
firstAccount.getBalance()
firstAccount.balance = 0;
firstAccount.getBalance()