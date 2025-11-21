# 🎠 Image Carousel -- Auto-Sliding Horizontal Gallery

A lightweight image carousel featuring automatic sliding, manual
navigation buttons, and smooth transition animations.\
Images slide horizontally in a continuous loop, with manual controls
instantly resetting the timer for better user interaction.

---

## 🧠 What This Project Demonstrates

-   Managing slide transitions using CSS transform animations\
-   Controlling carousel state with JavaScript timers\
-   Handling user input while maintaining auto-slide logic\
-   Updating UI position using translateX\
-   Creating simple interactive components without external libraries

---

## ⚙️ Technologies Used

-   HTML5\
-   CSS3 (flexbox, transitions, transforms)\
-   JavaScript (DOM manipulation, intervals, event listeners)

---

## 🚀 Live Demo

👉 https://alireza-la.github.io/50_Projects_50_Days/35-Image-Carousel/

---

## 📁 Folder Structure

``` bash
35-Image-Carousel/
│
├── index.html
├── style.css
├── script.js
└── assets/
    └── images/
        ├── banana.jpg
        ├── elephant.jpg
        ├── cheetah.jpg
        ├── ocean.jpg
        └── rocks.jpg
```


## 🧩 How It Works

Auto Slide Logic
- Images are displayed in a horizontal row using flexbox  
- JavaScript tracks the slide index (`idx`)  
- A `setInterval` automatically moves the carousel every 2 seconds  
- When the index exceeds the last image, it loops back to 0  
- Movement is applied with:
    transform: translateX(-500px \* idx)
    - Smooth transitions via `transition: transform 0.5s ease-in-out`

Navigation Buttons
- **Prev** → decreases index  
- **Next** → increases index  
- Each button click resets the timer so user input remains responsive  
- Prevents auto-slide from immediately overriding manual action

Interval Reset Logic:
    clearInterval(interval) interval = setInterval(run, 2000)
    Ensures the carousel always resyncs after interaction.

    ---

## 💡 Example Interaction

• Page loads → slideshow starts moving automatically  
• User waits → images auto-slide every 2 seconds  
• User clicks **Next** → slider jumps forward + timer restarts  
• User clicks **Prev** → moves backward smoothly  
• Last image reached → loops back to first  
• Auto-slide continues unless interrupted by user  
