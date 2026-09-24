function makeCounter(start = 0) {
    let count = start; 
    return {
        increment(){ count++;}, //increment is not created as standalone function
        decrement() { count--; },
        get() { return count; }
    };
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());//3
counter.decrement();
console.log(counter.get());//2

//increment(); //ReferenceError: increment is not defined