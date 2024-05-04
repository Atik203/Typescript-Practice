/*
 * Title: Interface in TypeScript,Interface vs Type
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 04-05-2024
 */
{
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: "Atik",
    age: 22,
  };

  console.log(person);

  // Interface vs Type
  // Type
  type Point = {
    x: number;
    y: number;
  };
  const point: Point = {
    x: 10,
    y: 20,
  };

  // Interface
  interface Point2 {
    x: number;
    y: number;
  }

  const point2: Point2 = {
    x: 10,
    y: 20,
  };

  console.log(point, point2);

  // Extending Interface
  interface Person2 {
    name: string;
    age: number;
  }

  interface Student extends Person2 {
    roll: number;
  }

  const student: Student = {
    name: "Atik",
    age: 22,
    roll: 123,
  };

  console.log(student);

  // Implementing Interface
  interface Person3 {
    name: string;
    age: number;
  }

  class Student2 implements Person3 {
    name: string;
    age: number;
    roll: number;
    constructor(name: string, age: number, roll: number) {
      this.name = name;
      this.age = age;
      this.roll = roll;
    }
  }

  const student2 = new Student2("At 2", 22, 123);
  console.log(student2);

  type Roll1 = number[];

  const roll1: Roll1 = [1, 2, 3, 4, 5];

  interface Roll2 {
    [index: number]: number;
  }

  const roll2: Roll2 = [1, 2, 3, 4, 5];

  type Add = (x: number, y: number) => number;

  const add: Add = (x, y) => x + y;

  interface Add2 {
    (x: number, y: number): number;
  }

  const add2: Add2 = (x, y) => x + y;
}
