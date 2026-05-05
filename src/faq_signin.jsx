function FAQPage({ onEstimator }) {
  const groups = [
    {
      title: 'AB 1577 — what changed in 2024',
      qs: [
        { q: 'What is AB 1577?', a: "Assembly Bill 1577 is California legislation that took effect for vehicles sold or leased on or after April 1, 2025. It overhauls the procedure for bringing a Song-Beverly lemon law claim — adding a mandatory pre-litigation notice, fixed response and inspection windows, and a tighter statute of limitations. The substantive remedies (buyback, replacement, civil penalty) are preserved." },
        { q: 'Do I have to send a written notice before suing now?', a: 'Yes. Under AB 1577, the consumer must give the manufacturer written notice of the defect and a final opportunity to repurchase or replace the vehicle before filing a lawsuit. We prepare and send that notice on your behalf — it is not something you handle alone.' },
        { q: 'How long does the manufacturer have to respond?', a: "After receiving the AB 1577 notice, the manufacturer has 30 days to make a written offer. If they accept the claim, they then have 60 days from the consumer's acceptance to issue payment and pick up the vehicle. Miss the deadline and you can move forward in court." },
        { q: 'Can the manufacturer demand to inspect my vehicle?', a: "Yes — once. AB 1577 gives the manufacturer one inspection opportunity, which must occur within a defined window after the notice is sent. We coordinate the inspection so it doesn't become a delay tactic." },
        { q: 'Is there a deadline to file my claim?', a: "AB 1577 imposes a statute of limitations of one year after the warranty expires, with an absolute outside cutoff of six years from delivery of the vehicle. Don't wait — once the clock runs, the claim is gone." },
        { q: 'How does AB 1577 affect the civil penalty?', a: "The civil penalty (up to two times actual damages for a willful violation) still exists, but AB 1577 narrows when it can be awarded — generally only after the manufacturer has been given the required pre-litigation opportunity to cure and has failed to do so." },
        { q: 'Does AB 1577 apply to my vehicle?', a: "AB 1577 applies to vehicles sold or leased in California on or after April 1, 2025. Vehicles sold before that date are still governed by the prior Song-Beverly framework. We screen every intake for the right rule set before sending any notice." },
      ],
    },
    {
      title: 'Basics',
      qs: [
        { q: "What is California's lemon law?", a: "The Song-Beverly Consumer Warranty Act requires manufacturers to repurchase or replace vehicles that can't be repaired to conform to their warranty after a reasonable number of attempts. It applies to new and used vehicles sold or leased in California with a written warranty in effect." },
        { q: 'Does this apply to leased vehicles?', a: 'Yes. Leased, financed, and cash-purchased vehicles all qualify if the manufacturer warranty is in effect. Electric vehicles, hybrids, and commercial vehicles under 10,000 lbs are covered too.' },
        { q: 'Does it have to be a new car?', a: "No. Used cars can qualify if they were sold with a remaining manufacturer warranty, or with a certified pre-owned warranty, and the problem started while that warranty was active." },
        { q: "What counts as a \"reasonable number\" of repair attempts?", a: "There's no magic number, but courts often use these guideposts: 2+ repair attempts for a serious safety defect, 4+ attempts for other warranty issues, or 30+ cumulative days out of service." },
      ],
    },
    {
      title: 'Cost & fees',
      qs: [
        { q: 'Will this cost me anything?', a: "No. Under Song-Beverly, if we win, the manufacturer pays our fees separately from your recovery. You pay $0 out of pocket." },
        { q: "What if we don't win?", a: "You owe us nothing. We work on contingency — we only get paid if you do." },
        { q: 'Do you take a percentage of my settlement?', a: "No. California's lemon law is a fee-shifting statute — the manufacturer pays our fees directly. Your recovery is yours." },
      ],
    },
    {
      title: 'The process',
      qs: [
        { q: 'How long does a case take?', a: 'Most lemon law cases settle within a few months without going to trial. Timing depends on the manufacturer, the repair history, and whether an early offer is made. We give you a realistic window once we review your submission.' },
        { q: "Do I need to keep driving the vehicle?", a: "Usually yes — and keep every repair order. If the vehicle isn't safe to drive, stop driving it and tell us immediately. We'll walk you through what to document." },
        { q: 'What documents will I need?', a: "Your purchase/lease agreement, every repair order (even the ones where \"nothing was found\"), and any communication with the dealer or manufacturer. If you're missing anything, we can usually get it from the dealer." },
        { q: 'Will I have to go to court?', a: 'Most cases settle before trial. If yours goes further, we handle every filing, deposition, and hearing on your behalf.' },
      ],
    },
    {
      title: 'Working with us',
      qs: [
        { q: 'Who actually handles my case?', a: "A California-licensed attorney at Cali Law Firm, APC, backed by a case manager who is your day-to-day point of contact. You'll know both of them by name." },
        { q: 'How do I hear about updates?', a: "Text and email by default — whichever you prefer. You can also log in to the client portal anytime to see the full case timeline and every document we've filed." },
        { q: 'What if I have a question in the middle of the case?', a: 'Text your case manager. We reply the same business day.' },
        { q: 'Does submitting the form create an attorney-client relationship?', a: "No. An attorney-client relationship is formed only through a signed written retainer agreement. The Recovery Estimator is a free, no-obligation case check." },
      ],
    },
    {
      title: 'Specific situations',
      qs: [
        {
          q: 'What did Rodriguez v. FCA mean for used-car buyers?',
          a: "In Rodriguez v. FCA US, LLC (2024), the California Supreme Court held that a \"new motor vehicle\" under Song-Beverly does NOT include a used vehicle sold with only the balance of the original manufacturer warranty. So if you bought a used car from a dealer and the only warranty covering it was the remaining factory warranty — not a new dealer or CPO warranty — you generally cannot bring a Song-Beverly buyback claim. However, if you bought a Certified Pre-Owned vehicle that came with a new manufacturer-backed CPO warranty, you are still covered. This is a significant distinction. If you're unsure which category you fall into, run the Recovery Estimator and a case manager will review your paperwork."
        },
        {
          q: 'Can an open recall support my lemon law claim?',
          a: "Yes — and often powerfully. An open safety recall means the manufacturer has already admitted a defect exists. If your vehicle is subject to a recall and the dealer has performed (or attempted) a recall repair that didn't resolve the problem, those repair visits count toward your \"reasonable number of attempts\" under Song-Beverly. We pull recall history on every vehicle we evaluate. A persistent recall-related defect — especially one tied to safety — is one of the strongest fact patterns for a lemon law claim."
        },
        {
          q: 'What happens to my negative equity in a buyback?',
          a: "Negative equity is the amount you owe on your loan above the vehicle's value — often rolled in from a previous trade-in. Under Song-Beverly, the buyback calculation includes your full purchase price (including any negative equity you rolled in), plus taxes, registration, and finance charges — minus a mileage offset for use before the first repair attempt. In practice, this means the manufacturer may have to pay off a loan balance that exceeds the car's current market value. We fight to maximize the payoff figure and minimize the offset."
        },
        {
          q: 'What is the mileage offset and how is it calculated?',
          a: "The mileage offset is a statutory deduction the manufacturer takes from your buyback to account for your use of the vehicle before the first warranty repair attempt. The formula under Song-Beverly is: (miles at first repair attempt ÷ 120,000) × purchase price. For example, if your car cost $50,000 and the first repair attempt happened at 10,000 miles, the offset is roughly $4,167 — meaning you'd still recover $45,833 of the purchase price (plus taxes and fees). If the Song-Beverly presumption applies (first attempt under 18,000 miles within 18 months of delivery), you may also be entitled to a civil penalty of up to two times actual damages for a willful violation."
        },
      ],
    },
  ];

  const [openKey, setOpenKey] = useState('0-0');

  return (
    <div>
      <section style={{ background: '#FFFDF5', padding: '64px 0 32px', borderBottom: '3px solid #000' }}>
        <div className="container-narrow">
          <Eyebrow>FAQ</Eyebrow>
          <h1 style={{ font: "800 56px/1 'Sora'", letterSpacing: '-0.03em', margin: '14px 0 0' }}>Common questions.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: '#262622', maxWidth: 640, marginTop: 14 }}>
            Straight answers. If yours isn't here, call us at <a href="tel:8884113332" style={{ color: '#000', fontWeight: 700 }}>(888) 411-3332</a> and a real human will reply.
          </p>
        </div>
      </section>

      <section style={{ background: '#FFFDF5', padding: '56px 0 80px' }}>
        <div className="container-narrow" style={{ display: 'grid', gap: 32 }}>
          {groups.map((g, gi) => (
            <div key={gi}>
              <h2 className="h2-title" style={{ font: "800 26px/1.1 'Sora'", letterSpacing: '-0.02em', margin: '0 0 16px' }}>{g.title}</h2>
              <div style={{ background: '#fff', border: '3px solid #000', borderRadius: 28, boxShadow: '5px 5px 0 #000', overflow: 'hidden' }}>
                {g.qs.map((item, i) => {
                  const key = `${gi}-${i}`;
                  const isOpen = openKey === key;
                  return (
                    <div key={i} style={{ borderTop: i === 0 ? 'none' : '2px solid #E8E8E4' }}>
                      <button onClick={() => setOpenKey(isOpen ? null : key)} style={{
                        width: '100%', background: 'transparent', border: 'none', cursor: 'pointer',
                        padding: '20px 24px', textAlign: 'left', font: "700 18px/1.3 'Sora'",
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                      }}>
                        <span>{item.q}</span>
                        <Icon name={isOpen ? 'minus' : 'plus'} size={22}/>
                      </button>
                      {isOpen && (
                        <div style={{ padding: '0 24px 22px', fontSize: 15, lineHeight: 1.65, color: '#262622', maxWidth: 780 }}>
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#000', color: '#fff', padding: '64px 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 className="h2-title" style={{ font: "800 36px/1.1 'Sora'", letterSpacing: '-0.02em', margin: 0 }}>Still have a question?</h2>
          <p style={{ fontSize: 16, color: '#C9C9C2', marginTop: 12, marginBottom: 24 }}>
            Text us, call us, or run the Recovery Estimator. A real case manager reviews every submission.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button kind="primary" onClick={onEstimator}>Recovery Estimator <Icon name="arrowRight" size={16}/></Button>
            <Button kind="ghost" as="a" href="tel:8884113332" style={{ color: '#fff', borderColor: '#fff' }}><Icon name="phone" size={16}/> (888) 411-3332</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPage({ go, onEstimator }) {
  return (
    <div>
      <section style={{ background: '#FFFDF5', padding: '72px 0 48px', borderBottom: '3px solid #000' }}>
        <div className="container-narrow">
          <Eyebrow>About Cali Law Firm, APC</Eyebrow>
          <h1 style={{ font: "800 56px/1 'Sora'", letterSpacing: '-0.03em', margin: '14px 0 0' }}>
            A California firm that <span style={{ background: '#FFE600', padding: '0 10px' }}>refuses to settle</span> for less.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: '#262622', maxWidth: 720, marginTop: 18 }}>
            Cali Law Firm, APC (CLF) is a Los Angeles–based civil litigation practice focused on personal injury, accident claims, lemon law, and property damage claims. Lemon Boss is our consumer brand for California lemon law matters.
          </p>
        </div>
      </section>

      <section style={{ background: '#FFFDF5', padding: '72px 0' }}>
        <div className="container-narrow" style={{ display: 'grid', gap: 24 }}>
          <div style={{ background: '#fff', border: '3px solid #000', borderRadius: 22, boxShadow: '5px 5px 0 #000', padding: 28 }}>
            <h2 style={{ font: "800 26px/1.2 'Sora'", letterSpacing: '-0.02em', margin: '0 0 12px' }}>Who we are</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#262622', margin: 0 }}>
              With a strong presence in Los Angeles, CLF is a reputable and established law firm dedicated to providing exceptional services in the areas of personal injury, accident claims, lemon law, and property damage claims. Our team of experienced attorneys possesses a deep understanding of the law and an unwavering commitment to protecting our clients' rights and securing the compensation they deserve.
            </p>
          </div>
          <div style={{ background: '#fff', border: '3px solid #000', borderRadius: 22, boxShadow: '5px 5px 0 #000', padding: 28 }}>
            <h2 style={{ font: "800 26px/1.2 'Sora'", letterSpacing: '-0.02em', margin: '0 0 12px' }}>How we fight</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#262622', margin: 0 }}>
              When it comes to courtroom battles, CLF stands unrivaled. While some firms shy away from litigation — and many have long forgotten the taste of a verdict — CLF refuses to settle. Even if the opposition presents their "last and best" offer, a mere fraction of what your case is truly worth, we reject it. With a formidable team of attorneys, CLF fearlessly embraces the courtroom, ready to defend your rights and secure the compensation you rightly deserve.
            </p>
          </div>
          <div style={{ background: '#000', color: '#fff', borderRadius: 22, padding: 28, border: '3px solid #000', boxShadow: '5px 5px 0 #FFE600' }}>
            <h2 style={{ font: "800 26px/1.2 'Sora'", letterSpacing: '-0.02em', margin: '0 0 12px', color: '#fff' }}>Our promise</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#E8E8E4', margin: 0 }}>
              By virtue of our extensive trial experience, CLF never settles for anything less than the complete value of your case. You deserve nothing less than what you're truly entitled to — and the cost of enduring pain and suffering knows no bounds. That's precisely why we will passionately fight to ensure you receive full and equitable compensation.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: '#000', color: '#fff', padding: '48px 0' }}>
        <div className="container grid-4">
          {[
            { big: 'No Win', small: "No Fee — free consultation" },
            { big: 'CA-wide', small: 'Based in Los Angeles, serving all of California' },
            { big: 'Trial-ready', small: "We try cases other firms won't" },
            { big: '< 24 hrs', small: 'First response from our intake team' },
          ].map((s, i) => (
            <div key={i} style={{ borderLeft: i === 0 ? 'none' : '2px solid #3F3F3A', paddingLeft: i === 0 ? 0 : 24 }}>
              <div style={{ font: "800 32px/1 'Sora'", letterSpacing: '-0.02em', color: '#FFE600' }}>{s.big}</div>
              <div style={{ fontSize: 14, color: '#E8E8E4', marginTop: 6, fontWeight: 500 }}>{s.small}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#FFE600', borderTop: '3px solid #000', borderBottom: '3px solid #000', padding: '56px 0', textAlign: 'center' }}>
        <h2 className="h2-title" style={{ font: "800 36px/1.1 'Sora'", letterSpacing: '-0.02em', margin: '0 0 20px' }}>Meet the people handling your case.</h2>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button kind="ink" onClick={() => go('attorneys')}>Our attorneys <Icon name="arrowRight" size={16}/></Button>
          <Button kind="secondary" onClick={onEstimator}>Start a case <Icon name="arrowRight" size={16}/></Button>
        </div>
      </section>
    </div>
  );
}

function AttorneysPage({ go, onEstimator }) {
  return (
    <div>
      <section style={{ background: '#FFFDF5', padding: '72px 0 48px', borderBottom: '3px solid #000' }}>
        <div className="container-narrow">
          <Eyebrow>Our attorneys</Eyebrow>
          <h1 style={{ font: "800 56px/1 'Sora'", letterSpacing: '-0.03em', margin: '14px 0 0' }}>
            The people fighting for you.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: '#262622', maxWidth: 680, marginTop: 18 }}>
            Every Lemon Boss case is handled by a California-licensed attorney at Cali Law Firm, APC — backed by a case manager who is your day-to-day point of contact.
          </p>
        </div>
      </section>

      <section style={{ background: '#FFFDF5', padding: '72px 0' }}>
        <div className="container-narrow">
          <div style={{ background: '#fff', border: '3px solid #000', borderRadius: 28, boxShadow: '8px 8px 0 #000', padding: 32, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ background: '#FFE600', border: '3px solid #000', borderRadius: 22, aspectRatio: '3/4', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
              <div style={{ fontFamily: "'Sora'", fontWeight: 800, fontSize: 96, color: '#000', letterSpacing: '-0.04em' }}>D</div>
              <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10, background: '#000', color: '#FFE600', fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', padding: '6px 10px', borderRadius: 8, textAlign: 'center' }}>Founding attorney</div>
            </div>
            <div>
              <Badge kind="ink">Founder · Lead attorney</Badge>
              <h2 style={{ font: "800 32px/1.1 'Sora'", letterSpacing: '-0.02em', margin: '12px 0 4px' }}>Debora — "LawyerDeb"</h2>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#6C6C65' }}>Cali Law Firm, APC · California-licensed</div>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: '#262622', marginTop: 16 }}>
                Debora represents clients in a wide variety of legal matters, with her primary focus being personal injury, property damage, and lemon law. She helps clients resolve legal disputes with the highest level of legal knowledge while ensuring they receive the utmost care.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: '#262622', marginTop: 10 }}>
                As an experienced attorney, Debora brings forth a proven track record of delivering favorable outcomes — having effectively negotiated and settled over $25 million in personal injury cases, spanning catastrophic incidents, TBIs, Prop 213 matters, and global settlements.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 10, marginTop: 18 }}>
                {[
                  { i: 'award', h: 'Top 2% of class', b: "Magna Cum Laude, Dean's List" },
                  { i: 'scale', h: '6× Witkin Award', b: 'Top grade in subject' },
                  { i: 'star', h: 'Salutatorian', b: 'Speaking honoree' },
                ].map((x, i) => (
                  <div key={i} style={{ border: '2px solid #000', borderRadius: 14, padding: '10px 12px', background: '#FFFDF5' }}>
                    <Icon name={x.i} size={18}/>
                    <div style={{ fontSize: 13, fontWeight: 800, marginTop: 4 }}>{x.h}</div>
                    <div style={{ fontSize: 12, color: '#6C6C65' }}>{x.b}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#262622', marginTop: 18, fontStyle: 'italic' }}>
                Passionate about law and representation, Debora prides herself on being a confidant for clients. She places significant importance on establishing trust and fostering the attorney-client relationship throughout the legal process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#FFFDF5', padding: '32px 0 80px' }}>
        <div className="container-narrow">
          <h2 className="h2-title" style={{ font: "800 28px/1.1 'Sora'", letterSpacing: '-0.02em', margin: '0 0 20px' }}>Supporting team</h2>
          <div className="grid-3">
            {[
              { role: 'Intake & case managers', b: 'Your day-to-day point of contact. They read every submission, answer your texts, and keep you in the loop.' },
              { role: 'Litigation support', b: 'Paralegals and legal assistants who pull repair records, draft filings, and keep the manufacturer on the clock.' },
              { role: 'Of counsel attorneys', b: 'California-licensed attorneys who co-counsel on complex matters and trial-ready disputes.' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#fff', border: '3px solid #000', borderRadius: 22, boxShadow: '5px 5px 0 #000', padding: 22 }}>
                <Badge kind="lemon">Team</Badge>
                <h3 style={{ font: "700 19px/1.3 'Sora'", margin: '10px 0 6px' }}>{t.role}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: '#262622', margin: 0 }}>{t.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#000', color: '#fff', padding: '56px 0', textAlign: 'center' }}>
        <h2 className="h2-title" style={{ font: "800 36px/1.1 'Sora'", letterSpacing: '-0.02em', margin: '0 0 18px' }}>Ready to talk to a real attorney?</h2>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button kind="primary" onClick={onEstimator}>Recovery Estimator <Icon name="arrowRight" size={16}/></Button>
          <Button kind="ghost" onClick={() => go('contact')} style={{ color: '#fff', borderColor: '#fff' }}>Contact the firm</Button>
        </div>
      </section>
    </div>
  );
}

function ContactPage({ go }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: 'Lemon law', message: '' });
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const mark = (k) => setTouched(t => ({ ...t, [k]: true }));
  const valid = {
    name: !!form.name,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    message: form.message.trim().length >= 10,
  };
  const allOk = valid.name && valid.email && valid.message;
  const submit = (e) => {
    e.preventDefault();
    if (!allOk) { setTouched({ name: true, email: true, message: true }); return; }
    setSent(true);
  };
  const inputSt = (inv) => ({ width: '100%', padding: '13px 15px', border: `2px solid ${inv ? '#E53935' : '#000'}`, borderRadius: 12, background: '#fff', fontSize: 15, boxSizing: 'border-box', fontFamily: "'Inter', system-ui, sans-serif" });
  const labelSt = { display: 'block', fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: '#262622', marginBottom: 6 };

  return (
    <div>
      <section style={{ background: '#FFFDF5', padding: '72px 0 48px', borderBottom: '3px solid #000' }}>
        <div className="container-narrow">
          <Eyebrow>Contact</Eyebrow>
          <h1 style={{ font: "800 56px/1 'Sora'", letterSpacing: '-0.03em', margin: '14px 0 0' }}>Let's talk.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: '#262622', maxWidth: 680, marginTop: 18 }}>
            Tell us what's going on and a real person at Cali Law Firm, APC will follow up within one business day. For case-specific lemon law questions, the Recovery Estimator is the fastest route.
          </p>
        </div>
      </section>

      <section style={{ background: '#FFFDF5', padding: '72px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'start' }}>
          <div style={{ background: '#fff', border: '3px solid #000', borderRadius: 28, boxShadow: '8px 8px 0 #000', padding: 32 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '20px 10px' }} className="squish-in">
                <div style={{ width: 72, height: 72, background: '#E6F5E8', border: '3px solid #1E8A31', borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon name="check" size={36} color="#1E8A31" stroke={3}/>
                </div>
                <h2 style={{ font: "800 28px/1.15 'Sora'", margin: '0 0 10px' }}>Thanks, {form.name.split(' ')[0]}.</h2>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: '#262622', maxWidth: 420, margin: '0 auto' }}>
                  Your message is in. A real person will reply to <b>{form.email}</b> within one business day. If it's urgent, call us at <a href="tel:8884113332" style={{ color: '#000', fontWeight: 700 }}>(888) 411-3332</a>.
                </p>
                <div style={{ marginTop: 20 }}>
                  <Button kind="primary" onClick={() => { setSent(false); setForm({ name:'', email:'', phone:'', topic:'Lemon law', message:'' }); setTouched({}); }}>Send another message</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'grid', gap: 14 }}>
                <h2 style={{ font: "800 24px/1.1 'Sora'", margin: 0 }}>Send us a message</h2>
                <div>
                  <label style={labelSt}>Your name</label>
                  <input style={inputSt(touched.name && !valid.name)} value={form.name} onChange={e => set('name', e.target.value)} onBlur={() => mark('name')} placeholder="Maya Rodriguez"/>
                  {touched.name && !valid.name && <div style={{ fontSize: 12, color: '#E53935', marginTop: 4, fontWeight: 600 }}>Enter your name</div>}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={labelSt}>Email</label>
                    <input style={inputSt(touched.email && !valid.email)} value={form.email} onChange={e => set('email', e.target.value)} onBlur={() => mark('email')} placeholder="you@example.com"/>
                    {touched.email && !valid.email && <div style={{ fontSize: 12, color: '#E53935', marginTop: 4, fontWeight: 600 }}>Enter a valid email</div>}
                  </div>
                  <div>
                    <label style={labelSt}>Phone (optional)</label>
                    <input style={inputSt(false)} value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="(555) 555-5555"/>
                  </div>
                </div>
                <div>
                  <label style={labelSt}>What is this about?</label>
                  <select style={inputSt(false)} value={form.topic} onChange={e => set('topic', e.target.value)}>
                    <option>Lemon law</option>
                    <option>Personal injury</option>
                    <option>Property damage</option>
                    <option>Media / press</option>
                    <option>General question</option>
                  </select>
                </div>
                <div>
                  <label style={labelSt}>Message</label>
                  <textarea style={{ ...inputSt(touched.message && !valid.message), resize: 'none' }} rows={5} value={form.message} onChange={e => set('message', e.target.value)} onBlur={() => mark('message')} placeholder="A quick summary of what's going on."/>
                  {touched.message && !valid.message && <div style={{ fontSize: 12, color: '#E53935', marginTop: 4, fontWeight: 600 }}>A couple of sentences helps us reply faster</div>}
                </div>
                <Button kind="primary" size="lg" fullWidth type="submit">Send message <Icon name="send" size={16}/></Button>
                <p style={{ fontSize: 12, color: '#6C6C65', margin: 0, lineHeight: 1.5 }}>
                  Submission does not create an attorney-client relationship. An attorney-client relationship is formed only through a signed written retainer agreement.
                </p>
              </form>
            )}
          </div>

          <div style={{ display: 'grid', gap: 16 }}>
            <div style={{ background: '#000', color: '#fff', border: '3px solid #000', borderRadius: 22, padding: 22 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FFE600' }}>Call</div>
              <a href="tel:8884113332" style={{ font: "800 28px/1.1 'Sora'", color: '#fff', textDecoration: 'none', display: 'block', marginTop: 6 }}>(888) 411-3332</a>
              <div style={{ fontSize: 13, color: '#C9C9C2', marginTop: 6 }}>Mon–Fri, 9am–6pm PT</div>
            </div>
            <div style={{ background: '#fff', border: '3px solid #000', borderRadius: 22, boxShadow: '5px 5px 0 #000', padding: 22 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#6C6C65' }}>Email</div>
              <a href="mailto:info@calilawfirm.com" style={{ font: "700 18px/1.2 'Sora'", color: '#000', textDecoration: 'none', display: 'block', marginTop: 6, wordBreak: 'break-all' }}>info@calilawfirm.com</a>
            </div>
            <div style={{ background: '#FFE600', border: '3px solid #000', borderRadius: 22, boxShadow: '5px 5px 0 #000', padding: 22 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#262622', display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="mapPin" size={14}/> Office</div>
              <div style={{ font: "700 17px/1.35 'Sora'", color: '#000', marginTop: 8 }}>
                Cali Law Firm, APC<br/>
                468 N. Camden Drive, Suite 210<br/>
                Beverly Hills, CA 90210
              </div>
              <div style={{ fontSize: 13, color: '#262622', marginTop: 10 }}>By appointment only. Most lemon law cases are handled remotely — no office visit required.</div>
            </div>
            <div style={{ background: '#fff', border: '2px solid #000', borderRadius: 22, padding: 22 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#6C6C65' }}>Faster route</div>
              <div style={{ fontSize: 15, lineHeight: 1.5, color: '#262622', marginTop: 8, marginBottom: 12 }}>
                Lemon law questions get fastest answers through the Recovery Estimator.
              </div>
              <Button kind="primary" size="sm" onClick={() => go('estimator')}>Start the estimator <Icon name="arrowRight" size={14}/></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function LegalShell({ eyebrow, title, updated, children }) {
  return (
    <div>
      <section style={{ background: '#FFFDF5', padding: '56px 0 32px', borderBottom: '3px solid #000' }}>
        <div className="container-narrow">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 style={{ font: "800 48px/1 'Sora'", letterSpacing: '-0.03em', margin: '12px 0 0' }}>{title}</h1>
          <div style={{ fontSize: 13, color: '#6C6C65', marginTop: 12, fontWeight: 600 }}>Last updated: {updated}</div>
        </div>
      </section>
      <section style={{ background: '#FFFDF5', padding: '48px 0 80px' }}>
        <div className="container-narrow" style={{ background: '#fff', border: '3px solid #000', borderRadius: 28, boxShadow: '5px 5px 0 #000', padding: '32px 36px' }}>
          {children}
        </div>
      </section>
    </div>
  );
}

function LegalSection({ h, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ font: "800 20px/1.2 'Sora'", margin: '0 0 10px' }}>{h}</h2>
      <div style={{ fontSize: 15, lineHeight: 1.7, color: '#262622' }}>{children}</div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <LegalShell eyebrow="Legal" title="Privacy Policy" updated="April 2026">
      <LegalSection h="Who we are">
        This Privacy Policy applies to Lemon Boss and calilawfirm.com, both operated by Cali Law Firm, APC ("CLF," "we," "us"). Cali Law Firm, APC is a California civil litigation firm focused on personal injury, accident claims, lemon law, and property damage claims.
      </LegalSection>
      <LegalSection h="What we collect">
        <p>We collect information you give us directly — such as your name, email, phone number, vehicle information, and a description of your legal matter — when you submit a Recovery Estimator, contact form, or other intake. We also collect basic technical data (IP address, browser type, pages viewed) through standard web logs and analytics cookies.</p>
      </LegalSection>
      <LegalSection h="How we use it">
        <p>We use your information to evaluate whether we can help with your matter, to respond to your questions, to communicate about your potential case, to operate and improve our websites, and to comply with our legal and ethical obligations as California-licensed attorneys.</p>
      </LegalSection>
      <LegalSection h="How we share it">
        <p>We do not sell your information. We share it only with our staff and service providers who need it to help us operate, and as required by law or professional responsibility rules. Information you submit is held in confidence to the extent required by California Rule of Professional Conduct 1.18 and related authority, even if we do not ultimately represent you.</p>
      </LegalSection>
      <LegalSection h="Text messages">
        <p>If you opt in, we may text you case updates. Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent to marketing texts is never a condition of legal services.</p>
      </LegalSection>
      <LegalSection h="Your rights">
        <p>California residents have rights under the California Consumer Privacy Act (CCPA) to know, delete, and correct personal information we hold about them, and to opt out of any sale or sharing of that information (we do not sell). To exercise these rights, email <a href="mailto:info@calilawfirm.com" style={{ color: '#000', fontWeight: 700 }}>info@calilawfirm.com</a>.</p>
      </LegalSection>
      <LegalSection h="Contact">
        Cali Law Firm, APC · 468 N. Camden Drive, Suite 210, Beverly Hills, CA 90210 · info@calilawfirm.com · (888) 411-3332
      </LegalSection>
    </LegalShell>
  );
}

function TermsPage() {
  return (
    <LegalShell eyebrow="Legal" title="Terms of Use" updated="April 2026">
      <LegalSection h="Agreement">
        By accessing Lemon Boss or calilawfirm.com (the "Sites"), you agree to these Terms of Use. If you do not agree, do not use the Sites. The Sites are operated by Cali Law Firm, APC, a California professional corporation.
      </LegalSection>
      <LegalSection h="No attorney-client relationship">
        Using the Sites, submitting the Recovery Estimator, or sending us a message does not create an attorney-client relationship. An attorney-client relationship with Cali Law Firm, APC is formed only through a signed written retainer agreement between you and the firm.
      </LegalSection>
      <LegalSection h="Not legal advice">
        Content on the Sites is for general information only. It is not legal advice and should not be relied upon as a substitute for advice from a licensed California attorney about your specific situation.
      </LegalSection>
      <LegalSection h="Attorney advertising">
        Materials on the Sites may constitute attorney advertising under the California Rules of Professional Conduct. Prior results do not guarantee a similar outcome. Case descriptions are illustrative, anonymized, and may be composites.
      </LegalSection>
      <LegalSection h="Your conduct">
        You agree not to misuse the Sites, attempt to access non-public areas, interfere with other users, or upload anything unlawful. You are responsible for the accuracy of information you submit through forms.
      </LegalSection>
      <LegalSection h="Intellectual property">
        The Lemon Boss name, logo, mascot, and all Site content are owned by or licensed to Cali Law Firm, APC. You may not copy or reuse them without written permission.
      </LegalSection>
      <LegalSection h="Disclaimers & limitation of liability">
        The Sites are provided "as is" without warranties of any kind. To the fullest extent allowed by law, Cali Law Firm, APC is not liable for any indirect, incidental, or consequential damages arising from your use of the Sites.
      </LegalSection>
      <LegalSection h="Governing law">
        These Terms are governed by the laws of the State of California. Any dispute arising out of or related to the Sites will be resolved exclusively in the state or federal courts located in Los Angeles County, California.
      </LegalSection>
      <LegalSection h="Changes">
        We may update these Terms from time to time. The "last updated" date at the top of this page reflects the latest revision.
      </LegalSection>
      <LegalSection h="Contact">
        Cali Law Firm, APC · 468 N. Camden Drive, Suite 210, Beverly Hills, CA 90210 · info@calilawfirm.com · (888) 411-3332
      </LegalSection>
    </LegalShell>
  );
}

function DisclaimerPage() {
  return (
    <LegalShell eyebrow="Legal" title="Disclaimer" updated="April 2026">
      <LegalSection h="Attorney advertising">
        This website, including Lemon Boss and all materials associated with it, is a communication of Cali Law Firm, APC and constitutes attorney advertising under the California Rules of Professional Conduct. The content is intended for general information only. It is not legal advice.
      </LegalSection>
      <LegalSection h="No attorney-client relationship">
        Submission of information through this website — including the Recovery Estimator, contact forms, email, text messages, or any other communication — does not create an attorney-client relationship. An attorney-client relationship with Cali Law Firm, APC is formed only through a signed written retainer agreement between you and the firm. Do not send confidential or time-sensitive information to Cali Law Firm, APC until such a relationship is formally established.
      </LegalSection>
      <LegalSection h="No guarantee of outcome">
        Prior results do not guarantee a similar outcome. Every case is different and is evaluated on its own facts under applicable California law, including the Song-Beverly Consumer Warranty Act. Case descriptions on this site are illustrative, anonymized, and may be composites. We cannot legally guarantee an outcome by time or result under State Bar guidelines.
      </LegalSection>
      <LegalSection h="Recovery Estimator">
        The Recovery Estimator is a free, no-obligation intake tool. Any output, estimate, or reference number produced by the Estimator is illustrative only — it is not legal advice and not a prediction of outcome. Whether you have a viable case depends on facts that will only be confirmed after a California-licensed attorney reviews your matter.
      </LegalSection>
      <LegalSection h="Jurisdiction">
        Cali Law Firm, APC is a California professional corporation and its attorneys are licensed to practice in the State of California. Information on this site is directed to California residents and to matters arising under California law. Nothing on this site should be construed as solicitation of clients for legal matters in any other jurisdiction.
      </LegalSection>
      <LegalSection h="Third-party links">
        This site may link to third-party sites for your convenience. Cali Law Firm, APC does not control and is not responsible for the content, policies, or practices of those sites.
      </LegalSection>
      <LegalSection h="Contact">
        Cali Law Firm, APC · 468 N. Camden Drive, Suite 210, Beverly Hills, CA 90210 · info@calilawfirm.com · (888) 411-3332
      </LegalSection>
    </LegalShell>
  );
}

function SignInPage({ go }) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!email || !pw) { setErr('Enter your email and password.'); return; }
    setErr('For this demo, sign-in is simulated. Try the full flow from the Recovery Estimator.');
  };
  return (
    <div style={{ background: '#FFFDF5', padding: '80px 0', minHeight: 'calc(100vh - 300px)' }}>
      <div className="container-narrow" style={{ maxWidth: 480 }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <img src="assets/logo-lemon-boss.png" style={{ height: 56 }} alt="Lemon Boss"/>
        </div>
        <div style={{ background: '#fff', border: '3px solid #000', borderRadius: 28, boxShadow: '8px 8px 0 #000', padding: 32 }}>
          <Eyebrow>Client sign in</Eyebrow>
          <h1 style={{ font: "800 32px/1.1 'Sora'", letterSpacing: '-0.02em', margin: '10px 0 6px' }}>Welcome back.</h1>
          <p style={{ fontSize: 14, color: '#6C6C65', margin: '0 0 22px' }}>Access your case timeline, documents, and messages.</p>
          <form onSubmit={submit} style={{ display: 'grid', gap: 14 }}>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: '#262622', marginBottom: 6 }}>Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@example.com"
                style={{ width: '100%', padding: '13px 15px', border: '2px solid #000', borderRadius: 12, background: '#fff', fontSize: 15, boxSizing: 'border-box' }}/>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: '#262622', marginBottom: 6 }}>Password</label>
              <input value={pw} onChange={e => setPw(e.target.value)} type="password" placeholder="••••••••"
                style={{ width: '100%', padding: '13px 15px', border: '2px solid #000', borderRadius: 12, background: '#fff', fontSize: 15, boxSizing: 'border-box' }}/>
            </div>
            {err && <div style={{ background: '#FFF6B3', border: '2px solid #000', borderRadius: 10, padding: '10px 12px', fontSize: 13, color: '#000' }}>{err}</div>}
            <Button kind="primary" fullWidth type="submit">Sign in <Icon name="arrowRight" size={16}/></Button>
          </form>
          <div style={{ marginTop: 22, paddingTop: 22, borderTop: '1px solid #E8E8E4', textAlign: 'center', fontSize: 14, color: '#6C6C65' }}>
            Don't have a case yet? <a onClick={() => go('estimator')} style={{ color: '#000', fontWeight: 700, cursor: 'pointer' }}>Start the Recovery Estimator →</a>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: '#6C6C65' }}>
          <Icon name="lock" size={14}/> Secured by Cali Law Firm, APC
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { FAQPage, SignInPage, AboutPage, AttorneysPage, ContactPage, PrivacyPage, TermsPage, DisclaimerPage });
