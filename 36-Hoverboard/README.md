# 🎨 Hoverboard -- Interactive Color Grid

A playful visual effect where hundreds of tiny squares light up with
vibrant colors as you hover your mouse over them.
Each square smoothly transitions back to its dark state after the cursor
leaves, creating an engaging neon‑trail effect.

---

## 🧠 What This Project Demonstrates

-   Dynamic element creation using JavaScript
-   Efficient event handling for large numbers of elements
-   Generating random colors for interactive UI feedback
-   Smooth CSS transitions and glow effects
-   DOM manipulation without external libraries

---

## ⚙️ Technologies Used

-   HTML5
-   CSS3 (transitions, shadows, layout)
-   JavaScript (DOM creation, events, randomization)

---

## 🚀 Live Demo

👉 https://alireza-la.github.io/50_Projects_50_Days/36-Hoverboard/

---

## 📁 Folder Structure

``` bash
36-Hoverboard/
│
├── index.html
├── style.css
└── script.js
```

---

## 🧩 How It Works

### Grid Generation

-   A constant (`SQUARES = 700`) defines how many squares will be created
-   JavaScript generates each `.square` div dynamically
-   All squares are appended to the `.container` element

### Hover Color Logic

-   On `mouseover`, a random color is selected from a predefined array
-   The square receives:
    background: <random-color>
    box-shadow: 0 0 2px <color>, 0 0 10px <color>
-   On `mouseout`, the square returns to:
    background: #1d1d1d
    box-shadow: 0 0 2px #000
-   CSS transitions create a glowing fade-out effect

### Random Color Selection

The script uses:
    colors[Math.floor(Math.random() * colors.length)]
ensuring every hover produces a new visual effect.

---

## 💡 Example Interaction

• User moves mouse across the board → nearby squares light up instantly
• Cursor leaves → each square fades back to dark mode
• Quick movements create colorful light trails
• Slow movements reveal soft glowing transitions
• Entire grid responds interactively without lag
