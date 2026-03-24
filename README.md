

````markdown
# Netflix GPT 🎬
> A project built while learning from [Akshay Saini](https://www.linkedin.com/in/akshaymarch7/) (Namaste React)

🚀 [View Live Demo](https://netflixgpt-shiv.web.app/) 📂 [GitHub Repository](https://github.com/shivani3200/netflix-gpt)

---

### 📌 Overview
[Netflix GPT](https://netflixgpt-shiv.web.app/) is a high-performance application developed as part of a deep dive into production-ready patterns. It combines a cinematic UI with AI-powered movie discovery. 

 🚀 Key Features
- AI Search: Get smart movie recommendations via OpenAI API.
- Real-time Data: Live movie fetching from TMDB API.
- Responsive: Mobile-first design using Tailwind CSS.
- State Management: Handled via Redux Toolkit.

 🛠️ Tech Stack
Frontend: React.js, Redux, Tailwind CSS  
Backend: Firebase (Auth & Hosting)

---

 ⚙️ Setup & Deployment

 1. Installation
```bash
git clone [https://github.com/shivani3200/netflix-gpt.git](https://github.com/shivani3200/netflix-gpt.git)
cd netflix-gpt
npm install
npm start
````

 2\. Environment Setup

Create a `.env` file:

```env
REACT_APP_TMDB_KEY=your_key
REACT_APP_OPENAI_KEY=your_key
```

 3\. Firebase Deploy

```bash
npm install -g firebase-tools
firebase login
firebase init    # Select Hosting | Public: build | SPA: Yes
npm run build
firebase deploy
```

-----

**😊 Fun Fact:** I once spent hours debugging only to realize I hadn't started the local server\!

 🎓 Credits
Special thanks to **[Akshay Saini](https://www.linkedin.com/in/akshaymarch7/)** (Namaste React) for the guidance and inspiration behind this project.

**Made with ❤️ by [Shivani](https://www.google.com/search?q=https://github.com/shivani3200)**
