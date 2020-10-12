import "./track.css";

import playImg from "../../assets/playActive.svg";
import trackImg from "../../assets/michaelJackson.png";

export function createTrackElement(title, artist) {
  const divContainer = document.createElement("div");
  divContainer.className = "track";

  const divTrack = document.createElement("div");
  divTrack.className = "titleArtist";

  const h2title = document.createElement("h2");
  h2title.innerText = title;

  const h6artist = document.createElement("h6");
  h6artist.innerText = artist;

  const buttonElement = document.createElement("button");
  buttonElement.className = "playIcon";
  buttonElement.onclick = function () {
    alert("click!");
  };

  const playElementImg = document.createElement("img");
  playElementImg.src = playImg;

  const trackElementImg = document.createElement("img");
  trackElementImg.src = trackImg;
  trackElementImg.className = "albumIcon";

  buttonElement.append(playElementImg);
  divTrack.append(h2title, h6artist);
  divContainer.append(trackElementImg, divTrack, buttonElement);

  return divContainer;
}
