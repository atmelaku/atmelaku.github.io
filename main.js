
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
