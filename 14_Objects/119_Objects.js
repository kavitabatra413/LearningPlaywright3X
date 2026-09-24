const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);//{ name: 'John', age: 30, email: 'john@example.com' }

// Accessing properties
console.log(user.name);//John
console.log(user["age"]);//30

// Adding/modifying properties
user.city = "NYC";
user.age = 31;

console.log(user);//{ name: 'John', age: 31, email: 'john@example.com', city: 'NYC' }

let user1 = {
    name: "kavita",
    age: 48,
    email: "kavita@example.com"
};
console.log(user1);//{ name: 'kavita', age: 48, email: 'kavita@example.com' }

user1.city = "NYC";
user1.age = 31;
console.log(user1);{ name: 'kavita', age: 31, email: 'kavita@example.com', city: 'NYC' }