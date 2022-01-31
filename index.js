// console.log("Hello");

// object create 

let person = {
    first_name : "Nirav",
    last_name : "Lakhani",
    age: 25
}

// console.log(person);
// console.log(person.last_name);

// person.last_name = "Ganeshbhai";
// console.log(person.last_name);

let person2 = new Object({
    first_name : "Nirav",
    last_name : "Lakhani",
    age: 25
});


// console.log(person2);
// console.log(person2.last_name);

// person2.last_name = "Ganeshbhai";
// console.log(person2.last_name);

// freeze keyword

let person_const = Object.freeze({
    first_name : "Nirav",
});

// person_const.first_name = "Nayan"; freeze New Value Reasign nthi krva detu

// console.log(person_const.first_name);

const db = Object({
    host : "localhost",
    username : "root",
    password : 123
});

// db.freeze = "Nayan"; freeze New Value Reasign nthi krva detu

// console.log(db.host);
// console.log(Object.keys(db));
// console.log(Object.values(db));
// console.log(db.hasOwnProperty('host'));

// Object assign property

Object.assign(db,{
    db_name: "test",
    db_connection: 10
});

console.log(db);

// Object create 3 Method

const test = Object.create({});

test.abc ="Nirav";
console.log(test);