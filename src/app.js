import "./scss/app.scss";
import HEADER from "./components/Header";
import GAME_CONTAINER from "./components/GameContainer";
import FINAL_MSG_CONTAINER from './components/FinalMsgContainer';
import LETTER_NOTIFICATION from './components/LetterNotification';
import LOGIC from './main/MainLogic';

const app = () => {
  document.getElementById("header").innerHTML = HEADER();
  document.querySelector(".game-container").innerHTML = GAME_CONTAINER();
  document.querySelector('.final-msg-container').innerHTML = FINAL_MSG_CONTAINER();
  document.querySelector('.letter-notification').innerHTML = LETTER_NOTIFICATION();
  LOGIC();
};

//init app
app();
