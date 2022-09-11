// let obj1={

// };
// console.log(obj1);
//ADDING PROPERTIES:
// obj1.add('id',1);
// obj1.id=1;
// console.log(obj1);

// try{
//     // obj1.add('id',1); 
//     obj1.id=1;
//     console.log(obj1);
//     delete obj1.id;
//     obj1.sid=1;
//     obj1.name='shiva';
//     obj1.address='KTM';
//     console.log(obj1);
//     console.log(`${obj1.sid}, ${obj1.name}, ${obj1.address}`);
// }catch(e){
//     console.log(`ERROR : ${e}`);
// }

// EXAMPLE : 2
// NESTED 

// object2={
//     sid:1,
//     name:'SHIVA',
//     address:'KTM',
//     phones:{
//         res:1234,
//         mbl:34567
//     }
// };

// console.log(object2);
// console.log(object2.phones);
// console.log(`${object2.sid}, ${object2.name}, ${object2.address}, ${object2.phones.res}`);

// TASK ----> 
// ------> 1. esewa.html file create....
//create two object.... reduce the totalAmount.... 
//2. transfer....
//3. sending object.... receiving object....

// Traversing Object

obj3={
    id:1,
    name:'shiva',
    adress:'POKHARA',
};

for(key in obj3){
    // console.log(key);
}

for(key in obj3){
    // console.log(obj3[key]);
}

// console.log(Object.keys(obj3)); 
// console.log(Object.values(obj3)); 

let keys=Object.keys(obj3);
// console.log(keys);

//1
for(let i=0; i<keys.length; i++){
    // console.log(keys[i]);
    // console.log(obj3[key[i]]);
}

//2
for( key in keys){
    // console.log(keys[key]);
}

// ? Nested Object ?

// const person={
//     id:1,
//     name:'shiva chapagain',
//     age:23,
//     address:{
//         tole:'jamal',
//         ward:1,
//         mpc:'KTM',
//         district:'KTM'
//     },
// }

// console.log(`${person.id}, ${person.name}, ${person.age}, ${person.address.tole}, ${person.address.ward}, ${person.address.mpc}, ${person.address.district}`);

// let {id, name, age, address} =person;
// let { tole, ward, mpc, district}= address;
// console.log(tole, ward, mpc, district);
// console.log(id, name, age, address);

const person={
    id:1,
    name:'shiva chapagain',
    age:23,
}

// const tempPerson2= person;
// tempPerson2.id=2;
// console.log(person);
// let tempPerson2= {};
// tempPerson2.id=person.id;
// tempPerson2.name=person.name;
// console.log(tempPerson2);
// tempPerson2.id=55;
// console.log(tempPerson2);
// console.log(person);

///////////////////////////////

const tempPerson3={};
for(let key in person){
    tempPerson3[key]=person[key];
}

console.log(person);
console.log(tempPerson3);
tempPerson3.id=77;

console.log(tempPerson3);

//copy by value and reference ---->
//Object.assign ---->



