
/* only execute this script when the document is ready */
$(document).ready(function(){
  /* function called when you click of the button */
  $(".button").click(function(){

      /* this if else to change the text in the button */
      if($(".button").text() == "☰"){
       $(".button").text("X");
      }else{
        $(".button").text("☰");
      }

    /* this function toggle the visibility of our "li" elements */
    $("li").toggle("slow");
  });
});

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

  imgEl.style.border = "solid #ffb850"

}
imgEl.addEventListener("mousemove", textShow);
imgEl.addEventListener("mouseout", texthid);
