import express from 'express'
const router=express.Router();

router.get('/all',(request,response)=>{  //  /person/all- is a controller
    response.send("<h1>All Persons</h1>");//database
});
router.get('/delete/:id',(request,response)=>{
    response.send(`<h1>record no: ${request.params.id} delete sucessfully</h1>`);
});
export default router