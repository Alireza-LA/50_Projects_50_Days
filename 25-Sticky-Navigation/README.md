# 📌 Sticky Navigation  

A responsive **sticky navigation bar** that dynamically changes its appearance based on scroll position.  
Built with pure **HTML**, **CSS**, and **JavaScript**, this project demonstrates how to enhance navigation usability and design in modern web layouts.

---

## 🧠 What I Learned
- Detecting and responding to **scroll position** using `window.scrollY`
- Applying **CSS transitions** for smooth layout and color changes
- Managing **fixed navigation** and shadow effects dynamically
- Creating **overlayed hero sections** with background images
- Enhancing readability using contrast and layered design

---

## ⚙️ Technologies Used
- **HTML5**
- **CSS3 (Transitions, Positioning)**
- **Vanilla JavaScript**

---

## 🚀 Live Demo
👉 [Sticky Navigation - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/25-Sticky-Navigation/)

---

## 📁 Folder Structure
```bash
25_Sticky_Navigation/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   └── images/
│       └── cafe.jpg
└── readme.md

```

---

# 🧩 How It Works
1. The `.nav` element is fixed to the top and starts with a dark (`#222`) background.
2. When the user scrolls beyond a threshold (`nav.offsetHeight + 300`), an `.active` class is added via JavaScript.
3. The `.active` state changes the navbar’s background to white, text to black, and applies a soft box shadow for depth.
4. The `.hero` section displays a full-height background image with a dark overlay (`rgba(0, 0, 0, 0.5)`) for contrast.
5. Smooth transitions are handled purely with CSS, ensuring performance-friendly visual updates.
6. Scroll back to the top — the navbar reverts to its original dark transparent style.

---

# 💡 Example Interaction
• The page opens with a **dark navbar** over a **full-screen hero image** of a café.  
• As you scroll down, the navbar transitions to **white with dark text** and a subtle shadow.  
• Navigation links smoothly highlight in **red (`#c0392b`)** on hover or active state.  
• The hero text remains centered and readable due to the semi-transparent overlay.  
• The transition between states feels natural, reinforcing the sticky, modern aesthetic.
