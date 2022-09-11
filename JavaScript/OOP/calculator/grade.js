var processStudent=function(tmpMarks){
    //console.log(tmpMarks);
    var tmpTotal = Number(tmpMarks.sub1)+ Number(tmpMarks.sub2);
    console.log(tmpTotal);
    tmpMarks.total=tmpTotal; // adding property
    return tmpMarks;
}

var processStudentV2=function(tmpMarks){
    //console.log(tmpMarks);
    var tmpTotal = Number(tmpMarks.sub1)+ Number(tmpMarks.sub2);
    console.log(tmpTotal);
    tmpMarks.total=tmpTotal; // adding property
}