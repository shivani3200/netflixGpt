# Netflix GPT 🎬

🚀 Live Demo: [Open App](https://netflixgpt-shiv.web.app/)

A part of this journey is thanks to the teachings of [Akshay Saini](https://www.linkedin.com/in/akshaymarch7/) (Namaste React), learned with respect and gratitude

---

Overview  
Netflix GPT is a high-performance application developed as part of a deep dive into production-ready patterns. It combines a cinematic UI with AI-powered movie discovery.

---

🚀 Key Features
- AI Search: Get smart movie recommendations via OpenAI API  
- Real-time Data: Live movie fetching from TMDB API  
- Responsive: Mobile-first design using Tailwind CSS  
- State Management: Redux Toolkit  

---

🛠️ Tech Stack  
Frontend: React.js, Redux, Tailwind CSS  
Backend: Firebase (Auth & Hosting)

---

⚙️ Setup & Deployment

1. Installation
```bash
git clone https://github.com/shivani3200/netflix-gpt.git
cd netflix-gpt
npm install
npm start
```

2. Environment Setup

Create a `.env` file:

```env
REACT_APP_TMDB_KEY=your_key
REACT_APP_OPENAI_KEY=your_key
```

3. Firebase Deploy

```bash
npm install -g firebase-tools
firebase login
firebase init
npm run build
firebase deploy
```

---

😊 Fun Fact  
I once spent hours debugging only to realize I hadn't started the local server!

Made with ❤️ by [Shivani](https://github.com/shivani3200)
