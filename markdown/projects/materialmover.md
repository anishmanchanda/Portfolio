# MaterialMover

[Live](https://home-server.tail9060c1.ts.net) · [GitHub](https://github.com/Aryannnthakurrr/MaterialMover)

A full-stack marketplace for reusing construction waste, aligned with UN SDG 12.

- **React/Vite** frontend over a **Node.js/Express** API and a **FastAPI** AI-search service, with JWT auth, Cloudinary images and Mapbox.
- **PostgreSQL + MongoDB** data layer with unit- and integration-tested auth, listing and search endpoints.
- An **agentic AI advisor** with hybrid RAG (Sentence Transformers + BM25) over live inventory, constrained to verified data.
- Four services containerised with **Docker**, deployed through a **GitHub Actions** CI/CD pipeline. It now runs on my home server.

**Stack:** React, Node.js, Express, FastAPI, PostgreSQL, MongoDB, Docker, GitHub Actions
