const findBestEmployee = employees => {
    const arr = Object.entries(employees);
  let result = 0;
  let name;
  for (let [key, value] of arr) {
    if ([value] > result) {
      result = value;
      name = [key];
    }
  }
  return `The best employee is: ${name}, and the result is:  ${result}, congratulations! `;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
