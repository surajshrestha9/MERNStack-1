<<<<<<< HEAD
var calculate=function(opr,num1,num2){
    if (opr=='/add'){
        return num1+num2;
    }
    else if (opr=='/sub'){
        if(num1>=num2){return num1+num2;}
        else{return num1+num2;}
    }
    else if (opr=='/mul'){
        return num1*num2;
    }
    else if (opr=='/div'){
        return num1/num2;
    }
    else if (opr=='/mod'){
        return num1%num2;
    }
    else{console.log("null")}
    
}
module.exports={calculate}
=======
var calculate = function(opr, num1, num2){
    if(opr == '/add'){
        return num1+num2;
    }
    else if(opr == '/sub'){
        if(num1>=num2)
            return num1-num2;
        else{
            return num2-num1;
        }
    }
}
module.exports = {calculate};
>>>>>>> 0c8c2cc7d79916c7a029e1ab3130cae236d06de9
