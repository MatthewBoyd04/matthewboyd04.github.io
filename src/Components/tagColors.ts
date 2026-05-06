type TagCategory = {
  color: string;
  tags: string[];
};

export const TAG_CATEGORIES: Record<string, TagCategory> = {
  Languages: {
    color: "#8B5CF6",
    tags: ["C", "C++", "C#", "TypeScript", "JavaScript", "Python", "MATLAB", "Matlab", "HTML / CSS"],
  },
  Frameworks: {
    color: "#c648ec",
    tags: ["React", "FastAPI", "Bootstrap", ".NET", "WPF", "Unity", "StableBaselines3", "PettingZoo", "TKinter", "numpy", "Vue"],
  },
  Tools: {
    color: "#6D28D9",
    tags: ["Cloudflare", "Git", "Vite", "AWS", "REST APIs", "GitHub Pages", "GenAI"],
  },
  Concepts: {
    color: "#4C1D95",
    tags: ["Reinforcement Learning", "MARL", "Machine Learning", "Data Structures & Algorithms", "OOP", "CI/CD Pipelines", "Networking", "3D Graphics"],
  },
};

const DEFAULT_COLOR = "#2A2F3A";
const CATEGORY_ORDER = ["Languages", "Frameworks", "Tools", "Concepts"];

export function getTagColor(tag: string): string {
  for (const category of Object.values(TAG_CATEGORIES)) {
    if (category.tags.includes(tag)) return category.color;
  }
  return DEFAULT_COLOR;
}

function getTagCategory(tag: string): string | null {
  for (const [category, { tags }] of Object.entries(TAG_CATEGORIES)) {
    if (tags.includes(tag)) return category;
  }
  return null;
}

export function sortTags(tags: string[]): string[] {
  return [...tags].sort((a, b) => {
    const idxA = CATEGORY_ORDER.indexOf(getTagCategory(a) ?? "");
    const idxB = CATEGORY_ORDER.indexOf(getTagCategory(b) ?? "");
    const orderA = idxA === -1 ? CATEGORY_ORDER.length : idxA;
    const orderB = idxB === -1 ? CATEGORY_ORDER.length : idxB;
    if (orderA !== orderB) return orderA - orderB;
    return a.localeCompare(b);
  });
}
