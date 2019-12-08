const countProps = (obj) =>{
const arrOfProp = Object.keys(obj);
return arrOfProp.length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

console.log(countProps({ name: 'Mango', age: 2, mail: 'poly@mail.com', isOnline: true, score: 500 })); // 5
