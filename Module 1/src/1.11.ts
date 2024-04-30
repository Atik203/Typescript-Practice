/*
 * Title: Ternary, Optional Chaining & Nullish Coalescing Operator
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 30-04-2024
 */

{
  const user = {
    name: "John",
    age: 25,
    address: {
      city: "New York",
      country: "USA",
    },
  };

  const cityName = user.address?.city ?? "Unknown";
  const countryName = user.address?.country ?? "Unknown";

  console.log(`City: ${cityName}`);
  console.log(`Country: ${countryName}`);

  const isAuthenticated = null;

  const result = isAuthenticated ?? "Guest";

  console.log(result);
}
