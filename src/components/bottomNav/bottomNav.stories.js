import "./bottomNav.css";

import bottomNavSongs from "./songs.html";
import bottomNavHome from "./home.html";
import bottomNavSettings from "./settings.html";
import bottomNavNone from "./none.html";

export default { title: "Components/BottomNav" };

export const BottomNavSongs = () => bottomNavSongs;
export const BottomNavHome = () => bottomNavHome;
export const BottomNavSettings = () => bottomNavSettings;
export const BottomNavNone = () => bottomNavNone;
