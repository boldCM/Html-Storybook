import "./track.css";

import playImg from "../../assets/playActive.svg";
// import trackImg from "../../assets/michaelJackson.png";

export function createTrackElement(track) {
  const divContainer = document.createElement("div");
  divContainer.className = "trackContainer";

  const divText = document.createElement("div");
  divText.className = "titleArtist";

  const h2title = document.createElement("h2");
  h2title.innerText = track.title;

  const h6artist = document.createElement("h6");
  h6artist.innerText = track.artist;

  const buttonElement = document.createElement("button");
  buttonElement.className = "playIcon";
  buttonElement.onclick = function () {
    audioElement.play();
    alert("click!");
  };

  const playElementImg = document.createElement("img");
  playElementImg.src = playImg;
  playElementImg.alt = "Icon of Play-Action button";

  const trackElementImg = document.createElement("img");
  trackElementImg.src = track.imgSrc;
  trackElementImg.alt = "Image of Album";
  trackElementImg.className = "albumIcon";

  const audioElement = new Audio(track.audioSrc);

  buttonElement.append(playElementImg);
  divText.append(h2title, h6artist);
  divContainer.append(trackElementImg, divText, buttonElement);

  return divContainer;
}
