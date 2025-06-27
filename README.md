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
