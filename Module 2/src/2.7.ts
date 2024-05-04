/*
 * Title: generics and constraints in typescript with keyof operator
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 04-05-2024
 */
{
  interface vehicle {
    car: string;
    bike: string;
    plane: string;
  }

  type Owner = "car" | "bike" | "plane"; // manually define the type

  type OwnerType = keyof vehicle; // get the type from the interface

  const getOwner = <T extends keyof vehicle>(owner: T): T => {
    return owner;
  };

  const owner = getOwner("car");
  console.log(owner);

  const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
  };

  const obj = {
    name: "Atik",
    age: 25,
  };

  const name = getProperty(obj, "name");
  console.log(name);
}
