//js
    //object=>data throw betwn client machine and server machine
    //only variables can be used
// var Person={
// 	//only variable not methods
// 	pid:null,
// 	fullName:null,
// };

/*
//class can use both variables and method
let newPerson=function(){  //its the combine of variable and methods called class.
	//variables
    this.pid=null;
	
	//methods
	this.setPid=function(pid){
		this.pid=pid;
	}
	
	this.getPid=function(){
		return this.pid;
	}
}
*/

/* let newPerson=function(){
	this.pid=null; //instance variable
	this.fullName=null;
	this.address=null; */


// 	//setter
// 	this.setPid=function(pid){
// 		this.pid=pid;
// 	}

// 	this.setfullName=function(fullName){
// 		this.fullName=fullName;
// 	}

// 	this.setAddress=function(address){
// 		this.address=address;
// 	}

// 	//getter
// 	this.getPid=function(){
// 		return this.pid; 
// 	}
// 	this.getfullName=function(){
// 		return this.fullName;
// 	}
// 	this.getAddress=function(){
// 		return this.address;
// 	}
// 	//toString.
// 	this.toString=function(){
// 		return this.pid +' , '+this.fullName+ ' , '+this.address; 
// 	}
// }


//html
    // p1=new person ();//object of the person//new keyword is used for class
    // person.pid=1;
    // person.fname="suraj"
    // console.log(person.pid,person.fname);

	// let p2=new newPerson();
	// p2.setPid(2);
	// console.log(p2.getPid());

	// var p2= new newPerson();
    // p2.setPid(8);
    // console.log(p2.getPid());
    // console.log(p2.getFname());
    // console.log(p2.getAddress());
    // console.log(p2.toString());
    

// let p3=new newPerson();
// p3.setAddress(3);
// p3.setfullName('shiva');
// p3.setAddress('Pokhara');
// console.log(p3.getPid(),p3.getfullName(),p3.getAddress());
// console.log(p3.toString());

// const newPerson=function(pid=0,fullName='',address=''){
// 	this.pid=pid;
// 	this.fullName=fullName;
// 	this.address=address;

// }

// let np1=new newPerson(); //default
// let np2=new newPerson(2);
// let np3=new newPerson(2,'chibu');
// let np4=new newPerson(1,'shiva','ktm');

// console.log(np1);
// console.log(np2);
// console.log(np3);
// // console.log(np4.address);
// // console.log(newPerson.setData());
// np1.setFullName('shibu chapagain');
// console.log(np1.toString());

///////////////////////////////////////////////////////////

// let Calculator=function(num1=0){
// 	this.num1=num1;
// 	//setter
// 	this.setNum1=function(num1){
// 		this.num1=num1;
// 	}
// 	//getter
// 	this.getNum1=function(){
// 		return this.num1;
// 	}
// 	//toString
// 	this.toString=function(){
// 		return this.num1;
// 	}
// }

// let c2=new Calculator();
// c2.setNum1(4);
// console.log(c2.getNum1());
// console.log(c2.toString());

///////////////////////////////////////////////////////////
//HOMEWORK---->ABOUT PROPERTIES...WITHIN THIS CLASS 
//CREATE A CLASS AND MAKE A INSTANCE...
//MAKE SCRIPT AND MAKE OBJ AND CLASS... DO STORE THE INFO IN OBJ AND.... CREATE AND OBJECT AND STORE THE VALUE AND .... ALL HTML FILE AHVE SAME OBJECT VALUE BUT IN DO UPDATE THE VALUE FROM HTML FILE.... AND SHOULD BE CHANGE IN JS FILE....

//AJAX.. FOR AUTO REFRESH...

//DO REVISE OBJECT CLASS AND INSTANCE...

// const Person=function(firstName,birthYear){
// 	this.firstName=firstName;
// 	this.birthYear=birthYear;

// 	//bad practice.
// 	// this.calcAge=function(){
// 	// 	return 2022-this.birthYear; //this is not a prototype.
// 	// }
// };


// Person.prototype.calcAge=function(){
// 	console.log(2022-this.birthYear);
// }


// const jonas=new Person('jonas',2037);
// console.log(jonas); //display the calcAge function...
// const shiva=new Person('shiva',1999);
// const matilda=new Person('matilda',2010);

// console.log(Person.prototype);
// shiva.calcAge();

// // console.log(Person.prototype.isPrototypeOf(shiva));
// Person.prototype.address='kathmandu';
// // console.log(jonas.address,shiva.address);

// console.log(shiva.hasOwnProperty('firstName'));
// console.log(shiva.hasOwnProperty('address'));

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////


// const Car=function(make,speed){
// 	this.make=make;
// 	this.speed=speed;
// };

// Car.prototype.accelerate=function(){
// 	newSpeed=this.speed+=10;
// 	console.log(`${this.make} is going at ${newSpeed}`);
// }

// Car.prototype.brake=function(){
// 	newSpeed=this.speed-=5;
// 	console.log(`${this.make} is going at ${newSpeed}`);
// }

// const tesla=new Car('tesla',50);
// // console.log(tesla);
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//2022-05-26...

const Calculator=function(num1=0, num2=0){
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

// let c1=new Calculator();
// c1.firstNo=9;
// console.log(c1.firstNo);

// c1.secondNo=10;
// console.log(c1.secondNo);

// console.log(c1.result);


let c2=new Calculator(6,7);
// c2.add();
console.log(c2.result);