class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
    foo(){
        console.log("Foo Called!");
    }
}
class Dog extends Animal {
    constructor(name, breed1) {
        super(name); //. It is used for the parent constructor.
        this.breed = breed1;
    }
    bark() {
        super.foo();
        console.log(this.name, " is barking!")
    }
}
let dog = new Dog("Rex", "Labrador");
dog.eat();
dog.sleep();
dog.bark();
console.log(dog.breed);
