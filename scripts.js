document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#questions-form");
  const result = document.querySelector("#result");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;
    const inputs = form.querySelectorAll("input[type='number']");
    inputs.forEach((input) => {
      score += parseInt(input.value);
    });

    let message = "";
    if (score < 20) {
      message = "😞 Your boyfriend needs a lot of improvement!";
    } else if (score < 50) {
      message = "😐 Your boyfriend needs to step up his game.";
    } else if (score < 70) {
      message = "😊 Your boyfriend is decent, but there's room for improvement.";
    } else if (score < 90) {
      message = "😍 Your boyfriend is pretty great!";
    } else {
      message = "🎉 Congratulations, you have an amazing boyfriend! 💖";
    }

    result.innerHTML = `<p>${message}</p>`;
    result.classList.add("result-display");
  });
});
