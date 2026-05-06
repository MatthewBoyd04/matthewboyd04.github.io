import sovereignChessBoard from "./Project_Images/SovereignChessBoard.png";
import brackeys from "./Project_Images/brackeys.jpg";
import closedLoopControl from "./Project_Images/closed-loop-system.jpg" 
import marl from "./Project_Images/MARL.png"
import stocks from "./Project_Images/Stocks.jpg"
import webLogo from "./Project_Images/website.png"

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  projectUrl: string | null;
  blogPostId: string | null;
  placeholderColor: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "sovereign-chess",
    title: "Sovereign Chess",
    description:
      "A digital implementation of Sovereign Chess — a chess variant where 2–4 players fight over 12 colours on a 16×16 board. Built a custom move-validation engine, a dynamic colour-ownership system, and deployed globally via Cloudflare Pages.",
    tags: ["React", "TypeScript", "Python", "Cloudflare", "Git", "Vite"],
    projectUrl: "https://sovereign-chess.pages.dev",
    blogPostId: "sovereign-chess",
    placeholderColor: "#8B5CF6",
    image: sovereignChessBoard,
  },
  {
    id: "marl-dissertation",
    title: "Multi-Agent RL for Search & Rescue",
    description:
      "MEng dissertation benchmarking MARL paradigms (CTDE, independent learners, centralised) in a Search & Rescue simulation. Compares PPO, QMIX, and MAPPO across reward-shaping strategies with custom environments built on PettingZoo.",
    tags: ["Python", "StableBaselines3", "PettingZoo", "numpy", "Reinforcement Learning", "MARL", "Git"],
    projectUrl: null,
    blogPostId: "dissertation-overview-blog",
    placeholderColor: "#6366F1",
    image: marl,
  },
  {
    id: "closed-loop-cnc",
    title: "Closed-Loop CNC via Reinforcement Learning",
    description:
      "Developed software to run a CNC machine and a reinforcement learning algorithm to tune its PID controller automatically. Preliminary results show 0.09% error whilst being up to 3× faster than conventional tuning methods.",
    tags: ["C++", "MATLAB", "Python", "Reinforcement Learning", "Git"],
    projectUrl: null,
    blogPostId: null,
    placeholderColor: "#059669",
    image: closedLoopControl,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This site — built with React, TypeScript, and Vite. Features a dark purple theme, React Router v6 for client-side routing, and is deployed to GitHub Pages via gh-pages.",
    tags: ["React", "TypeScript", "HTML / CSS", "Git", "GitHub Pages"],
    projectUrl: "https://matthewboyd04.github.io/",
    blogPostId: null,
    placeholderColor: "#8B5CF6",
    image: webLogo,
  },
  {
    id: "brakeys-game-jam-2025",
    title: "Brakeys Game Jam 2025.1 — Platformer",
    description:
      "A platformer game built in 7 days for Brakeys Game Jam 2025.1. Built with Unity and C#, featuring a custom physics-feel system and hand-crafted levels.",
    tags: ["Unity", "C#"],
    projectUrl: "https://thatguymatt095.itch.io/oops",
    blogPostId: null,
    placeholderColor: "#DC2626",
    image: brackeys,
  },
  {
    id: "stock-tracker-bot",
    title: "Stock Tracker & ML Trading Bot",
    description:
      "In-development desktop application that tracks stock prices, applies ML-based signal detection, and surfaces trade suggestions. Built with C# .NET and a WPF front-end.",
    tags: ["C#", ".NET", "WPF", "Machine Learning"],
    projectUrl: null,
    blogPostId: null,
    placeholderColor: "#D97706",
    image: stocks,
  },
];
