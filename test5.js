// let a = new Object();
// a["age"]  = 10;
// Object.seal(a);
// a.age = 20;
// console.log(a.age);
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
    