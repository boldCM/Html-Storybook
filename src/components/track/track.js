import "./track.css";

import playElementImg from "../../assets/playActive.svg";
import trackImg from "../../assets/michaelJackson.png";

export function createTrackElement() {
  const divContainer = document.createElement("div");
  const divTrack = document.createElement("div");
  const h2Element = document.createElement("h2");
  const h6Element = document.createElement("h6");
  const playElement = document.createElement("img");
  const trackElementImg = document.createElement("img");

  h2Element.innerText = "Billie Jean";
  h6Element.innerText = "Michael Jackson";
  playElement.src = playElementImg;
  trackElementImg.src = trackImg;

  divContainer.className = "track";
  trackElementImg.className = "albumIcon";
  divTrack.className = "titleArtist";
  playElement.className = "playIcon";

  divTrack.append(h2Element, h6Element);
  divContainer.append(trackElementImg, divTrack, playElement);
  return divContainer;
}
