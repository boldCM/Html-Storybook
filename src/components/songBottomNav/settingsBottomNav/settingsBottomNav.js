import "./settingsBottomNav.css";
import { createElement } from "../../../utils/element";
import playlist from "../playSongIcons/playlist.svg";
import shuffle from "../playSongIcons/shuffle.svg";
import repeat from "../playSongIcons/repeat.svg";
import eq from "../playSongIcons/equalizer.svg";
import favourites from "../../../assets/herz.svg";

const playlistIcon = createElement("img", {
  src: playlist,
  alt: "play Icon",
});
const shuffleIcon = createElement("img", {
  src: shuffle,
  alt: "shuffle Icon",
});
const repeatIcon = createElement("img", {
  src: repeat,
  alt: "repeat Icon",
});
const equalizerIcon = createElement("img", {
  src: eq,
  alt: "equalizer Icon",
});
const favouritesIcon = createElement("img", {
  src: favourites,
  alt: "favourites Icon",
  className: "settingsBottomNav__favourites",
});

// Hilfsfunktion iconTitle:
const createIconTitle = (iconText) => {
  const iconTitle = createElement("span", {
    innerText: iconText,
  });
  return iconTitle;
};

// Hier muss ich meine Hilfsfunktion drin aufrufen:
const divPlaylist = createElement("div", {
  className: "settingsBottomNav__div",
  children: [playlistIcon, createIconTitle("Playlist")],
});

const divShuffle = createElement("div", {
  className: "settingsBottomNav__div",
  children: [shuffleIcon, createIconTitle("Shuffle")],
});
const divRepeat = createElement("div", {
  className: "settingsBottomNav__div",
  children: [repeatIcon, createIconTitle("Repeat")],
});
const divEqualizer = createElement("div", {
  className: "settingsBottomNav__div",
  children: [equalizerIcon, createIconTitle("EQ")],
});
const divFavourites = createElement("div", {
  className: "settingsBottomNav__div settingsBottomNav__div__favourites",
  children: [favouritesIcon, createIconTitle("Favourites")],
});

export const createSettingsBottomNav = () => {
  const settingsBottomNav = createElement("div", {
    className: "settingsBottomNav",
    children: [divPlaylist, divShuffle, divRepeat, divEqualizer, divFavourites],
  });

  return settingsBottomNav;
};
