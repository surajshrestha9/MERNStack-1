import express from 'express' ;
const router=express.Router();

router.get('/all',(request,response)=>{
    response.send("<h1>display all news</h1>");

});
router.get('/1',(request,response)=>{
    response.send("<h1>search based on id</h1>");

});
router.get('/title',(request,response)=>{
    response.send("<h1>search based on title</h1>");

});
router.get('/update/1/title/contents',(request,response)=>{
    response.send("<h1>update record</h1>");
});
router.get('/delete/1',(request,response)=>{
    response.send("<h1>delete the record based on id</h1>");
});
export default router