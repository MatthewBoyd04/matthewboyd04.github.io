import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import MainNavigationBar from './Components/PageLayout/MainNavigationBar';
import Footer from './Components/PageLayout/Footer';
import { blogPosts } from './Components/Blog/blogPostsData';

const Home          = lazy(() => import('./Components/Tabs/Home'));
const About         = lazy(() => import('./Components/Tabs/About'));
const CV            = lazy(() => import('./Components/Tabs/CV'));
const BlogList      = lazy(() => import('./Components/Blog/BlogList'));
const BlogPostDetail = lazy(() => import('./Components/Blog/BlogPostDetail'));
const NotFound      = lazy(() => import('./Components/Misc/NotFound'));

const ROUTE_TITLES: Record<string, string> = {
  '/':         'Matthew Boyd | Portfolio',
  '/about':    'About | Matthew Boyd',
  '/projects': 'Projects | Matthew Boyd',
  '/blog':     'Blog | Matthew Boyd',
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function TitleUpdater() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.startsWith('/blog/')) {
      document.title = ROUTE_TITLES[pathname] ?? 'Matthew Boyd | Portfolio';
    }
  }, [pathname]);
  return null;
}

const SUSPENSE_FALLBACK = (
  <div className="container py-5 text-center">
    <p style={{ color: 'var(--text-muted)' }}>Loading…</p>
  </div>
);

function AnimatedRoutes() {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-fade">
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/projects"  element={<CV />} />
        <Route path="/blog"      element={<BlogList posts={blogPosts} />} />
        <Route path="/blog/:id"  element={<BlogPostDetail />} />
        <Route path="*"          element={<NotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <div>
      <ScrollToTop />
      <TitleUpdater />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <MainNavigationBar />
      <main id="main-content" style={{ flex: 1 }} className="bg-primary">
        <Suspense fallback={SUSPENSE_FALLBACK}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
