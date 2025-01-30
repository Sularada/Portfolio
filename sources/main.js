(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function activeFunction() {
  Array.prototype.forEach.call(nav_links, (link) => {
    link.classList.remove("active");
  });
  this.classList.add("active");
}
const sections = document.getElementsByTagName("section");
const nav_links = document.getElementsByClassName("nav-link");
console.log(nav_links);
Array.prototype.forEach.call(nav_links, (link) => {
  link.addEventListener("click", activeFunction);
});

function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  Array.prototype.forEach.call(nav_links, (link) => {
    link.classList.remove("active");
    nav_links[index].classList.add("active");
  });
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);
