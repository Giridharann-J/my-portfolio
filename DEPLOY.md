# Firebase Deployment Commands

# 1. First time setup (if not done)
firebase login

# 2. Deploy to Firebase Hosting
firebase deploy --only hosting

# 3. Preview locally before deploying
firebase serve

# 4. View your deployed site
# https://giridharan-j.web.app
# https://giridharan-j.firebaseapp.com

# Troubleshooting
# If you get "not authorized" error:
firebase logout
firebase login
firebase use giridharan-j
firebase deploy --only hosting
