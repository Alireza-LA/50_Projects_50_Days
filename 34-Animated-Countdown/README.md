# ⏳ Animated Countdown – Smooth Number Flip Animation

A small UI component that displays a countdown with rotating number animations.  
Each digit flips into view using CSS keyframes, followed by a final “Go” message and a replay option.

---

## 🧠 What This Project Demonstrates
- Managing sequential animations using JavaScript event listeners  
- Applying CSS transform-based transitions (rotate, scale)  
- Controlling DOM state with class toggling  
- Resetting animations programmatically  
- Handling user interactions (Replay button)

---

## ⚙️ Technologies Used
- HTML5  
- CSS3 (keyframes, transforms, transitions)  
- JavaScript (DOM selection, animation handling)

---

## 🚀 Live Demo
👉 https://alireza-la.github.io/50_Projects_50_Days/34-Animated-Countdown/

---

## 📁 Folder Structure
```bash
34-Animated-Countdown/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

---

## 🧩 How It Works
Countdown Logic

- Numbers are placed inside the .nums container.
- The first number starts with class in, triggering the goIn animation.
- After each animation ends:
    - The current number switches to out
    - The next number receives in
- This continues until the final number completes its sequence.

State Switching
 - When countdown completes:
    - .counter collapses via hide animation
    - .final expands via show animation

Replay Feature
Clicking the Replay button:
- Resets all classes
- Restores the first number to in
- Restarts the entire animation cycle

---

## 💡 Example Interaction

• Page loads → countdown runs automatically
• Numbers flip: 3 → 2 → 1 → 0
• “Go” message appears
• User clicks Replay → countdown starts again