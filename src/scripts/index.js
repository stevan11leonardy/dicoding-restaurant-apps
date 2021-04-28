import 'regenerator-runtime'; /* for async await transpile */
import data from '../DATA.json';
import '../styles/main.css';
import { createCard } from './card';

const navElement = document.getElementsByTagName("nav")[0];
const hamburgerBtn = document.querySelector(".hamburger-btn");
const restaurantListElement = document.querySelector(".restaurant-list")

document.addEventListener("click", handleBodyClick);

function handleBodyClick(event) {
  if (!!navElement.dataset.hide) {
    navElement.style.transitionDuration = ".3s"; 
    navElement.setAttribute("hide", true);
    navElement.style.transitionDuration = "0"; 
  }
}

hamburgerBtn.addEventListener("click", handleNavMenu);

function handleNavMenu(event) {
  event.stopPropagation();
  navElement.setAttribute("hide", !Boolean(navElement.dataset.hide));
}

function init() {
  data.restaurants.forEach(restaurant => {
    createCard(restaurantListElement, {
      name: restaurant.name,
      location: restaurant.city,
      description: restaurant.description,
      pic: restaurant.pictureId,
      rating: restaurant.rating,
    })
  })
}

init();
