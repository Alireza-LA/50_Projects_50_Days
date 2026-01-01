# 😊 Feedback UI – Customer Satisfaction Panel

A clean and interactive feedback panel that allows users to rate their satisfaction level and submit a review.  
Once submitted, the UI transforms into a thank-you message showing the selected feedback.

---

## 🧠 What This Project Demonstrates
- Handling click events on dynamic UI components  
- Managing active UI states using class toggling  
- Replacing full UI sections dynamically  
- Building modern card-style layouts with pure CSS  
- Using icon libraries (Font Awesome)

---

## ⚙️ Technologies Used
- HTML5  
- CSS3  
- JavaScript (DOM manipulation, event delegation)  
- Font Awesome Icons

---

## 🚀 Live Demo
👉 https://alireza-la.github.io/50_Projects_50_Days/43-Feedback-Boxes/

---

## 📁 Folder Structure
```bash
43-Feedback-Boxes/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

---

## 🧩 How It Works

### Rating Selection
- Three rating cards are displayed: Unhappy, Neutral, and Satisfied
- Clicking on a card:
    - Removes the active state from others
    - Highlights the selected card
    - Stores the selected feedback value

### Submit Action

- Clicking Send Review:
    - The panel content is replaced with a thank-you message
    - The chosen rating is displayed dynamically

---

## 💡 Example Interaction

- User selects a rating
- Active card highlights
- User clicks Send Review
- Thank-you message appears with selected feedback