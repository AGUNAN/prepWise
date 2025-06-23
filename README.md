Here’s a professional and well-structured `README.md` file for your **AI-powered Mock Interview App** using **Next.js, Firebase, Vercel, Gemini AI, Vapi AI, and TailwindCSS**:

---

````markdown
# 🎙️ AI-Powered Mock Interview Platform

Welcome to **PrepWise** – a fully AI-integrated mock interview platform designed to simulate realistic interview sessions for job seekers, students, and professionals.

> 💡 Built with: Next.js + Firebase + Gemini AI + Vapi AI + TailwindCSS  
> 🚀 Hosted on: Vercel

---

## 📌 Features

- ✅ Real-time **AI-generated interview questions** (technical & behavioral)
- 🎤 **Voice-powered interviews** using **Vapi AI**
- ✍️ Gemini AI-powered **feedback and scoring**
- 🔐 User authentication and session tracking (Firebase)
- ☁️ Data storage and resume uploads (Firestore / Storage)
- 📱 Clean, responsive UI (TailwindCSS)
- 🌐 Deployed globally on Vercel

---

## 🧠 Tech Stack

| Technology      | Description                                          |
| --------------- | ---------------------------------------------------- |
| **Next.js**     | React-based frontend framework                       |
| **Firebase**    | Auth, Firestore DB, Storage, Functions               |
| **Gemini AI**   | Interview logic, feedback & response evaluation      |
| **Vapi AI**     | Voice calling and audio AI agent for live interviews |
| **TailwindCSS** | Utility-first CSS framework for styling              |
| **Vercel**      | Deployment and serverless infrastructure             |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ai-mock-interview.git
cd ai-mock-interview
```
````

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

VAPI_API_KEY=sk-xxxxxxx
VAPI_WORKFLOW_ID=your-vapi-workflow-id

GEMINI_API_KEY=your-google-gemini-api-key
```

---

## ⚙️ Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the dev server at `localhost:3000` |
| `npm run build` | Build the app for production             |
| `npm run start` | Start the production server              |
| `vercel --prod` | Deploy to Vercel                         |

---

## 🧪 How It Works

1. User logs in via Firebase.
2. AI Assistant (powered by Gemini) starts a mock interview via voice (Vapi AI).
3. Vapi Workflow handles voice transcriptions and user responses.
4. Gemini analyzes the response and returns real-time feedback.
5. User gets interview score and improvement tips at the end.

---

## 📷 Screenshots

---

## 🛡️ Security Notes

- All API keys are stored in secure `.env` files or Vercel secrets.
- Vapi and Gemini keys are used only server-side (never exposed to the browser).

---
