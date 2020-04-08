const required = function (params) {
  throw new Error(`
        ${params} is not defined
    `);
};

const Division = function (a = required("a"), b = required("b")) {
  return a / b;
};

console.log(Division(2, 4));
