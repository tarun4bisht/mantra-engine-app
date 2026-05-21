# 🧠 Mantra Engine App

A powerful **hybrid AI chat application** that intelligently routes between **Google Gemini** and **OpenAI** models based on your queries.

## ✨ Features

- 🤖 **Intelligent Model Routing** - Auto-detects best AI model for your query
- ⚡ **Real-time Streaming** - Live response streaming for instant feedback
- 🖼️ **Image Generation** - Generate images using Gemini
- 💬 **Chat History** - Persistent conversation tracking
- 🎨 **Beautiful UI** - Dark/Light theme with Tailwind CSS
- 📊 **Cost Tracking** - Monitor API usage
- 🔄 **Fallback Support** - Automatic fallback if primary model fails

## 🎯 Routing Strategies

1. **Auto** - Analyzes query content and picks the best model
2. **Gemini** - Force Gemini for all queries
3. **OpenAI** - Force OpenAI for all queries
4. **Gemini-First** - Use Gemini, fallback to OpenAI
5. **OpenAI-First** - Use OpenAI, fallback to Gemini

### Model Detection Logic

**OpenAI (Code):**
- code, debug, function, algorithm, implement, refactor, bug, etc.

**Gemini (Creative/Visual):**
- image, creative, story, poem, explain, translate, etc.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- API Keys:
  - Google Gemini API key
  - OpenAI API key

### Installation

```bash
# Clone the repo
git clone https://github.com/tarun4bisht/mantra-engine-app.git
cd mantra-engine-app

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your API keys to .env
# GEMINI_API_KEY=your_key_here
# OPENAI_API_KEY=your_key_here

# Start development servers
npm run dev
```

The app will run on:
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3000

## 📁 Project Structure

```
mantra-engine-app/
├── src/
│   ├── server/          # Express backend
│   │   ├── index.ts     # Server entry
│   │   ├── ai-router.ts # Hybrid routing logic
│   │   └── api.ts       # API endpoints
│   ├── client/          # React frontend
│   │   ├── App.tsx      # Main component
│   │   ├── pages/       # Page components
│   │   └── hooks/       # Custom hooks
│   └── types.ts         # Shared types
├── public/              # Static assets
├── .env.example         # Environment template
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript config
```

## 🔑 Environment Variables

```env
# Google Gemini
GEMINI_API_KEY=your_gemini_key

# OpenAI
OPENAI_API_KEY=your_openai_key

# Server
PORT=3000
NODE_ENV=development
```

## 🛠️ Available Scripts

```bash
npm run dev              # Start both server & client in dev mode
npm run dev:server       # Start only backend
npm run dev:client       # Start only frontend
npm run build            # Build for production
npm run preview          # Preview production build
npm start                # Start production server
```

## 📚 API Endpoints

### POST /api/chat/stream
Stream AI responses with hybrid routing

**Request:**
```json
{
  "messages": [
    { "role": "user", "content": "Hello" }
  ],
  "systemPrompt": "You are helpful",
  "strategy": "auto",
  "geminiModel": "gemini-pro",
  "openaiModel": "gpt-4"
}
```

### POST /api/image/generate
Generate images using Gemini

**Request:**
```json
{
  "prompt": "A beautiful sunset"
}
```

## 🎨 UI Components

- Chat Interface
- Model Selector
- Strategy Toggle
- Image Generator
- Chat History Panel
- Cost Dashboard
- Settings Panel

## 💡 Usage Examples

### Auto-detect best model
```
User: "debug this function in TypeScript"
→ Detects code signals → Routes to OpenAI
```

### Creative content
```
User: "write a poem about the cosmos"
→ Detects creative signals → Routes to Gemini
```

### Manual override
```
User: Select "OpenAI-First" strategy
→ Always uses OpenAI, falls back to Gemini
```

## 🚢 Deployment

### Vercel (Frontend)
```bash
vercel deploy
```

### Railway/Heroku (Backend)
```bash
# Add Procfile
echo "web: npm start" > Procfile

# Push to deployment platform
```

## 📈 Performance

- Streaming responses: <500ms latency
- Model auto-detection: <10ms
- Image generation: 3-5 seconds
- Chat history: Instant

## 🔐 Security

- API keys stored in `.env` (never committed)
- Request validation with Zod
- CORS configured
- Rate limiting recommended

## 🐛 Troubleshooting

### "API key not found"
→ Check `.env` file has correct keys

### "Model not responding"
→ Check internet connection and API status

### "Streaming not working"
→ Ensure backend is running on port 3000

## 📝 License

MIT © 2024 Tarun Bisht

## 🤝 Contributing

Feel free to open issues and pull requests!

## 📧 Support

For issues, open a GitHub issue or contact the maintainer.

---

**Made with ❤️ by Tarun Bisht**
