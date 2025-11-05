# 🚀 Quick Setup Guide

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- React & React DOM
- Vite
- TailwindCSS
- Framer Motion
- React Three Fiber & Drei
- React Icons
- AOS (Animate On Scroll)

## Step 2: Add Your Assets

### Required Files:

1. **Your Hero Image**
   - Path: `/public/assets/abel-hero.png`
   - This is your main profile/hero image
   - Recommended: 600x600px or larger
   - Format: PNG (transparent background works great!)

2. **Your CV/Resume**
   - Path: `/public/assets/abel-cv.pdf`
   - PDF format
   - This will be downloadable from the site

3. **Project Images** (Optional)
   - `/public/assets/campushub.png`
   - `/public/assets/logistics.png`
   - `/public/assets/pickpick.png`
   - `/public/assets/bible.png`

## Step 3: Customize Your Content

### Update Personal Information:

1. **Name and Title** - Edit `src/components/Hero.jsx`
   - Already set to "Abel Sirak Kebede"
   - Tagline: "Crafting Digital Futures with Code & Imagination"

2. **About Section** - Edit `src/components/About.jsx`
   - Bio is already written
   - Update stats if needed

3. **Skills** - Edit `src/components/Skills.jsx`
   - Skill percentages
   - Add/remove technologies

4. **Projects** - Edit `src/components/Projects.jsx`
   - Update GitHub links (replace `#` with actual URLs)
   - Update live demo links
   - Add actual project images

5. **Timeline** - Edit `src/components/Timeline.jsx`
   - Already configured with your journey
   - Customize dates/descriptions if needed

6. **Contact Info** - Edit `src/components/Contact.jsx`
   - Email: absir28@gmail.com (already set)
   - Update social media links:
     - GitHub: Replace `abelsirak` with your actual username
     - LinkedIn: Replace `abelsirak` with your actual profile

## Step 4: Enable Hero Image

Once you've added your hero image (`/public/assets/abel-hero.png`):

1. Open `src/components/Hero.jsx`
2. Find the commented image section (around line 120)
3. Uncomment these lines:

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

4. Comment out or delete the placeholder div above it

## Step 5: Run Development Server

```bash
npm run dev
```

Your site will be available at: `http://localhost:5173`

## Step 6: Test Everything

Check that:
- ✅ All sections scroll smoothly
- ✅ Animations work on scroll
- ✅ Custom cursor follows mouse
- ✅ Form inputs glow when focused
- ✅ Links work (internal navigation)
- ✅ Hero image displays correctly
- ✅ CV downloads properly
- ✅ Mobile menu works on small screens

## Step 7: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `/dist` folder.

## 🎨 Customization Tips

### Change Colors:

Edit `tailwind.config.js`:

```js
colors: {
  'neon-purple': '#8B5CF6',  // Your primary color
  'neon-cyan': '#00E5FF',    // Your accent color
  'dark-bg': '#0a0a0f',      // Background
  'dark-card': '#1a1a24',    // Card backgrounds
}
```

### Modify Animations:

Check `src/index.css` for animation keyframes and adjust durations/effects.

### Add More Sections:

1. Create a new component in `src/components/`
2. Import it in `src/App.jsx`
3. Add it to the render order
4. Update navbar links in `src/components/Navbar.jsx`

## 🐛 Troubleshooting

### Issue: "Cannot find module..."
**Solution**: Run `npm install` again

### Issue: Port already in use
**Solution**: Kill the process on port 5173 or change the port in `vite.config.js`

### Issue: Custom cursor not working
**Solution**: Check that JavaScript is enabled in your browser

### Issue: 3D sphere not rendering
**Solution**: Ensure WebGL is supported in your browser

### Issue: Animations not triggering
**Solution**: Clear browser cache and reload

## 📦 Deployment Options

### Option 1: GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

### Option 2: Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 3: Vercel
1. Push to GitHub
2. Import repository to Vercel
3. It will auto-detect Vite settings

## 📞 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Verify all assets are in the correct locations
3. Ensure all dependencies are installed
4. Check the README.md for additional info

## 🎉 You're All Set!

Your futuristic portfolio is ready to impress! 

Remember to:
- Update content regularly
- Add new projects as you complete them
- Keep your CV up to date
- Share on LinkedIn and GitHub

**Happy coding! 🚀**

