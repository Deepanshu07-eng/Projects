let copilot = document.querySelector("#copilot");
let hiddenterms = document.querySelector("#hiddenterms");
copilot.addEventListener("mouseenter", () => {
    hiddenterms.classList.remove("hide");
});
copilot.addEventListener("mouseleave", () => {
    hiddenterms.classList.add("hide");
});
// textContainer.classList.add("hide");