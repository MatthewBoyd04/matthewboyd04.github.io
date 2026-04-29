import ListGroup from "../Misc/ListGroup";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: JSX.Element;
}

export const blogPosts: BlogPost[] = [
  {
    id: "sovereign-chess",
    title:
      "Building Sovereign Chess: A Multiplayer Chess Variant with 12 Colours and changing piece owners",
    date: "29-04-2026",
    summary:
      "How I built a digital implementation of Sovereign Chess — A Multiplayer Chess Variant with 12 Colours and changing piece owners — using React, TypeScript, Python, and Cloudflare.",
    tags: ["React", "TypeScript", "Python", "Cloudflare", "Game Dev"],
    content: (
      <div>
        <h2>What is Sovereign Chess?</h2>
        <p>
          Sovereign Chess is a complex chess variant designed by Mark Bates and
          published by Infinite Pi Games, played on a large 16x16 board with 112
          pieces representing 12 different colors. Players control colored
          pieces by occupying matching colored squares on the board, adding a
          strategic layer of controlling neutral, colored "armies" to assist in
          checkmating the opponent's king
        </p>

        <h2>The Tech Stack</h2>
        <p>
          The frontend is built with React 18 and TypeScript, styled with
          Tailwind CSS, and deployed to Cloudflare Pages via Wrangler for
          near-zero-latency global distribution. The backend uses Python with
          FastAPI to handle game state management, move validation, and the
          complex color-ownership rules — all served through a lightweight REST
          API.
        </p>

        <h2>Implementation Challenges</h2>
        <p>
          The hardest part was modeling the dynamic color-ownership system. In
          standard chess, each piece always belongs to one of two players. In
          Sovereign Chess, ownership is fluid — a piece's allegiance can change
          mid-game when entire armies are captured. This required a careful
          state design that tracked both piece positions and current ownership
          for each of the 12 colors simultaneously.
        </p>
        <p>
          The pawn movement was also very challenging for this compared to
          traditional chess. Pawns in this game can move in 5 given directions
          at any time, and those directions are ultimately irrespective of the
          pawn's current color ownership. The pawns in soveriegn chess instead
          of moving towards the other end, move towards the nearest 'guideline'
          within the board, with guidleines being the 4 lines that run through
          the middle of the board, dividing it into 4 quadrants.
        </p>

        <h2>What I Learned</h2>
        <p>
          This project deepened my understanding of complex state modeling in
          React, SVG-based graphics in the browser, and the Cloudflare Workers
          and Pages platform. The game's rules also pushed me to write cleaner,
          more thoroughly tested backend logic — when 2 players can each own
          multiple colors of pieces, subtle bugs in move validation become very
          obvious very quickly.
        </p>

        <h2>Try It</h2>
        <p>
          The game is live at{" "}
          <a
            href="https://sovereign-chess.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#8B5CF6" }}
          >
            sovereign-chess.pages.dev
          </a>
          . It currently supports local two-player matches.
        </p>

        <h2>Next Steps</h2>
        <p>
          The next steps for this project is broken down into 3 steps.
          <ol>
            <li>Implement online multiplayer functionality.</li>
            <li>Add an AI opponent for single-player mode.</li>
            <li>Implement the existing 4 player rules.</li>
          </ol>
          Right now there is no fixed timeline, or order for these features, but
          I hope to revist them when I have finished with my university work.
        </p>
      </div>
    ),
  },
];
