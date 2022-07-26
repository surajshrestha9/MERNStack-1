import express from 'express' ;
const router=express.Router();

router.get('/all',(request,response)=>{
    response.send('<h1> /all</h1>')
});
router.get('/add/1/name/password',(request,response)=>{
    response.send('<h1> hello users/add/1/name/password</h1>')
});
router.get('/1',(request,response)=>{
    response.send('<h1> hello users/1 </h1>')
});
router.get('/update/1/name/password',(request,response)=>{
    response.send('<h1>hello user/update/1/name/password </h1>')
});
router.get('/delete/1',(request,response)=>{
    response.send('<h1>hello users/delete/1 </h1>')
});

export default router