# 🔍 Live User Filter – Real-Time Search UI

A dynamic user directory that fetches live user data and allows real-time filtering by name or location.  
Typing in the search field instantly hides or shows matching users without any page reload.

---

## 🧠 What This Project Demonstrates
- Fetching live API data using JavaScript (Fetch API)  
- Dynamically creating DOM elements  
- Real-time list filtering based on user input  
- Class-based UI visibility control  
- Building clean UI cards using only CSS  

---

## ⚙️ Technologies Used
- HTML5  
- CSS3  
- JavaScript (Fetch API, DOM manipulation, live filtering)

---

## 🚀 Live Demo
👉 https://alireza-la.github.io/50_Projects_50_Days/42-Live-User-Filter/

---

## 📁 Folder Structure
```bash
42-Live-User-Filter/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

---

## 🧩 How It Works

### Data Loading
- On page load, the app fetches 50 random users from the randomuser.me API
- User cards are created dynamically and inserted into the DOM
### Live Filtering
- Each time the user types into the search field:
    - The app checks the text against user names and locations
    - Matching users remain visible
    - Non-matching users are hidden using the .hide class
- Instant UI Updates
- No reloads, no delays — everything updates in real time.

---

## 💡 Example Interaction

- Page loads → users are fetched automatically
- User types “canada” → only Canadian users remain visible
- User types a name → list updates instantly
- Clearing input → full list reappears