class student {
    sid = null;
    fullname = null;
    std = null;
    sub1 = null;
    sub2 = null;
    sub3 = null;
    total = null;
    /*  average = null;
      result = null;
      grade = null;
      */
    constructor(sub1, sub2, sub3) {         //constructor

        this.sub1 = sub1;
        this.sub2 = sub2;
        this.sub3 = sub3;
        this.sid = 0;
        this.fullname = 0;
        this.std = 0;
        this.total = 0;
        /* this.average = 0;
         this.result = 0;
         this.grade = 0;*/
    }
    //getter 

    getSub1() {
        return this.sub1;
    }
    getSub2() {
        return this.sub2;
    }
    getSub3() {
        return this.sub3;
    }
    getSid() {
        return this.sid;
    }
    getFullname() {
        return this.fullname;
    }
    getStd() {
        return this.std;
    }

    getTotal() {
        return this.total;
    }/*
    getAverage() {
        return this.average;
    }
    getResult() {
        return this.result;
    }
    getGrade() {
        return this.grade;
    }*/
    //setter

    setSub1(sub1) {
        this.sub1 = sub1;
    }
    setSub2(sub2) {
        this.sub2 = sub2;
    }
    setSub3(sub3) {
        this.sub3 = sub3;
    }
    setSid(sid) {
        this.sid = sid;
    }
    setFullname(fullname) {
        this.fullname = fullname;
    }
    setStd(std) {
        this.std = std;
    }

    setTotal(total) {
        this.total = total;
    }/*
    setAverage(average) {
        this.average = average;
    }
    setResult(result) {
        this.result = result;
    }
    setGrade(grade) {
        this.grade = grade;
    }*/
    //tostring
    tostring() {
        return (this.sid + ',' + this.fullname + ',' + this.std + ',' + this.sub1 + ',' + this.sub2 + ',' + this.sub3 + ',' + this.total /*+ ',' + this.average + ',' + this.result + ',' + this.grade*/);
    }

}
class processStudent {
    student1 = new student();
    construtor(student1) {
        this.student1 = student1;

    }

    getStudent1() {
        return this.student1;
    }
    setStudent1(student1) {
        this.student1 = student1;

    }


    // calculate total
    calcTotal() {
        this.tmpResult = (this.student1.getSub1() + this.student1.getSub2() + this.student1.getSub3());
        this.student1.setTotal(this.tmpResult);
        console.log(this.tmpResult)
    }
    /*
    // calculate average
    calcAverage() {
        this.student1.setAverage(student1.getTotal() / 3);
    }
    //calculate result
    calcResult() {
        //calculate result
    }

    //calculate grade
    calcGrade() {

    }*/
}