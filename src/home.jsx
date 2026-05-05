// Home (Landing) page
function HomePage({ go, onEstimator }) {
  return (
    <div>
      <Hero onEstimator={onEstimator} go={go} />
      <CredStrip />
      <HowItWorksShort go={go} />
      <SocialProof />
      <EstimatorBand onEstimator={onEstimator} />
      <FAQPreview go={go} />
    </div>
  );
}

function Hero({ onEstimator, go }) {
  return (
    <section style={{
      background: '#FFFDF5', padding: '80px 0 100px', position: 'relative', overflow: 'hidden',
      borderBottom: '3px solid #000',
    }}>
      <div className="container grid-2">
        <div className="squish-in">
          <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
            <Badge kind="lemon">Free case check</Badge>
            <Badge kind="ink">$0 out of pocket</Badge>
          </div>
          <h1 className="hero-title" style={{
            font: "800 84px/0.95 'Sora', system-ui, sans-serif",
            letterSpacing: '-0.03em', margin: 0, color: '#000',
          }}>
            Got a lemon?<br/>
            <span style={{ background: '#FFE600', padding: '0 12px', boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>Call the Boss.</span>
          </h1>
          <p style={{
            font: "500 20px/1.5 'Inter', system-ui, sans-serif",
            color: '#262622', maxWidth: 540, marginTop: 24,
          }}>
            We handle California lemon law claims start to finish. No cost to you unless we win — manufacturer pays our fees under the Song-Beverly Act.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
            <Button kind="primary" size="lg" onClick={onEstimator}>Recovery Estimator <Icon name="arrowRight" size={18}/></Button>
            <Button kind="ghost" size="lg" onClick={() => go('how')}>How it works</Button>
          </div>
          <div style={{ marginTop: 28, fontSize: 13, fontWeight: 500, color: '#6C6C65' }}>
            2-minute form · No obligation · A real case manager reviews every submission
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="assets/mascot-lemon.png?v=3" alt="" className="mascot-peek mascot-idle" style={{ width: '100%', maxWidth: 460, display: 'block' }} />
          <div style={{ position: 'absolute', top: 10, right: 0 }}>
            <Sticker tone="ink" pad="10px 14px" className="squish-in-delay" style={{ fontFamily: "'Sora'", fontWeight: 800, fontSize: 14 }}>
              NO WIN · NO FEE
            </Sticker>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredStrip() {
  const stats = [
    { big: '$0', small: 'Out of pocket to start your claim' },
    { big: '100%', small: 'Of our fees paid by the manufacturer if we win' },
    { big: '24 hrs', small: 'Typical response from a real case manager' },
    { big: 'CA only', small: 'Licensed & focused on California lemon law' },
  ];
  return (
    <section style={{ background: '#000', color: '#fff', padding: '40px 0' }}>
      <div className="container grid-4">
        {stats.map((s, i) => (
          <div key={i} style={{ borderLeft: i === 0 ? 'none' : '2px solid #3F3F3A', paddingLeft: i === 0 ? 0 : 24 }}>
            <div style={{ font: "800 40px/1 'Sora'", letterSpacing: '-0.02em', color: '#FFE600' }}>{s.big}</div>
            <div style={{ fontSize: 14, lineHeight: 1.4, color: '#E8E8E4', marginTop: 6, fontWeight: 500 }}>{s.small}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorksShort({ go }) {
  const steps = [
    { n: '01', h: 'Tell us about the vehicle', b: 'A 2-minute form. VIN, make/model, repair history — nothing more.' },
    { n: '02', h: 'We review within 1 business day', b: 'A real case manager (not a bot) reads your submission and tells you if you qualify.' },
    { n: '03', h: 'We file the claim', b: 'Demand letter goes out. Manufacturer has 30 days to respond under Song-Beverly.' },
    { n: '04', h: 'You get paid', b: 'Buyback, replacement, or cash settlement. Manufacturer pays our fees. Always.' },
  ];
  return (
    <section className="section-pad" style={{ background: '#FFFDF5', padding: '96px 0' }}>
      <div className="container">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="h2-title" style={{ font: "800 48px/1.05 'Sora'", letterSpacing: '-0.02em', margin: '12px 0 0', maxWidth: 640 }}>
          Four steps. Zero cost to you.
        </h2>
        <div className="grid-4" style={{ marginTop: 48 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              background: i === 0 ? '#FFE600' : '#fff',
              border: '3px solid #000', borderRadius: 28, boxShadow: '5px 5px 0 #000',
              padding: 22, minHeight: 200,
            }}>
              <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 13, fontWeight: 700, color: '#6C6C65', marginBottom: 10 }}>STEP {s.n}</div>
              <h3 style={{ font: "700 22px/1.2 'Sora'", letterSpacing: '-0.01em', margin: '0 0 8px 0' }}>{s.h}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: '#262622', margin: 0 }}>{s.b}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <Button kind="secondary" onClick={() => go('how')}>See the full process <Icon name="arrowRight" size={16}/></Button>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const items = [
    { q: 'They took my case when two other firms said it wasn\'t worth it. Settled in under four months and I never paid a dime.', a: 'Verified client · Long Beach' },
    { q: 'Every update came with a plain-English explanation. I always knew where my case stood.', a: 'Verified client · Sacramento' },
    { q: 'My case manager texted me the same day the dealer admitted they couldn\'t fix it. That\'s when I knew I was in good hands.', a: 'Verified client · San Diego' },
  ];
  return (
    <section style={{ background: '#FFFDF5', padding: '20px 0 80px', borderTop: '3px solid #000' }}>
      <div className="container" style={{ paddingTop: 80 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
          <div>
            <Eyebrow>Why clients stick with us</Eyebrow>
            <h2 className="h2-title" style={{ font: "800 44px/1.05 'Sora'", letterSpacing: '-0.02em', margin: '10px 0 0', maxWidth: 640 }}>
              Real Californians. Real results.
            </h2>
          </div>
          <Badge kind="ink">5.0 average · 100+ reviews</Badge>
        </div>
        <div className="grid-3">
          {items.map((it, i) => (
            <div key={i} style={{
              background: '#fff', border: '3px solid #000', borderRadius: 28, boxShadow: '5px 5px 0 #000',
              padding: 24,
            }}>
              <div style={{ color: '#FFDA1F', display: 'flex', gap: 2, marginBottom: 10 }}>
                {[0,1,2,3,4].map(s => <Icon key={s} name="star" size={18} color="#FFDA1F" stroke={0}/>)}
              </div>
              <p style={{ font: "600 17px/1.45 'Sora'", margin: 0, color: '#000' }}>"{it.q}"</p>
              <div style={{ marginTop: 14, fontSize: 13, fontWeight: 700, color: '#6C6C65' }}>— {it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EstimatorBand({ onEstimator }) {
  return (
    <section style={{ background: '#FFE600', borderTop: '3px solid #000', borderBottom: '3px solid #000', padding: '64px 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 640 }}>
          <Eyebrow color="#000">Recovery Estimator</Eyebrow>
          <h2 className="h2-title" style={{ font: "800 44px/1.05 'Sora'", letterSpacing: '-0.02em', margin: '10px 0 0' }}>
            See what your case could be worth — in 2 minutes.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.55, marginTop: 12, color: '#262622' }}>
            Illustrative only — not legal advice, and not a prediction of outcome. A real case manager follows up within one business day.
          </p>
        </div>
        <Button kind="ink" size="lg" onClick={onEstimator}>Start the estimator <Icon name="arrowRight" size={18}/></Button>
      </div>
    </section>
  );
}

function FAQPreview({ go }) {
  const qs = [
    { q: "What is California's lemon law?", a: "The Song-Beverly Consumer Warranty Act requires manufacturers to repurchase or replace vehicles that can't be repaired to conform to their warranty after a reasonable number of attempts." },
    { q: 'Will this cost me anything?', a: 'No. Under Song-Beverly, if we win, the manufacturer pays our fees. You pay $0 out of pocket.' },
    { q: 'How long does a case take?', a: "Most lemon law cases settle within a few months without going to trial, though timing depends on the manufacturer, the repair history, and whether an early offer is made." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: '#FFFDF5', padding: '96px 0' }}>
      <div className="container-narrow">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <h2 className="h2-title" style={{ font: "800 44px/1.05 'Sora'", letterSpacing: '-0.02em', margin: 0 }}>Common questions</h2>
          <Badge kind="ink">California only</Badge>
        </div>
        <div style={{ background: '#fff', border: '3px solid #000', borderRadius: 28, boxShadow: '5px 5px 0 #000', overflow: 'hidden' }}>
          {qs.map((item, i) => (
            <div key={i} style={{ borderTop: i === 0 ? 'none' : '2px solid #E8E8E4' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', background: 'transparent', border: 'none', cursor: 'pointer',
                padding: '22px 26px', textAlign: 'left', font: "700 19px/1.3 'Sora'",
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
              }}>
                <span>{item.q}</span>
                <Icon name={open === i ? 'minus' : 'plus'} size={22}/>
              </button>
              {open === i && (
                <div style={{ padding: '0 26px 22px', fontSize: 15, lineHeight: 1.6, color: '#262622', maxWidth: 720 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <Button kind="secondary" onClick={() => go('faq')}>See all questions <Icon name="arrowRight" size={16}/></Button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HomePage });
