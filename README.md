# Nexus_feed
# 📸 Instagram Clone — Phase 1

A pixel-accurate Instagram clone that runs entirely in the browser.
Built with vanilla HTML/CSS/JS + Supabase (free backend).

## Files
```
index.html          → Login / Signup page
home.html           → Feed + Stories
profile.html        → Profile page
style.css           → All styles
auth.js             → Supabase auth logic
supabase-schema.sql → DB tables to create
```

---

## 🚀 Setup (Do this first)

### Step 1 — Create Supabase project
1. Go to https://supabase.com and sign up (free)
2. Click **New Project** → give it a name → choose a region → set DB password
3. Wait ~1 minute for it to spin up

### Step 2 — Get your keys
1. Go to **Settings → API**
2. Copy **Project URL** (looks like `https://abcdef.supabase.co`)
3. Copy **anon public** key (long string starting with `eyJ...`)

### Step 3 — Paste keys into auth.js
Open `auth.js` and replace:
```js
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_PUBLIC_KEY';
```

### Step 4 — Run the SQL schema
1. In Supabase → **SQL Editor → New query**
2. Paste the entire contents of `supabase-schema.sql`
3. Click **Run**

### Step 5 — Disable email confirmation (for dev)
1. Supabase → **Authentication → Settings**
2. Scroll to **Email** section
3. Toggle OFF **"Enable email confirmations"**
4. Save

### Step 6 — Create Storage bucket
1. Supabase → **Storage → New bucket**
2. Name: `posts`
3. Toggle ON **Public bucket**
4. Save

---

## 🌐 Deploy (Free)

### Option A — Netlify (Easiest, drag & drop)
1. Go to https://netlify.com → Sign up
2. Drag the entire project folder onto the Netlify dashboard
3. Done! You get a live URL instantly.

### Option B — GitHub Pages
1. Push all files to a GitHub repo
2. Go to repo → **Settings → Pages**
3. Source: **Deploy from branch** → `main` → `/root`
4. Your site is live at `https://yourusername.github.io/repo-name`

### Option C — Vercel
1. Push to GitHub
2. Go to https://vercel.com → Import repo → Deploy

---

## 📋 Phase Checklist

- [x] Login page
- [x] Signup with username
- [x] Redirect to home after auth
- [x] Feed skeleton loader
- [x] Stories bar UI
- [x] Profile page with stats
- [x] Bottom navigation
- [x] Logout
- [x] Phase 2: Post upload + feed from DB
- [x] Phase 3: Like/comment system
- [ ] Phase 4: Follow/unfollow
- [ ] Phase 5: Stories with 24hr expiry

---

## 🎨 Stack
- Pure HTML/CSS/JS (no framework needed)
- Supabase (auth + database + storage)
- Google Fonts (Grand Hotel + DM Sans)
- Deployed on GitHub Pages/Vercel
