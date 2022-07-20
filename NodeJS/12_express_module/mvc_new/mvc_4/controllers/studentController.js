const allStudent=(request, response) => {  //  /students/all- is a controller
    response.send("<h1>All students</h1>");//database
};
const deleteStudent= (request, response) => {
    var {id}=request.params
    // response.send("<h1>record no: ${request.params.id} delete sucessfully</h1>");
    response.send("<h1>record no: ${id} delete sucessfully</h1>");
};
export {allStudent,deleteStudent}