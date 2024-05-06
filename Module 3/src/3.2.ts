/*
 * Title: Inheritance in TypeScript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 06-05-2024
 */

{
  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    walk() {
      console.log(`${this.name} is walking`);
    }
  }

  class Student extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public roll: number
    ) {
      super(name, age, address);
    }
    study() {
      console.log(`${this.name} is studying`);
    }
  }

  let student1 = new Student("Atik", 25, "Dhaka", 12345);
  console.log(student1);
  student1.walk();
  student1.study();
}
