import "./button.css";
import centered from "@storybook/addon-centered/html";

import shareButtonText from "./sharebutton.html";
import playButtonText from "./playbutton-text.html";
import heartButtonText from "./heartbutton.html";

export default { title: "Components/Button", decorators: [centered] };

export const withPlay = () => playButtonText;
export const withShare = () => shareButtonText;
export const withHeart = () => heartButtonText;
