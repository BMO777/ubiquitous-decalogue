# 📖 Ten Commandments Analyzer

An AI-powered tool to evaluate actions against the Ten Commandments using biblical principles.

## 🚀 Features

- Real-time AI analysis via OpenAI GPT-4o
- Beautiful, responsive UI with Tailwind CSS
- Saves history locally
- Fallback keyword-based analysis if AI fails

## 🛠️ Setup

### Frontend

```bash
cd ten-commandments-analyzer
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
cp .env.example .env
# Add your OPENAI_API_KEY
npm start
```

Ensure frontend connects to http://localhost:5000/api/analyze

🌐 Deployment

Frontend: Deploy to Vercel  
Backend: Deploy to Railway or Render  

🤝 Contributing

PRs welcome! Please open an issue first.

📄 License

MIT