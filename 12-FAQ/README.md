# FAQ (Frequently Asked Questions) ❓

A clean and interactive FAQ section built using **HTML**, **CSS**, and **JavaScript**.  
Users can expand or collapse each question to reveal its answer, making it a great component for any website that needs a responsive, user-friendly help section.

---

## 🧠 What I Learned
- How to **toggle classes dynamically** in JavaScript using `classList.toggle()`  
- Creating **interactive accordion-style components**  
- Managing **element visibility and transitions** with CSS  
- Using **Font Awesome icons** to enhance UI clarity  
- Writing **responsive layouts** that adapt to mobile screens

---

## ⚙️ Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Font Awesome (v6.4.2)**

---

## 🚀 Live Demo
👉 [FAQ Project - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/12-FAQ/)

---

## 📁 Folder Structure
```bash
12-FAQ/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

---

## 🧩 How It Works
1. Each FAQ item consists of a **question**, **answer**, and a **toggle button**.  
2. When the toggle button is clicked, a JavaScript function adds or removes the `active` class from the parent element.  
3. The **CSS** uses the `.active` class to reveal or hide the answer text with smooth transitions.  
4. The icons (`chevron-down` / `times`) automatically switch using conditional visibility in CSS.

---

## 💡 Example Interaction
- Default view: only the questions are visible.  
- When a user clicks the toggle:  
  - The question’s background changes to white  
  - The answer appears below it  
  - The icon switches from a **down arrow** to an **X (close)** symbol  

