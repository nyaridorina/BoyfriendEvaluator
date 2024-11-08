document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("questions-form");
  const result = document.getElementById("result");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    let score = 0;
    const inputs = form.querySelectorAll("input[type='number']");

    // Calculate total score
    inputs.forEach((input) => {
      const value = parseInt(input.value, 10);
      score += isNaN(value) ? 0 : value; // Ensure NaN values are treated as 0
    });

    // Determine the message based on the total score
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

    // Display the result message
    result.textContent = message;
    result.classList.add("result-display");
  });
});
