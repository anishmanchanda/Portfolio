import type { StateCreator } from "zustand";

export interface UserSlice {
  typoraMd: string;
  setTyporaMd: (v: string) => void;
  faceTimeImages: {
    [date: string]: string;
  };
  addFaceTimeImage: (v: string) => void;
  delFaceTimeImage: (k: string) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  typoraMd: `# Anish Manchanda

Backend & AI Engineer · New Delhi · [anishmanchanda2006@gmail.com](mailto:anishmanchanda2006@gmail.com) · [GitHub](https://github.com/anishmanchanda) · [LinkedIn](https://www.linkedin.com/in/anish-manchanda) · [PDF résumé](resume.pdf)

> This is a live Markdown editor (a Typora clone built on Milkdown). Edit anything you like; it only changes your copy.

## Education

**USICT, GGSIPU** · B.Tech Computer Science (AI), 2024–2028 · CGPA 8.75/10

**Bal Bharati Public School** · Class 12: 90.8% · Class 10: 91.6%

## Internships

**Pepper Labs AI** · AI/ML Intern · Jun–Aug 2026
- Unified LLM layer (OpenAI, Gemini, Groq, SambaNova) with provider fallback, cutting latency by 40%
- Fixed a triple-invocation concurrency defect, cutting redundant API calls by 66% (3x → 1x)
- Shipped a production RAG pipeline (FAISS + BM25) to bookbuddy.pepperlabsai.com, cutting hallucinated responses by 35%

**MCT India Infotech** · Backend Engineering Intern · Apr–May 2026
- Python backend for a real-time conversational voice agent: session orchestration, multi-turn streaming, REST integrations
- LLM-as-a-Judge evaluator for live conversations; scheduled regression checks that cut manual QA effort by 30%

**USICT TechSpace** · Computer Vision Intern · Feb–Mar 2026
- OCR pipeline digitising handwritten invoices into SQL, with Chart.js reporting dashboards

**Excel Health-Tech Devices** · Software Engineer Intern · Dec 2025–Jan 2026
- Async FastAPI scheduler with queue-backed expiry alerts and safe concurrent SQLite writes for a 10+ person team

## Skills

Python · TypeScript · SQL · Java · C/C++ · Go · FastAPI · Node.js · React · RAG · LLM agents · FAISS · PostgreSQL · MongoDB · Docker · CI/CD · AWS · Linux
`,
  setTyporaMd: (v) => set(() => ({ typoraMd: v })),
  faceTimeImages: {},
  addFaceTimeImage: (v) =>
    set((state) => {
      const images = state.faceTimeImages;
      images[+new Date()] = v;
      return { faceTimeImages: images };
    }),
  delFaceTimeImage: (k) =>
    set((state) => {
      const images = state.faceTimeImages;
      delete images[k];
      return { faceTimeImages: images };
    })
});
