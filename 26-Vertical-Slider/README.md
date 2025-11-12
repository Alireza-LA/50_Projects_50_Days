# 🎞️ Vertical Slider  

A dynamic **vertical split-screen slider** built with **HTML**, **CSS**, and **JavaScript**.  
This project showcases how to synchronize motion between two opposite panels — text content on the left and background images on the right — creating a visually engaging transition effect.

---

## 🧠 What I Learned
- Managing **two synchronized sliding panels** with opposite motion  
- Using **CSS transforms** and transitions for smooth vertical animations  
- Dynamically updating **active slides** through JavaScript event listeners  
- Applying **modular arithmetic logic** to create seamless looping transitions  
- Structuring clean, scalable layouts for interactive UI components

---

## ⚙️ Technologies Used
- **HTML5**
- **CSS3 (Flexbox, Transitions)**
- **Vanilla JavaScript**

---

## 🚀 Live Demo
👉 [Vertical Slider - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/26-Vertical-Slider//)

---

## 📁 Folder Structure
```bash
18_Vertical_Slider/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   └── images/
│       ├── 1920-x-1080-nature-desktop-1qq2xltew2t6ezel.jpg
│       ├── 1920-x-1080-nature-desktop-iiig860hft29abgr.jpg
│       ├── 1920-x-1080-nature-desktop-rfb2c8p6lww2hhe5.jpg
│       ├── 1920-x-1080-nature-desktop-rhxm9xov4p4hzb9o.jpg
│       ├── 1920-x-1080-nature-desktop-vc6rx9euk9npjhtg.jpg
│       └── venomous-pit-viper-cottonmouth-lcjrvlc61b9z42l4.jpg
└── readme.md
```

---

# 🧩 How It Works
1. The slider contains two main panels:  
   • **Left Slide** – holds titles and descriptions with unique background colors.  
   • **Right Slide** – holds full-size background images that correspond to each section.  
2. Both panels move in **opposite directions** on every button click — creating a mirrored motion effect.  
3. The JavaScript code tracks the `activeSlideIndex`, looping through slides continuously using:  
   ```js
   if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0
   if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1
   ```
4. The `transform: translateY()` property moves slides vertically according to their index.  
5. Transition timing (`0.5s ease-in-out`) ensures smooth animation between states.  
6. The control buttons (`.up-button` and `.down-button`) trigger the direction of movement and update both panels simultaneously.  
7. The layout remains responsive and scales to full viewport height and width for a seamless experience.

---

# 💡 Example Interaction
• The screen starts with a **text block** on the left (“Snake”) and a **matching image** on the right.  
• Clicking the **up arrow** reveals the next slide — both sides move in opposite directions.  
• Clicking the **down arrow** reverses the motion, looping endlessly through all slides.  
• Each transition reveals a new theme and color palette — from beaches and forests to lakes and plains.  
• The mirrored motion between panels creates a cinematic, dual-scroll experience reminiscent of split storytelling or parallax transitions.
