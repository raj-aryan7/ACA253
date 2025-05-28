//Greeting message rotation
const greetings = ["Hello!", "Welcome!", "Hi there!", "Nice to see you!", "Glad you're here!"];
const greetingEl = document.getElementById("greeting");
greetingEl.textContent = greetings[Math.floor(Math.random() * greetings.length)];

//Toggle skills list
let expanded = false;
function toggleSkills() {
  const list = document.getElementById("skills-list");
  if (!expanded) {
    list.innerHTML += `
      <li>React</li>
      <li>Node.js</li>
      <li>UX Design</li>
    `;
  } else {
    list.innerHTML = `
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    `;
  }
  expanded = !expanded;
}

//Edit skills dynamically
function editSkills() {
  const skills = prompt("Enter skills separated by commas:", "HTML, CSS, JavaScript");
  if (skills) {
    const skillArray = skills.split(",").map(s => `<li>${s.trim()}</li>`).join("");
    document.getElementById("skills-list").innerHTML = skillArray;
  }
}

//Theme toggle
document.getElementById("theme-switch").addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
