
var calculator=function(num1=0, num2=0){
	this.num1=num1;
	this.num2=num2;
	this.num3=0; //result

	//getter, setter,  toString...
	//Properties...
	Object.defineProperties(this, {
		'firstNo':{
			get: function(){ //getter
				return this.num1;
			},
			set:function(num1){
				this.num1=num1;
			}
		},
		'secondNo':{
			get:function(){
				return this.num2;
			},
			set:function(num2){
				this.num2=num2;
			}
		},
		'result':{
			get:function(){
				return this.num3;
			},
		}
	});

	this.add=function(){
		this.num3=this.num1+this.num2;
		return this.num3;
	}
}

//new class
class calculatorV2{
	//instance variable
	num1=null;
	num2=null;
	num3=null;
	//constructor
	constructor(num1,num2){
		this.num1=num1;
		this.num2=num2;
		this.num3=0;
	}
	//getter
	getNum1(){
		return this.num1;
	}
	getNum2(){
		return this.num2;
	}
	getNum3(){
		return this.num3;
	}
	//setter
	setNum1(num1){
		this.num1=num1;
	}
	setNum2(num2){
		this.num2=num2;
	}
	setNum3(num3){
		this.num3=num3;
	}
	toString(){
		return (this.num1 + ', '+this.num2+ ', '+this.num3);
	}
}

//Controller class
class myCalculator{
	calcV2= new calculatorV2();
	//constructor
	constructor(calcV2){
		this.calcV2=calcV2;
	}
	//getter
	getCalcV2(){
		return this.calcV2;
	}
	//setter
	setCalcV2(calcV2){
		this.calcV2=calcV2;
	}
	//toString
	//methods ---> Processing
	sum(){
		let temResult=this.calcV2.getNum1()+this.calcV2.getNum2();
		this.calcV2.setNum3(temResult);
	}
}