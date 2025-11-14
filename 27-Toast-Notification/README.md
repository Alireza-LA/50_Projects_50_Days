# 🔔 Toast Notification  

A simple yet elegant **toast notification system** built using **HTML**, **CSS**, and **Vanilla JavaScript**.  
This project demonstrates how to dynamically create, display, and remove short-lived messages for user feedback or alerts — similar to modern UI frameworks’ notification systems.

---

## 🧠 What I Learned
- Dynamically creating and removing DOM elements using `document.createElement()` and `appendChild()`  
- Implementing **auto-dismiss animations** with `setTimeout()`  
- Generating **randomized content** and message types  
- Managing UI layers using **fixed positioning**  
- Designing reusable notification styles with minimal CSS

---

## ⚙️ Technologies Used
- **HTML5**
- **CSS3 (Positioning, Transitions)**
- **Vanilla JavaScript (DOM Manipulation)**

---

## 🚀 Live Demo
👉 [Toast Notification - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/27-Toast-Notification/)

---

## 📁 Folder Structure
```bash
27_Toast_Notification/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

---

# 🧩 How It Works
1. The page includes a button labeled **“Show Notification”** and an empty `<div id="toasts">` container.  
2. When the button is clicked, the `createNotification()` function dynamically creates a new `.toast` element.  
3. Each toast receives:
   - A **random message** from the `messages[]` array (if none is passed manually)  
   - A **random type** (`info`, `success`, or `error`), determining its color styling  
4. The notification is then **appended** to the `#toasts` container at the bottom-right corner.  
5. After **3 seconds**, the notification automatically disappears via `notif.remove()`.  
6. Multiple toasts can appear at once, stacking vertically in reverse order using `flex-direction: column` and `align-items: flex-end`.  

---

# 💡 Example Interaction
• User clicks the “Show Notification” button.  
• A small white toast pops up in the bottom-right corner with a random message (e.g., *“Message Three”*).  
• Each message color corresponds to its type:  
  - 🟣 **Info** → `rebeccapurple`  
  - 🟢 **Success** → `rgb(0, 255, 0)`  
  - 🔴 **Error** → `red`  
• After 3 seconds, the toast smoothly disappears without user interaction.  
• Repeated clicks generate multiple stacked notifications — creating a lively, transient feedback system.
