const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const getAllPropValues = (arr, prop) => {
  let propArray = [];
  for (let product of products){
    if (prop in product ) {
      propArray.push(product[prop]);
    }
  }
  return propArray;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "price")); // [1300, 2700, 400, 1200]

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
