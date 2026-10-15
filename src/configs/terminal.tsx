import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            Hi, I'm Anish Manchanda, a B.Tech CSE (AI) student at USICT (GGSIPU), New
            Delhi, class of 2028. I build backend systems, LLM pipelines and native Apple
            apps, and I like debugging things down to the byte.
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Backend & APIs / RAG & LLM apps / AI agents & evals / Voice agents / Native Apple apps"
      },
      {
        id: "about-looking-for",
        title: "looking-for.txt",
        type: "file",
        content:
          "Summer 2027 internships and remote part-time roles in backend and AI engineering."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:anishmanchanda2006@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                anishmanchanda2006@gmail.com
              </a>
            </li>
            <li>Phone: +91 74289 12104</li>
            <li>
              GitHub:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/anishmanchanda"
                target="_blank"
                rel="noreferrer"
              >
                @anishmanchanda
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/anish-manchanda"
                target="_blank"
                rel="noreferrer"
              >
                anish-manchanda
              </a>
            </li>
            <li>
              Résumé:{" "}
              <a
                className="text-blue-300"
                href="resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                resume.pdf
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "home-server",
    title: "home-server.txt",
    type: "file",
    content: (
      <div className="py-1">
        <div>Host: Dell laptop from 2016 · Intel Core i5 · 4 GB RAM · 128 GB SSD</div>
        <div>OS: Debian GNU/Linux 13 (Trixie), headless, managed over SSH</div>
        <div>Serving: MaterialMover, this portfolio, and a few other projects 😉</div>
      </div>
    )
  }
];

export default terminal;
