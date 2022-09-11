class student {
    sid = null;
    fname = null;
    // stdt = null;
    // sub1 = null;
    // sub2 = null;
    // sub3 = null;
    total = 0;
    constructor(sid, fname, sub1, sub2, sub3) {
        this.sid = sid;
        this.fname = fname;
        this.sub1 = sub1;
        this.sub2 = sub2;
        this.sub3 = sub3;

        // this.total = total;
    }
    // getter
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
    getFname() {
        return this.fname;
    }
    /* getStdt() {
         return this.stdt;
     }*/
    getTotal() {
        return this.total;
    }
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
    setFname(fname) {
        this.fname = fname;
    }
    /* setStdt(stdt) {
         this.stdt = stdt;
     }*/
    setTotal(total) {
        this.total = total;
    }
    toString() {
        return (this.sub1 + ',' + this.sub2 + ',' + this.sub3 + ',' + this.sid + ',' + this.fname + ',' + this.total);
    }
}
class processStudent {
    stud = new student();
    constructor(stud) {
        this.stud = stud;
    }
    // getter
    getStud() {
        return this.stud;
    }

    //setter
    setStud(stud) {
        this.stud = stud;
    }
    calcTotal() {
        var temp = (this.stud.getSub1() + this.stud.getSub2() + this.stud.getSub3());
        this.stud.setTotal(temp);
    }


}                           