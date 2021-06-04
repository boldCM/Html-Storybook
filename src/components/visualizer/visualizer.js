import "./visualizer.css";
import { createElement } from "../../utils/element";

export const createVisualizer = () => {
  const visualizerContainer = createElement("div", {
    className: "visualizerContainer",
  });
  const heightButton = createElement("button", {
    className: "visualizerContainer__btn",
    onclick: () => {
      const lines = document.getElementsByClassName("line");
      lines.forEach((Balken) => {
        Balken.style.height = `${createRandomHeight(50, 100)}px`;
      });
    },
  });

  for (let Balken = 0; Balken < 30; Balken++) {
    const einDiv = createElement("div", {
      className: "line",
      //   innerText: "ganz viele Balken",
    });

    einDiv.style.height = `${createRandomHeight(50, 100)}px`;
    visualizerContainer.append(einDiv);
  }

  visualizerContainer.append(heightButton);
  return visualizerContainer;
};

const createRandomHeight = (minimalHeightNumber, maximalHightNumber) => {
  const randomHeight =
    Math.random() * (maximalHightNumber - minimalHeightNumber) +
    minimalHeightNumber;

  console.log(randomHeight);
  return randomHeight;
};
