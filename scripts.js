document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("questions-form");
  const result = document.getElementById("result");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents default form submission

    let score = 0;
    const inputs = form.querySelectorAll("input[type='number']");

    // Calculate total score
    inputs.forEach((input) => {
      const value = parseInt(input.value, 10);
      score += isNaN(value) ? 0 : value; // Treat NaN as 0
    });

    // Determine message based on score
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

    // Display the result
    result.classList.remove("result-display"); // Remove class to reset animation
    result.textContent = message; // Set the message text
    // Trigger reflow to restart the animation
    void result.offsetWidth;
    result.classList.add("result-display"); // Add class to start animation

    // Optional: Scroll to the result for better visibility
    result.scrollIntoView({ behavior: "smooth" });
  });
});
