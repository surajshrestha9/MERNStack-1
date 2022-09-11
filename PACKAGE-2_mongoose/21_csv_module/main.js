import fs from "fs";
import { parse } from "csv-parse";

fs.createReadStream("./sample.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", (row) => {
    console.log(row);
  });

// FOR MIGRATE
// TASK
// write data on csv
// update data on csv
// delete data on csv
// filter data on csv
// Exports / Import in database
