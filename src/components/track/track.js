import "./track.css";
import { createElement } from "../../utils/element";
import playImg from "../../assets/playActive.svg";
// import trackImg from "../../assets/michaelJackson.png";

import pauseImg from "../../assets/icon-pause-gradient.svg";

export function createTrackElement(track) {
  const audioElement = new Audio(track.audioSrc);

  // cnst playAction = createElement("img", {
  //   src:o playImg,
  // });

  const showPlayElement = createElement("img", {
    src: playImg,
    alt: "Play Icon",
  });

  const showPauseElement = createElement("img", {
    src: pauseImg,
    alt: "Pause Icon",
  });
  // const showIcon = (element) => {
  //   element.src=
  // }

  const trackElement = createElement("div", {
    className: "trackContainer",
    // innerText: "Replace Me!",
    // onclick: () => alert("clicked"),
    children: [
      createElement("img", {
        className: "albumIcon",
        src: track.imgSrc,
        alt: "Image of Album",
      }),
      createElement("div", {
        className: "trackSelection",
        children: [
          createElement("h2", {
            innerText: track.title,
          }),
          createElement("h6", {
            innerText: track.artist,
          }),
        ],
      }),
      createElement("button", {
        className: "playIcon",
        onclick: () => {
          if (!audioElement.paused) {
            audioElement.pause();
          } else {
            audioElement.play();
            Object.assign(showPauseElement, showPElement);
          }
        },

        children: [
          createElement("img", {
            src: playImg,
            alt: "Play Icon",
          }),
        ],
      }),
    ],
  });

  return trackElement;
}

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
