"use strict";
/*
 * Title: Functions in TypeScript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 30-04-2024
 */
function add(num1 = 0, num2 = 0) {
    return num1 + num2;
}
const result = add(10, 20);
const addArrow = (num1, num2) => {
    return num1 + num2;
};
const resultArrow = addArrow(10, 20);
const user = {
    name: "Atik",
    age: 25,
    getName() {
        return this.name;
    },
};
const someNumber = [1, 2, 3, 4, 5];
const newArray = someNumber.map((num) => num * 2);
