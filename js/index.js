import { NavBar } from "./nav.js";
import { Search } from "./search.js";
import { Category } from "./category.js";
import { Area } from "./Area.js";
import { Ingreadints } from "./ingeradints.js";
import { ContactUs } from "./contactUs.js";
import { Home } from "./home.js";

const home = new Home()
const area = new Area()
const search = new Search()
const cateogry = new Category()
const contactUs = new ContactUs()
const ingreadints = new Ingreadints()

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.side-nav li');
  const sections = document.querySelectorAll('section');

  links.forEach((link, index) => {
    link.addEventListener("click", function () {
      sections.forEach(section => {
        section.classList.add('d-none');
      });

      sections[index].classList.remove('d-none');
    });
  });
});

// Start App 
NavBar()
