/*
 * Title: Spread and Rest operators in TypeScript
 * Description: Spread and Rest operators in TypeScript
 * Author: Md. Atikur Rahaman
 * Date: 30-04-2024
 */

{
  const fruits: string[] = ["apple", "banana", "mango"];
  const foods: string[] = ["pizza", "burger", "shawarma"];

  const allItems: string[] = [...fruits, ...foods];

  // rest operator

  const [first, ...restItems] = allItems;
  console.log(first); // apple
  console.log(restItems); // ["banana", "mango", "pizza", "burger", "shawarma"]
}
