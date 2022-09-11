/*var calculator = function (num1 = 0, num2 = 0) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = 0; //result

    //getter,seterr, and tostring

    //properties
    Object.defineProperties(this, {
        "firstNum": {
            get: function () { //getter
                return this.num1;
            },
            set: function (num1) {
                this.num1 = num1;
            }
        },
        "secondNum": {
            get: function () {
                return this.num2;
            },
            set: function (num2) {
                this.num2 = num2;
            }
        },
        "result": {
            get: function () {
                return this.num3;
            }
        }
    });
    this.add = function () {
        this.num3 = this.num1 + this.num2;
    }

}*/
//new class new version javascript
class calculatorV2 {
    //instance variable
    num1 = null;
    num2 = null;
    num3 = null;
    constructor(num1, num2) {
        //constructor
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = 0;
    }
    // getter
    getNum1() {
        return this.num1;
    }
    getNum2() {
        return this.num2;
    }
    getNum3() {
        return this.num3;
    }
    //setter
    setNum1(num1) {
        this.num1 = num1;

    }
    setNum2(num2) {
        this.num2 = num2;
    }
    setNum3(num3) {
        this.num3 = num3;
    }
    tostring() {
        return (this.num1 + '' + this.num2 + '' + this.num3);
    }
}
//controller class
class myCalculator {
    calcV2 = new calculatorV2();
    //constructor
    constructor(calcV2) {
        this.calcV2 = calcV2;
    }
    //getters
    getCalcV2() {
        return this.calcV2;
    }
    //setters
    setCalcV2(calcV2) {
        this.calcV2 = calcV2;
    }

    //tostring
    //methods-processing
    sum() {
        var tmpResult = this.calcV2.getNum1() + this.calcV2.getNum2();
        this.calcV2.setNum3(tmpResult);
    }

}

class student {
    sid =null;
    fullname=null;
    std = null;
    section = null;
    sub1 = null;
    sub2 = null;
    sub3 = null;
    total = null;
    average = null;
    result = null;
    grade = null;

     constructor(sid, fullname, std , section , sub1,sub2,sub3){
         this.sid = sid;
         this.fullname = fullname;
         this.std=std;
         this.section = section;
         this.sub1 = sub1;
         this.sub2 = sub2;
         this.sub3 = sub3;
         this.total = 0;
         this.average = 0;
         this.grade = 0;
     }
     getSub1(){
         return this.sub1;
     }
     
    getSub2(){
        return this.sub2;
    }
    getSub3(){
        return this.sub3;
    }
    getTotal(){
        return this.total;
    }
    getAverage(){
        return this.average;
    }
    getGrade(){
        return this.grade;
    }

    setSub1(){
       this.sub1= sub1; 
    }
    setSub2(){
        this.sub2= sub2; 
     }
     setSub3(){
        this.sub3= sub3; 
     }
     setTotal(){
        this.Total = total; 
     }
     setAverage(){
        this.average= average; 
     }
     setGrade(){
        this.grade= grade; 
     }


    
    
}

class processStudent{
    student1 = null;
    constructor(student1){
        this.student1 = student1;

    }
    setStudent(student1){
        this.student1=student1;
    }
    getStudent(){
        return this.student1;
    }
    //calculateTotal
    calcTotal(){
        var tempResult1= this.student1.getsub1() + this.student1.getsub2() +this.student1.getsub3();
        this.student1.setTotal(tempResult1);
    }

}