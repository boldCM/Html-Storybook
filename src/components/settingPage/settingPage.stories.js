import "./settingPage.css";
import centered from "@storybook/addon-centered/html";

import settingPage from "./settingPage.html";

export default { title: "Components/SettingPage", decorators: [centered] };

export const SettingPage = () => settingPage;
