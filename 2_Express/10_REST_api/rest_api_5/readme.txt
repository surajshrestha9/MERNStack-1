name: { type: String, required: true, trim: true }
address: { type: String, required: true, trim: true }

Display All
GET method -> http://127.0.0.1:8000/api/persons/ -> Send

Get Person based on pid
GET method -> http://127.0.0.1:8000/api/persons/1 -> Send

Insert New Record-1
POST method -> http://127.0.0.1:8000/api/persons/
Body -> x-www-form-urlencoded
key         value
<<<<<<< HEAD
<<<<<<< HEAD
pid         3
=======
>>>>>>> a88ddbd727afcf8d32d7b42443f993674ddc99db
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
name        Raj
address     Kathmandu   
-> Send

Insert New Record-2
POST method -> http://127.0.0.1:8000/api/persons/
Body -> form-data
key         value
<<<<<<< HEAD
<<<<<<< HEAD
pid         2
=======
>>>>>>> a88ddbd727afcf8d32d7b42443f993674ddc99db
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
name        Reeta
address     Kathmandu   
-> Send

Insert New Record-3
POST method -> http://127.0.0.1:8000/api/persons/
Body -> raw
{
<<<<<<< HEAD
<<<<<<< HEAD
    "pid": 3,   
    "name": "Rhydam",
    "address": "Kathmandu",
=======
    "name": "Rhydam",
    "address": "Kathmandu"
>>>>>>> a88ddbd727afcf8d32d7b42443f993674ddc99db
=======
    "name": "Rhydam",
    "address": "Kathmandu"
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
}
-> Send