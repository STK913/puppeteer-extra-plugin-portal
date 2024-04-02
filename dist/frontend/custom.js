// La tabulation fait perdre le focus du canvas, car elle va sélectionner la console
let bugfixInterval = setInterval(() => {
  let element = document.querySelector("canvas");
  if (element) {
    clearInterval(bugfixInterval);
    element.addEventListener("blur", () => element.focus(), true);
  }
}, 100);

// Dispatch des événements
window.addEventListener("copy", () => window.parent.postMessage({type: "copy"}, "*")); // Copier
window.addEventListener("paste", (event) => window.parent.postMessage({type: "paste", value: event.clipboardData.getData("text")}, "*")); // Coller
window.addEventListener("focus", () => window.parent.postMessage({type: "focus"}, "*")); // Focus
window.addEventListener("click", () => window.parent.postMessage({type: "click"}, "*")); // Click
