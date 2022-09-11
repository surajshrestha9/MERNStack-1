import fs from "fs";
<<<<<<< HEAD
<<<<<<< HEAD
import {CsvError, parse } from "csv-parse"

fs.createReadStream("./data.csv")
    .pipe(parse({delimiter: ",", from_line :2}))
    .on("data",function(row){
        console.log(row);
    })

//task
// write on csv
// update data on csv
// delete data on Csv
// filter data on csv
// export/import in database
=======
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
import { parse } from "csv-parse";

fs.createReadStream("./data.csv")
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        console.log(row);
    })

// Task
    // Write data on csv
    // Update data on csv
    // Delete data on csv
    // Filter data on csv
<<<<<<< HEAD
    // Export/Import in database 
>>>>>>> b5fd1dc7461037e1fa1697b5e1041fb3c743cbf9
=======
    // Export/Import in database 
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
