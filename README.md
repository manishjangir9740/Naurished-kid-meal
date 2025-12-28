# Nourished - Kid's Meal Landing Page

A beautiful, modern, and fully responsive landing page for Nourished, a kid's meal delivery service. Built with React, Tailwind CSS, and Framer Motion to match the Figma design with pixel-perfect precision.

## ✨ Features

- **Pixel-Perfect Design** - Closely matches the Figma prototype
- **Smooth Animations** - Page-load, scroll-based, and micro-interactions
- **Interactive Elements** - Animated navbar, feature slider with manual controls
- **Floating Food Elements** - Parallax effect that responds to mouse movement
- **Custom Loader** - Engaging loading experience with animated elements
- **Fully Responsive** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Modern Tech Stack** - React 19, Tailwind CSS 4, Framer Motion

## 🎯 Design Requirements Met

✅ Single landing page only  
✅ Pixel-close UI matching Figma design  
✅ Page-load animations with staggered reveals  
✅ Scroll-based parallax animations  
✅ Card hover & button micro-interactions  
✅ Smooth transitions throughout  
✅ Fully mobile responsive with hamburger menu  

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern hooks
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **Vite** - Next-generation frontend tooling

### Key Features Implemented
- **Smooth Animations**: Framer Motion powers all transitions
- **Interactive Carousel**: Auto-play with manual navigation controls
- **Parallax Effects**: Mouse-tracking floating food elements
- **Responsive Navigation**: Animated mobile menu with hamburger toggle
- **Micro-interactions**: Hover effects on buttons and navigation items
- **Custom Loader**: Animated loading screen with progress bar

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd naurished
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
naurished/
├── public/
│   └── assets/
│       ├── floating/          # Floating food images
│       ├── hero-boy.png       # Hero section image
│       ├── logo.png           # Brand logo
│       └── wave-bottom.png    # Wave decoration
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation with mobile menu
│   │   ├── Hero.jsx           # Hero section with parallax
│   │   ├── FeatureSlider.jsx  # Animated feature carousel
│   │   ├── FloatingFood.jsx   # Parallax food elements
│   │   └── Loader.jsx         # Custom loading screen
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   └── main.jsx               # App entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 Key Components

### Navbar
- Responsive navigation with animated active state
- Smooth transitions using Framer Motion's `layoutId`
- Mobile hamburger menu with slide-in animation
- Logo hover effects

### Hero Section
- Large, bold typography matching Figma design
- Staggered reveal animations for content
- Scroll-based parallax effects
- Responsive image positioning

### Feature Slider
- Auto-advancing carousel (4-second intervals)
- Manual navigation with Previous/Next buttons
- Dot indicators for slide position
- Smooth slide transitions with AnimatePresence
- Feature icons with animations

### Floating Food Elements
- 9 food items with parallax effects
- Mouse tracking for interactive movement
- Individual animation delays and rotations
- Scroll-based parallax depth
- Hover scale effects

### Custom Loader
- Rotating logo animation
- Progress bar with smooth fill
- Floating emoji animations
- Timed disappearance with fade-out

## 🎬 Animations

### Page Load
- Navbar slides down with fade-in
- Hero content staggers into view
- Floating elements animate in with delays
- Wave bottom slides up

### Scroll-Based
- Hero content fades with scroll
- Floating elements move at different speeds
- Parallax depth effect

### Micro-interactions
- Button hover scales and shadows
- Navigation items smooth transitions
- Logo rotation on hover
- Slider controls fade and scale
- Mobile menu slide animation

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px - Hamburger menu, stacked layout
- **Tablet**: 768px - 1024px - Adjusted spacing
- **Desktop**: > 1024px - Full layout with all elements

### Mobile Optimizations
- Touch-friendly button sizes
- Optimized font sizes
- Hidden desktop-only elements
- Simplified animations for performance
- Stacked content layout

## 🎯 Performance Optimizations

- Lazy loading of images
- Optimized animation performance with GPU acceleration
- Minimal bundle size with tree-shaking
- Efficient re-renders with React hooks
- CSS Grid and Flexbox for layouts

## 🌟 Design Highlights

- **Color Scheme**: Vibrant orange/yellow gradient (#FFD24D to #FFBE33)
- **Typography**: Clean, bold headings with Inter/Poppins fonts
- **Spacing**: Consistent padding and margins
- **Shadows**: Subtle drop shadows for depth
- **Rounded Corners**: Friendly, modern aesthetic

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🙏 Credits

- **Design**: Original Figma design for Nourished kid meal service
- **Development**: Built with modern web technologies
- **Animations**: Powered by Framer Motion

## 📄 License

This project is created as an assessment for Zikrabyte.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
