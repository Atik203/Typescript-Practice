/*
 * Title: Type alias in typescript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 30-04-2024
 */
{
  type Student = {
    name: string;
    age: number;
    grade: string;
  };

  const student1: Student = {
    name: "Atik",
    age: 22,
    grade: "A",
  };

  const student2: Student = {
    name: "Rahim",
    age: 20,
    grade: "B",
  };
}
