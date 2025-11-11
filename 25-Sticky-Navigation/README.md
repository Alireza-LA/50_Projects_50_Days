# 📌 Sticky Navigation  

A responsive **sticky navigation bar** that dynamically changes its appearance based on scroll position.  
Built with pure **HTML**, **CSS**, and **JavaScript**, this project demonstrates how to enhance navigation usability and design in modern web layouts.

---

## 🧠 What I Learned
- How to detect **scroll events** and track vertical position using `window.scrollY`  
- Using **CSS transitions** for smooth color and layout changes  
- Implementing **fixed positioning** for persistent navigation  
- Dynamically toggling classes (`.active`) based on scroll conditions  
- Designing responsive layouts that adapt to viewport changes

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
23_Sticky_Navigation/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

---

# 🧩 How It Works
1. The navigation bar is initially transparent and positioned at the top using `position: fixed`.
2. As the user scrolls beyond a certain threshold (`nav.offsetHeight + 300`), JavaScript adds an `.active` class.
3. The `.active` class triggers CSS transitions — changing background color, text color, and padding.
4. When the user scrolls back up, the `.active` class is removed, restoring the original style.
5. This creates a **smooth, modern sticky navigation** effect commonly seen in landing pages.

---

# 💡 Example Interaction
• Page loads with a dark transparent navbar over a full-screen hero image.  
• Scrolling down triggers the navbar to become solid white with darker text.  
• Navigation links highlight on hover, and transitions remain smooth.  
• The effect helps maintain visual context and ease of access while reading long pages.

