import sovereignChessBoard from "./Project_Images/SovereignChessBoard.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  projectUrl: string;
  blogPostId: string | null;
  placeholderColor: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "sovereign-chess",
    title: "Sovereign Chess",
    description:
      "A digital implementation of Sovereign Chess — a chess variant where 2-4 players fight over the 12 colours on the board, putting an intersting spin on traditional chess gameplay, played on a 16x16 board.",
    tags: ["React", "TypeScript", "Cloudflare"],
    projectUrl: "https://sovereign-chess.pages.dev",
    blogPostId: "sovereign-chess",
    placeholderColor: "#8B5CF6",
    image: sovereignChessBoard,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with React and TypeScript, showcasing my projects and skills.",
    tags: ["React", "TypeScript", "HTML / CSS"],
    projectUrl: "https://matthewboyd04.github.io/",
    blogPostId: "portfolio-website",
    placeholderColor: "#8B5CF6",
  },
  {
    id: "dissertation",
    title: "Dissertation: Multi-Agent Reinforcement Learning for Search And Rescue",
    description:
      "My academic dissertation on which MARL paradigms perfrom best within a SAR framework, and the mathematical reasoning behind it.",
    tags: ["Matlab", "Python", "StableBaselines3", "PettingZoo", "TKinter", "numpy"],
    projectUrl: "https://matthewboyd04.github.io/",
    blogPostId: "portfolio-website",
    placeholderColor: "#8B5CF6",
  },
];
