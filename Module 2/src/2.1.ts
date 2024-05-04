/*
 * Title: Type Assertion / Type Narrowing in TypeScript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 04-05-2024
 */
{
  let anything;
  anything = 10;
  anything = "Hello";

  // Type Assertion

  const KgToGram = (weight: number | string) => {
    if (typeof weight === "string") {
      weight = parseInt(weight);
      return `${weight * 1000}gm`;
    }
    return weight * 1000;
  };

  const result = KgToGram("10") as string;
  const result2 = KgToGram(10) as number;
  console.log(result, result2);
}
