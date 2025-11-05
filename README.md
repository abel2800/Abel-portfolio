# 🚀 Abel Sirak Kebede - Futuristic Portfolio

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Futuristic-8B5CF6?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)

A cutting-edge, futuristic personal portfolio showcasing the work and journey of Abel Sirak Kebede - Computer Science graduate, builder, and innovator. This portfolio blends superhero aesthetics with cyberpunk futurism to create an immersive digital experience.

## ✨ Features

- 🎨 **Stunning Glassmorphism UI** - Modern glass-effect cards with neon accents
- 🌈 **Neon Color Palette** - Electric purple (#8B5CF6) and cyan (#00E5FF) theme
- 🎭 **3D Animated Hero Section** - React Three Fiber powered animations
- ✨ **Smooth Scroll Animations** - AOS (Animate On Scroll) integration
- 🖱️ **Custom Cursor Effects** - Interactive cursor with glow effects
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎯 **Interactive Components** - Framer Motion powered animations

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework

### Animation & 3D
- **Framer Motion** - Advanced animation library
- **React Three Fiber (R3F)** - 3D graphics with Three.js
- **Drei** - React Three Fiber helpers
- **AOS** - Scroll animation library

### Icons & UI
- **React Icons** - Comprehensive icon library
- **Custom Fonts** - Orbitron & Rajdhani from Google Fonts

## 📁 Project Structure

```
abel-futuristic-hero-portfolio/
├── public/
│   └── assets/          # Images, CV, and other static files
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Timeline.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── CustomCursor.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
└── README.md           # You are here!
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abelsirak/abel-futuristic-hero-portfolio.git
   cd abel-futuristic-hero-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Adding Your Hero Image

1. Add your hero image to `/public/assets/abel-hero.png`
2. Uncomment the image section in `src/components/Hero.jsx`:

```jsx
<img 
  src="/assets/abel-hero.png" 
  alt="Abel Sirak Kebede" 
  className="w-full h-full object-cover glass-dark neon-glow-purple"
  style={{
    filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.6))',
  }}
/>
```

### Adding Your CV

1. Place your CV PDF in `/public/assets/abel-cv.pdf`
2. The download button is already configured to use this path

### Updating Project Images

Add project images to `/public/assets/` and update the paths in `src/components/Projects.jsx`

### Changing Colors

Edit the color scheme in `tailwind.config.js`:

```js
colors: {
  'neon-purple': '#8B5CF6',  // Change primary color
  'neon-cyan': '#00E5FF',    // Change accent color
  'dark-bg': '#0a0a0f',      // Change background
  'dark-card': '#1a1a24',    // Change card background
}
```

## 📋 Sections

### 1. Hero Section
Epic landing with animated 3D background, name reveal, and CTA buttons

### 2. About Me
Personal bio with core values and current focus

### 3. Skills & Tech Stack
Interactive skill bars and technology icons

### 4. Projects
4 featured projects (CampusHub, Logistics Dashboard, PickPick Ride, Bible App)

### 5. Timeline
Visual journey through education and experience

### 6. Achievements
Awards, recognitions, and milestones

### 7. Contact
Contact form with social links and downloadable CV

## 🎯 Key Features Explained

### Custom Cursor
The portfolio includes a custom animated cursor that follows mouse movement with a neon glow effect.

### Glassmorphism Effects
Cards and containers use a modern glassmorphism design with:
- Backdrop blur
- Semi-transparent backgrounds
- Neon borders
- Glow effects on hover

### 3D Hero Animation
The hero section features an animated 3D sphere using React Three Fiber that rotates and distorts for a futuristic look.

### Scroll Animations
All sections use AOS (Animate On Scroll) for smooth fade-in and slide animations as you scroll.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🌐 Deployment

### GitHub Pages

1. Update `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/abel-futuristic-hero-portfolio/'
})
```

2. Build and deploy:
```bash
npm run build
# Push the dist folder to gh-pages branch
```

### Netlify / Vercel

Simply connect your GitHub repository and these platforms will auto-deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Abel Sirak Kebede

Computer Science graduate who believes technology should connect people, empower learning, and shape communities. Creator of CampusHub and passionate about building platforms that make a real difference.

- 🎓 Computer Science @ Ankang University
- 👨‍🏫 3+ Years Teaching Experience
- 💻 Full Stack Developer
- 🌍 International Experience (China)
- 🎯 Future Goal: Master's in Computer & Data Science

## 📞 Contact

- **Email**: absir28@gmail.com
- **GitHub**: [github.com/abelsirak](https://github.com/abelsirak)
- **LinkedIn**: [Abel Sirak Kebede](https://linkedin.com/in/abelsirak)

## 🙏 Acknowledgments

- Design inspiration from modern cyberpunk aesthetics
- Icons from React Icons
- Fonts from Google Fonts (Orbitron & Rajdhani)
- 3D animations powered by Three.js and React Three Fiber
- Animation library: Framer Motion

---

<div align="center">

**Built with 💜 and ⚡ by Abel Sirak Kebede**

*Crafting Digital Futures with Code & Imagination*

</div>

