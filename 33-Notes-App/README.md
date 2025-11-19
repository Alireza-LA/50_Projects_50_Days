# 📝 Notes App – Markdown-Powered Sticky Notes

A simple, dynamic notes application built using HTML, CSS, and Vanilla JavaScript.  
Users can create, edit, delete, and automatically save notes using localStorage.  
Supports Markdown rendering via the marked.js library.

---

## 🧠 What I Learned
- Dynamically creating UI elements using JavaScript  
- Rendering Markdown to HTML using marked  
- Persisting user data in localStorage  
- Toggling between edit mode and preview mode  
- Updating and storing multiple notes in a scalable way  
- Building a flexible, responsive layout with CSS  

---

## ⚙️ Technologies Used
- HTML5  
- CSS3  
- JavaScript (DOM manipulation, events, localStorage)  
- Marked.js (Markdown parser)

---

## 🚀 Live Demo
👉 https://alireza-la.github.io/50_Projects_50_Days/33-Notes-App/

---

## 📁 Folder Structure
```bash
33-Notes-App/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

## 🧩 How It Works

Add Note button inserts a new editable note into the page.

Notes contain:
- Edit button → switches between Markdown editor and preview  
- Delete button → removes the note entirely  

Text inside each textarea is converted to HTML using marked().

On every input change:
- Markdown preview updates live  
- Data is synced to localStorage  

On page reload:
- Notes are restored from saved localStorage data  

No backend needed — everything runs fully in the browser.

---

## 💡 Example Interaction

• User clicks Add Note → empty note appears  
• User writes Markdown → preview updates live  
• User clicks Edit → toggles between editor and rendered note  
• User refreshes the page → all notes reappear  
• User deletes a note → instantly removed and saved state updates  
