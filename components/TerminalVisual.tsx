'use client';

import { useEffect, useState } from 'react';

const lines = [
  '$ deploying fahaddev/elites...',
  '✓ Build complete (2.4s)',
  '✓ Assets optimized',
  '✓ Live at elites.vercel.app',
];

export function TerminalVisual() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setVisible(lines.length); return; }
    const id = window.setInterval(() => {
      setVisible(v => v >= lines.length ? lines.length : v + 1);
    }, 720);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="terminal-card" aria-label="Deployment terminal preview">
      <div className="terminal-topbar">
        <div><i /><i /><i /></div>
        <span>deploy.log</span>
        <b>production</b>
      </div>
      <div className="terminal-body">
        <div className="terminal-kicker">FAHADDEV / DEPLOYMENT</div>
        <div className="terminal-lines">
          {lines.map((line, index) => (
            <p key={line} className={index < visible ? 'show' : ''}>
              <span className={line.startsWith('✓') ? 'terminal-ok' : ''}>{line}</span>
            </p>
          ))}
        </div>
        <div className="terminal-footer">
          <span>Next.js</span><span>Sanity</span><span>Stripe</span><span>Supabase</span>
        </div>
      </div>
    </div>
  );
}
