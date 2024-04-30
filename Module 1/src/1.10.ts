/*
 * Title: Union and Intersection type in TypeScript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 30-04-2024
 */

{
  // Union type
  type MyUnionType = string | number;

  // Intersection type
  type MyIntersectionType = { name: string } & { age: number };

  // Usage
  const myVariable: MyUnionType = "Hello";
  const myObject: MyIntersectionType = { name: "John", age: 25 };
}
