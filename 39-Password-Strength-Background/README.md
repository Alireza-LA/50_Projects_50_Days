# 🔐 Password Strength Background — Dynamic Blur Effect

A minimal interactive password UI where the background blur decreases as the user types a stronger (longer) password.  
This creates an instant visual strength indicator using smooth, real-time CSS filter updates with no external JavaScript libraries.

---

## 🧠 What This Project Demonstrates

- Real-time password input reading with JavaScript  
- Updating CSS blur values dynamically through DOM manipulation  
- Using background filters to represent password strength visually  
- Combining Tailwind utility classes with custom CSS  
- Structuring a clean, centered login-style form on top of a blurred image  

---

## ⚙️ Technologies Used

- HTML5  
- CSS3 (blur filter, positioning)  
- Tailwind CSS (utility styling)  
- JavaScript (event listeners + filter updates)

---

## 🚀 Live Demo

👉 https://alireza-la.github.io/50_Projects_50_Days/39-Password-Strength-Background/

---

## 📁 Folder Structure

```bash
39-Password-Strength-Background/
│
├── index.html
├── style.css
└── script.js
```

---

## 🧩 How It Works

### Blur Logic
- The background is a full-screen image with an initial blur of 32px
- On every password input:
    - JavaScript reads the current length
    - Calculates: blur = 32 - length * 4
    - Updates the background’s CSS filter property in real-time
- As the password grows longer → blur becomes smaller → image grows sharper

### UI Structure
- Login-style card centered via flexbox
- Tailwind used for spacing, borders, colors, and typography
- Background sits behind everything using position: absolute + negative z-index
- Form elements follow minimal styling for clarity and focus

---

## 💡 Example Interaction

- Page loads → background heavily blurred
- User types “a” → blur decreases to 28px
- User types “secure123” → blur becomes clear
- Visual clarity = intuitive password strength cue