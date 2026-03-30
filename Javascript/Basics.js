const userInfo = {
  username: "Harshit",
  age: 18,
  email: "sharma.harshit.0008@gmail.com",
};

const user2Info = { ...userInfo, username: "Woody" };

const { usernamename, age } = userInfo;

const lst = [10, 20, 30];
const res = lst.map((n) => {
  return n + 10;
});
console.log(res);
