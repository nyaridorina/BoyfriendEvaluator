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
      message = "😞 Your partner needs a lot of improvement!";
    } else if (score < 50) {
      message = "😐 Your partner needs to step up their game.";
    } else if (score < 70) {
      message = "😊 Your partner is decent, but there's room for improvement.";
    } else if (score < 90) {
      message = "😍 Your partner is pretty great!";
    } else {
      message = "🎉 Congratulations, you have an amazing partner! 💖";
    }

    result.innerHTML = `<p>${message}</p>`;
    result.classList.add("result-display");
  });
});
