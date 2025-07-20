# 🚀 Code Spy - Real-time Collaborative Code Editor

<div align="center">
  <img src="client/src/assets/logo.svg" alt="Code Spy Logo" width="200"/>
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)](https://socket.io/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

  <p align="center">
    A modern, real-time collaborative code editor with integrated chat, drawing tools, and multi-language support.
    <br />
    <a href="#demo"><strong>View Demo »</strong></a>
    ·
    <a href="#features">Features</a>
    ·
    <a href="#installation">Installation</a>
    ·
    <a href="#usage">Usage</a>
  </p>
</div>

## ✨ Features

### 🔥 Core Features
- **Real-time Collaboration** - Multiple users can edit code simultaneously with live cursor tracking
- **Multi-language Support** - Syntax highlighting for 50+ programming languages
- **Integrated Chat System** - Built-in group chat for seamless team communication
- **Drawing & Whiteboard** - Collaborative drawing tools for visual brainstorming
- **Code Execution** - Run code directly in the browser with instant output
- **File Management** - Create, edit, delete, and organize files and folders
- **Room-based Sessions** - Private rooms with unique IDs for secure collaboration

### 🎨 User Interface
- **Modern Dark Theme** - Sleek, eye-friendly dark interface with green accents
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Customizable Editor** - Multiple themes, font families, and size options
- **Split View** - Resizable panels for optimal workspace organization
- **Fullscreen Mode** - Distraction-free coding experience

### 🛠 Developer Experience
- **TypeScript Support** - Full type safety across the entire codebase
- **Hot Reload** - Instant development feedback with Vite
- **ESLint & Prettier** - Consistent code formatting and linting
- **Component Architecture** - Modular, reusable React components
- **Context API** - Efficient state management without external dependencies

### 🌐 Collaboration Features
- **Live Cursor Tracking** - See where other users are typing in real-time
- **User Presence** - Online/offline status indicators
- **Spyhronized Scrolling** - Optional Spyhronized viewport scrolling
- **File Sharing** - Share entire project structures with team members
- **Session Persistence** - Maintain session state across browser refreshes

### 🎯 Advanced Features
- **Code Folding** - Collapse and expand code blocks
- **Search & Replace** - Powerful find and replace functionality
- **Auto-completion** - Intelligent code suggestions
- **Bracket Matching** - Automatic bracket and quote pairing
- **Line Numbers** - Configurable line numbering
- **Minimap** - Code overview for large files

## 🏗 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **CodeMirror 6** - Powerful code editor component
- **Socket.io Client** - Real-time bidirectional communication
- **React Router** - Client-side routing
- **React Hot Toast** - Beautiful toast notifications
- **Tldraw** - Collaborative drawing and whiteboard
- **React Icons** - Comprehensive icon library

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **Socket.io** - Real-time communication server
- **TypeScript** - Type-safe server development
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting
- **Nodemon** - Development server auto-restart
- **ts-node** - TypeScript execution for Node.js

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Clone the Repository
```bash
git clone https://github.com/swarnendu19/code-Spy.git
cd code-Spy
```

### Backend Setup
```bash
cd server
npm install
cp .env.example .env  # Configure your environment variables
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## 🚀 Usage

### Creating a Room
1. Visit the homepage
2. Enter a unique Room ID or generate one automatically
3. Enter your username
4. Click "Join Room" to start collaborating

### Collaboration Features
- **Code Editing**: Start typing to see real-time Spyhronization
- **Chat**: Use the integrated chat panel to communicate
- **Drawing**: Switch to drawing mode for visual collaboration
- **File Management**: Create and manage files using the file explorer
- **Settings**: Customize editor theme, font, and preferences

### Keyboard Shortcuts
- `Ctrl + S` - Save current file
- `Ctrl + F` - Find in file
- `Ctrl + H` - Find and replace
- `F11` - Toggle fullscreen mode
- `Ctrl + /` - Toggle line comment
- `Ctrl + Shift + K` - Delete line

## 🔧 Configuration

### Environment Variables

#### Server (.env)
```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

#### Client (.env)
```env
VITE_SERVER_URL=http://localhost:3000
VITE_APP_NAME=Code Spy
```

### Customization
- **Themes**: Add new editor themes in `src/resources/Themes.ts`
- **Languages**: Extend language support in `src/utils/customMapping.ts`
- **Fonts**: Add new fonts in `src/resources/Fonts.ts`

## 📁 Project Structure

```
code-Spy/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React Context providers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Page components
│   │   ├── types/          # TypeScript type definitions
│   │   ├── utils/          # Utility functions
│   │   └── styles/         # Global styles and CSS
│   ├── public/             # Static assets
│   └── package.json
├── server/                 # Backend Node.js application
│   ├── src/
│   │   ├── types/          # TypeScript interfaces
│   │   └── index.ts        # Server entry point
│   └── package.json
└── README.md
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Swarnendu Maity**
- GitHub: [@swarnendu19](https://github.com/swarnendu19)
- LinkedIn: [Swarnendu Maity](https://linkedin.com/in/swarnendu-maity)

## 🙏 Acknowledgments

- [CodeMirror](https://codemirror.net/) - Excellent code editor component
- [Socket.io](https://socket.io/) - Real-time communication
- [Tldraw](https://tldraw.dev/) - Collaborative drawing tools
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/swarnendu19/code-Spy?style=social)
![GitHub forks](https://img.shields.io/github/forks/swarnendu19/code-Spy?style=social)
![GitHub issues](https://img.shields.io/github/issues/swarnendu19/code-Spy)
![GitHub license](https://img.shields.io/github/license/swarnendu19/code-Spy)

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/swarnendu19">Swarnendu</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>