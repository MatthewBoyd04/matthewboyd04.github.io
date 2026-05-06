import { useState } from 'react';

const ENDPOINT = 'https://api.web3forms.com/submit';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const INPUT_STYLE = {
  backgroundColor: 'var(--bg-deep)',
  border: '1px solid var(--border)',
  color: 'var(--text-body)',
  borderRadius: '6px',
} as const;

const LABEL_STYLE = { color: 'var(--text-muted)', fontSize: '0.85rem' } as const;

function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p style={{ color: 'var(--accent-green)' }}>
        ✓ Message sent — I'll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value="42a9f8f4-5efa-4047-a2c4-8d07866ee138" />
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="cf-name" className="form-label" style={LABEL_STYLE}>Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            className="form-control"
            style={INPUT_STYLE}
            placeholder="Your name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="cf-company" className="form-label" style={LABEL_STYLE}>
            Company <span style={{ color: 'var(--text-label)' }}>(If Applicable)</span>
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            className="form-control"
            style={INPUT_STYLE}
            placeholder="Company name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="cf-type" className="form-label" style={LABEL_STYLE}>Type of Message</label>
          <select
            id="cf-type"
            name="type"
            required
            className="form-select"
            style={INPUT_STYLE}
          >
            <option value="">Select type…</option>
            <option value="Recruitment">Recruitment</option>
            <option value="Projects">Projects</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="cf-email" className="form-label" style={LABEL_STYLE}>Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            className="form-control"
            style={INPUT_STYLE}
            placeholder="you@example.com"
          />
        </div>
        <div className="col-12">
          <label htmlFor="cf-message" className="form-label" style={LABEL_STYLE}>Message</label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            required
            className="form-control"
            style={INPUT_STYLE}
            placeholder="What's on your mind?"
          />
        </div>
      </div>
      {status === 'error' && (
        <p className="mt-3" style={{ color: '#f87171' }}>
          Something went wrong — please email me directly at{' '}
          <a href="mailto:matthewboydd04@gmail.com" style={{ color: '#f87171' }}>
            matthewboydd04@gmail.com
          </a>
          .
        </p>
      )}
      <div className="mt-3">
        <button type="submit" className="btn btn-accent" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
