# 🐙 GitHub Profiles Viewer

A clean, responsive GitHub profile lookup tool built with **HTML**, **CSS**, **JavaScript**, and the **GitHub REST API** (via Axios).  
Type a GitHub username → instantly fetch profile info, avatar, bio, stats, and recent repositories.

---

## 🧠 What I Learned
- Using **Axios** to perform asynchronous API requests  
- Handling API errors gracefully (404, fetch failures)  
- Dynamically generating UI cards with JavaScript templates  
- Rendering data-driven components like repo lists  
- Basic responsive design for mobile screens  
- Working with `async/await` and proper error boundaries  

---

## ⚙️ Technologies Used
- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Axios** (CDN version)
- **GitHub REST API**

---

## 🚀 Live Demo
👉 [Github_Profiles - Live Demo](https://alireza-la.github.io/50_Projects_50_Days/28-Github-Profiles/)

---

## 📁 Folder Structure
```bash
28-Github-Profiles/
│
├── index.html
├── style.css
├── script.js
└── readme.md
```

---

# 🧩 How It Works
1. User enters a GitHub username into the search input and submits the form.  
2. `getUser(username)` sends a request to `https://api.github.com/users/{username}` using Axios.  
3. If found, a user card is created with:
   - Avatar  
   - Name  
   - Bio  
   - Followers / Following / Public Repos stats  
4. After the user card renders, another request retrieves their repositories:  
   `https://api.github.com/users/{username}/repos?sort=created`  
5. The first **10** repos are appended as clickable links inside the card.  
6. If the user is not found (404), an error card replaces the UI.  
7. If repos cannot be retrieved, a fallback error message appears instead.

---

# 💡 Example Interaction
• User types: **“octocat”** → presses Enter  
• A purple-themed card appears showing the GitHub profile with avatar, bio, and stats  
• The newest 10 repositories line up as clickable buttons  
• Typing an invalid username shows **“No profile with this username”**  
• Fast, clean, responsive layout works on both desktop and mobile  
