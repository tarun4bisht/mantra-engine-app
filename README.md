# 🚀 Mantra Engine App

**Hybrid AI Chat Application with Gemini & OpenAI**

A powerful chat application that combines the intelligence of Google's Gemini and OpenAI models with a sleek, responsive interface.

---

## ✨ Features

- 💬 **Dual AI Models** - Switch between Gemini and OpenAI
- 🎨 **Modern UI** - Beautiful React + Tailwind design
- ⚡ **Fast & Responsive** - Optimized for mobile and desktop
- 🔐 **Secure** - API keys stored securely
- 🌙 **Dark Mode** - Easy on the eyes

---

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy (Easiest)

1. Go to: https://vercel.com/new
2. Select **Import Git Repository**
3. Paste: `https://github.com/tarun4bisht/mantra-engine-app`
4. Click **Import**
5. Add Environment Variables:
   - `GEMINI_API_KEY` - Your Gemini API key
   - `OPENAI_API_KEY` - Your OpenAI API key
6. Click **Deploy**

**Wait 3-5 minutes... Done! 🎉**

---

## 📋 Get Your API Keys (2 Minutes)

### 1️⃣ Gemini API Key (FREE)
- Go to: https://makersuite.google.com/app/apikey
- Click **Get API Key**
- Copy and save

### 2️⃣ OpenAI API Key (Free $5 Trial)
- Go to: https://platform.openai.com/api-keys
- Click **Create new secret key**
- Copy and save

---

## 🛠️ Local Development

### Install Dependencies
```bash
npm install
```

### Setup Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:
```env
GEMINI_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here
```

### Run Development Server
```bash
npm run dev
```

Access at:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000

---

## 🔨 Build for Production

```bash
npm run build
npm start
```

---

## 📚 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons
- **Backend**: Express.js, Node.js
- **AI**: Google Generative AI, OpenAI
- **Deployment**: Vercel
- **Language**: TypeScript

---

## 📱 After Deployment

✅ Visit your Vercel URL
✅ Works on all devices (mobile, tablet, desktop)
✅ Start chatting with AI instantly!

---

## 🤝 Need Help?

- Check GitHub Issues
- Review the code
- Ask questions!

---

**Made with ❤️ by Tarun**
