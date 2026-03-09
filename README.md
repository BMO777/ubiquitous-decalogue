# 📖 Ten Commandments Light Shedder

An AI-powered light shedder to evaluate actions against the Ten Commandments using biblical principles. This application helps users examine their heart postures and actions through the lens of God's moral law, providing deep insights into how scenarios align with biblical principles.

![Ten Commandments Visualization](src/assets/images/Ten%20Commandments%20Fiery%20Handwriting.png)

## 🌟 Features

- **AI-Powered Analysis**: Uses OpenAI's GPT-4o to analyze actions against all Ten Commandments
- **Biblical Reasoning**: Provides deep theological insights and scriptural references
- **Heart Posture Focus**: Examines upstream thinking and intentions rather than just downstream actions
- **Multiple AI Models**: Choose from various OpenAI models including GPT-4o, o1, and GPT-4 Turbo
- **Privacy Controls**: Toggle between private mode (no history saved) and local history storage
- **Offline Support**: Built-in fallback analysis when AI service is unavailable
- **PWA Features**: Progressive Web App capabilities with offline functionality
- **Dark Mode**: Dark/light theme toggle for comfortable viewing
- **Educational Content**: Comprehensive guide to understanding the Ten Commandments
- **Analysis History**: Save and review past analyses locally
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 18** with modern hooks and functional components
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for responsive, utility-first styling
- **Capacitor** for cross-platform mobile app support (iOS/Android)
- **PWA** with service worker for offline functionality

### Backend
- **Express.js** RESTful API server
- **OpenAI API** for AI-powered analysis
- **Rate limiting** and security middleware
- **CORS** support for cross-origin requests

### Development
- **pnpm** for fast package management
- **ESLint** and **Prettier** for code quality
- **Husky** for Git hooks
- **TypeScript** support (optional)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm package manager
- OpenAI API key (for AI analysis)

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ten-commandments-light-shedder
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=5000
   ```

4. **Start the development servers**
   ```bash
   # Terminal 1: Start frontend
   pnpm dev
   
   # Terminal 2: Start backend
   pnpm dev:server
   ```

### Production Build

```bash
# Build frontend
pnpm build

# Start production server (serves both frontend and backend)
pnpm start
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Push your code** to a Git repository
2. **Connect to Vercel**:
   - Import your repository
   - Set environment variables (OPENAI_API_KEY, PORT)
   - Configure build settings:
     - **Build Command:** `pnpm install && pnpm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `pnpm install`
3. **Deploy** - Vercel will automatically build and deploy

### Render

1. **Push your code** to a Git repository
2. **Create a new Web Service** on Render
3. **Configure settings**:
   - **Build Command:** `pnpm install && pnpm run build`
   - **Start Command:** `npm start`
   - **Environment Variables:** Add OPENAI_API_KEY and PORT
4. **Deploy** - Render will automatically build and deploy

### Railway

1. **Push your code** to a Git repository
2. **Create a new project** on Railway
3. **Connect your repository** - Railway will automatically detect the project
4. **Add environment variables** in the Railway dashboard
5. **Deploy** - Railway will handle the build and deployment

### GitHub Pages

1. **Update `vite.config.js`** to set the correct base path
2. **Build the project**:
   ```bash
   pnpm build
   ```
3. **Deploy** using the `deploy` script:
   ```bash
   pnpm deploy
   ```

### Mobile Deployment (Capacitor)

```bash
# Build for web first
pnpm build

# Add platforms
npx cap add android
npx cap add ios

# Sync and open in IDE
npx cap sync android
npx cap open android  # For Android Studio
npx cap open ios      # For Xcode
```

## 📱 Mobile App Features

- **Cross-platform**: Works on both iOS and Android
- **Native feel**: Uses Capacitor for native device integration
- **Offline support**: Service worker for offline functionality
- **PWA features**: Installable app with home screen shortcut
- **Responsive design**: Optimized for mobile and tablet screens

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key for AI analysis | Yes |
| `PORT` | Port for the backend server | No (default: 5000) |

### Customization

- **AI Models**: Edit `server/routes/models.js` to customize available models
- **Commandments**: Modify `src/utils/commandments.js` to update analysis criteria
- **Styling**: Customize `tailwind.config.js` and `src/index.css`
- **PWA**: Update `public/manifest.json` and `vite.config.js` for PWA settings

## 📊 API Endpoints

### POST /api/v1/analyze
Analyze an action against the Ten Commandments.

**Request Body:**
```json
{
  "action": "string - The action to analyze",
  "model": "string - AI model to use (optional)",
  "commandments": "array - Commandment data"
}
```

**Response:**
```json
{
  "anyViolated": boolean,
  "principleOfLove": "string",
  "results": [
    {
      "id": number,
      "text": string,
      "violated": boolean,
      "explanation": string,
      "biblicalReasoning": string,
      "guidance": string
    }
  ]
}
```

### GET /api/v1/models
Get available AI models.

**Response:**
```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Update the lockfile** if needed:
   ```bash
   cd server && pnpm run update-lockfile
   ```
5. **Commit your changes** (`git commit -m 'Add amazing feature'`)
6. **Push to the branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and patterns
- Add appropriate comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vercel** for excellent deployment platform
- **Capacitor** for cross-platform mobile development
- **The Bible** and biblical scholars for the theological foundation

## 📞 Support

If you have questions or need help:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. For urgent matters, contact the maintainers

---

Built with ❤️ using modern web technologies and biblical principles.