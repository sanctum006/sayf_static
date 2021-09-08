// var video = document.getElementById('myVideo')

// // When the 'ended' event fires
// video.addEventListener('ended', function(){
//   // Reset the video to 0
//   video.currentTime = 10;
//   // And play again
//   video.play();
// });

// <!doctype html>
// <html>
// <head>
// <script>
// function add(){
// var a,b,c;
// a=Number(document.getElementById("first").value);
// b=Number(document.getElementById("second").value);
// c= a + b;
// document.getElementById("answer").value= c;
// }
// </script>
// </head>
// <body>
// Enter the First number : <input id="first">
// Enter the Second number: <input id="second">
// <button onclick="add()">Add</button>
// <input id="answer">
// </body>
// </html>
// let a,b,c=0
//  a=parseInt(document.getElementById("cal-principle").value);
//  b=parseInt(document.getElementById("cal-rate").value);
//  c=parseInt(document.getElementById("cal-time").value);
//  let res=a+b+c;
//  console.log(res);
//  (document.getElementById("answer").value)= res;

var principle = document.getElementById("cal-principle");
var rate = document.getElementById("cal-rate");      
var time = document.getElementById("cal-time");      

function compound_intrest() {
   var first_number = parseFloat(principle.value);
   if (isNaN(first_number)) first_number = 0;
   var second_number = parseFloat(rate.value);
   if (isNaN(second_number)) second_number = 0;
   var third_number = parseFloat(time.value);
   if (isNaN(third_number)) third_number = 0;
//    var result = (first_number *(Math.pow((1+(second_number/100)),(third_number))))-first_number;
   var result = (first_number *(Math.pow((1+(second_number/100)),(third_number))));
   var result=Math.round(result);
   document.getElementById("txtresult").value = result;
}
