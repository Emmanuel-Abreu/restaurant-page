import returnResHeadline from "./resHeadline.js";
import returnResIMG from "./resImg.js";
import returnResText from "./resText.js";

import {homeBtn, homePage} from "./home.js";
import {menuBtn, menuPage} from "./menu.js";
import {contactBtn, contactPage} from "./contact.js";

function component() {
  const element = document.createElement("div");
  element.classList.add("initial-comp")


  const headline = returnResHeadline();
  const img = returnResIMG();
  const text = returnResText();

  element.append(headline);
  element.append(img);
  element.append(text);

  element.append(homeBtn())
  element.append(menuBtn())
  element.append(contactBtn())

  // Lodash, currently included via a script, is required for this line to work
  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

const menuButton = document.body.querySelector("button.menu-btn");
const homeButton = document.body.querySelector("button.home-btn");
const contactButton = document.body.querySelector("button.contact-btn");

menuButton.onclick = () =>{
  menuPage();
}

homeButton.onclick = () =>{
  homePage();
}

contactButton.onclick = () =>{
  contactPage();
}

console.log("hello");
//component()
