import "./track.css";

import playElementImg from "../../assets/playActive.svg";
import trackImg from "../../assets/michaelJackson.png";

export function createTrackElement(title, artist) {
  const divContainer = document.createElement("div");
  const divTrack = document.createElement("div");
  const h2title = document.createElement("h2");
  const h6artist = document.createElement("h6");
  const buttonElement = document.createElement("button");
  const playElement = document.createElement("img");
  const trackElementImg = document.createElement("img");

  h2title.innerText = title;
  h6artist.innerText = artist;
  playElement.src = playElementImg;
  trackElementImg.src = trackImg;

  divContainer.className = "track";
  trackElementImg.className = "albumIcon";
  divTrack.className = "titleArtist";
  buttonElement.className = "playIcon";

  buttonElement.append(playElement);
  divTrack.append(h2title, h6artist);
  divContainer.append(trackElementImg, divTrack, buttonElement);

  buttonElement.onclick = function () {
    alert("click!");
  };
  return divContainer;
}
