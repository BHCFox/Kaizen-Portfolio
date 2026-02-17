const checkbox = document.querySelector('[data-id="eg6-walkaround"]');

const savedState = localStorage.getItem("eg6-walkaround-shot");

if (savedState === "true") {
  checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("eg6-walkaround-shot", checkbox.checked);
});
