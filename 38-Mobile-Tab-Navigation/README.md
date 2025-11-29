# 📱 Mobile Tab Navigation — Smooth, App-Style Page Switching

A clean mobile-style tab navigation interface featuring animated content switching, icon-based tabs, and a compact phone-frame layout.  
Each tab displays a different image panel with smooth transitions, creating an app-like UX without external frameworks.

---

## 🧠 What This Project Demonstrates

- Managing active/inactive UI states with CSS classes  
- Smoothly transitioning between content screens using opacity fades  
- Handling navigation events with simple, readable JavaScript  
- Structuring mobile-like UI components inside a simulated phone wrapper  
- Using icon libraries (Font Awesome) for clear and minimal tab symbols  

---

## ⚙️ Technologies Used

- HTML5  
- CSS3 (opacity transitions, positioning, phone mockup)  
- JavaScript (event listeners + tab switching logic)  
- Font Awesome Icons

---

## 🚀 Live Demo

👉 https://alireza-la.github.io/50_Projects_50_Days/38-Mobile-Tab-Navigation/

---

## 📁 Folder Structure

```bash
38-sMobile-Tab-Navigation/
│
├── index.html
├── style.css
├── script.js
└── assets/
    └── images/
        ├── home.jpg
        ├── work.jpg
        ├── blog.jpg
        └── about_us.jpg
```

---

## 🧩 How It Works

### Content Switching Logic
- All image panels are stacked with absolute positioning
- Each .content begins with opacity: 0
- Clicking a tab triggers:
    - Removing .show from all content panels
    - Removing .active from all tab items
    - Adding .show to the selected panel
    - Adding .active to the clicked tab
- .show fades in the correct image via:
  opacity: 1;
  transition: opacity 0.4s ease;

---

## Navigation Bar
- Bottom-fixed <nav> element
- Each tab uses:
    - A Font Awesome icon
    - A label (“Home”, “Work”, “Blog”, “About Us”)
- Active tab appears purple
- Hover and active states share the same highlight