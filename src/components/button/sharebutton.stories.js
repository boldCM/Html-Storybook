import "./button.css";

import shareButtonText from "./sharebutton.html";
import playButtonText from "./playbutton-text.html";
import heartButtonText from "./heartbutton.html";

export default { title: "Components/Button" };

export const withPlay = () => playButtonText;
export const withShare = () => shareButtonText;
export const withHeart = () => heartButtonText;
