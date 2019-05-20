import createWrapCards from "../Object/wrap-cards/index.js";
import {
  createBackCard,
  createFrontCard
} from "../components/memory-card/index.js";

createWrapCards();
createBackCard(3, "icon-js.png");
createFrontCard(5);
