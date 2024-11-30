/* eslint-disable quotes */
import getCards from "../api/cardData";
import { showCards } from "../pages/cards";
import domBuilder from "../components/shared/domBuilder";
import navBar from "../components/shared/navBar";
import logoutButton from "../components/logoutButton";

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  // domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(user);
  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;
