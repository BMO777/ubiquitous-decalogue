# 📖 Ten Commandments Analyzer

An AI-powered tool to evaluate actions against the Ten Commandments using biblical principles.

![Ten Commandments Visualization](src/assets/images/outputcomm.jpg)

## 🚀 Features

- Real-time AI analysis via OpenAI GPT-4o
- Beautiful, responsive UI with Tailwind CSS
- Saves history locally
- Fallback keyword-based analysis if AI fails
- Educational component about the Ten Commandments

## 🛠️ Setup

### Environment Variables

Create a `.env` file in the root directory with your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key_here
PORT=5000
```

### Development

```bash
# Install dependencies for both frontend and backend
npm install

# Start the development server
npm run dev

# Start the backend server (in a separate terminal)
npm run dev:server
```

### Production Build

```bash
# Build the frontend
npm run build

# Start the production server (serves both frontend and backend)
npm start
```

## 🌐 Deployment

### Deploying to GitHub Pages

1. Update the `base` option in `vite.config.js` to match your repository name
2. Run `npm run deploy` to deploy to GitHub Pages

Alternatively, you can set up automatic deployment with GitHub Actions:
1. Create a new workflow file at `.github/workflows/deploy.yml`
2. The workflow will automatically deploy your site whenever you push to the main branch

### Deploying to Render

1. Push your code to a GitHub repository
2. Create a new Web Service on Render
3. Connect your repository
4. Set the build command to: `npm install && npm run build`
5. Set the start command to: `npm start`
6. Add your environment variables in the Render dashboard

### Deploying to Railway

1. Push your code to a GitHub repository
2. Create a new project on Railway
3. Connect your repository
4. Railway will automatically detect the project and set up the deployment
5. Add your environment variables in the Railway dashboard

### Deploying to Vercel (Frontend only)

1. Deploy the frontend to Vercel
2. Set up a separate deployment for the backend on a platform like Render or Railway
3. Update the API URL in `vite.config.js` to point to your deployed backend

## 🤝 Contributing

PRs welcome! Please open an issue first.

## 📄 License

MIT