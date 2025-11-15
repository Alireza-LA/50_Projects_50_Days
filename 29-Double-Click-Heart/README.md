# ❤️ Double-Click Heart Animation

A simple interactive UI effect: double-clicking on an image spawns an animated heart and updates a like counter.  
Built using **HTML**, **CSS**, and **Vanilla JavaScript**, with a smooth animation and precise click-position detection.

---

## 🧠 What I Learned
- Detecting **double-clicks manually** using timestamps  
- Calculating click coordinates relative to an element  
- Creating dynamic DOM elements with animation  
- Using CSS keyframes to animate scale & opacity  
- Clean DOM removal after animation finishes  
- Building a centered UI layout with shadows & full-size background images  

---

## ⚙️ Technologies Used
- **HTML5**  
- **CSS3 (animations, positioning, shadows)**  
- **JavaScript (DOM, events, dynamic elements)**  
- **Font Awesome** for icons  

---

## 🚀 Live Demo
👉 [Github_Profiles - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/29-Double-Click-Heart/)

---

## 📁 Folder Structure
```bash
29_Double_Click_Heart/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   └── images/
│       └── river_cascade_trees_dark_background_stream_forest_nature_4k_hd_nature-1080x1920.jpg
└── readme.md
```

---

# 🧩 How It Works
1. User clicks the image once → timer starts.  
2. If the second click happens within **800ms**, it registers as a double-click.  
3. A red `<i class="fa-heart">` icon is created dynamically at the exact click position.  
4. CSS animation enlarges the heart (`scale(10)`) while fading it out.  
5. Heart element removes itself after the animation completes.  
6. The like counter updates in real time (`you liked it X times`).  
7. No framework required — pure JavaScript for all logic.

---

# 💡 Example Interaction
• User double-clicks anywhere on the image  
• A heart appears under the cursor, grows, fades, then disappears  
• Counter increments:  
  **You liked it 1 time → 2 times → 3 times...**  
• Works with any background image placed inside the `assets/images` folder  
