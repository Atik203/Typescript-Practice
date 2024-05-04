/*
 * Title: Generics in TypeScript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 04-05-2024
 */

{
  // generics

  /*
   *Generics is a way to make components work for any data type and not restrict to one data type.
   * It is a way to create reusable components.
   */

  function identity<T>(arg: T): T {
    return arg;
  }

  console.log(identity<string>("Atik"));
  console.log(identity<number>(22));

  type genericArray<T> = Array<T>;

  const numberArray: genericArray<number> = [1, 2, 3, 4, 5];
  const stringArray: genericArray<string> = ["Atik", "Rahman"];

  const person: genericArray<{ name: string; age: number }> = [
    { name: "Atik", age: 22 },
    { name: "Rahman", age: 23 },
  ];

  // generic tuple

  type Tuple<T, U> = [T, U];

  const personTuple: Tuple<string, number> = ["Atik", 22];

  const user: Tuple<number, { name: string; email: string }> = [
    1,
    { name: "Atik", email: "atik@gmail.com" },
  ];
}
