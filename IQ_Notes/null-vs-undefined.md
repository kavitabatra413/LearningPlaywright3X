# Null vs Undefined

## Comparison Table

| Feature | null | undefined |
|---|---|---|
| Meaning | Intentionally assigned no value | Value has not been assigned yet |
| Intent | Used by programmer on purpose | Usually happens by default |
| Example | `let name = null;` | `let name;` |
| Type | `object` in JavaScript | `undefined` |
| Typical use | Means “empty” or “no value” | Means “not initialized” |

## Simple Example

```js
let a = null;
let b;

console.log(a); // null
console.log(b); // undefined
```

## Breakdown

| Code | Result | Explanation |
|---|---|---|
| `let a = null;` | `null` | A variable is intentionally set to no value |
| `let b;` | `undefined` | A variable is declared but no value is assigned |

## In Short

- `null` means “deliberately empty.”
- `undefined` means “not assigned yet.”

A simple way to remember it:

- `null` = you chose nothing
- `undefined` = JavaScript has not given a value yet
