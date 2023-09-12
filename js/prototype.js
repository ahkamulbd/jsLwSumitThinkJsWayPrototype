// let person = {};

// person.name = 'Ami';
// person.age = 9;
// person.eat = function () {
//     console.log('Person is eating.');
// }
// person.sleep = function () {
//     console.log('Person is sleeping.');
// }

// console.log(person);

/*  ======  Example 2 ====== 
===============================================
let p = function Person(name, age) {
    let person = {};

    // person.name = 'Ami';
    person.name = name;
    // person.age = 9;
    person.age = age;
    person.eat = function () {
        console.log('Person is eating.');
    }
    person.sleep = function () {
        console.log('Person is sleeping.');
    }
    return person;
}
//console.dir(p);

const sakib = Person('Sakib', 35);
const tamim = Person('Tamim', 35);

console.log(sakib.name);
*/

/*  ======  Example 3 ====== */

// const personMethods = {
//     eat() {
//         console.log('Person is eating.');
//     },
//     sleep() {
//         console.log('Person is sleeping.');
//     },
//     play() {
//         console.log('Person is playing.');
//     }
// }

// function Person(name, age) {
//     let person = Object.create(personMethods);

//     person.name = name;
//     person.age = age;

//     return person;
// }
// //console.dir(p);

// const sakib = Person('Sakib', 35);
// const tamim = Person('Tamim', 35);

// sakib.play();


/*  ======  Example 4 ====== */



function Person(name, age) {
    let person = Object.create(Person.prototype);

    person.name = name;
    person.age = age;

    return person;
}
//console.dir(p);
Person.prototype = {
    eat() {
        console.log('Person is eating.');
    },
    sleep() {
        console.log('Person is sleeping.');
    },
    play() {
        console.log('Person is playing.');
    }
}

const sakib = Person('Sakib', 35);
const tamim = Person('Tamim', 35);

sakib.play();


