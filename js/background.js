const images=["0.jpeg","1.jpeg","2.jpeg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];
//const bgImage = document.createElement("img");

document.body.style.backgroundImage = `url(img/${chosenImage})`;
//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);