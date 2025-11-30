# 🧊 3D Boxes Background — Animated Cube Grid Effect

A visual grid of 3D-styled boxes that together form a full background image.  
Clicking the “Magic” button expands the grid, triggers a rotation animation, and reveals the image in a dynamic, playful way.

---

## 🧠 What This Project Demonstrates

- Creating a tiled image using individual background-positioned boxes  
- Generating UI elements dynamically through JavaScript loops  
- Using CSS transforms to simulate 3D rotation  
- Toggling complex visual states via class switching  
- Combining pseudo-elements to create depth and 3D illusion edges  

---

## ⚙️ Technologies Used

- HTML5  
- CSS3 (3D-style transforms, pseudo-elements, transitions)  
- JavaScript (DOM manipulation, element creation, event handling)

---

## 🚀 Live Demo

👉 https://alireza-la.github.io/50_Projects_50_Days/40-3D-Boxes-Background/

---

## 📁 Folder Structure

```bash
40-3D-Boxes-Background/
│
├── index.html
├── style.css
├── script.js
└── assets/
    └── gifs/
        └── giphy.gif
```

---

## 🧩 How It Works

### Box Generation
- The container starts empty
- JavaScript runs a nested loop (4×4) to create 16 boxes
- Each .box is positioned to show a different segment of the same GIF using: background-position: -Xpx -Ypx
This reconstructs one large image from small pieces.

### Magic Button
- Clicking the "Magic" button toggles the .big class on the container
- .big increases the grid size from 500×500 to 600×600
- When expanded, each .box rotates with: transform: rotateZ(360deg)
The result: a spinning, enlarging mosaic effect.

### 3D Illusion Edges
Each box uses ::before and ::after for depth:
- ::after → simulates a right side
- ::before → simulates a bottom shadow
- Both skewed to create the 3D cube appearance

---

## 💡 Example Interaction

• Page loads → static 4×4 cube grid
• User clicks Magic → grid expands & boxes rotate
• User clicks Magic again → returns to normal size
• GIF remains continuous across all tiles