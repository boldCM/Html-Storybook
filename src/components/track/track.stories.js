import { createTrackElement } from "./track";

export default { title: "Components/Track" };

export const beatIt = () => createTrackElement("Beat it", "Michael Jackson");
export const Thriller = () => createTrackElement("Thriller", "Michael Jackson");
export const Billie = () =>
  createTrackElement("Billie Jean", "Michael Jackson");
