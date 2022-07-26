var myLogger=(request, response, next)=>{
<<<<<<< HEAD
    // request ->values from user
    // type conversion,validation,process ->result 
    //          ->add on request and redirect to specfic 
    //          ->route/url pattern(web.js)
=======
    // values from user
    // type conversion, validation, process-> result -> 
    //        -> add on request and redirect to specific 
    //                -> route/url pattern (web.js)
>>>>>>> b5fd1dc7461037e1fa1697b5e1041fb3c743cbf9
    // response.redirect('url_pattern')
    console.log("Hi from myLogger");
    next();
};
export default myLogger;