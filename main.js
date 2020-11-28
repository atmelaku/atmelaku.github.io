// // get the element first
// const imgme = document.getElementById("mee");
// const mainEl = document.querySelector('main')
// const parEl = document.getElementById("Copyright");
// parEl.style.color = "blue";
//
// // hover effect on the picture
//
// function show_image(src) {
//
//   const img = document.createElement("img");
//   imgme.style.border = "solid red"
//   img.src = "assets/github-mark.png";
//
//   imgme.appendChild(img);
// }
//
// imgme.addEventListener("mousemove", show_image )
// // random background color
//
// mainEl.style.backgroundColor = "red";
//
// const newp = document.createElement("button");
// const text = document.createTextNode("changeBgColor");
//
// newp.appendChild(text)
// mainEl.appendChild(newp);
// //
// // function random(number) {
//
//   return Math.floor(Math.random() * (number+1));
//    }
//
// newp.onclick = function() {
//
//   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
//    }
const pEl = document.getElementById("adress");
   pEl.style.visibility = "hidden";
   const imgEl = document.getElementById("imag");


   const textShow = () => {
     pEl.style.color = "#ffb850";
     pEl.style.visibility = "visible";


     imgEl.style.border = "solid red"

   }
   const texthid = () => {
     pEl.style.color = "white";
     pEl.style.visibility = "hidden";

     imgEl.style.border = "solid #ffb850"

   }
   imgEl.addEventListener("mousemove", textShow);
   imgEl.addEventListener("mouseout", texthid);
var mybutton = document.getElementById("myBtn");

   // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {

    mybutton.style.display = "none";
     }
   }

   // When the user clicks on the button, scroll to the top of the document
function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   }
// moving the text
