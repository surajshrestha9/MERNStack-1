module.exports ={
    f1:function(){
        return "Hello";
    },
    calcTotal: function(num1, nun2){
        return num2+num2;
    },
    calcSum: function(...nums){
        // console.log(nums.length);
        var sum=0;
        for(var i in nums){
            var tmp = Number(nums[i]);
            console.log(typeof tmp);
        }
    },
    //recrusive functin?
    calcFact: function(num){
        if(num==1){
            return 1
        }
        else{
            return num * calcFact(num-1);
        }
    },
};

/*
var f1= function(){
    console.log("Hello");
}
var f2=function(num1, num2){
    return num1+num2;
}
var f3 = function(num1, num2){
    if(num1>=num2)
        return num1-num2;
    else
        return num2-num1;
}
var f4 = function(num1, num2){
    return num1/num2;
}
var f5 = function(num1, num2){
    return num1 % num2;
}
var f6 = function(num1, num2){
    //calculate and return power of num1 to num2
    return Math.pow(num1, num2);
}
var f7 = function(num1){
    //calculate the square root of num1
    return Math.sqrt(num1);
}
}
//module.exports = {f1, f2, f3, f4, f5, f6, f7};
*/