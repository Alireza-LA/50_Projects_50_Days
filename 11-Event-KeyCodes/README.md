# Event KeyCodes ⌨️

A simple and interactive web app that displays the **key, keyCode, and code** values whenever you press a key on your keyboard.  
Perfect for learning about keyboard events in JavaScript or debugging input handling in web projects.

---

## 🧠 What I Learned
- How to use the **`keydown` event listener** in JavaScript  
- Understanding the difference between **`event.key`**, **`event.keyCode`**, and **`event.code`**  
- Dynamically updating the DOM based on user input  
- Designing a **responsive and minimal UI** using CSS  

---

## ⚙️ Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

## 🚀 Live Demo
👉 [Event KeyCodes - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/11-Event-KeyCodes/)

---

## 📁 Folder Structure
```bash
11-Event-KeyCodes/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

---

## 🧩 How It Works
1. When the user presses any key on the keyboard, the app listens for the `keydown` event.  
2. The **key**, **keyCode**, and **code** are extracted from the event object.  
3. These values are displayed dynamically on the page, replacing the placeholder text.  
4. If the spacebar is pressed, it’s displayed as `"Space"` for clarity.

---

## 📜 Example Output
Pressing the **"A"** key shows:
```
event.key: A
event.keyCode: 65
event.code: KeyA
```
