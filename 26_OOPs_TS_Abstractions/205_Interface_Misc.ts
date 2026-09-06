interface StringDictionary {
    [key: string]: string;
}
//"This object can have any string key, 
// and the value of every key must be a string."

const dict: StringDictionary = {
    hello: "world", // both key and value are string
    foo: "bar"
};