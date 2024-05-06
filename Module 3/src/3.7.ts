/*
 * Title: Statics in typescript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 06-05-2024
 */

{
  class BankAccount {
    private static readonly bankName: string = "Bank of America";
    private static readonly bankAddress: string = "New York, USA";
    private readonly id: number;
    private name: string;
    private balance: number;
    static count: number = 0;
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

    static getBankName() {
      return BankAccount.bankName;
    }

    static getBankAddress() {
      return BankAccount.bankAddress;
    }

    static counter() {
      return BankAccount.count++;
    }
  }

  const account = new BankAccount(1000, 1, "Atik");

  BankAccount.counter();
  console.log(BankAccount.getBankName());
  console.log(BankAccount.getBankAddress());

  console.log(BankAccount.counter());
}
