const countTotalSalary = employees => {
  const arrOfValues = Object.values(employees);
  let value = 0;
  for (let i = 0; i < arrOfValues.length; i++) {
    value += arrOfValues[i];
  }
  return value;
};
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400
