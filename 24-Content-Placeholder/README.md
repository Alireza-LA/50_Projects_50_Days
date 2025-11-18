# 📰 Content Placeholder  

A smooth **skeleton loading animation** built using HTML, CSS, and JavaScript.  
This project simulates a content loading experience (like modern social media feeds) where gray placeholders animate before the real content appears.

---

## 🧠 What I Learned
- How to create **skeleton screens** using CSS gradients and keyframe animations  
- Using **JavaScript timeouts** to simulate asynchronous data fetching  
- Dynamically injecting content into placeholders  
- Managing **loading states** with class toggling  
- Understanding how **shimmer loading effects** improve perceived performance

---

## ⚙️ Technologies Used
- **HTML5**
- **CSS3 (Animations, Keyframes)**
- **Vanilla JavaScript**

---

## 🚀 Live Demo
👉 [Content Placeholder - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/24-Content-Placeholder/)

---

## 📁 Folder Structure
```bash
24-Content-Placeholder/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

---

# 🧩 How It Works
1. The page initially shows a **skeleton loader** made of light gray animated blocks.
2. Each text and image section uses `.animated-bg` and `.animated-bg-text` classes.
3. The CSS animation moves a gradient across these blocks, creating a **shimmer effect**.
4. After 2.5 seconds (`setTimeout`), the script injects real data (image, text, and author info).
5. Once content loads, the animation classes are removed — revealing the final static card.

---

# 💡 Example Interaction
• When the page loads, placeholders shimmer in a looping animation.  
• After 2.5 seconds, a photo, title, excerpt, and author details fade into view.  
• The transition feels smooth and natural, mimicking real-world loading behavior.  
• Lightweight and easy to adapt for APIs, articles, or news feeds.
