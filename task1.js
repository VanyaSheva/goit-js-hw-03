const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};
const changeUserParam = () => {
  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = "false";
  return user;
};
console.log(changeUserParam());

let keys = Object.keys(user);

for (let key of keys) {
  console.log(`key: ${key}, value: ${user[key]}`);
}
