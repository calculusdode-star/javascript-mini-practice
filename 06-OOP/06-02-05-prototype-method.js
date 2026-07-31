function BankAccount(owner, balance){

    this.owner = owner;
    this.balance = balance;

    BankAccount.prototype.deposit = function(amount){

      this.balance += amount;
      return `Your Account balance is, ${this.balance}`
      
      
    };

    BankAccount.prototype.withdraw = function(amount){

        this.balance -= amount;
        return `Youraccount balance is, ${this.balance}`
    }
}



const firstClient = new BankAccount(

    "David",
    4000

)
console.log(firstClient);
console.log(firstClient.deposit(2000));
console.log(firstClient.withdraw(500));