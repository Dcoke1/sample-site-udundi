window.addEventListener("load", () => {
  const element_onLoad = document.getElementById("toggle-action");

  setTimeout(() => {
    element_onLoad.style.display = "block";
  }, 100);
});

const toggleAnimate = () => {
  
  const more_details_element = document.getElementById("toggle-action");
  more_details_element.classList.add("fadeOutLeft");

  const modal = document.getElementById("vue-modal");
  modal.addEventListener("hidden.bs.modal", () => {
    more_details_element.classList.add("fadeInLeft");
  });

  more_details_element.classList.remove("fadeInLeft");

};

export default toggleAnimate;