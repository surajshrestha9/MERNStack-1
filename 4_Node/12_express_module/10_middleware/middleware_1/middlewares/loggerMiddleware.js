var myLogger=(request, response, next)=>{
<<<<<<< HEAD
<<<<<<< HEAD
    // request ->values from user
    // type conversion,validation,process ->result 
    //          ->add on request and redirect to specfic 
    //          ->route/url pattern(web.js)
=======
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    // values from user
    // type conversion, validation, process-> result -> 
    //        -> add on request and redirect to specific 
    //                -> route/url pattern (web.js)
<<<<<<< HEAD
>>>>>>> b5fd1dc7461037e1fa1697b5e1041fb3c743cbf9
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    // response.redirect('url_pattern')
    console.log("Hi from myLogger");
    next();
};
export default myLogger;