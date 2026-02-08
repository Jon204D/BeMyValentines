# BeMyValentines (💘 Valentine Proposal App (React))

A cute, interactive Valentine experience built with **React + Vite**.  
It starts with a sweet question… and gets progressively more persuasive 😅 — ending with a heartfelt **Yes screen** and a **photo slideshow** of your favorite memories.

---

## ✨ Features

- 💌 Valentine question flow with multiple prompts
- 🧸 Cute teddy intro + romantic heart background
- 🏃‍♂️ “No” button runs away (because… come on 😄)
- ✅ “Yes” triggers a romantic success screen
- 🖼️ Photo slideshow + captions (your memories)
- 🎛️ Dots + navigation buttons + auto-advance

---

## 🧰 Tech Stack

- React
- Vite
- CSS (glassmorphism styling)

---

## 🚀 Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Run locally
```bash
npm run dev
```

Then open:
```bash
http://localhost:5173
```

### 3) Update photos

src/assets/photos/

Then update imports in YesScreen.jsx if needed:
```bash
    import photo1 from "../assets/photos/01.jpg";
    import photo2 from "../assets/photos/02.jpg";
    import photo3 from "../assets/photos/03.jpg";
    import photo4 from "../assets/photos/04.jpg";
```

### 4) Build for production
```bash
npm run build
```
Then deploy the contents of the dist/ folder to your hosting provider.