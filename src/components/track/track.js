import "./track.css";
import { createElement } from "../../utils/element";
import playImg from "../../assets/playActive.svg";

import pauseImg from "../../assets/icon-pause-gradient.svg";

export function createTrackElement(track) {
  const audioElement = new Audio(track.audioSrc);

  const iconElement = createElement("img", {
    src: playImg,
    // alt: "Play Icon",
  });

  const trackElement = createElement("div", {
    className: "trackContainer",

    children: [
      createElement("img", {
        className: "trackContainer__albumIcon",
        src: track.imgSrc,
        alt: "Image of Album",
      }),
      createElement("div", {
        className: "trackContainer__div",
        children: [
          createElement("div", {
            className: "trackContainer__div__text",
            children: [
              createElement("h2", {
                className: "trackContainer__div__text--title",
                innerText: track.title,
              }),
              createElement("h6", {
                className: "trackContainer__div__text--title",
                innerText: track.artist,
              }),
            ],
          }),
          createElement("button", {
            className: "trackContainer__playIcon",
            children: [iconElement],
            onclick: () => {
              if (!audioElement.paused) {
                audioElement.pause();

                showPlayElement(iconElement);
              } else {
                audioElement.play();
                showPauseElement(iconElement);
              }
            },
          }),
        ],
      }),
    ],
  });

  return trackElement;
}

const showPlayElement = (element) => {
  element.src = playImg;
  element.alt = "Play Icon";
};

const showPauseElement = (element) => {
  element.src = pauseImg;
  element.alt = "Pause Icon";
};

//   const divContainer = document.createElement("div");
//   divContainer.className = "trackContainer";

//   const divText = document.createElement("div");
//   divText.className = "titleArtist";

//   const h2title = document.createElement("h2");
//   h2title.innerText = track.title;

//   const h6artist = document.createElement("h6");
//   h6artist.innerText = track.artist;

//   const buttonElement = document.createElement("button");
//   buttonElement.className = "playIcon";

//   const showPlayButton = (element) => {
//     element.src = playImg;
//     element.alt = "Play Icon";
//   };

//   const showPauseButton = (element) => {
//     element.src = pauseImg;
//     element.alt = "Pause Icon";
//   };

//   let isPlaying = false;
//   buttonElement.onclick = () => {
//     if (isPlaying) {
//       audioElement.pause();

//       showPlayButton(playElementImg);
//     } else {
//       audioElement.play();

//       showPauseButton(playElementImg);
//     }
//     isPlaying = !isPlaying;
//   };

//   const playElementImg = document.createElement("img");
//   playElementImg.src = playImg;
//   playElementImg.alt = "Icon of Play-Action button";

//   // const pauseElementImg = document.createElement("img");
//   // pauseElementImg.src = pauseImg;
//   // pauseElementImg.alt = "Icon for Pause";
//   // das erstellen vom html-elemnt kann ich mir dann sparen
//   // wenn ich oben nur die src importiere und in meiner button funktion ändere

//   const trackElementImg = document.createElement("img");
//   trackElementImg.src = track.imgSrc;
//   trackElementImg.alt = "Image of Album";
//   trackElementImg.className = "albumIcon";

//   const audioElement = new Audio(track.audioSrc);

//   buttonElement.append(playElementImg);

//   divText.append(h2title, h6artist);
//   divContainer.append(trackElementImg, divText, buttonElement);

//   return divContainer;
