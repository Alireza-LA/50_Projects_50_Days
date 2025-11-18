# 😊 Happy Life – Toggle Logic Project

A playful UI experiment demonstrating how different life choices interact.  
Three animated toggle switches represent **Girlfriend**, **Programming**, and **Job**, but only **two can be active at once**.  
Built using **HTML**, **CSS**, and **Vanilla JavaScript**, featuring smooth animations and logic-based constraints.

---

## 🧠 What I Learned
- Creating custom toggle switches using hidden checkboxes  
- Animating switch behavior with CSS keyframes  
- Detecting toggle changes and applying conditional logic  
- Managing mutually exclusive or limited selection states  
- Handling DOM inputs in a controlled, rule-based system  
- Designing centered UI with simple and readable layout  

---

## ⚙️ Technologies Used
- HTML5  
- CSS3 (animations, custom toggles, layout)  
- JavaScript (event listeners, state logic)

---

## 🚀 Live Demo
👉 [Github_Profiles - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/32-Happy-Life/)

---

## 📁 Folder Structure
```bash
32-Happy-Life/  
│  
├── index.html  
├── style.css  
├── script.js  
└── readme.md
```

---

# 🧩 How It Works
1. Each option is represented by a hidden checkbox and a styled label.  
2. CSS animations handle the ball sliding left/right when toggled.  
3. JavaScript listens for changes on all three toggles.  
4. If all three toggles become active simultaneously:  
   - The script automatically turns one off  
   - Priority depends on **which toggle was clicked last**  
5. Maximum of **two active choices** are allowed at any time.  

---

# 💡 Example Interaction
• User enables **Girlfriend** → ok  
• User enables **Programming** → still ok  
• User tries enabling **Job** → one of the previous toggles switches off  
• The UI always keeps only two selections active  
• Animations run smoothly both when toggling on and off
