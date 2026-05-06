import {
  SiC,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiDotnet,
  SiUnity,
  SiGit,
  SiVite,
  SiCloudflare,
  SiVuedotjs,
  SiNumpy,
  SiHtml5,
  SiBootstrap,
  SiFastapi,
  SiGithubactions,
} from 'react-icons/si';
import { IconType } from 'react-icons';

const TAG_ICONS: Partial<Record<string, IconType>> = {
  C: SiC,
  'C++': SiCplusplus,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  React: SiReact,
  '.NET': SiDotnet,
  Unity: SiUnity,
  Git: SiGit,
  Vite: SiVite,
  Cloudflare: SiCloudflare,
  Vue: SiVuedotjs,
  numpy: SiNumpy,
  'HTML / CSS': SiHtml5,
  Bootstrap: SiBootstrap,
  FastAPI: SiFastapi,
  'CI/CD': SiGithubactions,
  'CI/CD Pipelines': SiGithubactions,
};

export function TagIcon({ tag }: { tag: string }) {
  const Icon = TAG_ICONS[tag];
  if (!Icon) return null;
  return <Icon size={13} style={{ marginRight: '4px', verticalAlign: '-1px', flexShrink: 0 }} />;
}
