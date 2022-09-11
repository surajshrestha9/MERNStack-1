// window.alert('HELLO';  //Uncaught SyntaxError: missing ) after argument list (at error.js:1:14)
// window.alert('HELLO);  //Uncaught SyntaxError: Invalid or unexpected token (at error.js:2:14)
//sigin up in satckoverflow....solve and post problem

//runtime error
// window.show(); //Uncaught TypeError: window.show is not a function
// at error.js:6:8

// LOGICAL ERROR....
//add two numbers
// let n1=9, n2=9, n3=null;
// n3=n1*n2;
// console.log(n3); 

//ERROR HANDLING
//declare....
//try{
    //input , process, output
//}catch(e){
    //[error message]
//}finally{
    //free(declare) .. memory free
//}

// let num1=null;
// let num2=null;
// let result=null;
// try{
//     num1=4;
//     num2=0;
//     result=num1 / num2;
//     console.log(result);
// } catch(e){
//     console.log(e.name +':'+ e.message);
//     // console.log(e.message);
// } finally{
//     // console.log(result);
//     num1=null;
//     num2=null;
// }

// let sum=(a,b)=>a+b;

// try{
//     let result=sum(10,20);
//     document.getElementById('message').innerHTML=result;
//     console.log(result);
// }catch(e){
//     document.getElementById('message').innerHTML=e;
//     console.log(e.name + ' // ' + e.message);
// }
// //finally{
// //     document.getElementById('message').innerHTML='FINALLY BLOCKED EXECUTED';
// // }


//throw

//do implement if/else and .....
// try{
//     throw `ERROR OCCURRED`;
// }catch(e){
//     alert(e);
// }

//HOMEWORK
// n1---text box; 10 only takes input 1-10 btn....
//n2--- text box; 20 11-20
//add btn // USE... USER DEFINED EXCEPTION
//result // 30
//error message...
//crusor wont move untill correct each....field.....