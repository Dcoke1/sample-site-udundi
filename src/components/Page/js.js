  window.onload = function() { 
    const page_element = document.getElementById("toggle-action");
    page_element.classList.add("fadeInLeft");
  };

const toggleAnimate = () => {

  const element = document.getElementById("toggle-action");
  element.classList.add("fadeOutLeft");

  const modal = document.getElementById("vue-modal");
  modal.addEventListener("hidden.bs.modal", () => {
    element.classList.add("fadeInLeft");
  });

  element.classList.remove("fadeInLeft");
};

export default toggleAnimate;
