import playElementImg from "../../assets/play.svg";

export function createTrackElement() {
  const divContainer = document.createElement("div");
  const divTrack = document.createElement("div");
  const h2Element = document.createElement("h2");
  const h6Element = document.createElement("h6");
  const playElement = document.createElement("img");
  const trackImg = document.createElement("img");

  h2Element.innerText = "Billie Jean";
  h6Element.innerText = "Michael Jackson";
  playElement.src = playElementImg;
  trackImg.src = "src/assets/icon-burger-menu.svg";

  divTrack.append(h2Element, h6Element);
  divContainer.append(trackImg, divTrack, playElement);
  return divContainer;
}
