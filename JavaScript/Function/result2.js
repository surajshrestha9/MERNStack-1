function process(sid,name,standard,sub1,sub2,sub3,sub4){   //receive garda sid nai hunuparxa bhanne jaruri chaina
    // return sid,name;  //for single value return
    // for multiple value return
    var total=calcTotal(sub1,sub2,sub3,sub4);
    // var average=total/4;
    const PM =40;
    var result="FAIL";
    if ((sub1>=PM && sub2>=PM &&sub3>=PM &&sub4>=PM)){
        
        result="PASS";
    }
    var result=calcResult(sub1,sub2,sub3,sub4);
    var grade=calcGrade(result,average);
    //     //grade
    // var grade="Other"
    // if (result=='PASS'){
    //     if(average>=90){
    //         grade="A+";
    //     }
    //     else if((average>=75 && average<90)){
    //         grade="B+";
    //     }
    //     else if((average>=60 && average<75)){
    //         grade="B";
    //     }
    //     else if((average>=50 && average<60)){
    //         grade="C+";
    //     }
    }
    obj={
        // key:value
        stu_id:sid,
        stu_name:name,
        stu_standard:standard,
        stu_total:total,
        stu_avg:average,
        stu_result:result,
        stu_grade:grade
    };
    return obj;


function calcTotal(sub1,sub2,sub3,sub4){
    return sub1+sub2+sub3+sub4;
}
function calcAverage(total,subjects){
    return total/subjects;
}
function calcResult(sub1,sub2,sub3,sub4){
    const PM =40;
    var result="FAIL";
    if ((sub1>=PM && sub2>=PM &&sub3>=PM &&sub4>=PM)){
        
        result="PASS";
    }
    return result;
}
function calcGrade(){
    var grade="Other"
    if (result=='PASS'){
        if(average>=90){
            grade="A+";
        }
        else if((average>=75 && average<90)){
            grade="B+";
        }
        else if((average>=60 && average<75)){
            grade="B";
        }
        else if((average>=50 && average<60)){
            grade="C+";
        }
}
return grade;
}