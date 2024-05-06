/*
 * Title: Getter And Setter
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 06-05-2024
 */
{
  class BankAccount {
    private readonly id: number;
    private name: string;
    private balance: number;
    constructor(balance: number, id: number, name: string) {
      this.balance = balance;
      this.id = id;
      this.name = name;
    }
    deposit(amount: number) {
      this.balance += amount;
    }
    withdraw(amount: number) {
      this.balance -= amount;
    }
    get getBalance() {
      return this.balance;
    }

    get getId() {
      return this.id;
    }

    set setName(name: string) {
      this.name = name;
    }

    get getName() {
      return this.name;
    }
  }

  const account = new BankAccount(1000, 1, "Atik");

  console.log(account.getId);
  console.log(account.getName);
  account.setName = "Atikur";
  console.log(account.getName);
}
