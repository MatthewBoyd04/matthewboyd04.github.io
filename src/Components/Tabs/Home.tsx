import { getTagColor } from "../tagColors";

const SKILLS = [
  {
    category: "Languages",
    items: [
      "C",
      "C++",
      "C#",
      "Python",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "MATLAB",
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      ".NET",
      "React",
      "Unity",
      "WPF",
      "Git",
      "AWS",
      "Vite",
      "Cloudflare",
      "REST APIs",
    ],
  },
  {
    category: "Concepts",
    items: [
      "Reinforcement Learning",
      "Machine Learning",
      "Data Structures & Algorithms",
      "OOP",
      "CI/CD Pipelines",
      "Networking",
      "3D Graphics",
    ],
  },
];

function Home() {
  return (
    <div className="container py-5">
      {/* Hero */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 fw-bold">Matthew Boyd</h1>
          <h4 style={{ color: "#8B5CF6" }}>
            Software Developer · Incoming L4 @ Amazon
          </h4>
          <p className="lead mt-3">
            MEng Computer Systems Engineering student at Sheffield, dissertation
            in Multi-Agent Reinforcement Learning. Ex-SDE Intern at Amazon,
            Junior Developer at Digital CNC, and CNC Software Lead at the RAMS
            Lab. I enjoy tackling hard problems — from RL-tuned CNC machines to
            Prime Video diagnostics — and shipping things that actually work.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <a
              href="https://github.com/MatthewBoyd04"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              GitHub
            </a>
            <a
              href="mailto:matthewboydd04@gmail.com"
              className="btn btn-outline-secondary"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="mb-4">Skills</h2>
          <div className="d-flex flex-column gap-4">
            {SKILLS.map(({ category, items }) => (
              <div key={category}>
                <p
                  className="mb-2 text-uppercase fw-semibold"
                  style={{
                    color: "#3D4455",
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  {category}
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="badge fs-6 fw-normal py-2 px-3"
                      style={{
                        backgroundColor: getTagColor(skill),
                        color: "#fff",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="mb-3">About</h2>
          <p>
            I build things for the web and beyond. My work ranges from
            browser-based game implementations to full-stack applications,
            always with a focus on clean architecture and a good user
            experience.
          </p>
          <p>
            When I'm not writing code, I'm probably thinking about chess
            variants, exploring new frameworks, or figuring out how to deploy
            the next project with zero cold starts.
          </p>
        </div>
      </div>

      <hr style={{ borderColor: "#2A2F3A" }} />

      {/* Contact */}
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="mb-3">Get In Touch</h2>
          <p>
            I'm always open to interesting projects and conversations. Feel free
            to reach out.
          </p>
          <div className="d-flex gap-3 mt-3">
            <a
              href="https://github.com/MatthewBoyd04"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              GitHub
            </a>
            <a
              href="mailto:matthewboydd04@gmail.com"
              className="btn btn-outline-secondary"
            >
              matthewboydd04@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
