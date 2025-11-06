# 🕒 Theme Clock

An elegant **analog and digital clock** built with **HTML**, **CSS**, and **JavaScript**, featuring a **Dark/Light Mode toggle**.  
The clock updates in real time and smoothly animates the clock hands while displaying the current date and time.

---

## 🧠 What I Learned
- How to use **JavaScript’s Date object** to dynamically update time and date  
- Creating **analog clock animations** using CSS `transform` and JavaScript  
- Implementing **Dark/Light mode toggling** by changing CSS variables  
- Handling **transitions and easing** for smoother visual effects  
- Using `setInterval()` for real-time updates

---

## ⚙️ Technologies Used
- **HTML5**  
- **CSS3**  
- **JavaScript (ES6)**

---

## 🚀 Live Demo
👉 [Theme Clock - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/19-Theme-Clock/)

---

## 📁 Folder Structure
```bash
19_Theme_Clock/
│
├── index.html
├── style.css
├── script.js
└── readme.md

```

##  🧩 How It Works

1. The JavaScript continuously retrieves the current system time using the Date object.
2. It calculates rotation angles for hour, minute, and second hands using math formulas:
    • Hours → (hours % 12) * 30 + minutes * 0.5
    • Minutes → (minutes * 6) + (seconds * 0.1)
    • Seconds → (seconds * 6)
3. The transform: rotate() property updates the needle positions every second.
4. A Dark/Light mode button toggles a dark class on the <html> element, dynamically switching color themes via CSS variables.
5. The date is formatted to show the day, month, and date inside a small circular indicator.

---

💡 Example Interaction

• Default mode: Light Theme
• Click the “Dark Mode” button:
    • Background and text colors invert
    • The toggle button label changes to “Light Mode”
• The clock hands rotate continuously, and the time/date update every second.

---

🎯 Key Features

• Real-time analog and digital time synchronization
• Smooth transitions between dark and light themes
• Subtle animation effects using cubic-bezier() easing
• Clean, minimal, and responsive design