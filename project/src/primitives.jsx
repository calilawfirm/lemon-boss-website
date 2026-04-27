const { useState, useEffect, useRef, useMemo } = React;

function Button({ kind = 'primary', size = 'md', children, onClick, as = 'button', href, style, type, disabled, fullWidth }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const colors = {
    primary:   { background: '#FFE600', color: '#000', border: '3px solid #000' },
    secondary: { background: '#fff', color: '#000', border: '3px solid #000' },
    ink:       { background: '#000', color: '#fff', border: '3px solid #000' },
    ghost:     { background: 'transparent', color: '#000', border: '2px solid #000', boxShadow: 'none' },
  }[kind];
  const sizes = {
    sm: { padding: '9px 14px', fontSize: 13, borderRadius: 10 },
    md: { padding: '13px 22px', fontSize: 15, borderRadius: 12 },
    lg: { padding: '17px 28px', fontSize: 17, borderRadius: 14 },
  }[size];
  const base = {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontWeight: 800,
    cursor: disabled ? 'not-allowed' : 'pointer',
    boxShadow: kind === 'ghost' ? 'none' : '5px 5px 0 #000',
    transition: 'transform 140ms cubic-bezier(.2,.8,.2,1), box-shadow 140ms cubic-bezier(.2,.8,.2,1)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    textDecoration: 'none',
    width: fullWidth ? '100%' : undefined,
    justifyContent: fullWidth ? 'center' : undefined,
    opacity: disabled ? 0.5 : 1,
  };
  const motion = disabled ? {} : press
    ? { transform: 'translate(2px,2px)', boxShadow: kind === 'ghost' ? 'none' : '1px 1px 0 #000' }
    : hover
    ? { transform: 'translate(-2px,-2px)', boxShadow: kind === 'ghost' ? 'none' : '7px 7px 0 #000' }
    : {};
  const props = {
    style: { ...base, ...colors, ...sizes, ...motion, ...style },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onClick: disabled ? undefined : onClick,
    type,
    disabled,
  };
  return as === 'a' ? <a href={href} {...props}>{children}</a> : <button {...props}>{children}</button>;
}

function Badge({ kind = 'lemon', children, style }) {
  const palette = {
    lemon:  { background: '#FFE600', color: '#000', border: '2px solid #000' },
    ink:    { background: '#000', color: '#FFE600', border: '2px solid #000' },
    white:  { background: '#fff', color: '#000', border: '2px solid #000' },
    leaf:   { background: '#E6F5E8', color: '#1E8A31', border: '2px solid #1E8A31' },
    pulp:   { background: '#FFE5DC', color: '#C94A23', border: '2px solid #C94A23' },
  }[kind];
  return (
    <span style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      fontWeight: 800, fontSize: 11, letterSpacing: '.12em',
      textTransform: 'uppercase', padding: '6px 10px', borderRadius: 999,
      display: 'inline-flex', alignItems: 'center', gap: 6, ...palette, ...style,
    }}>{children}</span>
  );
}

function Sticker({ children, tone = 'white', pad = '18px 24px', style, className }) {
  const tones = {
    white: { background: '#fff', color: '#000' },
    lemon: { background: '#FFE600', color: '#000' },
    ink:   { background: '#000', color: '#fff' },
    cream: { background: '#FFFDF5', color: '#000' },
  }[tone];
  return (
    <div className={className} style={{
      border: '3px solid #000', borderRadius: 28, boxShadow: '5px 5px 0 #000',
      padding: pad, ...tones, ...style,
    }}>{children}</div>
  );
}

function Eyebrow({ children, color }) {
  return <div style={{
    font: "800 13px/1 'Inter'", letterSpacing: '.14em', textTransform: 'uppercase',
    color: color || '#6C6C65',
  }}>{children}</div>;
}

function Icon({ name, size = 20, color = 'currentColor', stroke = 2 }) {
  const paths = {
    check: <polyline points="20 6 9 17 4 12" />,
    x: <g><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></g>,
    arrowRight: <g><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></g>,
    arrowLeft: <g><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></g>,
    menu: <g><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></g>,
    plus: <g><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></g>,
    minus: <line x1="5" y1="12" x2="19" y2="12"/>,
    car: <g><path d="M5 17h14M3 13l2-6a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 6M3 13v5M21 13v5M7 17v1M17 17v1"/><circle cx="7" cy="15" r="1.5"/><circle cx="17" cy="15" r="1.5"/></g>,
    doc: <g><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></g>,
    mail: <g><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 6 12 13 2 6"/></g>,
    phone: <path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3.09a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    clock: <g><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></g>,
    user: <g><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g>,
    lock: <g><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></g>,
    send: <g><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></g>,
    upload: <g><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></g>,
    mapPin: <g><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></g>,
    scale: <g><path d="M12 3v18M5 21h14M7 8l-4 8h8zM17 8l-4 8h8z"/></g>,
    award: <g><circle cx="12" cy="8" r="6"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></g>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
    chevronDown: <polyline points="6 9 12 15 18 9" />,
    chevronRight: <polyline points="9 6 15 12 9 18" />,
    star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
    quote: <g><path d="M3 21c3 0 7-1 7-8V5c0-1-1-2-2-2H4c-1 0-2 1-2 2v6c0 1 1 2 2 2h3c0 3-2 4-4 4v4z"/><path d="M14 21c3 0 7-1 7-8V5c0-1-1-2-2-2h-4c-1 0-2 1-2 2v6c0 1 1 2 2 2h3c0 3-2 4-4 4v4z"/></g>,
    dashboard: <g><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></g>,
    sparkle: <g><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></g>,
    helpCircle: <g><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></g>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      {paths[name] || null}
    </svg>
  );
}

Object.assign(window, { Button, Badge, Sticker, Eyebrow, Icon });
