# BookBuddy

**Pepper Labs AI** · [Live](https://bookbuddy.pepperlabsai.com) · [GitHub](https://github.com/keshavgoel1320/Cuet-with-ui)

A production RAG platform for CUET exam preparation: a Next.js progressive web app over a FastAPI backend.

- Hybrid dual-stream retrieval combining **FAISS** vector search with **BM25** lexical ranking, using HuggingFace Sentence Transformers.
- Citation-aware context construction and a dedicated Previous Year Question retrieval stream to reduce hallucinations.
- I built the **multi-provider LLM layer** (OpenAI, Gemini, Groq, SambaNova) with failure handling and fallback, and migrated the backend from Mistral to Gemini 2.5 Flash.
- Traced an async bug that fired every LLM call **3x per request** and fixed it so each request makes one call.

**Stack:** Python, FastAPI, FAISS, BM25, Sentence Transformers, Gemini, Next.js, TypeScript
