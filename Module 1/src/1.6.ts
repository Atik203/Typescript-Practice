/*
 * Title: Functions in TypeScript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 30-04-2024
 */

function add(num1: number = 0, num2: number = 0): number {
  return num1 + num2;
}

const result = add(10, 20);

const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

const resultArrow = addArrow(10, 20);

const user: {
  name: string;
  age: number;
  getName(): string;
} = {
  name: "Atik",
  age: 25,
  getName(): string {
    return this.name;
  },
};

const someNumber: number[] = [1, 2, 3, 4, 5];

const newArray = someNumber.map((num: number): number => num * 2);
