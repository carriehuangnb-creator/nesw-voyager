# NESW Voyager 🎡

A retro 3D rotating photo carousel built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Beautiful 3D carousel with CSS transforms
- 📱 Touch gestures & mouse wheel support
- 🎯 Responsive design (mobile & desktop)
- ✨ Lightbox view for full-screen photos
- 🕹️ Retro "Press Start 2P" aesthetic
- ⚡ Built with Vite for lightning-fast development

## Quick Start

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Adding Your Photos

1. Place your image files in the `public/` folder
2. Update the photo URLs in `src/App.jsx` if needed
3. The carousel expects images named: `unnamed.jpg`, `unnamed-2.jpg`, etc.

## Controls

- **Mouse Wheel**: Scroll to rotate
- **Touch**: Swipe left/right to rotate
- **Buttons**: Use arrow buttons to navigate
- **Click**: Click any photo to view full-screen

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### GitHub Pages

Update `vite.config.js`:

```js
export default {
  base: '/nesw-voyager/',
  // ... rest of config
}
```

Then:

```bash
npm run build
```

## License

MIT © 2024 NESW_VOYAGER
