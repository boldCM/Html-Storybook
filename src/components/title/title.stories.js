import "./title.css";
import title from "./title.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/title", decorators: [centered] };

export const title1 = () => title;
