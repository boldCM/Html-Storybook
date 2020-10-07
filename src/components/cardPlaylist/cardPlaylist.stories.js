import "./cardPlaylist.css";
import cardPlaylist from "./cardPlaylist.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Card Playlist", decorators: [centered] };

export const Playlist = () => cardPlaylist;
