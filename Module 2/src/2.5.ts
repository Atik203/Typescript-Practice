/*
 * Title: Generics with Function in TypeScript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 04-05-2024
 */
{
  // generic with function
  function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
  }

  let numArray = getArray<number>([1, 2, 3, 4, 5]);
  let strArray = getArray<string>(["Atik", "Rahaman"]);

  console.log(numArray);
  console.log(strArray);

  const createArray = <T>(items: T[]): T[] => {
    return new Array().concat(items);
  };
}
