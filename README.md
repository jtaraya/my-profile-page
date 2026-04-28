# Capstone Project. Beginner's Toolkit: HTML, CSS & JavaScript using AI.
# My Profile Page

By: Jacob Taraya

https://jtaraya.github.io/my-profile-page/

A simple, interactive personal profile webpage built with **HTML, CSS, and JavaScript** as part of the **Moringa AI Access Program** capstone project.

> **Live demo:** _(add your GitHub Pages URL here after deploying — e.g. `https://jtaraya.github.io/my-profile-page/`)_

---

## ✨ Features

- Clean, responsive profile card layout
- **"Greet Me"** button that displays a time-aware greeting (good morning / afternoon / evening)
- **"Toggle Theme"** button that switches between light and dark mode
- Single-file site — no build step, no dependencies

## 🛠 Tech Stack

- **HTML** — page structure
- **CSS** — styling, layout, and the light/dark theme
- **JavaScript** — button interactions and DOM updates

## 🚀 How to run locally

1. Clone or download this repository
2. Open `index.html` in any modern browser (double-click it, or right-click → Open with → Chrome)
3. Click the buttons to see JavaScript in action

If you have **VS Code** with the **Live Server** extension installed, right-click `index.html` and choose _"Open with Live Server"_ for instant reload as you edit.

## 🧠 Built with AI

This project was built as a learning exercise using AI as a teaching partner.
The full capstone toolkit document — including the prompts I used at every step,
what I learned, common gotchas, and reflections — is included in this repo as
`Capstone_Toolkit_HTML_CSS_JS.docx` (or its PDF version).

A few example prompts I used:

- *"I am a complete beginner. Can you explain what HTML, CSS, and JavaScript are, how they work together, and why they are important for building websites? Use simple language and give me a real-world analogy."*
- *"Now teach me the very basics of JavaScript. What are variables, functions, and events? Show me how to make a button do something when I click it."*
- *"Help me build a simple personal profile webpage with HTML, CSS, and JavaScript. I want it to have my name as a heading, a list of my hobbies, and two buttons — one that greets me with the current time of day, and one that toggles between light and dark themes."*

## 📚 References

- [MDN Web Docs](https://developer.mozilla.org) — best beginner reference for the web
- [W3Schools HTML Tutorial](https://www.w3schools.com/html)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js)
- [Claude AI](https://claude.ai) — the assistant I used throughout this project

## 👤 Author

**Jacob Taraya**
Moringa School AI Access Program


**Section 1: Tool's Objective
HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and JavaScript are the three core technologies used to build modern websites.
HTML, CSS, and JavaScript are the building blocks of the web. I chose them because I want to learn the foundations of frontend development from scratch. My intention is to build a simple, interactive webpage with AI guiding and teaching me along the way.
HTML provides the structure and content of a webpage — like headings, paragraphs, images, and lists. CSS controls how everything looks — colours, fonts, layout, and spacing. JavaScript adds behaviour — buttons that respond to clicks, content that updates, and pages that feel alive. Together, they are the foundation of every website on the internet.
Why is it useful? As a beginner in frontend development, HTML, CSS, and JavaScript are the perfect starting point. They require no installation, run in any browser, and teach you how the web actually works — from static pages all the way to interactive apps.

Step 1: HTML, CSS & JavaScript Learning with AI
Prompt 1 — Understand what they are:
"I am a complete beginner. Can you explain what HTML, CSS, and JavaScript are, how they work together, and why they are important for building websites? Use simple language and give me a real-world analogy."
Prompt 2 — Learn HTML basics:
"Can you teach me the 10 most important HTML tags a beginner needs to know? For each one, show me an example and explain what it does in plain English."
Prompt 3 — Learn CSS basics:
"Now teach me the basics of CSS. How do I change colours, fonts, and layout on a webpage? Show me simple examples I can try."
Prompt 4 — Learn JavaScript basics:
"Now teach me the very basics of JavaScript. What are variables, functions, and events? Show me how to make a button do something when I click it. Keep it simple — I have never written code before."

What are HTML, CSS, and JavaScript?
Think of building a smart house 🏠:
•	HTML is the structure — the walls, roof, doors, and windows
•	CSS is the decoration — the paint, curtains, and furniture
•	JavaScript is the electricity — it powers the lights, opens the garage when you click a remote, and makes things actually do stuff
HTML stands for HyperText Markup Language. It tells the browser what to show on a page — headings, paragraphs, images, buttons, links, etc.
CSS stands for Cascading Style Sheets. It tells the browser how things should look — colours, sizes, fonts, spacing, etc.
JavaScript (often shortened to JS) tells the browser what should happen — when a user clicks a button, fills in a form, or scrolls down the page.
Without HTML, there's no content. Without CSS, everything looks plain. Without JavaScript, the page just sits there. Together, they make every modern website you've ever visited.

  




 
Section 2: Quick Summary
•	HTML uses tags like <h1>, <p>, and <ul> to structure content on a page
•	CSS is written inside <style> tags and uses properties like color, font-size, and padding
•	JavaScript is written inside <script> tags and uses functions and events (like onclick) to make pages interactive
•	Every HTML file starts with <!DOCTYPE html> to tell the browser what kind of file it is
•	A <div> is a container that helps you group and style sections of a page
•	I learned that JavaScript can read and change anything on the page using document.getElementById(...) and .innerText
•	Saving the file and refreshing the browser instantly shows my changes — no special tools needed

Section 3: System Requirements
To use HTML, CSS, and JavaScript you need:
•	✅ A computer (Windows, Mac, or Linux)
•	✅ A text editor (Notepad on Windows, or VS Code for a better experience)
•	✅ A web browser (Chrome, Firefox, or Edge)
•	✅ No internet connection required to build and test locally
•	✅ No installation or setup needed — HTML, CSS, and JavaScript all run inside the browser out of the box!

Step 2: Build Something with AI
Prompt 5
"Help me build a simple personal profile webpage using HTML, CSS, and JavaScript. I want it to have: my name as a heading, a short paragraph about me, a list of my hobbies, and two buttons — one that greets me with the current time of day, and one that toggles between a light and dark theme. Walk me through it step by step."

Section 4: Installation & First Steps
How to create your first HTML file:
1.	Open Notepad (Windows) or any text editor
2.	Type or paste your HTML, CSS, and JavaScript code
3.	Click File → Save As
4.	Name your file index.html (make sure it ends in .html, not .txt)
5.	Save it to your Desktop
6.	Double-click the file — it will open in your browser automatically
7.	Every time you make changes, save the file and refresh the browser to see updates
8.	To check your JavaScript, press F12 in the browser to open Developer Tools — the Console tab will show any errors

Section 5: Related Working Example
This is my interactive personal profile webpage built during this project using HTML for structure, CSS for styling, and JavaScript for interactivity. It includes a heading, an about-me section, a hobbies list, a goal statement, and two interactive buttons — one that displays a time-aware greeting, and one that toggles between light and dark themes.
Below is the full code, saved as index.html:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Profile Page</title>
    <style>
      /* CSS — controls how the page looks */
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f4ff;
        margin: 40px;
        color: #222;
        transition: background-color 0.3s, color 0.3s;
      }
      body.dark {
        background-color: #1e1e2f;
        color: #f0f0f0;
      }
      h1 { color: #006eaa; text-align: center; }
      h2 { color: #008060; }
      .profile-box {
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        max-width: 600px;
        margin: 0 auto;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      body.dark .profile-box {
        background-color: #2a2a3d;
      }
      ul { line-height: 2; }
      button {
        background-color: #006eaa;
        color: white;
        border: none;
        padding: 10px 18px;
        border-radius: 6px;
        cursor: pointer;
        margin: 6px 4px;
        font-size: 14px;
      }
      button:hover { background-color: #00547f; }
    </style>
  </head>
  <body>
    <div class="profile-box">
      <h1>👋 Hi, I am Jacob!</h1>
      <h2>About Me</h2>
      <p>
        I am a learner in the Moringa AI Access Program,
        building my skills in software development with
        the help of AI. I work at Safaricom in Nanyuki,
        and I love exploring new technologies.
      </p>
      <h2>My Hobbies</h2>
      <ul>
        <li>💻 Learning to code</li>
        <li>📚 Reading tech articles</li>
        <li>🇨🇳 Studying Chinese</li>
        <li>🏃 Staying active</li>
      </ul>
      <h2>My Goal</h2>
      <p id="goal-text">
        My goal is to bridge operations and engineering,
        and build solutions that make life easier for
        people I serve every day.
      </p>
 
      <!-- JavaScript-powered buttons -->
      <button onclick="greetMe()">Greet Me</button>
      <button onclick="toggleTheme()">Toggle Theme</button>
      <p id="greeting"></p>
    </div>
 
    <script>
      // JavaScript — adds behaviour to the page
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
 
      function toggleTheme() {
        document.body.classList.toggle("dark");
      }
    </script>
  </body>
</html>

Open the file in a browser, click "Greet Me" to see a greeting based on the current time, and click "Toggle Theme" to switch between light and dark mode. The page reacts in real time — that is JavaScript at work.

 
 

Section 6: AI Prompt Journal
Prompt I Used	What I Learned
"Explain what HTML, CSS, and JavaScript are using a simple analogy"	HTML is the structure of a house, CSS is the decoration, and JavaScript is the electricity that makes things work
"Teach me the 10 most important HTML tags"	Tags like <p>, <h1>, <ul>, <div>, and <button> are the building blocks of content
"Teach me the very basics of JavaScript and how to make a button do something on click"	How to write a function and connect it to an HTML element using onclick — that's how interactivity starts
"Help me build a personal profile webpage with a greet button and a theme toggle, step by step"	How HTML, CSS, and JavaScript fit together in a single file to create something interactive
"My theme toggle isn't working — what is wrong with this code?"	How to use the browser's Developer Tools (F12) and the Console to find and fix JavaScript errors

Section 7: Common Gotchas & Fixes
These are mistakes I made or things that confused me:
•	❌ Forgetting to close a tag — e.g. writing <h1>Hello without </h1> breaks the layout. Always close your tags!
•	❌ Saving as .txt instead of .html — the file won't open as a webpage. Always check the file extension when saving.
•	❌ CSS not working — I forgot to put CSS inside <style> tags. The code must be in the right place.
•	❌ JavaScript not running — I forgot to put my code inside <script> tags. Without them, the browser ignores the code completely.
•	❌ Button does nothing on click — I had spelled the function name differently in onclick="..." and in the function definition. JavaScript is case-sensitive!
•	❌ Using = instead of === — a single = assigns a value, while === checks if two things are equal. Mixing them up causes silent bugs.
•	✅ Fix: When something goes wrong, I press F12 in the browser to open Developer Tools, check the Console for errors, and paste my code into Claude with the question "what is wrong with this code?" — it always explains the problem clearly.

Section 8: References
•	📘 MDN Web Docs (best beginner resource): https://developer.mozilla.org
•	🎓 W3Schools HTML Tutorial: https://www.w3schools.com/html
•	🎓 W3Schools JavaScript Tutorial: https://www.w3schools.com/js
•	🤖 Claude AI (used in this project): https://claude.ai
•	📂 My project code: hosted on GitHub at github.com/jtaraya/my-profile-page


By: Jacob Taraya

