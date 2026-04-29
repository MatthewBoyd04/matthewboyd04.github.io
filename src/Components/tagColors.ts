const TAG_COLORS: Record<string, string> = {
  // Languages — Neon Violet
  C: "#8B5CF6",
  "C++": "#8B5CF6",
  "C#": "#8B5CF6",
  TypeScript: "#8B5CF6",
  JavaScript: "#8B5CF6",
  Python: "#8B5CF6",
  MATLAB: "#8B5CF6",
  Matlab: "#8B5CF6",
  "HTML / CSS": "#8B5CF6",
  // Frameworks / Libraries — Vibrant Pink
  React: "#c648ec",
  FastAPI: "#c648ec",
  Bootstrap: "#c648ec",
  ".NET": "#c648ec",
  WPF: "#c648ec",
  Unity: "#c648ec",
  StableBaselines3: "#c648ec",
  PettingZoo: "#c648ec",
  TKinter: "#c648ec",
  numpy: "#c648ec",
  // Tools — Rich Violet
  Cloudflare: "#6D28D9",
  Git: "#6D28D9",
  Vite: "#6D28D9",
  AWS: "#6D28D9",
  "REST APIs": "#6D28D9",
  "Game Dev": "#6D28D9",
  // Concepts — Deep Indigo
  "Reinforcement Learning": "#4C1D95",
  "Machine Learning": "#4C1D95",
  "Data Structures & Algorithms": "#4C1D95",
  OOP: "#4C1D95",
  "CI/CD": "#4C1D95",
  "CI/CD Pipelines": "#4C1D95",
  Networking: "#4C1D95",
  "3D Graphics": "#4C1D95",
};

export function getTagColor(tag: string): string {
  return TAG_COLORS[tag] ?? "#2A2F3A";
}
