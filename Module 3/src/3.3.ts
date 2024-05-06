/*
 * Title: Type Guards in TypeScript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 06-05-2024
 */

{
  const add = (a: number | string, b: number | string) => {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }
    throw new Error("Invalid arguments");
  };

  type user = {
    name: string;
  };

  type admin = {
    name: string;
    role: string;
  };

  const printUser = (user: user | admin) => {
    console.log(user.name);
    if ("role" in user) {
      console.log(user.role);
    }
  };

  const user: user = {
    name: "Atik",
  };

  const admin: admin = {
    name: "Atik",
    role: "admin",
  };

  printUser(user);
  printUser(admin);
}
