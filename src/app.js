import "./scss/app.scss";
import HEADER from "./components/Header";
import USER from "./components/USER";

const app = async () => {
  document.getElementById("header").innerHTML = HEADER();
  document.getElementById("user").innerHTML = await USER();
};

//init app
app();
