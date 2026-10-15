import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-ph:user-circle-bold",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-ph:hand-waving-bold",
        excerpt: "Backend & AI engineer, B.Tech CSE (AI) at USICT..."
      },
      {
        id: "experience",
        title: "Experience",
        file: "markdown/experience.md",
        icon: "i-ph:briefcase-bold",
        excerpt: "Pepper Labs AI, MCT India Infotech, USICT TechSpace..."
      },
      {
        id: "education",
        title: "Education",
        file: "markdown/education.md",
        icon: "i-ph:graduation-cap-bold",
        excerpt: "B.Tech Computer Science (AI), USICT, CGPA 8.75..."
      },
      {
        id: "achievements",
        title: "Achievements",
        file: "markdown/achievements.md",
        icon: "i-ph:trophy-bold",
        excerpt: "AzinHack 2026, rank 8 branch upgrade, DSA stats..."
      },
      {
        id: "coding-stats",
        title: "Coding Stats",
        file: "markdown/coding-stats.md",
        icon: "i-ph:chart-bar-bold",
        excerpt: "takeUforward heatmap and GitHub stats..."
      },
      {
        id: "home-server",
        title: "Home Server",
        file: "markdown/home-server.md",
        icon: "i-ph:hard-drives-bold",
        excerpt: "A 2016 laptop that refused to retire..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "How this macOS-style portfolio is built and hosted..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "bookbuddy",
        title: "BookBuddy",
        file: "markdown/projects/bookbuddy.md",
        icon: "i-ph:book-open-bold",
        excerpt: "Production RAG for CUET exam prep at Pepper Labs AI...",
        link: "https://bookbuddy.pepperlabsai.com"
      },
      {
        id: "materialmover",
        title: "MaterialMover",
        file: "markdown/projects/materialmover.md",
        icon: "i-ph:recycle-bold",
        excerpt: "Marketplace for reusing construction waste...",
        link: "https://home-server.tail9060c1.ts.net"
      },
      {
        id: "sorted",
        title: "Sorted",
        file: "markdown/projects/sorted.md",
        icon: "i-ph:house-line-bold",
        excerpt: "Household admin that uses AI as a compiler...",
        link: "https://github.com/anish-codes/sorted"
      },
      {
        id: "dockwidgets",
        title: "DockWidgets",
        file: "markdown/projects/dockwidgets.md",
        icon: "i-ph:app-window-bold",
        excerpt: "Widgets in the empty space beside your macOS Dock...",
        link: "https://anishmanchanda.github.io/DockWidgets-webpage/"
      },
      {
        id: "sony-ult-ctl",
        title: "sony-ult-ctl",
        file: "markdown/projects/sony-ult-ctl.md",
        icon: "i-ph:headphones-bold",
        excerpt: "Reverse-engineered Bluetooth control for Sony headphones...",
        link: "https://github.com/Leonard013/sony-ult-ctl/pull/1"
      },
      {
        id: "agent-watch",
        title: "Agent Watch",
        file: "markdown/projects/agent-watch.md",
        icon: "i-ph:watch-bold",
        excerpt: "Approve your coding agent from your Apple Watch...",
        link: "https://github.com/anishmanchanda/claude-watch"
      },
      {
        id: "first-reply",
        title: "First Reply",
        file: "markdown/projects/first-reply.md",
        icon: "i-ph:envelope-simple-bold",
        excerpt: "Freelance enquiry intake with Notion and a human in the loop...",
        link: "https://github.com/anishmanchanda/First-Reply"
      }
    ]
  }
];

export default bear;
