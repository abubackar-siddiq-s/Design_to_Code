# D2C — Design to Code

## AI‑Powered Design → Frontend Code Generator

D2C (Design to Code) is a full‑stack MERN application that converts UI designs, screenshots, or mockups into clean, production‑ready frontend code using Generative AI.

Built as an AI engineering product, this platform helps developers and designers automatically transform visuals into structured HTML/CSS/React code — drastically reducing manual UI implementation time.

---

## 🚀 Project Highlights

- Upload UI screenshots or design images
- Extract colors automatically
- Detect fonts
- Generate structured UI code
- AI‑powered layout understanding using Gemini
- Download ready‑to‑use frontend code
- Clean modular architecture
- Production‑ready MERN stack

---

## 🛠 Tech Stack

Frontend: React.js  
Backend: Node.js + Express.js  
Database: MongoDB  
AI Engine: Google Gemini API   
Image Processing: Custom utilities  

---

## ✨ Features

### 🎨 Design Processing
- Upload image/mockup
- Automatic color palette extraction
- Font detection
- Layout component recognition

### 🤖 AI Code Generation
- Gemini prompt engineering
- Converts design into:
  - HTML
  - CSS
  - React components
- Structured & readable code output
- Download generated files

### 📂 Backend Services
- REST APIs
- File upload handling
- AI inference controller
- Modular routing
- Utility-based architecture

### 💻 Frontend UI
- Responsive interface
- Live preview
- Code output viewer
- Download generated files
- Clean modern design

---

## 🧠 How It Works

1. User uploads UI image
2. Backend processes image
3. Extracts colors & fonts
4. Gemini receives structured prompt
5. AI generates code
6. Code returned to frontend
7. User downloads project files

---

## 🏗 System Architecture

Client (React)
      ↓
Express APIs
      ↓
Image Processing + Prompt Builder
      ↓
Gemini AI
      ↓
Generated Code Response

---

## 📁 Project Structure

D2C/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── utils/
│   ├── uploads/
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── components/
│   ├── services/
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json

---

## ⚙️ Installation & Setup

### 1. Clone Repository
git clone <repo-url>
cd D2C

### 2. Install Backend
cd backend
npm install

### 3. Install Frontend
cd ../frontend
npm install

---

## 🔐 Environment Variables

Create backend/.env

PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_gemini_api_key

⚠️ Never commit .env to GitHub.

---

## ▶️ Run Application

Backend:
npm run dev

Frontend:
npm start

Frontend runs on:
http://localhost:3000

Backend runs on:
http://localhost:5000

---

## 🔌 API Endpoints

POST /api/ui-to-code  
POST /api/color-extract  
POST /api/font-detect  

---

## 🔐 Security Best Practices

- .env ignored in git
- API keys stored in environment variables
- File upload validation
- Input sanitization
- Rate limiting ready

---

## ⚡ Performance Optimizations

- Efficient image processing
- Optimized prompts for faster AI responses
- Stateless APIs
- Modular controllers
- Scalable architecture

---

## 📈 Future Improvements

- Figma API integration
- Drag & drop design editor
- Multi‑framework output (Flutter, Vue)
- Live preview editor
- Authentication & user projects
- Cloud deployment
- History of generated designs
- AI layout refinement

---

## 🎯 Use Cases

- Rapid prototyping
- UI to React conversion
- Designer → Developer handoff
- Hackathon MVP generation
- Startup frontend scaffolding

---

## 👨‍💻 Developed By

Abubackar Siddiq S
Computer Science Engineering Student  
Full Stack MERN Developer  
AI + Web Engineering Enthusiast

---

## 📄 License
MIT License

---

## Made with ❤️ by Abubackar Siddiq

Upload Design → Get Code → Ship Faster 🚀
