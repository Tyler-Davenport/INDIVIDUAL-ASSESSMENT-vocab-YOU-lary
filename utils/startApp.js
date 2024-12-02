/* eslint-disable quotes */
import { getCards } from "../api/cardData";
import { showCards } from "../pages/cards";
import domBuilder from "../components/shared/domBuilder";
import navBar from "../components/shared/navBar";
import logoutButton from "../components/logoutButton";
import domEvents from "../components/events/domEvents";
import navigationEvents from "../components/events/navigationEvents";
import formEvents from "../components/events/formEvents";

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;
