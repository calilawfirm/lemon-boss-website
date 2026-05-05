// Shared chrome: Nav and Footer, used on every page.
function Nav({ route, go, onEstimator }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { k: 'how', label: 'How it works' },
    { k: 'qualify', label: 'Do I qualify?' },
    { k: 'results', label: 'What we cover' },
    { k: 'faq', label: 'FAQ' },
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#FFFDF5', borderBottom: '3px solid #000',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 32px', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <a onClick={() => go('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <img src="assets/logo-lemon-boss.png" alt="Lemon Boss" style={{ height: 44, display: 'block' }} />
          </a>
          <div className="hide-mobile" style={{ display: 'flex', gap: 26, fontWeight: 600, fontSize: 15 }}>
            {links.map(l => (
              <a key={l.k} onClick={() => go(l.k)} style={{
                cursor: 'pointer',
                color: route === l.k ? '#000' : '#262622',
                textDecoration: 'none',
                borderBottom: route === l.k ? '3px solid #FFE600' : '3px solid transparent',
                paddingBottom: 2,
              }}>{l.label}</a>
            ))}
          </div>
        </div>
        <div className="hide-mobile" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <a onClick={() => go('signin')} style={{ cursor: 'pointer', fontWeight: 600, fontSize: 14, textDecoration: 'none', color: '#000' }}>Client sign in</a>
          <Button kind="primary" size="sm" onClick={onEstimator}>Recovery Estimator <Icon name="arrowRight" size={16}/></Button>
        </div>
        <button className="hide-desktop" onClick={() => setMobileOpen(o => !o)} style={{
          background: '#FFE600', border: '3px solid #000', borderRadius: 10, padding: 8, cursor: 'pointer',
        }}>
          <Icon name={mobileOpen ? 'x' : 'menu'} size={22}/>
        </button>
      </div>
      {mobileOpen && (
        <div className="hide-desktop" style={{ borderTop: '2px solid #000', padding: '16px 20px', display: 'grid', gap: 10, background: '#FFFDF5' }}>
          {links.map(l => (
            <a key={l.k} onClick={() => { go(l.k); setMobileOpen(false); }} style={{
              cursor: 'pointer', fontWeight: 700, fontSize: 16, padding: '8px 0', textDecoration: 'none', color: '#000',
            }}>{l.label}</a>
          ))}
          <a onClick={() => { go('signin'); setMobileOpen(false); }} style={{ cursor: 'pointer', fontWeight: 600, fontSize: 15, padding: '8px 0', textDecoration: 'none', color: '#000' }}>Client sign in</a>
          <Button kind="primary" fullWidth onClick={() => { onEstimator(); setMobileOpen(false); }}>Recovery Estimator <Icon name="arrowRight" size={16}/></Button>
        </div>
      )}
    </nav>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ background: '#000', color: '#fff', padding: '56px 0 28px' }}>
      <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <div style={{ display: 'inline-block', background: '#FFFDF5', border: '3px solid #000', borderRadius: 18, padding: '8px 14px', boxShadow: '5px 5px 0 #FFE600' }}>
            <img src="assets/logo-lemon-boss.png" style={{ height: 44, display: 'block' }} />
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: '#C9C9C2', maxWidth: 360, marginTop: 16 }}>
            Lemon Boss is a consumer brand of Cali Law Firm, APC. We represent California residents in lemon law claims under the Song-Beverly Consumer Warranty Act.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 18, flexWrap: 'wrap' }}>
            <a href="tel:8884113332" style={{ color: '#FFE600', textDecoration: 'none', fontWeight: 700, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="phone" size={16}/> (888) 411-3332</a>
            <a href="mailto:info@calilawfirm.com" style={{ color: '#FFE600', textDecoration: 'none', fontWeight: 700, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="mail" size={16}/> info@calilawfirm.com</a>
          </div>
        </div>
        <FooterCol title="Get help" links={[
          { l: 'Check my case', k: 'estimator' },
          { l: 'How it works', k: 'how' },
          { l: 'Do I qualify?', k: 'qualify' },
          { l: 'FAQ', k: 'faq' },
        ]} go={go} />
        <FooterCol title="Firm" links={[
          { l: 'About Cali Law Firm, APC', k: 'about' },
          { l: 'Our attorneys', k: 'attorneys' },
          { l: 'What we cover', k: 'results' },
          { l: 'Contact', k: 'contact' },
        ]} go={go} />
        <FooterCol title="Legal" links={[
          { l: 'Privacy', k: 'privacy' },
          { l: 'Terms', k: 'terms' },
          { l: 'Disclaimer', k: 'disclaimer' },
        ]} go={go} />
      </div>
      <div className="container" style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid #3F3F3A', fontSize: 12, lineHeight: 1.6, color: '#9A9A92' }}>
        Attorney advertising. Prior results do not guarantee a similar outcome. Submission of information through this site does not create an attorney-client relationship; an attorney-client relationship is formed only through a signed written retainer agreement. Nothing on this site constitutes legal advice.
        <div style={{ marginTop: 10 }}>
          Cali Law Firm, APC · (888) 411-3332 · info@calilawfirm.com · 468 N. Camden Drive, Suite 210, Beverly Hills, CA 90210
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, go }) {
  return (
    <div>
      <div style={{ fontWeight: 800, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FFE600', marginBottom: 14 }}>{title}</div>
      {links.map((l, i) => (
        <a key={i} onClick={() => go(l.k)} style={{
          display: 'block', fontWeight: 500, fontSize: 14, color: '#E8E8E4',
          textDecoration: 'none', padding: '5px 0', cursor: 'pointer',
        }}>{l.l}</a>
      ))}
    </div>
  );
}

Object.assign(window, { Nav, Footer });
