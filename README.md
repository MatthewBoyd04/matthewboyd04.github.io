# Matthew Boyd — Portfolio

Personal portfolio site. Built with React 18, TypeScript 5, Vite, and Bootstrap 5.

Live at **[matthewboyd04.github.io](https://matthewboyd04.github.io)**.

## Development

```bash
npm install
npm run dev       # start dev server at localhost:5173
npm run build     # type-check + production build
npm run preview   # preview the production build locally
npm run lint      # ESLint
npm run format    # Prettier
```

## Adding a Blog Post

Open `src/Components/Blog/blogPostsData.tsx` and add an entry to the `blogPosts` array:

```ts
{
  id: 'my-post-slug',           // becomes the URL: /#/blog/my-post-slug
  title: 'My Post Title',
  date: '2026-06-01',           // ISO format: YYYY-MM-DD
  summary: 'One or two sentences shown on the blog list card.',
  tags: ['React', 'TypeScript'],
  content: `## Introduction

Your **markdown** content here. Standard markdown syntax — headings, bold, links, lists — all supported.`,
}
```

## Adding a Project

Open `src/Components/Projects/projectsData.ts` and add an entry to the `projects` array:

```ts
{
  id: 'my-project',
  title: 'My Project',
  description: 'What it does and why it's interesting.',
  tags: ['C#', '.NET'],
  projectUrl: 'https://github.com/...',  // set to null if the repo is private
  blogPostId: null,                       // or 'my-post-slug' to link a blog post
  placeholderColor: '#8B5CF6',            // colour shown when there's no image
}
```

## Deployment

Every push to `main` automatically builds and deploys via GitHub Actions (`deploy.yml`).

Manual deploy: `npm run deploy`
