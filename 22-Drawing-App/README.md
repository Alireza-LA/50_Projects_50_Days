# Drawing App ✏️  

An interactive **HTML Canvas Drawing App** built with **HTML**, **CSS**, and **JavaScript**.  
Users can draw freely, adjust brush size and color, and clear the canvas with one click — a fun, lightweight paint-style experience.

---

## 🧠 What I Learned
- How to use the **Canvas API** (`getContext('2d')`) to draw shapes and lines  
- Managing **mouse events** (`mousedown`, `mouseup`, `mousemove`) for drawing interaction  
- Dynamically adjusting **brush size and color**  
- Clearing the canvas efficiently with `clearRect()`  
- Implementing responsive UI controls with event listeners  

---

## ⚙️ Technologies Used
- **HTML5 Canvas**
- **CSS3 (Layout & Styling)**
- **JavaScript (ES6)**

---

## 🚀 Live Demo
👉 [Drawing App - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/22-Drawing-App/)

---

## 📁 Folder Structure
```bash
22-Drawing-App/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

---

# 🧩 How It Works
1. The `<canvas>` element creates a drawable area for user input.
2. When the mouse is pressed and moved, JavaScript tracks coordinates and draws:
   - **Circles** at each point for smoother edges.
   - **Lines** between consecutive points for continuity.
3. Brush **size** can be increased or decreased (1–50).
4. Brush **color** is updated dynamically via the color picker.
5. Clicking **Clear (X)** resets the entire canvas using `ctx.clearRect()`.

---

# 💡 Example Interaction
• Default: A blank 800×800 canvas with a blue border.  
• User holds the mouse and moves → draws smooth lines following cursor.  
• User changes brush size/color → draws with new settings instantly.  
• Clicking “X” clears the canvas completely for a fresh start.
