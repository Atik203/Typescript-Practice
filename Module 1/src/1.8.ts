/*
 * Title: Destructuring in TypeScript
 * Description: This code snippet is for the destructuring in TypeScript
 * Author: Md. Atikur Rahaman
 * Date: 30-04-2024
 */
{
  const user = {
    id: 15,
    name: {
      firstName: "Atikur",
      lastName: "Rahaman",
    },
    email: "atikurrahaman0305@gmail.com",
  };

  const {
    email,
    name: { firstName },
  } = user;
}
