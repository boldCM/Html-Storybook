import { createTrackElement } from "./track";

export default { title: "Components/Track" };

export const songs = () => {
  let BeatIt = {
    title: "Beat it",
    artist: "Michael Jackson",
    imgSrc:
      "https://www.thewowstyle.com/wp-content/uploads/2015/01/Michael-Jackson.png",
    // audioSrc:
  };
  let christmasAdventure = {
    title: "A Christmas adventure",
    artist: "TRG Banks",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/TRG_Banks_-_TRG_Banks_Christmas_Album_-_20180915194354202.png?method=crop&width=290&height=290",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/TRG_Banks_Christmas_Album/TRG_Banks_-_08_-_A_Christmas_adventure_Part_1.mp3",
  };

  const playlist = [BeatIt, christmasAdventure];

  const container = document.createElement("div");

  playlist.forEach((track) => {
    let song = createTrackElement(track);
    container.append(song);
  });

  return container;
};

// original
// export const beatIt = () =>
//   createTrackElement({
//     track: "Beat it",
//     artist: "Michael Jackson",
//     imgSrc:
//       "https://www.thewowstyle.com/wp-content/uploads/2015/01/Michael-Jackson.png",
//     // audioSrc:
//   });
// export const Thriller = () =>
//   createTrackElement({
//     title: "Thriller",
//     artist: "Michael Jackson",
//     imgSrc:
//       "https://www.thewowstyle.com/wp-content/uploads/2015/01/Michael-Jackson.png",
//     // audioSrc:
//   });
// export const Billie = () =>
//   createTrackElement({
//     title: "Billie Jean",
//     artist: "Michael Jackson",
//     imgSrc:
//       "https://www.thewowstyle.com/wp-content/uploads/2015/01/Michael-Jackson.png",
//     // audioSrc:
//   });
// export const christmasAdventure = () =>
//   createTrackElement({
//     title: "A Christmas adventure",
//     artist: "TRG Banks",
//     imgSrc:
//       "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/TRG_Banks_-_TRG_Banks_Christmas_Album_-_20180915194354202.png?method=crop&width=290&height=290",
//     audioSrc:
//       "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/TRG_Banks_Christmas_Album/TRG_Banks_-_08_-_A_Christmas_adventure_Part_1.mp3",
//   });
