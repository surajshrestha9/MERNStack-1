
class Student{
    sid=null;
    fullName=null;
    std=null;
    section=null;
    sub1=null;
    sub2=null;
    sub3=null;
    average=null;
    result=null;
    grade=null;

    //constructor
    constructor(sid,fullName,std,section,sub1,sub2,sub3,average,result,grade){
        this.sid=sid;
        this.fullName=fullName;
        this.std=std;
        this.section=section;
        this.sub1=sub1;
        this.sub2=sub2;
        this.sub3=sub3;
        this.average=average;
        this.result=result;
        this.grade=grade;
    }

    //getter
    getSid(){
        return this.sid;
    }
    getFullName(){
        return this.fullName;
    }
    getStd(){
        return this.std;
    }
    getSection(){
        return this.section;
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
    getAverage(){
        return this.average;
    }
    getResult(){
        return this.result;
    }
    getGrade(){
        return this.grade;
    }

    //setter
    setSid(sid){
        this.sid=sid;
    }
    setFullName(fullName){
        this.fullName=fullName;
    }
    setStd(std){
        this.std=std;
    }
    setSection(section){
        this.section=section;
    }
    setSub1(sub1){
        this.sub1=sub1;
    }
    setSub2(sub2){
        this.sub2=sub2
    }
    setSub3(sub3){
        this.sub3=sub3;
    }
    setAverage(average){
        this.average=average;
    }
    setResult(result){
        this.result=result;
    }
    setGrade(grade){
        this.grade=grade;
    }

    //toString();
    toString(){
        return (this.sid + this.fullName + this.std + this.section + this.sub1 + this.sub2 + this.sub3 +
            this.average + this.result + this.grade);
    }
}
// let student1=new Student(1,'shiva','bachelor','BE',66,77,88,444,'pass','A+');
// console.log(student1);

class ProcessStudent{
    // student1=null;
    // student1= new student1();
    
    constructor(student1){
        this.student1=student1;
    }
    setStudent(student1){
        this.student1=student1;
    }
    getStudent(){
        return this.student1;
    }
    
    // //calculate total
    // calcTotal(){
    //     // student1.setNum3(student1.getSub1()+ student1.getSub2()+ student.getSub3());
    //     // let totalMarks=(this.student1.getSub1()+this.student1.getSub2()+ this.student1.getSub3)/3;
    //     // this.student1.setAverage(totalMarks);

    // }

    //calculate average
    calcAverage(){
        //student1.setAverage(student1.getTotal()/3);
        let totalMarks=(this.student1.getSub1()+this.student1.getSub2()+ this.student1.getSub3())/3;
        this.student1.setAverage(totalMarks);
        // return totalMarks;
    }

    //calculate result
    calcResult(){
        //student1.setResult()
        //calculate result
        let PM=40;
        let result= (this.student1.getSub1() > PM && this.student1.getSub2() > PM && this.student1.getSub3() > PM) ? 'PASS': 'FAIL';
        this.student1.setResult(result);
    }

    //calculate grade
    calcGrade(){
        let PM=40;
        let result= (this.student1.getSub1() > PM && this.student1.getSub2() > PM && this.student1.getSub3() > PM) ? 'PASS': 'FAIL';
        let totalMarks=(this.student1.getSub1()+this.student1.getSub2()+ this.student1.getSub3())/3;
        if(result=='PASS'){
            if(totalMarks>90){
                this.student1.setGrade('A+');
            }else{
                this.student1.setGrade('Other');
            }
        }else{
            this.student1.setGrade('FAIL');
        }
    }
}

let student1=new Student(1,'shiva','bachelor','BE',96,97,9,444);

let processData= new ProcessStudent(student1);

processData.calcAverage();
processData.calcResult();
processData.calcGrade();
console.log(student1);


