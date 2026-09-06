// Abstraction 
// Interface
// ENUms
// Abstract class

//Interface does not create an object. 
//It describes what a User object should look like.
//Think of it as a blueprint.
interface User {
  name: string;
  age: number;
  email: string;
}

//Yes. ✅ user1 is an object.
const user1: User = {
    name: "John",
    age :  30,
    email: "abc@gmail.com"
}

const user2: User = {
    name: "John2",
    age : 56,
    email: "abc@gmail.com"
}

const user3: User = {
    name: "John3",
    age : 23,
    email: "abc@gmail.com"
}

