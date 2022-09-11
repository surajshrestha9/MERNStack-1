var f1=function(tmpObj){
    tmpObj.id=9;
}

var f2=function(tmpObj){
    var tmp={};
    for(let key in tmpObj){
        tmp.key=tmpObj[key];
    }
    tmp.id=89;
    return tmp;
}