// let f1= function(tmpObj){
//     tmpObj.id=99;
// }

// let f2= function(tmpObj){
//     var tmp={};
//     for(key in tmpObj){
//         tmp.key=tmpObj[key];
//     }
//     tmp.id=66;
//     return tmp;
// }

let personData={
    id:1,
    name:'SHIVA',
    age:22,
    address:"PARBAT",
    faculty:'BE'
}

// object to json farmat

console.log('OBJECT TO JSON');
const jsonPersonData= JSON.stringify(personData);
console.log(personData);
console.log(jsonPersonData);

//json to object format...
console.log('JSON TO OBJECT...')
let objectFormat= JSON.parse(jsonPersonData);
console.log(objectFormat);