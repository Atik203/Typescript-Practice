/*
 * Title: Mapped Type
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 04-05-2024
 */
{
  const numArr: number[] = [1, 2, 3, 4, 5];

  const strArr: string[] = ["a", "b", "c", "d", "e"];

  interface areaNumber {
    height: number;
    width: number;
  }
  // look up type
  type Height = areaNumber["height"];

  type areaString<T> = {
    [key in keyof T]: T[key];
  };

  const area: areaString<areaNumber> = {
    height: 10,
    width: 20,
  };
}
