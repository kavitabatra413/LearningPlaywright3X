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
console.log(counter.get());
counter.decrement();
console.log(counter.get());

//increment(); //ReferenceError: increment is not defined