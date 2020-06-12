const pEl = document.getElementById("adress");
const imgEl = document.getElementById("imag");


const textShow = () => {
  pEl.style.color = "#ffb850";
  imgEl.style.border = "solid red"

}
const texthid = () => {
  pEl.style.color = "white";
  imgEl.style.border = "solid #ffb850"

}
imgEl.addEventListener("mousemove", textShow);
imgEl.addEventListener("mouseout", texthid);



/* only execute this script when the document is ready */
$(document).ready(function(){
  /* function called when you click of the button */
  $("button").click(function(){

      /* this if else to change the text in the button */
      if($("button").text() == "☰"){
       $("button").text("X");
      }else{
        $("button").text("☰");
      }

    /* this function toggle the visibility of our "li" elements */
    $("li").toggle("slow");
  });
});


let el = document.querySelectorAll('mee')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY

  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 20 * ((xVal - width / 2) / width)

  /* Calculate the rotation along the X-axis */
  const xRotation = -20 * ((yVal - height / 2) / height)

  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})
