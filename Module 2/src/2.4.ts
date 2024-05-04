/*
 * Title: Generic With Interface
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 04-05-2024
 */
{
  // generic with interface

  interface Developer<T> {
    name: string;
    age: number;
    computer: T;
  }

  const developer1: Developer<{
    model: string;
    ram: string;
  }> = {
    name: "Atik",
    age: 22,
    computer: {
      model: "2021",
      ram: "16GB",
    },
  };

  const developer2: Developer<{
    model: number;
    ram: number;
    platform: string;
  }> = {
    name: "Rahman",
    age: 23,
    computer: {
      model: 2021,
      ram: 16,
      platform: "Windows",
    },
  };
}
