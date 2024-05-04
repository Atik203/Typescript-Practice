/*
 * Title: Constraints  in typescript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 04-05-2024
 */
{
  const addStudent = <T extends { name: string; age: number }>(
    student: T
  ): T => {
    return student;
  };
  const student = addStudent({ name: "Atik", age: 24 });
  console.log(student);
}
