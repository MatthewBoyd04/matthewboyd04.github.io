export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'sovereign-chess',
    title:
      'Building Sovereign Chess: A Multiplayer Chess Variant with 12 Colours and Changing Piece Owners',
    date: '2026-04-29',
    summary:
      'How I built a digital implementation of Sovereign Chess — a multiplayer chess variant with 12 colours and dynamic piece ownership — using React, TypeScript, Python, and Cloudflare.',
    tags: ['React', 'TypeScript', 'Python', 'Cloudflare', 'Git', 'Vite'],
    content: `## What is Sovereign Chess?

Sovereign Chess is a complex chess variant designed by Mark Bates and published by Infinite Pi Games, played on a large 16×16 board with 112 pieces representing 12 different colours. Players control coloured pieces by occupying matching coloured squares on the board, adding a strategic layer of controlling neutral "armies" to assist in checkmating the opponent's king.

## The Tech Stack

The frontend is built with React 18 and TypeScript, deployed to Cloudflare Pages via Wrangler for near-zero-latency global distribution. The backend uses Python with FastAPI to handle game state management, move validation, and the complex colour-ownership rules — all served through a lightweight REST API.

## Implementation Challenges

The hardest part was modelling the dynamic colour-ownership system. In standard chess, each piece always belongs to one of two players. In Sovereign Chess, ownership is fluid — a piece's allegiance can change mid-game when entire armies are captured. This required a careful state design that tracked both piece positions and current ownership for each of the 12 colours simultaneously.

Pawn movement was also particularly challenging. Pawns can move in 5 directions at any time, irrespective of their current colour ownership. Rather than advancing toward the opponent's end, they advance toward the nearest *guideline* — the 4 lines that divide the board into quadrants.

## What I Learned

This project deepened my understanding of complex state modelling in React, SVG-based graphics in the browser, and the Cloudflare Workers and Pages platform. The game's rules also pushed me to write cleaner, more thoroughly tested backend logic — when 2 players can each own multiple colours of pieces, subtle bugs in move validation become very obvious very quickly.

## Try It

The game is live at [sovereign-chess.pages.dev](https://sovereign-chess.pages.dev). It currently supports local two-player matches.

## Next Steps

1. Implement online multiplayer functionality.
2. Add an AI opponent for single-player mode.
3. Implement the existing 4-player rules.

No fixed timeline for these yet — I plan to revisit once university work is wrapped up.`,
  },
  {
    id: 'dissertation-overview-blog',
    title: 'Multi-Agent Reinforcement Learning for Search & Rescue: An MEng Dissertation Overview',
    date: '2026-05-06',
    summary:
      'How I created MARL SAR algorithms and environments, The testing framework and the results i found.',
    tags: [
      'Python',
      'TKinter',
      'StableBaselines3',
      'PettingZoo',
      'numpy',
      'Reinforcement Learning',
      'MARL',
    ],
    content: `## What is Multi-Agent Reinforcement Learning?

Multi-Agent Reinforcement Learning (MARL) is a subfield of reinforcement learning where multiple agents learn 
to interact and cooperate (or compete) in a shared environment. Unlike single-agent RL, MARL deals with the 
complexity of multiple agents with potentially conflicting goals, requiring sophisticated algorithms to manage
 their interactions and achieve collective objectives.

## Application in Search & Rescue

In the context of Search & Rescue (SAR), MARL can be used to coordinate teams of robots or drones working 
together to locate survivors and provide assistance. Each agent (e.g., a drone or robot) has its own set of 
actions and rewards, but they must work together to maximize the overall success rate of the mission.

## What was I researching?
MARL is split into various categories based on how the agents learn and then operate. 
These are split into DTDE (Decentralized Training, Decentralized Execution), CTDE (Centralized Training, 
Decentralized Execution) and CTE (Centralized Training and Execution). I focused on the first two categories, 
as they are more applicable to real-world SAR scenarios where communication between agents may be limited.

The Research focused on the PPO-based algorithms, and a IPPO algorithm with 2 variants was created, 
as well as a MAPPO 
algorithm.

## IPPO Variants
The IPPO algorithms were split into 2 variants. The first implementation froze other agents whilst an agent was learning.
This was done to address the non-stationarity problem in MARL and attempt to stabilize the learning process, with the potential of obtaining the convergence guarantees that exist in single-agent RL.

The second implementation allowed old versions of the agents to act within the environment, which was done to attempt
to bridge the gap DTDE and CTDE algorithms, by allowing agents to learn in a more realistic environment, where other 
agents are also learning and changing their policies.

## Experimental Metrics
There was a lot to reasearch and investigate here, and in retrospect, I should have focused more deeply on a singular goal, 
instead of the very broad goal of a total comparison of the paradigms / algorithms.

The simulations run for this experiment had the following variable:
- Algorithm (IPPO Frozen, IPPO Live, MAPPO)
- Number of Agents (2, 4, 8)
- Environment (Safe, Unsafe, Multiple Rewards)

The agents, with these parameters, were then trained on 3 map sizes (15x15, 30x30 and 45x45) with a cirriculum learning schedule.
The reward placement was also dynamic, to ensure that the agents were learning to find rewards based on their observations and polciies, 
instead of just learning a singular set route.

With this, The agents were evaulated on the following metrics during evaluation periods (100 sims on each map size):
- Reward Found % (the amount of times in evaluation periods that the reward was discovered)
- Steps per episode
- Tiles Discovreed Per Episode
- Steps to reward (the amount of steps in an episode where the reward was found)
- Tiles Discovered Per Step (the amount of new tiles agents discovered in an episode over the total number of tiles discovered in an episode)



## Current State

The dissertation is currently in the process of being finalized, however the main content is complete.

The code and dissertation **MAY** be made public and appear here, once graduation is complete in July 2026.
`,
  },
  {
    id: 'using-claude-code',
    title: 'A Month of using Claude Code',
    date: '2026-05-06',
    summary: 'What I learned using claude code, Why i started, and will I continue?',
    tags: ['GenAI'],
    content: `## What is Claude?
  For those unaware, claude is one of the leading AI models for generative AI (gen AI) and claude code is a platform 
  designed specifically for developers, enabling them to write code and debug faster.
  
  ## Why did I start?
  Since my time at amazon over the summer of 2025 as an intern, my stance on AI was that it was essentially a glorified
  stack overflow, and honestly, that was a fine state for it. Instead of reading off generic stack overflow code or
  debuggign tips, it could easily personalise for your own project and honestly that was revolutionary and saved tonnes
  of time...

  Until it doesn't.

  The AI i was using at amazon in 2025 was slow and prone to mistakes and most importantly, covering its own mistakes.
  I'm sure that most other developeres knew the frustration of the AI saying 'I've resolved the function not working'
  by removing the function entirely, or saying 'the tests now pass' because its disabled your test suite.
  
  Honestly the biggest benefit I saw from AI, was that because you had to be so specific to get results, in the writing
  of the prompt, I was defining the problem, and this meant that it was half way to solving it, and at that point, I'd
  normally just do the work myself. 

  So, given my distrust of AI as a genuinely helpful coding tool, why start?

  Well the story there is my part time job at DigitalCNC. Working a 40 hour week (uncommon as a part timer) the CTO
  casually suggests that I use claude code as the company pays for a license and it could 'automate these tickets'. 

  Now obviously I was *VERY* skeptical at first, this was a large complex code base that was ultimately very specialised.
  Don't get me wrong, I was only ever entrusting front end UI tickets to this, but i just foresaw the AI struggling. 
  Anyways with the endorsement of my CTO, I pasted a JIRA ticket in, mostly just for a laugh and waited.

  Then the work started, the AI search and searched, learnt the system, read the ticket and started implementing a task
  that would've taken me 2 hours easily. 

  The emotions that followed were a mix of disbelief, existential crisis, fears for my job security and amazement. 

  Following this 'shift' at work, I thought i could make use of claude for general optimisations and UI for my dissertation
  And bought a month long subscription for myself, and you can imagine my amazement as i say 'make a UI to tie this whole program
  together' and it just does it, A task that I had written off due to the time i predicted it'd take me, and it cracked it 
  in less than 30 mins.

  ## So What Now?
  Well I had claude code, I'd paid for the month and as a broke student, I saw to it that i sucked every single bit of value
  out of it. So what was next on the agenda? That website thats been sat ideal for a year, the projects I've had planned in my
  head but never had time to make, and all the possibilites of having what is effectively a juniour engineer working for me for
  just £18 a month.

  Now don't get things mistaken, I was working with it, it could'nt do everything, it needed help setting up things like gh-pages,
  cloudflare, all things that you cant fix from the terminal, and obviously years of programming experience mean that in some cases
  it was simply quicker for me to go and do things. However, this was a rate of production I'd never managed before, Ideas
  quickly transformed into full on plans and then boilerplate and templates, then defining features and I'd never felt
  more productive, whilst feeling somewhat guilty.

  Sure I knew how this code worked, and it was my idea and it was my technical know-how that got us to something that coud
  be released publically, but i didn't write the majority of it and part of me is scared that I couldn't have. I feel
  as if I'm becoming a lazier developer for it.

  Quick sidenote, really amusingly, this is being type in vs code for my website, there is inline suggestions turned on,
  the inline AI keeps suggesting things like how i should write about this not making me a lazy developer so thanks for
  the ego boost in line AI I appreciate it.

  ## What needs to happen for this to threaten software developers
  Well here's the thing. I've discussed how this was used to make my portfolio website, soveriegn chess and a few other personal
  helper apps for my own personal use (or ultimately pointless public use, if the rules of soveriegn chess are slightly wrong, it doesnt 
  really matter) and some UI stuff for work, but these all have 1 key point.

  All of these projects are **TOTALLY UNIMPORTANT**... 
  
  If my website code is a complete spaghetti mess, it doesn't actually matter for the functionality of the website. I can
  view the website, if the correct info is there, the website is serving its purpose. The same could be said for soveriegn
  chess. Theres no accounts, no secure or sensitive info, and as its a free game behind a beta wall, if its broken, it only
  hurts my pride, and the same could be said to an extent for my work at the company, It was all UI. I knew what the UI
  had to do, I knew what it needed to look like and what to test, so if it was wrong, I could tell.

  The issue comes when things ARE important. Poorly optimized personal website? no big deal. Slipping in something to prime video
  where the time complexity is O(n^2) instead of O(nlogn) and causing a 1000x slowdown? Huge deal. Deleting a movement function
  in a chess game that can be easily noticed and fixed, whilst minorly impacting a few users experience? not a big deal. 
  Removing the encryption for google in the AI's interest of optimizing your code? Huge deal, law suits, companies collapse.

  So heres the question:

  ## Will AI ever get good enough to replace me?
  Well this is a complex question, and my initial response is "Does it matter if its good enough?"

  Now you're going to have to hear me out on this a little. As a human i make mistakes, lets say for any given task, I have
  a 97% sucess or a 3% error rate. Not too shabby, but everyone is aware that i can make mistakes, everyone is double checking work
  and functionality from PRs to QA. Now AI has a 1% error rate, or a 0.1% error rate, but we expect these systems to be
  perfect, because if its less than perfection, why do we have it? Not that this line of thinking is correct, but its a line of thinking
  that lots of people posses. So here we are lead to 2 possible scenarios. 
  
  Scenario 1: Fully trust the AI, push its commits
  barely check over its code, trust it to do its job. Then one day one of these fatal errors blocks everything, 1 removed import, 
  a syntaxical error? something that the AI did thinking it was helping and now revenue is in the gutter. Which leads us on
  to scenario 2
  
  Scenario 2: Micro manage the AI. check every line, every function everything, and at this point you must ask, If the
  AI is doing 99.9% of the work, but we have to check every line, are we really saving any time? Are we really being more productive?
  Did we see any benefit from human coders?

  All of this is neglecting the insane cost of full on, 8 hour shift, 5 days a week prompting, leading some companies to
  *Fire AI Agents* to replace them with *Human Workers* for efficiency and cost. A sentence I honestly never thought id write.

  So now to the other question, will it ever get good enough? And the answer is Yes, but we wont.

  As someone who has worked on a dissertation on AI, I can say we perfected replicating human intelligence bit, 
  because AI at every given turn acts like a toddler, willingly mis-understanding everything you give it. You give it a
  reward structure, it exploits it, you give it a prompt to make your code 10x faster, it does! however removed core functionality
  in the mean time. Our biggest issue towards a 100% efficient AI, is a 100% correct prompter. And this can easily be seen in my life.

  My housemate and friend jamie also has claude code for some projects, the important distinction here is that he's not
  a developer, he's an aero student who wants to make some simulations. He does not understand a lot of computer science
  theory, which is needed to prompt AIs properly and has less experience prompting AIs then myself. And the result when we
  use the same program, with the same model is day and night. My claude prompts tend to work 1st time, 2nd at a push
  because I told it what someone would've told me to do, if it was my task. Implementation detials, structure etc. When
  jamie was using it, he was saying 'do xyz' or 'implement xyz' and claude was not responding well to it, as it lacked
  sufficient information. 

  Now it should be noted, that previous paragraph means no disrespect to Jamie, he is a genuinely talented aerospace engineer, 
  Jamie and I simply have different skill sets. But when other engineering discplines are struggling to use the technology.
  It points to an issue of the broader public being able to use AI as efficiently. If someone who knows enough to do a 
  MEng in aerospace (which does cover some coding and development) cannot efficiently use AI, It means that average people
  who lack experience in the field will struggle even more, and quitting your unrelated job because you can vibe code? well
  I just dont see it as feasable in major tech companies.

  So in short, due to trust issues, cost issues and accessibility, I think software developers are safe, but It should be noted
  that whilst the job is safe, this technology will forever change the job role. the old juniour developer is dead. That claude now.
  new developers coming into the space will be coming in with more responsibility and expected to deal with more complex problems, 
  as coding is being phased out of the job, or atleast, coding where you spend a whole day spinning on 1 problem, is being phased out.

  But its also important to note, that the job was never just coding. Conceptually, coding isnt too hard. I mean after all
  python only has 35 key words that make up every python application. The hard part of the job was system design, implementing
  features that you worked out was better for the user, meeting with stakeholders and getting their opinions, and debugging
  when everything breaks, claude has just make the coding and debugging part of this process easier. 
  
  ## So, Will I keep using it?
  Quick answer, Definitely!

  I have over 20 programs that are sat, conceptualized in a folder on my PC that I never got around to creating due to 
  time restraints across work, university and any other commitments like ice hockey. Using claude I can actually tackle 
  these problems. Infact, I've even started work on a project to make playing dnd *mildly* easier for myself, because
  it now takes such little mental bandwidth to do such things.

  And to re-iterate, these are all ultimately unimportant projects, hobbies, things for my own personal use, and if I start
  making apps to sell or similair, or selling services, I will seriously have to reconsider claude's place in my coding pipeline.
  But for now, the decision is clear, me and claude working together on all those projects that have been stuck inside my
  head for years now.
`,
  },
];
