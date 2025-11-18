# Drag N Drop 🎯

An interactive **drag and drop interface** built with **HTML**, **CSS**, and **JavaScript**.  
Users can click and drag an image block into different containers, demonstrating how the native drag-and-drop API works in the browser.

---

## 🧠 What I Learned
- How to use the **HTML Drag and Drop API** (`dragstart`, `dragend`, `dragover`, `dragenter`, `dragleave`, `drop`)  
- Managing **drag state changes** dynamically through JavaScript class manipulation  
- Handling **default behaviors** and preventing unwanted actions using `e.preventDefault()`  
- Enhancing UX through **visual feedback** (e.g., hover effects, border styles)  
- Applying **responsive layouts** with CSS for flexible arrangements across screen sizes

---

## ⚙️ Technologies Used
- **HTML5 (Drag & Drop API)**
- **CSS3 (Flexbox, Media Queries)**
- **JavaScript (ES6)**

---

## 🚀 Live Demo
👉 [Drag N Drop - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/21-Drag_N_Drop/)

---

## 📁 Folder Structure
```bash
21-Drag-N-Drop/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

---

## 🧩 How It Works
1. The draggable image (`.fill`) starts inside the first container (`.empty`).  
2. When the drag starts, a temporary `hold` class is added to the element for styling.  
3. The empty boxes respond to drag events by changing appearance when hovered over.  
4. Dropping the image triggers `dragDrop()`, which moves the `.fill` element into the new container.  
5. Visual states reset automatically after each interaction.

---

## 💡 Example Interaction
• **Default state:** One image block inside the first box.  
• **On drag:** The box under the cursor highlights with a dashed border.  
• **On drop:** The image moves smoothly into the selected container.  
• **Responsive behavior:** On smaller screens, containers stack vertically for better usability.

