/*
 * Title: Conditional Types
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 04-05-2024
 */
{
  type a1 = null;
  type a2 = undefined;

  type x = a1 extends null ? true : false;

  type y = a2 extends undefined ? true : false;

  interface vehicle {
    car: string;
    bike: string;
    plane: string;
  }

  type checkVehicle<T> = T extends keyof vehicle ? true : false;

  type z = checkVehicle<"car">;
}
