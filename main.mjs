const container = document.querySelector(".container");
const choices = document.querySelector(".choices");

// Event delegation: single listener on the container handles all key clicks
container.addEventListener("click", (event) => {
  const key = event.target.closest(".container > button.key");
  if (!key) return;

  // brief visual feedback
  key.classList.add("pressed");
  setTimeout(() => key.classList.remove("pressed"), 800);

  const action = key.dataset.action;

  // Delete: remove exactly one character from the end
  if (action === "del") {
    const text = choices.textContent || "";
    if (!text) return;
    choices.textContent = text.slice(0, -1);
    return;
  }

  // Space: append a non-breaking space
  // (space is now treated as a regular symbol via data-symbol on the button)

  // Regular key: use the data-symbol from HTML (single source of truth)
  const symbol = key.dataset.symbol || key.textContent.trim() || "";
  if (!symbol) return;
  choices.appendChild(document.createTextNode(symbol));
});
