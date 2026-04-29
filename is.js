is.num = v => typeof v === "number" && !isNaN(v)
is.nan = v => typeof v === "number" && isNaN(v)
is.str = v => typeof v === "string"
is.bool = v => typeof v === "boolean"
is.undef = v => typeof v === "undefined"
is.def = v => typeof v !== "undefined"
is.arr = v => Array.isArray(v)
is.obj = v => typeof v === "object" && !Array.isArray(v)
is.fun = v => typeof v === "function"
is.truthy = v => Boolean(v)
is.falsy = v => !Boolean(v)
// console.log(is.num(5));
// console.log(is.nan(NaN));
// console.log(is.str("hello"));
// console.log(is.bool(true));
// console.log(is.undef(undefined));
// console.log(is.def(10));
// console.log(is.arr([1, 2, 3]));
// console.log(is.obj({ a: 1 }));
// console.log(is.fun(function () {}));
// console.log(is.truthy(1));
// console.log(is.falsy(0));

