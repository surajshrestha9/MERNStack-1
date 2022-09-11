<<<<<<< HEAD
<<<<<<< HEAD
import { insertRecord, getAll } from "../databases/mongo_client.js";

var homeController =  (request, response) => {
    var objPersons= getAll();
    response.render('home',{objPersons});  //display all persons in  home.ejs
};
var formController = (request, response) => {
    response.render('addnew');
};
var saveController = (request, response) => {  
    //you may write database code here
    // receive values

    var {txtname, txtAddress}=request.query;
    console.log(txtname,txtAddress)
    // send to mongo_client ->saveRecord()
    // var res=insertRecord({name:txtname,address:txtAddress})
    var obj1={name:txtname,address:txtAddress}
    var res= insertRecord(obj1)
    // receive result and redirect to view
    console.log(res)
    if(res){
        response.send('save record successfully');
    }
    else{
        response.send('error to send record')
=======
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
import { insertRecord, getAll } from '../databases/mongo_client.js';

var homeController = (request, response) => {
    async function func1() {
        var result = await getAll();
        console.log(result);
        response.render('home', { persons: result });//display all persons in home.ejs.
    }
};

var formController = (request, response) => {
    response.render('addnew');
};

var saveController = (request, response) => {
    //receive values
    var { txtName, txtAddress } = request.query;
    console.log(txtName, txtAddress);
    //send to mongo_client-> saveRecord()
    var obj1 = { name: txtName, address: txtAddress };
    var res = insertRecord(obj1);
    //receive result and redirect to view
    console.log(obj1);
    if (res) {
        response.send('Save record successfully!');
    }
    else {
        response.send('Error to save record.');
<<<<<<< HEAD
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    }
};

export { homeController, formController, saveController };