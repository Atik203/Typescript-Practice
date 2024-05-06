/*
 * Title: Class and object in TypeScript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 06-05-2024
 */

{
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number, public address: string) {
      this.name = name;
      this.age = age;
    }
    walk() {
      console.log(`${this.name} is walking`);
    }
  }

  let person1 = new Person("Atik", 25, "Dhaka");
  console.log(person1);
}
