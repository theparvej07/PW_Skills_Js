let obj = { id: 202, name: "alex", salery: 100000 }
let emp = new Object();
emp.id = 102;
emp.name = "carry";
console.log(emp);
console.log(obj);

function Emp(i, n, s) {
    this.id = i;
    this.name = n;
    this.salery = s;
}

const e = new Emp(103, "anee", 12000);
console.log(e);