# 🔐 Password Generator

A customizable password generator that lets users create secure passwords with adjustable length and character options.  
Built using **HTML**, **CSS**, and **Vanilla JavaScript**, featuring clipboard copying, dynamic generation, and a clean UI panel for options.

---

## 🧠 What I Learned
- Generating random characters using ASCII codes  
- Creating reusable random functions for uppercase, lowercase, numbers, and symbols  
- Combining selected character types dynamically  
- Building a responsive settings panel with checkboxes and numeric inputs  
- Copying text to clipboard using the Clipboard API  
- Managing input validation and preventing empty-type cases  

---

## ⚙️ Technologies Used
- HTML5  
- CSS3 (flexbox layout, shadows, UI styling)  
- JavaScript (DOM logic, random generation, clipboard API)  
- Font Awesome icons  

---

## 🚀 Live Demo
👉 [Github_Profiles - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/31-Password-Generator/)

---

## 📁 Folder Structure
```bash
31-Password-Generator/  
│  
├── index.html  
├── style.css  
├── script.js  
└── readme.md
```

---

# 🧩 How It Works
1. User selects which character types to include (uppercase, lowercase, numbers, symbols).  
2. Length input determines how many characters the password will contain.  
3. When the “Generate Password” button is clicked:  
   - Selected character generators are grouped  
   - Characters are added in rotation to ensure even distribution  
   - The final password is sliced to the correct length  
4. Clipboard button copies the generated password using `navigator.clipboard.writeText()`.  
5. Alerts confirm when the password has been copied successfully.  

---

# 💡 Example Interaction
• User selects: *uppercase, lowercase, numbers → symbols off*  
• Sets password length to **14**  
• Clicks **Generate Password**  
• A secure password appears instantly  
• Clicking the clipboard icon copies it with one tap  
• Works with any mix of character types and lengths 4–20
