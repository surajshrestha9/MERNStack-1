// //pass by reference
// let process = function (tmpCalc) {
//   tmpCalc.sum = Number(tmpCalc.num1) + Number(tmpCalc.num2);
//   return tmpCalc;
// };

//pass by value....
let process = function (strCalc) {
  objCalc = JSON.parse(strCalc); //json string to object
  objCalc.sum = Number(objCalc.num1) + Number(objCalc.num2); //process
  tmpCalc = JSON.stringify(objCalc); //object to json string...
  return tmpCalc; //return json string....
};
