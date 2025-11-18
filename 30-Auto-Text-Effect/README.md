# ✨ Auto Text Effect

A simple interactive typing animation: text is automatically typed on screen, looping endlessly, while a speed control lets you adjust how fast the text appears.  
Built using **HTML**, **CSS**, and **Vanilla JavaScript**, with smooth timing logic and real-time speed updates.

---

## 🧠 What I Learned
- Creating auto-typing text animations using substring slicing  
- Using setTimeout() for controllable timing loops  
- Building reactive UI by listening to input events  
- Making text animations repeat cleanly after completion  
- Centering UI elements and designing a minimal layout  
- Managing speed with dynamic recalculation (300 / value)

---

## ⚙️ Technologies Used
- HTML5  
- CSS3 (layout, positioning, backgrounds)  
- JavaScript (timers, DOM updates, event listeners)

---

## 🚀 Live Demo
👉 [Github_Profiles - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/30-Auto-Text-Effect/)

---

## 📁 Folder Structure
```bash
30-Auto-Text-Effect/  
│  
├── index.html  
├── style.css  
├── script.js  
└── readme.md
```


---

# 🧩 How It Works
1. A counter (idx) represents how many characters to display.  
2. The writeText() function updates the <h1> element using text.slice(0, idx).  
3. Once the full string is shown, the counter resets to 1.  
4. A timed loop (setTimeout) continuously updates the text.  
5. The user adjusts the typing speed using a numeric input (1–10).  
6. Each input event recalculates the delay using 300 / speed.  
7. The animation runs smoothly without requiring any library.

---

# 💡 Example Interaction
• Text appears letter by letter.  
• User changes the speed input value.  
• Typing becomes faster or slower immediately.  
• When text reaches the end, animation restarts from the beginning.  
• Works with any sentence inserted inside script.js.
