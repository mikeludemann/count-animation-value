# Count Animation Value

A count animation value by number

## Example

```JS
let doc = document.getElementById('Test');

// Up

let counter = new count(1, 100, 10, doc);

// Down

let counter = new count(100, 1, 10, doc);

counter.running();
```