# 🌐 Deployment Guide

This guide covers multiple deployment options for your Abel Futuristic Portfolio.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- ✅ All personal information is updated
- ✅ Hero image is added (`/public/assets/abel-hero.png`)
- ✅ CV is added (`/public/assets/abel-cv.pdf`)
- ✅ GitHub/LinkedIn links are updated
- ✅ Project links are updated
- ✅ Email address is correct
- ✅ All sections are working locally
- ✅ Mobile responsiveness is tested
- ✅ Production build works: `npm run build && npm run preview`

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Zero configuration for Vite projects
- Automatic deployments on git push
- Free SSL certificate
- Excellent performance
- Custom domain support

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/abel-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy" (Vercel auto-detects Vite settings)

3. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

**Environment:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

### Option 2: Netlify

**Why Netlify?**
- Easy drag-and-drop deployment
- Continuous deployment from Git
- Form handling (useful for contact form)
- Free SSL
- Custom domains

**Steps:**

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy via Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag the `dist` folder to the deploy area

**OR Deploy via Git:**

1. **Push to GitHub** (same as Vercel step 1)

2. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Configure Form** (Optional)
   Update the contact form in `src/components/Contact.jsx`:
   ```jsx
   <form 
     name="contact" 
     method="POST" 
     data-netlify="true"
     onSubmit={handleSubmit}
   >
     <input type="hidden" name="form-name" value="contact" />
     {/* rest of form */}
   </form>
   ```

---

### Option 3: GitHub Pages

**Why GitHub Pages?**
- Free hosting from GitHub
- Good for open-source portfolios
- Version control integration

**Steps:**

1. **Update Vite Config**
   
   Edit `vite.config.js`:
   ```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/abel-futuristic-hero-portfolio/', // Replace with your repo name
   })
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update package.json**
   
   Add these scripts:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   },
   "homepage": "https://yourusername.github.io/abel-futuristic-hero-portfolio"
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Click Save

Your site will be live at: `https://yourusername.github.io/abel-futuristic-hero-portfolio`

---

### Option 4: Firebase Hosting

**Why Firebase?**
- Google infrastructure
- Fast global CDN
- Easy CLI deployment
- Free tier available

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   
   Configure:
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub integration: Optional

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

### Option 5: Cloudflare Pages

**Why Cloudflare Pages?**
- Blazing fast CDN
- Unlimited bandwidth
- Free SSL
- Built-in analytics

**Steps:**

1. **Push to GitHub** (if not already done)

2. **Deploy to Cloudflare Pages**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign up/Login
   - Click "Create a project"
   - Connect your GitHub account
   - Select your repository
   - Configure:
     - Build command: `npm run build`
     - Build output directory: `dist`
     - Root directory: `/`
   - Click "Save and Deploy"

---

## 🎯 Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `abelsirak.com`)
3. Add DNS records at your domain provider:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```

---

## 🔒 Environment Variables

If you add API keys or sensitive data later:

### Vercel:
Project Settings → Environment Variables

### Netlify:
Site Settings → Build & Deploy → Environment

### GitHub Pages:
Use GitHub Secrets for builds

**Example `.env` file:**
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Access in code:
```js
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
```

---

## 📊 Analytics Setup (Optional)

### Google Analytics:

1. Get your GA tracking ID
2. Add to `index.html` in `<head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

---

## 🐛 Common Deployment Issues

### Issue: Images not loading
**Solution**: 
- Use `/assets/image.png` paths (not `./assets/`)
- Check image file names match exactly (case-sensitive)
- Ensure images are in `/public/assets/`

### Issue: 404 on refresh
**Solution**: 
- For Netlify: Create `public/_redirects`:
  ```
  /*    /index.html   200
  ```
- For Vercel: Create `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
  }
  ```

### Issue: Environment variables not working
**Solution**: 
- Must prefix with `VITE_`
- Access with `import.meta.env.VITE_VAR_NAME`
- Rebuild after adding env vars

### Issue: Blank page after deployment
**Solution**:
- Check browser console for errors
- Verify `base` path in `vite.config.js`
- Check that build completed successfully

---

## 📈 Performance Optimization

After deployment, optimize with:

1. **Lighthouse Audit**
   - Open DevTools
   - Run Lighthouse
   - Fix issues

2. **Image Optimization**
   - Use WebP format
   - Compress images
   - Use lazy loading

3. **Code Splitting**
   Already handled by Vite!

4. **CDN**
   Most platforms provide CDN automatically

---

## 🎉 Post-Deployment

After successful deployment:

1. ✅ Test all functionality
2. ✅ Check mobile responsiveness
3. ✅ Verify all links work
4. ✅ Test form submission
5. ✅ Check CV download
6. ✅ Run Lighthouse audit
7. ✅ Share on social media!

---

## 📞 Support

If you encounter deployment issues:

1. Check platform's documentation
2. Check browser console for errors
3. Verify build logs
4. Test local build: `npm run build && npm run preview`

---

**Congratulations! Your portfolio is now live! 🎊**

Share it with:
- LinkedIn post
- GitHub profile README
- Twitter/X
- Resume/CV
- Email signature

**Portfolio URLs to share:**
- Production: `https://your-domain.com`
- GitHub: `https://github.com/yourusername/abel-portfolio`

---

*Built with 💜 by Abel Sirak Kebede*

