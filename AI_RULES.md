# AI Implementation Rules

## Tech Stack

- React with Vite for frontend development
- Express.js for backend API
- OpenAI GPT-4o for AI analysis
- Tailwind CSS for styling
- localStorage for client-side data persistence
- RESTful API architecture
- Node.js runtime environment
- JSON for data exchange format

## Library Usage Rules

### AI & Analysis
- Use OpenAI GPT-4o for primary analysis via `openai` npm package
- Implement fallback keyword-based analysis in `src/utils/commandments.js`
- Always structure AI responses as JSON with consistent fields
- Handle AI errors gracefully with user-friendly error messages

### UI Components
- Use Tailwind CSS for all styling (no other CSS libraries)
- Create React components in `src/components/` for reusable UI elements
- Use functional components with hooks for state management
- Implement responsive design patterns for all components

### Data Management
- Use localStorage for saving analysis history via custom hook
- Keep client-side data in React component state
- Never store sensitive information in localStorage
- Use RESTful API calls for server communication

### Icons & Assets
- Use custom SVG components for icons in `src/assets/icons/`
- Keep all static assets in the `src/assets/` directory
- Optimize SVGs for performance and accessibility

### Routing & Navigation
- Use React Router for client-side routing if needed
- Keep routing simple and hierarchical
- Implement programmatic navigation with hooks

### Error Handling
- Display user-friendly error messages for AI failures
- Implement retry mechanisms for failed requests
- Log errors appropriately on the server-side
- Use error boundaries for catching UI errors

### Code Quality
- Write components in JSX/JavaScript (no TypeScript required)
- Follow existing code patterns and conventions
- Keep components small and focused on single responsibilities
- Use meaningful variable and function names