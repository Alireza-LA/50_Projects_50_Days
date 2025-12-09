# 🔐 Verify Account — Six-Digit Code Input UI

A compact verification UI that asks the user to enter a six-digit code sent to their email address. This project focuses on building an accessible, responsive input layout and small JavaScript logic to streamline entry (auto-focus, backspace behavior) rather than any real email delivery or backend verification.

---

## 🧠 What This Project Demonstrates

- Building a multi-field input UI for short one-time codes
- Handling keyboard interactions to improve UX (auto-advance, backspace)
- Styling large numeric inputs for clarity and responsiveness
- Using simple JS to control focus and input behavior without external libraries

---

## ⚙️ Technologies Used

- HTML5
- CSS3 (responsive layout, input styling)
- JavaScript (DOM event handling)

---

## 🚀 Live Demo

👉 https://alireza-la.github.io/50_Projects_50_Days/41-Verify-Account/

---

## 📁 Folder Structure

```bash
41-Verify-Account/
│
├── index.html
├── style.css
└── script.js
```

---

## 🧩 How It Works

### Markup
- The page contains six individual `input` elements (type `number`) arranged in a single row inside `.code-container`. Each field represents one digit of the verification code.

### Styling
- Inputs are styled to be large and centered for easy tapping and reading. Mobile-friendly rules reduce input size and wrap inputs when the viewport is narrow.
- CSS also disables the browser's number spinner controls for a cleaner look.

### JavaScript Behavior
- On page load, the first input is focused.
- The script listens for `keydown` events and:
  - If a numeric key (0–9) is pressed, the current input is cleared and focus moves to the next field.
  - If `Backspace` is pressed, focus moves to the previous field.
- This creates a smooth entry flow so a user can type digits sequentially without manually changing focus.

Note: because inputs are `type="number"`, `maxlength` attributes are not enforced by browsers — the JS behavior enforces single-digit entry UX.

---

## 💡 Example Interaction

• Page loads → the first digit input is focused.
• User types `3` → the digit appears and focus moves to the next input.
• User types `8` → focus advances again, repeating until all six digits are entered.
• User presses `Backspace` → focus moves back so the previous digit can be corrected.

This is a UI-only demo — no backend verification or email is sent.

---

If you'd like, I can also:
- Add ARIA attributes and `inputmode` improvements for better mobile keyboard behavior.
- Enhance the JS to paste an entire 6-digit code from the clipboard.
- Create a small visual success state once all inputs are filled.
