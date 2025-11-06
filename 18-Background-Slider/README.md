# 🌆 Background Slider

A smooth and visually engaging **background image slider** built using **HTML**, **CSS**, and **JavaScript**.  
Users can navigate between full-screen background images using **left** and **right** arrows, with transitions that create an elegant slideshow effect.

---

## 🧠 What I Learned
- How to **manipulate DOM elements** dynamically with JavaScript  
- Using `querySelectorAll()` and `classList` to **control active states**  
- Applying **CSS transitions** for smooth background changes  
- Synchronizing **background updates** between elements and the `<body>`  
- Creating **responsive, minimalistic UI controls** with Font Awesome icons

---

## ⚙️ Technologies Used
- **HTML5**  
- **CSS3**  
- **JavaScript (ES6)**  
- **Font Awesome (v6.4.2)**

---

## 🚀 Live Demo
👉 [Background Slider - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/18-Background-Slider/)

---

## 📁 Folder Structure
```bash
18_Background_Slider/
│
├── index.html
├── style.css
├── script.js
├── readme.md
│
└── assets/
    └── images/
        ├── bridge_city_night_lights_urban_travel_visit-wallpaper-1440x1080.jpg
        ├── european_city-wallpaper-1440x1080.jpg
        ├── hollow_knight_video_game_hornet-wallpaper-1440x1080.jpg
        ├── mirror_of_the_mountains_lake_reflections-wallpaper-1440x1080.jpg
        ├── happy_thanksgiving_2024-wallpaper-1440x1080.jpg
        ├── red_foliage_autumn-wallpaper-1440x1080.jpg
        └── summer_travel_road_green_trees_adventure-wallpaper-1440x1080.jpg
```

---

## 🧩 How It Works

1. Each .slide element contains a background image set through inline CSS.
2. Only one slide at a time has the active class, making it visible.
3. Clicking the left or right arrow updates the activeSlide index.
4. JavaScript functions:
    setBgToBody() updates the page’s background image to match the active slide.
    setActiveSlide() toggles visibility between slides.
5. CSS handles opacity transitions and positioning, ensuring a smooth fade effect.

---

## 💡 Example Interaction

• Default view: first image displayed as background.
• When user clicks ➡️ or ⬅️:
    ○ The next or previous slide becomes visible
    ○ Background of the page updates instantly
    ○ Transition fades smoothly between images

---

## 🎯 Key Features

• Clean and minimal design
• Smooth transitions with CSS ease
• Responsive layout adapting to various screen sizes
• Navigation using Font Awesome arrow icons
