const table  = [1,4,7,5,8,6,3,2,9];
console.log(table);
console.log(table.sort()); //ta bazei me thn seira
console.log("----------------");
table.forEach(p=>{ // ektypvnei kathe stoixeio tou pinaka
    console.log(p);
});
console.log("----------------");
table.map(p=>{ // ektypvnei kathe stoixeio tou pinaka
    console.log(p+5);

});
const x = table.map(p=>{ // ektypvnei kathe stoixeio tou pinaka

    return p+5;
});
console.log(x);
console.log("----------------");
const myNumber = x.find(i=>i==12);
console.log("----------------");
console.log("M number is: " + myNumber);
const selectedNumbers = x.filter(i=> i > 12 || i < 7);
console.log(selectedNumbers);


