import "./layoutListNav.css";
import centered from "@storybook/addon-centered/html";

import layoutListNav from "./layoutListNav.html";

export default { title: "Components/LayoutListNav", decorators: [centered] };

export const LayoutListNav = () => layoutListNav;
