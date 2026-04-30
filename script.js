// JavaScript — adds behaviour to the page

// ---- Greet button ----
function greetMe() {
  const now = new Date();
  const hour = now.getHours();
  let message = "Hello!";
  if (hour < 12) message = "Good morning!";
  else if (hour < 18) message = "Good afternoon!";
  else message = "Good evening!";
  document.getElementById("greeting").innerText =
    message + " Thanks for visiting my page.";
}

// ---- Theme toggle ----
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// ---- Live clock ----
function updateClock() {
  const now = new Date();
  const dateOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  };
  const dateString = now.toLocaleDateString("en-GB", dateOptions);
  const timeString = now.toLocaleTimeString("en-GB", { hour12: false });
  document.getElementById("clock-date").innerText = dateString;
  document.getElementById("clock-time").innerText = timeString;
}
updateClock();
setInterval(updateClock, 1000);

// ---- Animated skill bars ----
function animateSkillBars() {
  const bars = document.querySelectorAll(".skill-fill");
  bars.forEach(function (bar) {
    const level = bar.getAttribute("data-level");
    setTimeout(function () {
      bar.style.width = level + "%";
    }, 200);
  });
}
window.addEventListener("load", animateSkillBars);

// ---- Quote of the day ----
const quotes = [
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Code is like humour. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" }
];

function showRandomQuote() {
  const i = Math.floor(Math.random() * quotes.length);
  const chosen = quotes[i];
  document.getElementById("quote-text").innerText = '"' + chosen.text + '"';
  document.getElementById("quote-author").innerText = "— " + chosen.author;
}
window.addEventListener("load", showRandomQuote);