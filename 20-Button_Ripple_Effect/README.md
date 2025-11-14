# Button Ripple Effect 🌊

A visually engaging **button ripple animation** built with **HTML**, **CSS**, and **JavaScript**.  
When a user clicks the button, a smooth expanding ripple appears at the click position, creating a modern and interactive feel.

---

## 🧠 What I Learned
- How to **capture click coordinates** relative to an element using JavaScript  
- Dynamically **create and animate DOM elements** (`createElement`, `appendChild`, `remove`)  
- Using **CSS keyframes** and **transform scaling** for animation effects  
- Handling **event listeners** and removing temporary elements efficiently  
- Styling interactive buttons with **positioning and overflow control**

---

## ⚙️ Technologies Used
- **HTML5**
- **CSS3 (Animations, Keyframes, Transforms)**
- **JavaScript (ES6)**

---

## 🚀 Live Demo
👉 [Button Ripple Effect - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/20-Button_Ripple_Effect/)

---

## 📁 Folder Structure
```bash
20_Button_Ripple_Effect/
│
├── index.html
├── style.css
├── script.js
└── readme.md
``` 

---

## 🧩 How It Works

1. When the button is clicked, JavaScript captures the exact cursor position on the button.
2. A <span> element with the .circle class is created and positioned at that point.
3. The CSS animation expands the circle using the scale keyframe while fading it out.
4. After the animation ends, the element is automatically removed from the DOM.

---

## 💡 Example Interaction

• Default state: A single purple button centered on the page.
• On click:
    • A white circular ripple expands outward from the click position.
    • The ripple fades out smoothly, creating a modern UI feedback effect.