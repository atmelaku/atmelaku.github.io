// get the element first
const imgme = document.getElementById("mee");
const mainEl = document.querySelector('main')
const parEl = document.getElementById("Copyright");
parEl.style.color = "blue";

// hover effect on the picture

function show_image(src) {

  const img = document.createElement("img");
  imgme.style.border = "solid red"
  img.src = "assets/github-mark.png";

  imgme.appendChild(img);
}

imgme.addEventListener("mousemove", show_image )
// random background color

mainEl.style.backgroundColor = "red";

const newp = document.createElement("button");
const text = document.createTextNode("changeBgColor");

newp.appendChild(text)
mainEl.appendChild(newp);

function random(number) {

  return Math.floor(Math.random() * (number+1));
   }

newp.onclick = function() {

  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
   }
// moving the text
