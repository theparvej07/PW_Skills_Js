let emp = {
    id: 303,
    name: 'parvej',
    age: 22
};

let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values)

let entries = Object.entries(emp);
console.log(entries);

Object.seal(emp);
emp.id = 100;
console.log(emp);

let o = Object.assign({}, emp);
console.log(o);