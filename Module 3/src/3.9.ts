/*
 * Title: Abstraction
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 06-05-2024
 */

{
  interface AnimalInterface {
    makeSound(): void;
  }
  abstract class Animal implements AnimalInterface {
    abstract makeSound(): void;
    move(): void {
      console.log("roaming the earth...");
    }
  }

  class Dog extends Animal {
    makeSound(): void {
      console.log("bark");
    }
  }

  class Cat extends Animal {
    makeSound(): void {
      console.log("meow");
    }
  }

  const myDog = new Dog();
  myDog.makeSound();

  const myCat = new Cat();
  myCat.makeSound();
}
