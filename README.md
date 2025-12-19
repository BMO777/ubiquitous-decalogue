# 📖 Ten Commandments Light Shedder

An AI-powered light shedder to evaluate actions against the Ten Commandments using biblical principles.

![Ten Commandments Visualization](src/assets/images/Ten%20Commandments%20Fiery%20Handwriting.png)

## 🚀 Features

- Real-time AI light shedder via OpenAI GPT-4o
- Beautiful, responsive UI with Tailwind CSS
- Saves history locally
- Fallback keyword-based light shedder if AI fails
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

1.  Update the `base` option in `vite.config.js` to match your repository name
    *Self-correction: The `base` option is now dynamic. For GitHub Pages, you'll need to set the `VITE_APP_BASE_PATH` environment variable during the build.*
2.  When deploying to GitHub Pages, ensure you set the `VITE_APP_BASE_PATH` environment variable to `/${{ github.event.repository.name }}/` during the build process. For example, in your GitHub Actions workflow, you would add:
    ```yaml
    - name: Build
      run: npm run build
      env:
        VITE_APP_BASE_PATH: /${{ github.event.repository.name }}/
    ```
3.  Run `npm run deploy` to deploy to GitHub Pages

Alternatively, you can set up automatic deployment with GitHub Actions:
1.  Create a new workflow file at `.github/workflows/deploy.yml`
2.  The workflow will automatically deploy your site whenever you push to the main branch

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

1. Deploy the frontend to Vercel. No special `VITE_APP_BASE_PATH` environment variable is needed for Vercel, as it defaults to `/`.
2. Set up a separate deployment for the backend on a platform like Render or Railway
3. Update the API URL in `vite.config.js` to point to your deployed backend

## 🤝 Contributing

PRs welcome! Please open an issue first.

## 📄 License

MIT