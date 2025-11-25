# 📖 Pokedex -- Interactive Pokémon Cards

An interactive web app that fetches data from the **PokéAPI** and displays
Pokémon cards with their images, names, IDs, and types.  
Each card is styled with a background color based on the Pokémon’s type,
creating a visually engaging and informative Pokédex.

---

## 🧠 What This Project Demonstrates

-   Fetching data from a public REST API (PokéAPI)
-   Asynchronous JavaScript with `async/await`
-   Dynamic DOM element creation and manipulation
-   Conditional styling based on Pokémon type
-   Responsive layout with flexbox

---

## ⚙️ Technologies Used

-   HTML5
-   CSS3 (flexbox, shadows, gradients, layout)
-   JavaScript (fetch API, async/await, DOM manipulation)

---

## 🚀 Live Demo

👉 https://alireza-la.github.io/50_Projects_50_Days/37-Pokedex/

---

## 📁 Folder Structure

``` bash
37-Pokedex/
│
├── index.html
├── style.css
└── script.js
```

---

## 🧩 How It Works

### Fetching Pokémon Data

-   A constant (pokemon_count = 150) defines how many Pokémon will be fetched
-   The script loops through IDs from 100 to 250
-   For each ID, data is retrieved from the PokéAPI: https://pokeapi.co/api/v2/pokemon/<id>

### Card Creation

-   Each Pokémon is represented by a .pokemon card
-   The card includes:
    Image (from official Pokémon assets)
    ID (formatted with leading zeros, e.g., 001)
    Name (capitalized)
    Type (with type-specific background color)
-   Type-Based Styling
    A colors object maps Pokémon types to background colors
    The card’s background color is set dynamically based on the Pokémon’s type
    Example: Fire → #FDDFDF, Water → #DEF3FD

### Responsive Layout

-   Cards are displayed in a flexbox grid (.poke-container)
-   Layout adapts to different screen sizes
-   Cards are centered and wrapped neatly across rows

## 💡 Example Interaction

• Page loads → 150 Pokémon cards are dynamically generated
• Each card shows the Pokémon’s image, ID, name, and type
• Background color instantly reflects the Pokémon’s type
• User scrolls through a responsive grid of Pokémon cards
• Provides a quick, colorful overview of the Pokédex