# Kinetic Loader ♻️  

A sleek and modern **CSS-only loading animation** built using **pseudo-elements** and **keyframe rotations**.  
This kinetic loader creates an elegant rotating illusion, perfect for displaying while content is being fetched or processed.

---

## 🧠 What I Learned
- How to create **complex animations** purely with **CSS keyframes**  
- Using **pseudo-elements (`::before`, `::after`)** to build symmetrical shapes  
- Combining **rotations, timing delays**, and **infinite loops** for seamless animation  
- Structuring and positioning loaders with **absolute positioning**  
- Designing minimalist loaders using **border manipulations** instead of images or SVGs  

---

## ⚙️ Technologies Used
- **HTML5**
- **CSS3 (Animations, Keyframes, Pseudo-elements)**
- *(No JavaScript required for animation)*

---

## 🚀 Live Demo
👉 [Kinetic Loader - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/23-Kinetic-Loader/)

---

## 📁 Folder Structure
```bash
23-Kinetic-Loader/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

---

# 🧩 How It Works
1. The `.kinetic` div acts as the main container for the animation.
2. Two triangles are generated using `::before` and `::after` pseudo-elements.
3. Each triangle uses `border` properties with one visible side (bottom) to form its shape.
4. CSS keyframes (`rotateA`, `rotateB`) continuously rotate these triangles with offset delays, creating a **kinetic rotation illusion**.
5. The background and layout are centered using **Flexbox** for perfect alignment.

---

# 💡 Example Interaction
• The page background is deep blue-gray (`#2c3e50`).  
• At the center, two white triangles spin alternately, creating a smooth rotation loop.  
• The animation runs infinitely without any flicker or jumps.  
• Lightweight and GPU-optimized for minimal performance cost.

