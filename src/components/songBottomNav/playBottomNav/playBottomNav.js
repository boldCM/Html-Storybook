import "./playBottomNav.css";
import { createElement } from "../../../utils/element";
import backward from "../playSongIcons/backward.svg";
import playGrey from "../playSongIcons/playGrey.svg";
import forward from "../playSongIcons/forward.svg";

const backwardIcon = createElement("img", {
  src: backward,
  alt: "backward Icon",
});

const playGreyIcon = createElement("img", {
  src: playGrey,
  alt: "play Icon",
  className: "playBottomNav__playGreyIcon",
});

const forwardIcon = createElement("img", {
  src: forward,
  alt: "forward Icon",
});

export const playBottomNav = () => {
  const playBar = createElement("div", {
    className: "playBottomNav",
    children: [backwardIcon, playGreyIcon, forwardIcon],
  });

  return playBar;
};
