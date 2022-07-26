import fs from "fs";
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
    // Export/Import in database 
>>>>>>> b5fd1dc7461037e1fa1697b5e1041fb3c743cbf9
