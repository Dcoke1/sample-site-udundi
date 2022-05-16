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
