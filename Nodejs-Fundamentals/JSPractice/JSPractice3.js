console.log("Fetching data from db");
let user;
setTimeout(() => {
    user ={name:"Tanisha", phonw:"297438", address:"mathura"};
    console.log("setTimeout task");
}, 0);

console.log(uaer);
Promise.resolve(() => console.log("task3"));

const fetchUser = (UserId) => {
  return new Promise((resolve, reject) => {
    const users = {
      1: { name: "Tanisha", phone: "297438", address: "mathura" },
      2: { name: "Amit", phone: "123456", address: "delhi" }
    };
    const found = users[UserId];
    if (found) resolve(found);
    else reject("User not found");
  });
};