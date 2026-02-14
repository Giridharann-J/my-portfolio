# Portfolio - Giridharan J

Premium developer portfolio with cinematic animations and scroll storytelling.

## Firebase Hosting Setup

### Your Project Details
- **Project ID:** giridharan-j
- **Hosting URL:** https://giridharan-j.web.app

### Quick Deploy

1. **Install Firebase CLI (if not installed)**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Deploy to Firebase**
   ```bash
   firebase deploy --only hosting
   ```

4. **Your site will be live at:**
   - https://giridharan-j.web.app
   - https://giridharan-j.firebaseapp.com

### Custom Domain with Cloudflare

1. **In Firebase Console (https://console.firebase.google.com):**
   - Go to: Hosting → Add custom domain
   - Enter your domain (e.g., giridharan.dev)
   - Firebase will provide DNS records (A records + TXT)

2. **In Cloudflare Dashboard:**
   - DNS → Add Record
   - Add all A records from Firebase (usually 2 IPs)
   - Add TXT record for domain verification
   - **SSL/TLS:** Set to "Full" (not Flexible)
   - **Always Use HTTPS:** Enable
   - Proxy status: Orange cloud (ON) for CDN

3. **Verification:**
   - Firebase checks DNS records automatically
   - Usually verified within 5-30 minutes
   - SSL certificate issued within 24 hours

### Optional: Firebase Analytics

If you want visitor analytics, uncomment these lines in index.html (before closing </body>):
```html
<!-- <script type="module" src="firebase-init.js"></script> -->
```

## Tech Stack
- HTML5
- CSS3 (Custom Properties, Animations)
- JavaScript (ES6+)
- GSAP + ScrollTrigger
- Firebase Hosting
- Cloudflare DNS/CDN

## Features
- 60 FPS scroll animations
- GPU-accelerated transforms
- Respects prefers-reduced-motion
- Optimized for mid-range devices
- Custom domain with SSL
