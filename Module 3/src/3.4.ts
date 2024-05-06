/*
 * Title: Type Guard Using Instance Of
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

  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public subject: string
    ) {
      super(name, age, address);
    }
    teach() {
      console.log(`${this.name} is teaching`);
    }
  }

  const isStudent = (person: Person): person is Student => {
    return (person as Student).roll !== undefined;
  };
  const isTeacher = (person: Person): person is Teacher => {
    return (person as Teacher).subject !== undefined;
  };

  const printPerson = (person: Person) => {
    console.log(person.name);
    if (isStudent(person)) {
      console.log(person.roll);
      person.study();
    }
    if (isTeacher(person)) {
      console.log(person.subject);
      person.teach();
    }
  };

  let student1 = new Student("Smith", 25, "Dhaka", 12345);
  let teacher1 = new Teacher("John", 25, "Dhaka", "Math");

  printPerson(student1);
  printPerson(teacher1);
}
