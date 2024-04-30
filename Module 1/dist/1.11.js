"use strict";
/*
 * Title: Ternary, Optional Chaining & Nullish Coalescing Operator
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 30-04-2024
 */
var _a, _b, _c, _d;
{
    const user = {
        name: "John",
        age: 25,
        address: {
            city: "New York",
            country: "USA",
        },
    };
    const cityName = (_b = (_a = user.address) === null || _a === void 0 ? void 0 : _a.city) !== null && _b !== void 0 ? _b : "Unknown";
    const countryName = (_d = (_c = user.address) === null || _c === void 0 ? void 0 : _c.country) !== null && _d !== void 0 ? _d : "Unknown";
    console.log(`City: ${cityName}`);
    console.log(`Country: ${countryName}`);
    const isAuthenticated = null;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    console.log(result);
}
