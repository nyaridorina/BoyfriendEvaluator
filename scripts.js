const questions = [
    "How much does your boyfriend listen to you when you talk?",
    "How often does your boyfriend surprise you with thoughtful gestures?",
    "How does your boyfriend make you feel about yourself?",
    "How much does your boyfriend respect your boundaries?",
    "How much effort does your boyfriend put into the relationship?",
    "How much do you trust your boyfriend?",
    "How much do you have in common with your boyfriend?",
    "How much do you enjoy spending time with your boyfriend?",
    "How well does your boyfriend communicate with you?",
    "How much does your boyfriend make you laugh?",
  ];
  
  const form = document.querySelector("form");
  const questionsList = document.querySelector("ol");
  const result = document.querySelector("#result");
  
  questions.forEach((question, index) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.textContent = `${index + 1}. ${question} (1-10): `;
    const input = document.createElement("input");
    input.type = "number";
    input.min = 1;
    input.max = 10;
    input.required = true;
    li.appendChild(label);
    li.appendChild(input);
    questionsList.appendChild(li);
  });
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    let score = 0;
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (score += parseInt(input.value)));
  
    if (score < 20) {
      result.textContent = "Your boyfriend sucks!";
    } else if (score < 50 ) {
      result.textContent = "Your boyfriend needs to step up his game.";
    } else if (score < 70) {
      result.textContent = "Your boyfriend is decent, but there's room for improvement.";
    } else if (score < 90) {
      result.textContent = "Your boyfriend is pretty great!";
    } else {
      result.textContent = "Congratulations, you have an amazing boyfriend!";
    }
  });
  