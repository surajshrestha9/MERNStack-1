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