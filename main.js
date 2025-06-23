document.querySelectorAll(".card").forEach((card) => {
  const range = card.querySelector("input[type=range]");
  const button = card.querySelector("button");

  const label = document.createElement("span");
  label.className = "label";
  label.textContent = `${range.value} ч.`;
  range.after(label);

  range.addEventListener("input", () => {
    label.textContent = `${range.value} ч.`;
  });

  button.addEventListener("click", () => {
    const name = card.querySelector("h2").textContent;
    const hours = range.value;

    // Сохраняем в localStorage (можно заменить на fetch позже)
    localStorage.setItem(`interest-${name}`, hours);

    button.textContent = "Отправлено!";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = "Запустить";
      button.disabled = false;
    }, 2000);
  });
});
