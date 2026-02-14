const stats = [
  { value: '400+', label: 'Creators paid' },
  { value: '$800k+', label: 'Paid out' },
  { value: '190+', label: 'Countries' }
];

const links = [
  { href: 'https://linkedin.com/in/davidawodiran', label: 'LinkedIn' },
  { href: 'https://github.com/davidawodiran', label: 'GitHub' },
  { href: 'https://twitter.com/davidawodiran', label: 'Twitter/X' }
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="top-nav">
        <div className="brand">David / Velzo</div>
        <nav>
          <a href="#about">About</a>
          <a href="#focus">Now</a>
          <a href="#connect">Connect</a>
          <a className="btn small" href="mailto:davidawodiran@gmail.com">
            Let&apos;s Talk
          </a>
        </nav>
      </header>

      <section className="hero-grid">
        <div className="copy-col">
          <p className="chip">Backed by founder obsession</p>
          <h1>
            Building payout experiences
            <span>for digital creators</span>
          </h1>
          <p className="subtext">
            I&apos;m David Awodiran, Software Engineer and Co-founder of Velzo. We&apos;re building an
            Africa-first marketplace where creators sell digital products and get reliable,
            global-ready payments.
          </p>

          <div className="cta-row">
            <a className="btn" href="https://velzo.co" target="_blank" rel="noopener noreferrer">
              Visit Velzo
            </a>
            <a className="ghost" href="mailto:davidawodiran@gmail.com">
              Email me
            </a>
          </div>

          <div className="stats-row">
            {stats.map((item) => (
              <div key={item.label} className="stat-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="visual-col" id="about">
          <div className="profile-card">
            <div className="avatar" aria-hidden="true">
              DA
            </div>
            <div>
              <h2>David Awodiran</h2>
              <p>Co-founder & CEO, Velzo</p>
            </div>
          </div>

          <div className="floating-card">
            <span>Current Focus</span>
            <h3>Marketplace discovery + Africa-first payouts</h3>
            <p>Shipping weekly MVP improvements from direct creator feedback.</p>
          </div>

          <div className="amount-card">
            <small>Vision</small>
            <p>Pay and empower creators globally with less friction.</p>
          </div>
        </div>
      </section>

      <section className="bottom-grid" id="focus">
        <article className="panel">
          <h3>What I&apos;m doing now</h3>
          <ul>
            <li>Leading product direction, user research, and execution at Velzo.</li>
            <li>Designing discovery-first workflows for creators with no distribution.</li>
            <li>Building payment rails from Nigeria to global buyers.</li>
          </ul>
        </article>

        <article className="panel" id="connect">
          <h3>Connect</h3>
          <p>I&apos;m open to product conversations, collaboration, and startup feedback.</p>
          <div className="links">
            {links.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
