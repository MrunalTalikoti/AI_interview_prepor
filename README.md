# AI Interview Prepor

![AI Interview Prep](https://img.shields.io/badge/AI-Interview%20Prep-blue?style=for-the-badge&logo=openai)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Your AI-powered interview coach — practice smarter, not harder.**

An intelligent AI Voice Agent that transforms your interview preparation experience. This cutting-edge platform combines artificial intelligence with voice interaction to provide personalized, real-time interview coaching and feedback.

<img width="2518" height="1300" alt="image" src="https://github.com/user-attachments/assets/4c398df0-b823-4de5-bb9f-c08689c1e58b" />

## ✨ Features

### 🎯 **AI Voice Agent**
- **Conversational AI**: Engage in realistic interview conversations with an intelligent voice agent
- **Real-time Responses**: Get instant feedback and follow-up questions based on your answers
- **Natural Language Processing**: Advanced AI understanding of context and nuanced responses

### 🎤 **Voice Integration**
- **Speech-to-Text**: Speak naturally during practice sessions
- **Text-to-Speech**: Listen to AI-generated questions and feedback
- **Voice Analysis**: Get insights on your speaking pace, clarity, and confidence

### 🧠 **Smart Interview Coaching**
- **Adaptive Questioning**: AI adjusts question difficulty based on your performance
- **Personalized Feedback**: Detailed analysis of your responses with improvement suggestions
- **Multiple Interview Types**: Technical, behavioral, HR, and industry-specific interviews
- **Progress Tracking**: Monitor your improvement over time with detailed analytics

### 🎨 **Modern User Experience**
- **Intuitive Interface**: Clean, responsive design built with Next.js
- **Real-time Interaction**: Seamless voice conversations with minimal latency
- **Cross-platform**: Works on desktop, tablet, and mobile devices

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**
- Modern web browser with microphone access

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MrunalTalikoti/AI_interview_prepor.git
   cd AI_interview_prepor
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your API keys
  

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - Component-based UI library

### **AI & Voice**
- **VAPI** - AI Assistant 

### **Deployment**
- **Vercel** - Optimized for Next.js deployment
- **Edge Functions** - Fast, globally distributed API routes

## 🎯 How It Works

1. **Start Interview Session**
   - Choose your interview type (Technical, Behavioral, HR, etc.)
   - Select difficulty level and focus areas
   - Grant microphone permissions for voice interaction

2. **AI-Powered Conversation**
   - AI agent asks contextual questions based on your profile
   - Speak your answers naturally using voice input
   - AI provides real-time follow-up questions and clarifications

3. **Instant Feedback**
   - Get immediate analysis of your response quality
   - Receive suggestions for improvement
   - Track speaking metrics (pace, clarity, filler words)

4. **Progress Analytics**
   - View detailed session reports
   - Monitor improvement trends over time
   - Get personalized recommendations for future practice

## 📁 Project Structure

```
AI_interview_prepor/
├── app/                    # Next.js App Router
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── interview/        # Interview-specific components
│   └── voice/            # Voice interaction components
├── lib/                   # Utility libraries
│   ├── ai/               # AI service integrations
│   ├── audio/            # Audio processing utilities
│   └── utils.ts          # General utilities
├── public/               # Static assets
├── types/                # TypeScript type definitions
└── hooks/                # Custom React hooks
```

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📈 Performance Optimization

- **Edge Runtime**: API routes use Edge Runtime for faster response times
- **Streaming Responses**: AI responses are streamed for better user experience
- **Audio Compression**: Optimized audio processing for low latency
- **Code Splitting**: Automatic code splitting with Next.js

## 🚀 Deployment

### Deploy to Vercel

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

```bash
# Or deploy manually
npm run build
npx vercel --prod
```

### Deploy to Other Platforms

The app can be deployed to any platform that supports Node.js:
- **Netlify**
- **Railway**
- **AWS Amplify**
- **DigitalOcean App Platform**

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** and add tests
4. **Commit your changes** (`git commit -m 'Add amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**


## 📞 Support

Having issues or questions?

- **📧 Email**: [mrunaltalikoti2@gmail.com](mailto:mrunaltalikoti2@gmail.com)
- **🐛 Issues**: [GitHub Issues](https://github.com/MrunalTalikoti/AI_interview_prepor/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/MrunalTalikoti/AI_interview_prepor/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by [Mrunal Talikoti](https://github.com/MrunalTalikoti)**

*Practice smarter, not harder. Get ready to ace your next interview!*

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


