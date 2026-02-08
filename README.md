# BeMyValentines 💕

A romantic, interactive Valentine's Day web app built with React and Vite. Surprise your special someone with a playful question-and-answer experience that leads to a beautiful photo gallery.

## ✨ Features

- **Interactive Q&A Flow**: Multiple Valentine's questions with playful responses
- **Playful No Button**: The "No" button becomes elusive on certain questions, making it fun and engaging
- **Celebration Effects**: Confetti animation when they say "Yes!"
- **Photo Gallery**: Beautiful slideshow of your favorite memories together
- **Auto-advancing Slides**: Photos transition automatically every 4 seconds
- **Manual Navigation**: Previous/Next buttons and dot indicators for manual control
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects and transitions throughout

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jon204D/BeMyValentines.git
   cd BeMyValentines
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your photos:
   - Place 4 photos in `src/assets/image/` named:
     - `01.jpeg` - Your first special photo
     - `02.jpeg` - A favorite memory
     - `03.jpeg` - Another cherished moment
     - `04.jpeg` - Your forever photo

4. Customize the experience:
   - Edit `src/assets/valentineQuestion.js` to personalize questions
   - Update the couple name in `src/App.jsx` (search for `coupleName="Baby"`)
   - Modify captions in `src/components/YesScreen.jsx`

### Development

Run the development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to see your app.

### Build for Production

```bash
npm run build
```

### Deploy

```bash
npm run deploy
```

## 🎨 Customization

### Questions

Edit `src/assets/valentineQuestion.js`:
```javascript
const valentineQuestion = [
    {question: "Will You Be My Valentine?"},
    {question: "Are you sure? 👀"},
    // Add more questions...
];
```

### Photos & Captions

Update `src/components/YesScreen.jsx`:
```javascript
const slides = [
  { src: photo1, caption: "My favorite smile." },
  { src: photo2, caption: "My favorite memories." },
  // Customize captions...
];
```

### Love Message

Modify the final message in `src/components/YesScreen.jsx`:
```javascript
<p>
  Thank you for being my best friend, my peace, and my answered prayer.
  Here's to more laughs, more grace, and a lifetime of us. 💞
</p>
```

## 📱 Mobile Responsive

The app is fully responsive with breakpoints at:
- **Desktop**: Full-size layout (> 768px)
- **Tablet**: Optimized for medium screens (480px - 768px)
- **Mobile**: Compact layout for small screens (< 480px)

## 🛠️ Technologies

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **canvas-confetti**: Celebration effects
- **CSS3**: Custom animations and responsive design

## 📂 Project Structure

```
BeMyValentines/
├── src/
│   ├── components/
│   │   └── YesScreen.jsx       # Final screen with photo gallery
│   ├── assets/
│   │   ├── image/              # Your personal photos
│   │   ├── valentineQuestion.js # Question prompts
│   │   └── sweetLines.js       # Additional sweet messages
│   ├── styles/
│   │   └── YesScreen.css       # Styles for photo gallery
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Main app styles
│   └── main.jsx                # Entry point
├── public/                     # Static assets
└── package.json
```

## 💝 Perfect For

- Valentine's Day proposals
- Anniversary surprises
- Just because moments
- Any special romantic occasion

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and make it your own! Customize it to fit your unique love story.

## 💌 Made with Love

Created with React, confetti, and lots of ❤️

---

**Note**: Remember to add your own photos and customize the messages to make it truly personal and special! (💘 Valentine Proposal App (React))

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