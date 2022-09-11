//Date.now()...

// let dt = new Date();
// console.log(dt); //Wed Jun 08 2022 08:39:51 GMT+0545 (Nepal Time)

// let str1 = String(`Wed Jun 08 2022 08:39:51 GMT+0545`);
// let dt2 = Date.parse(str1); // string to dateTime --> timeStamp //
// console.log(dt2); //this time convert to exact date format

// let dt3 = Date(dt2);
// console.log(dt3); // Wed Jun 08 2022 08:39:51 GMT+0545
// //date format ....in which format is best?

// try {
//   //   let dt4 = Date.parse("2022-05-31"); //YYYY-MM-DD
//   //   let dt4 = Date.parse("2022/05/31"); //YYYY/MM/DD;
//   let dt4 = Date.parse("05/31/2022"); //string to timeStamp
//   console.log(dt4); //timeStamp to dateTime
//   let dt5 = Date(dt4);
//   console.log(dt5);
// } catch (err) {
//   console.log(`ERROR : ${err}`);
// }

//HOMEWORK ...
// 1 -> CALCULATE DIFFERENCE BETWEEN DATEOFBIRTH AND TODAY ...

// let today = new Date();
// // console.log(today);

// let birthDay = new Date("10-Aug-1999");
// console.log(birthDay);
// // let today = new Date("06-Jun-2022");
// let difference = today - birthDay;
// console.log(difference);
// //we need to calculate how many days past away from birthday to today
// let milisecond = difference;
// let second = difference / 1000;
// console.log(second);
// let minutes = second / 60;
// let hours = minutes / 60;
// let day = hours / 24;
// console.log(day);
// let month = day / 30;
// console.log(month);
// let year = month / 12;
// console.log(Math.floor(year));

///////////////////////////////////////////////////////////

// let birthDay = new Date("10-Aug-1999");
// // console.log(birthDay);
// let today = new Date("06-Jun-2022");
// let difference = today - birthDay;
// // console.log(difference);
// let totalSeconds = difference / 1000;
// // const years = Math.floor(totalSeconds / 8400) % ...;
// const days = Math.floor(totalSeconds / 3600 / 24);
// const hourss = Math.floor(totalSeconds / 3600) % 24;
// const mins = Math.floor(totalSeconds / 60) % 60;
// const seconds = Math.floor(totalSeconds) % 60;
// console.log(seconds);
// console.log(mins);
// console.log(hourss);
// console.log(days);
// // console.log(years);

////////////////////////////////////////////////////////////////
// ------------> LETS OWN TRY --------------->

// let past = new Date("10-Aug-1999");
// // let present = new Date("08-Jun-2022");
// let present = Date.now();

// let miliSecond = present - past;
// miliSecond = Math.floor(miliSecond);

// let second = miliSecond / 1000;
// second = Math.floor(second);

// let minutes = second / 60;
// minutes = Math.floor(minutes);

// let hours = minutes / 60;
// hours = Math.floor(hours);

// let days = hours / 24;
// days = Math.floor(days);

// let month = days / 30;
// // console.log(month % 30);
// month = Math.floor(month);

// let years = month / 12;
// years = Math.floor(years);

// // console.log(past, present, present - past);
// // console.log(miliSecond);
// // console.log(second);
// // console.log(minutes);
// // console.log(hours);
// // console.log(days);
// // console.log(month);
// // console.log(years);

// // console.log("------------------------");
// // console.log((second / 86400 / 12) % 12);
// // console.log(days / 365);
// function test() {
//   /////////////////////

//   let past = new Date("10-Aug-1999");
//   // let present = new Date("08-Jun-2022");
//   let present = Date.now();

//   let miliSecond = present - past;
//   miliSecond = Math.floor(miliSecond);

//   let second = miliSecond / 1000;
//   second = Math.floor(second);

//   let minutes = second / 60;
//   minutes = Math.floor(minutes);

//   let hours = minutes / 60;
//   hours = Math.floor(hours);

//   let days = hours / 24;
//   days = Math.floor(days);

//   let month = days / 30;
//   // console.log(month % 30);
//   month = Math.floor(month);

//   let years = month / 12;
//   years = Math.floor(years);
//   ///////////////////////////////

//   const runningSecond = Math.floor(second) % 60;
//   // console.log(runningSecond);
//   const runningMins = Math.floor(second / 60) % 60;
//   // console.log(runningMins);
//   const runningHours = Math.floor(second / 60 / 60) % 24;
//   // console.log(runningHours);
//   const runningDays = Math.floor(second / 60 / 60 / 24) % 30;
//   // console.log(runningDays);
//   // console.log(month % 30);
//   // const runningMonth = Math.floor(month % 30);
//   const runningMonth = Math.floor(second / 60 / 60 / 24 / 30 / 30);
//   // const runningMonth = Math.floor(second / 60 / 60 / 24 / 30) % 12;
//   // console.log(runningMonth);
//   // const runningYears = Math.floor(second / 60 / 60 / 24 / 30 / 12);
//   // console.log(month);
//   const runningYears = Math.floor(days / 365);
//   // console.log(runningYears);

//   //////////////////////////////////////////////////////////
//   //do remove the comment on this console
//   console.log(
//     `${runningYears} years ${runningMonth} month ${runningDays} days ${runningHours} hours ${runningMins} minutes ${runningSecond} second`
//   );
// }
// //////////////////--------------->
// // setInterval(test, 1000); // do remove the comment ....
// //////////////////////////////

// function running() {
//   let runningDate = `${runningYears} years ${runningMonth} month ${runningDays} days ${runningHours} hours ${runningMins} minutes ${runningSecond} second`;
//   // return runningDate;
//   // console.log(running());
// }
// setInterval(running, 1000);

//testing

// function test() {
//   // console.log("shiva");
//   // console.log(
//   //   `${runningYears} years ${runningMonth} month ${runningDays} days ${runningHours} hours ${runningMins} minutes ${runningSecond} second`
//   // );
// }
// setInterval(test, 1000);
/////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//testing purpose ..............

// const birthDay = new Date("10, Aug 1999 10:15:20");
// console.log(birthDay.getDay());
// console.log(birthDay.getFullYear());
// console.log(birthDay.getDate());
// console.log(birthDay.getMonth());
// console.log(birthDay.getHours());
// console.log(birthDay.getMinutes());
// console.log(birthDay.getSeconds());
// console.log(birthDay.getTime());
// console.log(birthDay.getUTCHours());
// console.log(birthDay.getUTCMonth());
// birthDay.setDate(9);
// console.log(birthDay.getDate());

// const options = { month: "long" };
// console.log(new Intl.DateTimeFormat("en-US", options).format(birthDay));
// // December
// console.log(new Intl.DateTimeFormat("de-DE", options).format(birthDay));
// // Dezember

// const today = new Date();
// console.log(today.getUTCHours());
// console.log(Date.parse("10 Aug 1999 10:15:20"));

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
///////////////////////////////////////////////////////
let date1 = new Date("04/30/2019");
let date2 = new Date("05/30/2019");
let diff_time = date2.getTime() - date1.getTime();
let diff_days = diff_time / (1000 * 3600 * 24);
console.log(`difference days: ${diff_days}`);

// ---> DATE AND TIME (DO REVISED)
//1 -> CALCULATION DUES ...(COLLEGE)
//2 -> submit form on time ...
