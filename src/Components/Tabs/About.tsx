import { getTagColor, sortTags } from '../tagColors';
import { TagIcon } from '../tagIcons';
import { projects } from '../Projects/projectsData';
import { blogPosts } from '../Blog/blogPostsData';

const CARD_STYLE = {
  backgroundColor: 'var(--bg-card)',
  border: '2px solid var(--border)',
  borderRadius: '12px',
};

const HEADING_COLOR = { color: 'var(--text-heading)' };
const BODY_COLOR = { color: 'var(--text-body)' };
const ACCENT = 'var(--accent)';
const ACCENT_GREEN = 'var(--accent-green)';

interface EducationEntry {
  degree: string;
  institution: string;
  dates: string;
  bullets: string[];
}

interface ExperienceEntry {
  title: string;
  company: string;
  dates: string;
  upcoming?: boolean;
  bullets: string[];
  tags: string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'MEng Computer Systems Engineering',
    institution: 'The University of Sheffield',
    dates: '2022 - 2026',
    bullets: [
      '1:1 expected — 72% (2nd Year) | 75.6% (3rd Year)',
      'Dissertation: Multi-Agent Reinforcement Learning for Search and Rescue',
    ],
  },
  {
    degree: 'A-Levels: Maths, Computer Science, Product Design',
    institution: 'Garth Hill College',
    dates: '2020 - 2022',
    bullets: ['A, A, A* respectively'],
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    title: 'L4 Software Developer',
    company: 'Amazon',
    dates: 'August 2026 (Upcoming)',
    upcoming: true,
    bullets: [
      'Starting as an L4 Software Developer at Amazon in August 2026.',
      'Working within the Prime Video & Studios team.',
    ],
    tags: [],
  },
  {
    title: 'Part-Time Junior Developer',
    company: 'Digital CNC',
    dates: 'October 2025 - May 2026',
    bullets: [
      'Improving user experience via enhancements to tools utilising 3D graphics knowledge acquired at university.',
      'Working within a small team in a fast-paced, ever-changing environment.',
    ],
    tags: ['C#', 'TypeScript', 'C++', '.NET', 'WPF', 'Vue', 'CI/CD Pipelines', '3D Graphics'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Amazon',
    dates: 'June 2025 - September 2025',
    bullets: [
      'Worked with the Prime Video & Studios Living Room foundation team.',
      'Developed a diagnostic system to improve network error visibility during Prime Video bootstrap, enhancing issue identification on Living Room devices.',
      'Designed and implemented a lightweight, customer-facing diagnostics interface reportable via customer service channels — benefiting an estimated 1 million Prime Video users.',
      'Improved both customer experience and internal debugging workflows, reducing mean time to resolution (MTTR) for bootstrap-related errors.',
    ],
    tags: ['C++', 'TypeScript', 'JavaScript', 'Networking', 'CI/CD Pipelines'],
  },
  {
    title: 'Part-Time Software Developer Intern',
    company: 'Digital CNC',
    dates: 'March 2024',
    bullets: [
      'Created a tool to export program data to PDF.',
      'Worked within an incredibly small team at a new start-up.',
    ],
    tags: ['C#', '.NET', 'OOP'],
  },
  {
    title: 'Summer Researcher',
    company: 'RAMS Lab, University of Sheffield',
    dates: 'June 2024 - September 2024',
    bullets: [
      'Developed software to run a CNC machine and a reinforcement learning algorithm to tune its PID controller.',
      'Preliminary results show 0.09% error whilst being up to 3× faster than other common methods.',
      'Research to be continued by the RAMS lab in future.',
    ],
    tags: ['C++', 'MATLAB', 'Python', 'Reinforcement Learning'],
  },
];

const ALL_SKILLS = sortTags(
  Array.from(
    new Set([
      ...EXPERIENCE.flatMap((e) => e.tags),
      ...projects.flatMap((p) => p.tags),
      ...blogPosts.flatMap((b) => b.tags),
    ])
  )
);

const OTHER_PROJECTS = [
  {
    name: 'Brakeys Game Jam 2025.1 Entry',
    detail: 'Platformer game',
    tags: ['Unity', 'C#'],
    year: '2025',
    url: 'https://thatguymatt095.itch.io/oops',
  },
  {
    name: 'Stock Tracker & ML Trading Bot',
    detail: 'In development',
    tags: ['C#', '.NET', 'Machine Learning'],
    year: '2025',
  },
  {
    name: 'Face ID Burglary Alarm',
    detail: 'Group university project',
    tags: ['MATLAB', 'C++', 'Machine Learning'],
    year: '2023–24',
  },
  {
    name: 'Notion → Google Calendar Bot',
    detail: 'Personal automation tool',
    tags: ['Python', 'REST APIs'],
    year: '2024',
  },
  {
    name: 'Closed-Loop CNC via RL',
    detail: 'Tuned with reinforcement learning',
    tags: ['C++', 'MATLAB', 'Python', 'Reinforcement Learning'],
    year: '2024',
  },
  { name: 'Chess Game', detail: 'In development', tags: ['Python'], year: '2024' },
  { name: 'Mobile Robot', detail: 'Group project', tags: ['C++'], year: '2023/24' },
  { name: 'Mastermind Terminal Game', detail: '', tags: ['C'], year: '2022' },
  {
    name: 'Platformer with Custom Physics Engine',
    detail: '',
    tags: ['C#', '.NET'],
    year: '2021/22',
  },
  { name: 'Password Generator & Manager', detail: '', tags: ['C#', '.NET'], year: '2018' },
  {
    name: 'AWS DeepRacer ML Competition',
    detail: '',
    tags: ['Python', 'Machine Learning', 'AWS'],
    year: '2017',
  },
];

const EXTRACURRICULARS = [
  {
    role: 'Health & Safety Co-Ordinator',
    org: 'RAMS Lab, University of Sheffield',
    dates: '2025–Present',
  },
  { role: 'CNC Software Lead', org: 'RAMS Lab, University of Sheffield', dates: '2024–Present' },
  {
    role: 'Undergraduate Research Assistant',
    org: 'RAMS Lab, University of Sheffield',
    dates: '2023–Present',
  },
  {
    role: 'Health + Safety Manager',
    org: 'Roboteers Society, University of Sheffield',
    dates: '2023–2025',
  },
  { role: 'Social Secretary', org: 'Roboteers Society, University of Sheffield', dates: '2023' },
  {
    role: 'JP Morgan Virtual Work Experience – Software Development',
    org: 'JP Morgan',
    dates: '2021',
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex align-items-center gap-3 mb-4">
      <h2 className="mb-0 fw-bold" style={HEADING_COLOR}>
        {children}
      </h2>
      <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--border)' }} />
    </div>
  );
}

function About() {
  return (
    <div className="container py-5" style={{ maxWidth: '900px' }}>
      {/* Summary */}
      <div className="mb-5">
        <h1 className="fw-bold mb-1" style={HEADING_COLOR}>
          Matthew Boyd
        </h1>
        <h5 className="mb-3" style={{ color: ACCENT }}>
          Software Developer
        </h5>
        <p style={BODY_COLOR}>
          I'm a fourth-year MEng Computer Systems Engineering student at the University of
          Sheffield, graduating in 2026 with a dissertation in Multi-Agent Reinforcement Learning. I
          currently work as CNC Software Lead in the Robotics and Autonomous Manufacturing Systems
          (RAMS) Lab. I'm joining Amazon as an{' '}
          <strong style={{ color: ACCENT }}>L4 Software Developer in August 2026</strong>, building
          on previous experience as an SDE Intern at Amazon and a Junior Developer at Digital CNC.
          My interests span software development, AI, robotics, and building tools that actually
          solve real problems.
        </p>
      </div>

      {/* Education */}
      <section className="mb-5">
        <SectionHeading>Education</SectionHeading>
        <div className="d-flex flex-column gap-3">
          {EDUCATION.map((edu) => (
            <div
              key={`${edu.institution}-${edu.dates}`}
              className="p-4"
              style={{ ...CARD_STYLE, borderLeft: `4px solid ${ACCENT}` }}
            >
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                <div>
                  <h5 className="mb-0 fw-semibold" style={HEADING_COLOR}>
                    {edu.degree}
                  </h5>
                  <p className="mb-0" style={{ color: ACCENT }}>
                    {edu.institution}
                  </p>
                </div>
                <span
                  style={{ color: 'var(--text-body)', fontSize: '0.9rem', whiteSpace: 'nowrap' }}
                >
                  {edu.dates}
                </span>
              </div>
              <ul className="mb-0 ps-3" style={{ ...BODY_COLOR, fontSize: '0.9rem' }}>
                {edu.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-5">
        <SectionHeading>Experience</SectionHeading>
        <div className="d-flex flex-column gap-3">
          {EXPERIENCE.map((role) => (
            <div
              key={`${role.company}-${role.dates}`}
              className="p-4"
              style={{
                ...CARD_STYLE,
                borderLeft: `4px solid ${role.upcoming ? ACCENT_GREEN : ACCENT}`,
              }}
            >
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                <div>
                  <h5 className="mb-0 fw-semibold" style={HEADING_COLOR}>
                    {role.title}
                  </h5>
                  <p className="mb-0" style={{ color: role.upcoming ? ACCENT_GREEN : ACCENT }}>
                    {role.company}
                  </p>
                </div>
                <span
                  style={{ color: 'var(--text-body)', fontSize: '0.9rem', whiteSpace: 'nowrap' }}
                >
                  {role.dates}
                </span>
              </div>
              <ul className="mb-2 ps-3" style={{ ...BODY_COLOR, fontSize: '0.9rem' }}>
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="d-flex flex-wrap gap-1 mt-2">
                {sortTags(role.tags).map((tag) => (
                  <span
                    key={tag}
                    className="badge fw-normal"
                    style={{
                      backgroundColor: getTagColor(tag),
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
                  >
                    <TagIcon tag={tag} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-5">
        <SectionHeading>Skills</SectionHeading>
        <div className="p-4" style={CARD_STYLE}>
          <div className="d-flex flex-wrap gap-2">
            {ALL_SKILLS.map((tag) => (
              <span
                key={tag}
                className="badge fw-normal"
                style={{
                  backgroundColor: getTagColor(tag),
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '0.85rem',
                  padding: '0.4em 0.7em',
                }}
              >
                <TagIcon tag={tag} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="mb-5">
        <SectionHeading>Other Projects</SectionHeading>
        <div className="row g-3">
          {OTHER_PROJECTS.map((p) => (
            <div key={p.name} className="col-12 col-md-6">
              <div className="p-3 h-100" style={CARD_STYLE}>
                <div className="d-flex justify-content-between align-items-start gap-2">
                  {'url' in p ? (
                    <a
                      href={p.url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-0 fw-semibold"
                      style={{ ...HEADING_COLOR, fontSize: '0.9rem', textDecoration: 'none' }}
                    >
                      {p.name}
                    </a>
                  ) : (
                    <p
                      className="mb-0 fw-semibold"
                      style={{ ...HEADING_COLOR, fontSize: '0.9rem' }}
                    >
                      {p.name}
                    </p>
                  )}
                  <span
                    style={{ color: 'var(--text-muted)', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
                  >
                    {p.year}
                  </span>
                </div>
                {p.detail && (
                  <p className="mb-1 mt-1" style={{ ...BODY_COLOR, fontSize: '0.8rem' }}>
                    {p.detail}
                  </p>
                )}
                <div className="d-flex flex-wrap gap-1 mt-2">
                  {sortTags(p.tags).map((tag) => (
                    <span
                      key={tag}
                      className="badge fw-normal"
                      style={{
                        backgroundColor: getTagColor(tag),
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontSize: '0.75rem',
                      }}
                    >
                      <TagIcon tag={tag} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extra-Curriculars */}
      <section className="mb-5">
        <SectionHeading>Extra-Curriculars & Roles</SectionHeading>
        <div className="p-4" style={CARD_STYLE}>
          <ul className="mb-0 ps-3 d-flex flex-column gap-2">
            {EXTRACURRICULARS.map((e) => (
              <li key={e.role} style={BODY_COLOR}>
                <span className="fw-semibold" style={HEADING_COLOR}>
                  {e.role}
                </span>
                {' — '}
                {e.org}
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  {' '}
                  ({e.dates})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hobbies */}
      <section className="mb-5">
        <SectionHeading>Interests & Hobbies</SectionHeading>
        <div className="p-4" style={CARD_STYLE}>
          <p className="mb-0" style={BODY_COLOR}>
            I'm a big fan of chess and chess variants — I built{' '}
            <span style={{ color: ACCENT }}>Sovereign Chess</span>, a digital implementation of a
            2–4 player variant played on a 16×16 board. Beyond chess, I enjoy game development,
            having participated in Brakeys Game Jam and built custom physics engines for fun. I'm
            deeply interested in AI and machine learning, particularly reinforcement learning, which
            threads through both my academic research and personal projects. I also enjoy robotics
            and the challenge of bridging software with physical systems. When I'm not coding,
            you'll likely find me tinkering with a new personal project or following developments in
            LLMs and autonomous agents.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
