URLs
127.0.0.1:8000/persons

Methods 
get- get all 
    http://127.0.0.1:8000/persons
get- get individuals
    http://127.0.0.1:8000/persons/pk
    eg. http://127.0.0.1:8000/persons/2
post-create new/insert new record
    url: http://127.0.0.1:8000/persons/
    body:
    wwww-form-url encoded
    #key1:new value
    #key2:new value
    #key3:new value

put- full record update/edit record
    url: http://127.0.0.1:8000/persons/2
    body:
    wwww-form-url encoded
    #key1:new value
    #key2:new value
    #key3:new value

patch- partial record update/edit record
    url: http://127.0.0.1:8000/persons/2
    body:
    wwww-form-url encoded
    #key1:new value
delete-remove/delete record
    http://127.0.0.1:8000/persons/2

test -testing tool (postman)

implements -Langauge (Python, Java, C#, ASP, JSP, PHP, JS)

data structure(pid *,name ,address)   //*unique