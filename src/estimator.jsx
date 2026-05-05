// Recovery Estimator — eligibility intake + result
function EstimatorPage({ go }) {
  const [step, setStep] = useState(0);
  const [touched, setTouched] = useState({});
  const initial = {
    // Vehicle
    vin: '', year: '', make: '', model: '',
    // Acquisition
    acquired: 'Purchased new',          // Purchased new / Purchased used / Leased
    california: true,
    cpo: false,                         // certified pre-owned
    businessOwned: false,               // titled to a business
    fleetSize: '1-5',                   // only relevant if businessOwned
    // Repair history
    milesAtIssue: '',                   // mileage when problem first appeared
    visits: '3',
    daysOut: '10',                      // total cumulative days out of service
    category: '',
    issue: '',
    // Contact
    name: '', email: '', phone: '', smsOk: true, terms: false,
  };
  const [data, setData] = useState(initial);
  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const mark = (k) => setTouched(t => ({ ...t, [k]: true }));

  const inputStyle = (invalid) => ({
    width: '100%', padding: '13px 15px', border: `2px solid ${invalid ? '#E53935' : '#000'}`,
    borderRadius: 12, background: '#fff', fontSize: 15, color: '#000', boxSizing: 'border-box',
    fontFamily: "'Inter', system-ui, sans-serif",
  });
  const labelStyle = {
    display: 'block', fontSize: 11, fontWeight: 800, letterSpacing: '.08em',
    textTransform: 'uppercase', color: '#262622', marginBottom: 6,
  };
  const helpStyle = { fontSize: 12, color: '#6C6C65', marginTop: 4, lineHeight: 1.5 };
  const errTxt = (msg) => <div style={{ fontSize: 12, color: '#E53935', marginTop: 4, fontWeight: 600 }}>{msg}</div>;

  const stepValid = useMemo(() => {
    if (step === 0) {
      const vinOk = data.vin.length >= 11;
      const yearOk = /^\d{4}$/.test(data.year) && Number(data.year) >= 2000 && Number(data.year) <= 2026;
      const milesOk = /^\d{1,7}$/.test(data.milesAtIssue) && Number(data.milesAtIssue) >= 0;
      return {
        vin: vinOk, year: yearOk, make: !!data.make, model: !!data.model, miles: milesOk,
        _ok: vinOk && yearOk && data.make && data.model && milesOk && data.california,
      };
    }
    if (step === 1) {
      return { issue: data.issue.trim().length >= 10, category: !!data.category,
        _ok: data.issue.trim().length >= 10 && !!data.category };
    }
    if (step === 2) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
      const phoneOk = data.phone.replace(/\D/g,'').length >= 10;
      return { name: !!data.name, email: emailOk, phone: phoneOk, terms: data.terms,
        _ok: !!data.name && emailOk && phoneOk && data.terms };
    }
    return { _ok: true };
  }, [step, data]);

  const next = () => {
    if (!stepValid._ok) {
      if (step === 0) setTouched({ vin: true, year: true, make: true, model: true, miles: true });
      if (step === 1) setTouched({ issue: true, category: true });
      if (step === 2) setTouched({ name: true, email: true, phone: true, terms: true });
      return;
    }
    setTouched({});
    setStep(s => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const back = () => { setStep(s => s - 1); setTouched({}); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const steps = [
    { label: 'Vehicle' },
    { label: 'Repair history' },
    { label: 'Contact' },
  ];

  if (step === 3) return <EstimatorResult data={data} go={go} onReset={() => { setStep(0); setTouched({}); setData(initial); }} />;

  return (
    <div style={{ background: '#FFE600', borderBottom: '3px solid #000', borderTop: '0', padding: '64px 0 96px', minHeight: 700 }}>
      <div className="container-narrow" style={{ maxWidth: 820 }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <Eyebrow color="#000">Recovery Estimator</Eyebrow>
          <h1 className="h2-title" style={{ font: "800 48px/1.05 'Sora'", letterSpacing: '-0.02em', margin: '10px 0 10px' }}>See what you could recover.</h1>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: '#262622', margin: 0 }}>
            Takes under 2 minutes. Illustrative only — not legal advice, and not a prediction of outcome.
          </p>
        </div>

        <div style={{ background: '#fff', border: '3px solid #000', borderRadius: 28, boxShadow: '8px 8px 0 #000', padding: 32 }}>
          {/* Progress */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ flex: 1 }}>
                <div style={{ height: 8, borderRadius: 4, background: i <= step ? '#000' : '#E8E8E4', transition: 'background 240ms' }} />
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', marginTop: 8, color: i === step ? '#000' : '#9A9A92' }}>
                  {`0${i+1}`} · {s.label}
                </div>
              </div>
            ))}
          </div>

          {step === 0 && (
            <div style={{ display: 'grid', gap: 16 }}>
              <div>
                <label style={labelStyle}>Vehicle VIN</label>
                <input style={inputStyle(touched.vin && !stepValid.vin)} placeholder="17 characters, e.g. 1FTFW1ET5DFC10312"
                  value={data.vin} onChange={e => set('vin', e.target.value.toUpperCase())} onBlur={() => mark('vin')} />
                {touched.vin && !stepValid.vin
                  ? errTxt('VIN should be at least 11 characters')
                  : <div style={helpStyle}>Find it on your registration or lower windshield.</div>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>Year</label>
                  <input style={inputStyle(touched.year && !stepValid.year)} placeholder="2022" value={data.year}
                    onChange={e => set('year', e.target.value.replace(/\D/g,'').slice(0,4))} onBlur={() => mark('year')}/>
                  {touched.year && !stepValid.year && errTxt('Enter a 4-digit year')}
                </div>
                <div>
                  <label style={labelStyle}>Make & model</label>
                  <input style={inputStyle(touched.make && !stepValid.make)} placeholder="Ford F-150 Lariat"
                    value={data.make ? `${data.make}${data.model ? ' ' + data.model : ''}` : ''}
                    onChange={e => { const parts = e.target.value.split(' '); set('make', parts[0] || ''); set('model', parts.slice(1).join(' ')); }}
                    onBlur={() => { mark('make'); mark('model'); }}/>
                  {touched.make && !stepValid.make && errTxt('Enter make and model')}
                </div>
              </div>

              <div>
                <label style={labelStyle}>How did you acquire the vehicle?</label>
                <select style={inputStyle(false)} value={data.acquired} onChange={e => set('acquired', e.target.value)}>
                  <option>Purchased new</option>
                  <option>Purchased used (with warranty)</option>
                  <option>Leased</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Mileage when the issue first appeared</label>
                <input style={inputStyle(touched.miles && !stepValid.miles)} placeholder="14,500"
                  value={data.milesAtIssue}
                  onChange={e => set('milesAtIssue', e.target.value.replace(/\D/g,'').slice(0,7))}
                  onBlur={() => mark('miles')} inputMode="numeric"/>
                {touched.miles && !stepValid.miles
                  ? errTxt('Enter a whole number')
                  : <div style={helpStyle}>If under 18,000 miles within 18 months of delivery, the Song-Beverly <b>presumption</b> may apply in your favor.</div>}
              </div>

              <div>
                <label style={labelStyle}>Total days out of service (cumulative)</label>
                <select style={inputStyle(false)} value={data.daysOut} onChange={e => set('daysOut', e.target.value)}>
                  <option>Less than 10</option>
                  <option>10</option>
                  <option>20</option>
                  <option>30+</option>
                </select>
                <div style={helpStyle}>Add up every day the dealer or authorized service center had the vehicle for warranty repairs — even non-consecutive days.</div>
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '2px solid #000', borderRadius: 12, background: '#FFFDF5', cursor: 'pointer' }}>
                <span style={{ width: 18, height: 18, border: '2px solid #000', borderRadius: 4, background: data.california ? '#FFE600' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {data.california && <Icon name="check" size={12} color="#000" stroke={3}/>}
                </span>
                <input type="checkbox" checked={data.california} onChange={e => set('california', e.target.checked)} style={{ display: 'none' }}/>
                <span style={{ fontSize: 14, fontWeight: 500 }}>I bought or leased this vehicle in California</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '2px solid #000', borderRadius: 12, background: '#FFFDF5', cursor: 'pointer' }}>
                <span style={{ width: 18, height: 18, border: '2px solid #000', borderRadius: 4, background: data.cpo ? '#FFE600' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {data.cpo && <Icon name="check" size={12} color="#000" stroke={3}/>}
                </span>
                <input type="checkbox" checked={data.cpo} onChange={e => set('cpo', e.target.checked)} style={{ display: 'none' }}/>
                <span style={{ fontSize: 14, fontWeight: 500 }}>This vehicle was sold to me as <i>Certified Pre-Owned</i></span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '2px solid #000', borderRadius: 12, background: '#FFFDF5', cursor: 'pointer' }}>
                <span style={{ width: 18, height: 18, border: '2px solid #000', borderRadius: 4, background: data.businessOwned ? '#FFE600' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {data.businessOwned && <Icon name="check" size={12} color="#000" stroke={3}/>}
                </span>
                <input type="checkbox" checked={data.businessOwned} onChange={e => set('businessOwned', e.target.checked)} style={{ display: 'none' }}/>
                <span style={{ fontSize: 14, fontWeight: 500 }}>This vehicle is titled to a business or used primarily for business</span>
              </label>

              {data.businessOwned && (
                <div>
                  <label style={labelStyle}>How many vehicles does the business have registered?</label>
                  <select style={inputStyle(false)} value={data.fleetSize} onChange={e => set('fleetSize', e.target.value)}>
                    <option>1-5</option>
                    <option>More than 5</option>
                  </select>
                  <div style={helpStyle}>Song-Beverly covers small-business fleets of 5 or fewer vehicles (and GVWR under 10,000 lbs).</div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, gap: 12, flexWrap: 'wrap' }}>
                <Button kind="ghost" onClick={() => go('home')}>← Cancel</Button>
                <Button kind="primary" onClick={next}>Next <Icon name="arrowRight" size={16}/></Button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div style={{ display: 'grid', gap: 16 }}>
              <div>
                <label style={labelStyle}>Primary issue category</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10 }}>
                  {['Transmission','Engine','Electrical','Brakes / safety','Infotainment','Other'].map(c => (
                    <label key={c} style={{
                      border: '2px solid #000', borderRadius: 12, padding: '12px 14px', cursor: 'pointer',
                      background: data.category === c ? '#FFE600' : '#fff',
                      fontSize: 14, fontWeight: 700, textAlign: 'center', transition: 'background 120ms',
                    }}>
                      <input type="radio" name="cat" checked={data.category === c} onChange={() => { set('category', c); mark('category'); }} style={{ display: 'none' }}/>
                      {c}
                    </label>
                  ))}
                </div>
                {touched.category && !stepValid.category && errTxt('Pick a category')}
              </div>

              <div>
                <label style={labelStyle}>Repair visits for the same issue</label>
                <select style={inputStyle(false)} value={data.visits} onChange={e => set('visits', e.target.value)}>
                  <option>2</option><option>3</option><option>4</option><option>5</option><option>6 or more</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>What's going on with the vehicle?</label>
                <textarea style={{ ...inputStyle(touched.issue && !stepValid.issue), resize: 'none' }} rows={4}
                  placeholder="Transmission slips between 40 and 60 mph. Dealer has tried to reproduce it three times and replaced the valve body once. Problem came back within two weeks."
                  value={data.issue} onChange={e => set('issue', e.target.value)} onBlur={() => mark('issue')} />
                {touched.issue && !stepValid.issue && errTxt('A couple of sentences helps us review faster')}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <Button kind="ghost" onClick={back}><Icon name="arrowLeft" size={16}/> Back</Button>
                <Button kind="primary" onClick={next}>Next <Icon name="arrowRight" size={16}/></Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: 'grid', gap: 16 }}>
              <div>
                <label style={labelStyle}>Full name</label>
                <input style={inputStyle(touched.name && !stepValid.name)} placeholder="Maya Rodriguez"
                  value={data.name} onChange={e => set('name', e.target.value)} onBlur={() => mark('name')}/>
                {touched.name && !stepValid.name && errTxt('Enter your name')}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input style={inputStyle(touched.email && !stepValid.email)} placeholder="you@example.com"
                    value={data.email} onChange={e => set('email', e.target.value)} onBlur={() => mark('email')}/>
                  {touched.email && !stepValid.email && errTxt('Enter a valid email')}
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input style={inputStyle(touched.phone && !stepValid.phone)} placeholder="(555) 555-5555"
                    value={data.phone} onChange={e => set('phone', e.target.value)} onBlur={() => mark('phone')}/>
                  {touched.phone && !stepValid.phone && errTxt('Enter a valid phone')}
                </div>
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '2px solid #000', borderRadius: 12, background: '#FFFDF5', cursor: 'pointer' }}>
                <span style={{ width: 18, height: 18, border: '2px solid #000', borderRadius: 4, background: data.smsOk ? '#FFE600' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {data.smsOk && <Icon name="check" size={12} color="#000" stroke={3}/>}
                </span>
                <input type="checkbox" checked={data.smsOk} onChange={e => set('smsOk', e.target.checked)} style={{ display: 'none' }}/>
                <span style={{ fontSize: 14 }}>Text me case updates — reply STOP to opt out, HELP for help. Consent is not a condition of service.</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'start', gap: 10, padding: '10px 14px', border: `2px solid ${touched.terms && !stepValid.terms ? '#E53935' : '#000'}`, borderRadius: 12, background: '#FFFDF5', cursor: 'pointer' }}>
                <span style={{ flexShrink: 0, marginTop: 2, width: 18, height: 18, border: '2px solid #000', borderRadius: 4, background: data.terms ? '#FFE600' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {data.terms && <Icon name="check" size={12} color="#000" stroke={3}/>}
                </span>
                <input type="checkbox" checked={data.terms} onChange={e => { set('terms', e.target.checked); mark('terms'); }} style={{ display: 'none' }}/>
                <span style={{ fontSize: 13, lineHeight: 1.5 }}>I understand that submission doesn't create an attorney-client relationship, and that the estimator output is illustrative, not a prediction.</span>
              </label>
              {touched.terms && !stepValid.terms && errTxt('Please acknowledge to continue')}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, flexWrap: 'wrap', gap: 10 }}>
                <Button kind="ghost" onClick={back}><Icon name="arrowLeft" size={16}/> Back</Button>
                <Button kind="primary" size="lg" onClick={next}>Submit case check <Icon name="arrowRight" size={16}/></Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EstimatorResult({ data, onReset, go }) {
  const caseId = 'LB-2026-' + String(Math.floor(1000 + Math.random() * 9000)).padStart(5, '0');
  const ymm = [data.year, data.make, data.model].filter(Boolean).join(' ') || 'your vehicle';

  // Lightweight signal flags shown back to the user.
  const miles = parseInt(data.milesAtIssue || '0', 10);
  const presumption = miles > 0 && miles < 18000;
  const daysFlag = data.daysOut === '30+';
  const ineligibleFleet = data.businessOwned && data.fleetSize === 'More than 5';

  const flags = [];
  if (presumption) flags.push({ ok: true, t: 'Mileage triggers the Song-Beverly presumption (under 18,000 miles).' });
  if (daysFlag) flags.push({ ok: true, t: 'Vehicle out of service 30+ cumulative days — qualifying basis on its own.' });
  if (data.cpo) flags.push({ ok: true, t: 'Certified Pre-Owned vehicles carry an extended manufacturer warranty.' });
  if (data.acquired === 'Leased') flags.push({ ok: true, t: 'Leased vehicles are covered under California lemon law.' });
  if (ineligibleFleet) flags.push({ ok: false, t: 'Fleets over 5 vehicles fall outside Song-Beverly\'s small-business protection — we\'ll review under other warranty theories.' });

  return (
    <div style={{ background: '#FFE600', padding: '72px 0 96px', borderBottom: '3px solid #000' }}>
      <div className="container-narrow" style={{ maxWidth: 760 }}>
        <div style={{ background: '#fff', border: '3px solid #000', borderRadius: 28, boxShadow: '8px 8px 0 #000', padding: 40, textAlign: 'center' }}
          className="squish-in">
          <img src="assets/mascot-lemon.png?v=3" className="mascot-idle" style={{ width: 160, margin: '0 auto 18px', display: 'block' }}/>
          <Badge kind={ineligibleFleet ? 'lemon' : 'leaf'}>
            <Icon name="check" size={12} color="#1E8A31" stroke={3}/>
            {ineligibleFleet ? ' Submitted — we\'ll review' : ' Looks like you may qualify'}
          </Badge>
          <h1 style={{ font: "800 44px/1.05 'Sora'", letterSpacing: '-0.02em', margin: '14px 0 6px' }}>
            A case manager will be in touch.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#262622', maxWidth: 540, margin: '8px auto 0' }}>
            Thanks, {data.name.split(' ')[0] || 'friend'}. Based on what you entered for {ymm}, your situation is worth a closer look. A real case manager will follow up within one business day with next steps.
          </p>

          {flags.length > 0 && (
            <div style={{ background: '#FFFDF5', border: '2px solid #000', borderRadius: 18, padding: 18, margin: '24px auto 0', maxWidth: 540, textAlign: 'left' }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: '#6C6C65', marginBottom: 8 }}>What we noticed</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
                {flags.map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.5 }}>
                    <span style={{ flex: '0 0 18px', width: 18, height: 18, borderRadius: 18, background: f.ok ? '#7BB661' : '#FFCC4A', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                      {f.ok ? <Icon name="check" size={10} color="#000" stroke={3}/> : <span style={{ fontSize: 11, fontWeight: 800 }}>!</span>}
                    </span>
                    <span>{f.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ background: '#FFFDF5', border: '2px solid #000', borderRadius: 18, padding: 18, margin: '20px auto 0', maxWidth: 440, textAlign: 'left' }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: '#6C6C65' }}>Your reference</div>
            <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 20, fontWeight: 700, color: '#000', marginTop: 4 }}>{caseId}</div>
            <div style={{ fontSize: 13, color: '#262622', marginTop: 12, lineHeight: 1.55 }}>
              We've emailed a copy to <b>{data.email}</b> and will text updates to <b>{data.phone}</b> (if you opted in).
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 12, marginTop: 28 }}>
            {[
              { i: 'clock', h: 'Review', b: 'Within 1 business day' },
              { i: 'phone', h: 'Intro call', b: '15-minute fit check' },
              { i: 'send', h: 'Demand letter', b: 'If we take the case' },
            ].map((x, i) => (
              <div key={i} style={{ border: '2px solid #000', borderRadius: 16, padding: 14, background: '#fff', textAlign: 'left' }}>
                <Icon name={x.i} size={20}/>
                <div style={{ fontSize: 13, fontWeight: 800, marginTop: 6 }}>{x.h}</div>
                <div style={{ fontSize: 12, color: '#6C6C65' }}>{x.b}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 12, color: '#6C6C65', maxWidth: 560, margin: '24px auto 0', lineHeight: 1.55 }}>
            The Recovery Estimator is not legal advice and does not create an attorney-client relationship. An attorney-client relationship is formed only through a signed written retainer agreement.
          </p>

          <div style={{ marginTop: 22, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button kind="ink" onClick={() => go('home')}>Back to home</Button>
            <Button kind="secondary" onClick={onReset}>Start another estimate</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EstimatorPage });
