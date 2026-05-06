const LINK_STYLE  = { color: 'var(--text-body)', textDecoration: 'none', fontSize: '0.9rem' } as const;
const COPY_STYLE  = { color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 } as const;

const Footer = () => {
  return (
    <footer className="container-fluid text-center bg-primary-footer p-3">
      <div className="d-flex justify-content-center gap-3 mb-2">
        <a
          href="https://github.com/MatthewBoyd04"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Matthew Boyd on GitHub"
          style={LINK_STYLE}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/matthewboyd04/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Matthew Boyd on LinkedIn"
          style={LINK_STYLE}
        >
          LinkedIn
        </a>
        <a href="mailto:matthewboydd04@gmail.com" style={LINK_STYLE}>
          Email
        </a>
      </div>
      <p style={COPY_STYLE}>©Matthew Boyd 2026</p>
    </footer>
  );
};

export default Footer;
