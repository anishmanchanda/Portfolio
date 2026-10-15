# Sorted

**AzinHack 2026 · Team Not Found** · [GitHub](https://github.com/anish-codes/sorted)

A household-admin assistant for Indian families (bills, renewals, subscriptions, medicines) that uses **AI as a compiler, not an interpreter**.

- An LLM handles a new kind of message and saves each solve as a trace.
- After a few repeats, a compiler agent writes a Python parser plus tests from those traces.
- Each parser passes an AST check, a network-less sandbox and held-out tests, then human approval and shadow mode, before it runs with **zero LLM calls**.
- If a bank changes its email layout, validation fails, it falls back to the LLM and compiles v2.
- Telegram bot, an MCP server for Claude Desktop, and a local TF-IDF + logistic-regression classifier that skips the LLM when confident.

**Stack:** Python, SQLAlchemy, scikit-learn, APScheduler, MCP, Telegram Bot API
