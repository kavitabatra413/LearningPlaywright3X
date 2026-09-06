class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this;
    }

    display() {
        console.log("Count:", this.count);
        return this; //this means the same Counter object.
    }
}
new Counter().increment().increment().increment().display();//method chaining