// var process = function(obj){     //-->obj is tmpcalc-->calc
//     obj.total=Number(obj.num1)+Number(obj.num2);
//     return obj;   //returns address    //pass by reference--->generally return nagari value aauxa-->overcome it
// }
var process = function(strCalc){    
    objCalc=JSON.parse(strCalc);    //json to obj
    objCalc.total=Number(objCalc.num1)+Number(objCalc.num2);//processing
    tmpCalc=JSON.stringify(objCalc);//object to json string
    return tmpCalc;   //returns json string               
}