// How It Works page — full detail
function HowItWorksPage({ go, onEstimator }) {
  const steps = [
    { n: '01', h: 'Tell us about the vehicle', b: 'A 2-minute form. VIN, year/make/model, and repair history. That\'s all we need to open a file and see if you qualify.', bullets: ['Takes about 2 minutes', 'No obligation', 'You keep every repair record'] },
    { n: '02', h: 'We review within 1 business day', b: 'A real case manager (not a bot) reads your submission. If the numbers fit Song-Beverly, we call you with the next step. If they don\'t, we\'ll tell you that too.', bullets: ['Reviewed by a human', 'Response inside 24 hours', 'Plain-English explanation'] },
    { n: '03', h: 'We file the claim', b: 'If we take the case, we send a demand letter to the manufacturer. Under Song-Beverly, they have 30 days to respond. We handle every email, every call, every filing from here.', bullets: ['Demand letter to the manufacturer', 'We handle all communication', 'Manufacturer has 30 days to respond'] },
    { n: '04', h: 'You get paid', b: 'Buyback, replacement, or cash settlement — whichever is best for your situation. The manufacturer pays our fees separately. You keep your recovery.', bullets: ['Buyback, replacement, or cash', 'Manufacturer pays our fees', '$0 out of pocket to you'] },
  ];
  return (
    <div>
      <section style={{ background: '#000', color: '#fff', padding: '72px 0', borderBottom: '3px solid #000' }}>
        <div className="container">
          <Eyebrow color="#FFE600">How it works</Eyebrow>
          <h1 style={{ font: "800 64px/1 'Sora'", letterSpacing: '-0.03em', margin: '14px 0 0', maxWidth: 820 }}>
            Four steps. <span style={{ color: '#FFE600' }}>Zero cost to you.</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: '#C9C9C2', maxWidth: 680, marginTop: 18 }}>
            California's Song-Beverly Consumer Warranty Act was built to protect you. We know it front to back — here's exactly what happens when you hand us the case.
          </p>
        </div>
      </section>

      <section style={{ background: '#FFFDF5', padding: '96px 0' }}>
        <div className="container-narrow" style={{ display: 'grid', gap: 32 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              background: '#fff', border: '3px solid #000', borderRadius: 28, boxShadow: '5px 5px 0 #000',
              padding: 32, display: 'grid', gridTemplateColumns: '120px 1fr', gap: 28, alignItems: 'start',
            }}>
              <div style={{ background: '#FFE600', border: '3px solid #000', borderRadius: 20, padding: '14px 10px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, fontWeight: 700, color: '#262622' }}>STEP</div>
                <div style={{ font: "800 36px/1 'Sora'", letterSpacing: '-0.03em', color: '#000', marginTop: 4 }}>{s.n}</div>
              </div>
              <div>
                <h3 style={{ font: "800 26px/1.2 'Sora'", letterSpacing: '-0.01em', margin: 0 }}>{s.h}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#262622', margin: '10px 0 16px' }}>{s.b}</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {s.bullets.map((b, j) => (
                    <div key={j} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFFDF5', border: '2px solid #000', borderRadius: 999, padding: '6px 12px', fontSize: 13, fontWeight: 600 }}>
                      <Icon name="check" size={14} color="#1E8A31" stroke={3}/> {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#FFE600', borderTop: '3px solid #000', borderBottom: '3px solid #000', padding: '72px 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <Eyebrow color="#000">Ready when you are</Eyebrow>
          <h2 className="h2-title" style={{ font: "800 48px/1.05 'Sora'", letterSpacing: '-0.02em', margin: '12px 0 18px' }}>
            Start your free case check.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: '#262622', maxWidth: 560, margin: '0 auto 28px' }}>
            Two minutes. No obligation. A real case manager reviews every submission.
          </p>
          <Button kind="ink" size="lg" onClick={onEstimator}>Recovery Estimator <Icon name="arrowRight" size={18}/></Button>
        </div>
      </section>
    </div>
  );
}

// Do I Qualify page — checklist + flowchart feel
function QualifyPage({ go, onEstimator }) {
  const checks = [
    { h: 'Your vehicle is under the original manufacturer warranty', b: 'New or used, purchased or leased — as long as the warranty is still in effect when the problems started.' },
    { h: 'It has been in the shop multiple times for the same issue', b: 'Typically 2+ repair attempts for a serious issue, or 4+ for a minor one.' },
    { h: 'Your vehicle has been out of service for 30+ cumulative days', b: 'It does not have to be 30 days in a row. Add up every day the dealer or authorized service center had your vehicle for warranty repairs — once the total crosses 30 days, you likely qualify on that basis alone.' },
    { h: 'The problem affects safety, use, or value of the vehicle', b: 'Transmission, engine, brakes, electronics, infotainment safety features — anything a reasonable buyer would care about.' },
    { h: 'You bought or leased the vehicle in California', b: "We're California-licensed and focused exclusively on Song-Beverly claims." },
  ];
  const nots = [
    'Damage from an accident or your own modifications',
    'Routine wear-and-tear or maintenance items',
    'Vehicles purchased outside California',
    'Vehicles no longer under any warranty when issues started',
  ];
  return (
    <div>
      <section style={{ background: '#FFFDF5', padding: '72px 0 48px', borderBottom: '3px solid #000' }}>
        <div className="container-narrow">
          <Eyebrow>Do I qualify?</Eyebrow>
          <h1 style={{ font: "800 60px/1 'Sora'", letterSpacing: '-0.03em', margin: '14px 0 0' }}>
            If any of this sounds <span style={{ background: '#FFE600', padding: '0 10px' }}>familiar</span>, you probably qualify.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: '#262622', maxWidth: 680, marginTop: 18 }}>
            California's lemon law is broader than most people realize. Here's a quick gut-check. If you answer yes to the basics, run the Recovery Estimator — it takes 2 minutes.
          </p>
        </div>
      </section>

      <section style={{ background: '#FFFDF5', padding: '64px 0 48px' }}>
        <div className="container-narrow">
          <h2 className="h2-title" style={{ font: "800 32px/1.1 'Sora'", letterSpacing: '-0.02em', margin: '0 0 24px' }}>You likely qualify if…</h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {checks.map((c, i) => (
              <div key={i} style={{ background: '#fff', border: '3px solid #000', borderRadius: 22, boxShadow: '5px 5px 0 #000', padding: 22, display: 'flex', gap: 16, alignItems: 'start' }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 999, background: '#E6F5E8', border: '2px solid #1E8A31', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={20} color="#1E8A31" stroke={3}/>
                </div>
                <div>
                  <h3 style={{ font: "700 19px/1.3 'Sora'", margin: 0 }}>{c.h}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.5, color: '#262622', margin: '6px 0 0' }}>{c.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#FFFDF5', padding: '32px 0 72px' }}>
        <div className="container-narrow">
          <h2 className="h2-title" style={{ font: "800 28px/1.1 'Sora'", letterSpacing: '-0.02em', margin: '0 0 20px', color: '#262622' }}>Usually not a lemon law case</h2>
          <div style={{ background: '#fff', border: '2px solid #E8E8E4', borderRadius: 18, padding: 24 }}>
            {nots.map((n, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E4' }}>
                <Icon name="x" size={18} color="#9A9A92"/>
                <span style={{ fontSize: 15, color: '#6C6C65' }}>{n}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.5, color: '#6C6C65', marginTop: 14 }}>
            Not sure? Submit anyway — a case manager will review for free and tell you straight.
          </p>
        </div>
      </section>

      <section style={{ background: '#000', color: '#fff', padding: '72px 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <img src="assets/mascot-lemon.png?v=3" style={{ width: 140, marginBottom: 20 }} className="mascot-idle"/>
          <h2 className="h2-title" style={{ font: "800 44px/1.05 'Sora'", letterSpacing: '-0.02em', margin: 0, color: '#fff' }}>
            Let a real case manager take a look.
          </h2>
          <p style={{ fontSize: 17, color: '#C9C9C2', maxWidth: 560, margin: '14px auto 28px' }}>
            You'll get a plain-English answer inside one business day. No pressure, no obligation.
          </p>
          <Button kind="primary" size="lg" onClick={onEstimator}>Check my case <Icon name="arrowRight" size={18}/></Button>
        </div>
      </section>
    </div>
  );
}

// Results page — defect catalog + manufacturer coverage
function ResultsPage({ go, onEstimator }) {
  const issueGroups = [
    {
      tag: 'Powertrain',
      h: 'Engine, transmission & drivetrain',
      items: [
        'Engine stalling, misfires, or sudden loss of power',
        'Excessive oil consumption or oil leaks',
        'Coolant leaks, overheating, blown head gaskets',
        'Transmission slipping, hard shifting, jerking',
        'Dual-clutch shudder or harsh engagement',
        'Torque converter failure',
        'Driveshaft, axle, or differential failure',
        'AWD/4WD engagement faults',
        'Timing chain stretch or tensioner failure',
        'Turbocharger or supercharger failure',
      ],
    },
    {
      tag: 'EV / Hybrid',
      h: 'Battery, charging & high-voltage',
      items: [
        'Battery range degradation below warranty threshold',
        'High-voltage battery failure or pack replacement',
        'Onboard charger or DC fast-charging faults',
        'Charge port damage or repeated failure',
        'Inverter, motor, or reduction gear failure',
        'Regenerative braking malfunction',
        'BMS / thermal management warnings',
        'Sudden range drops or charge limit errors',
      ],
    },
    {
      tag: 'Electrical',
      h: 'Electronics & software',
      items: [
        'Infotainment freezing, rebooting, or going black',
        'Backup camera failure or distorted image',
        'CarPlay / Android Auto repeated disconnects',
        'Persistent dashboard warning lights',
        'Battery drain or no-start conditions',
        'Module communication faults (CAN bus errors)',
        'Software update bricking or rolling back features',
        'Power window, lock, or seat motor failure',
        'Headlight, taillight, or DRL malfunctions',
      ],
    },
    {
      tag: 'Brakes & steering',
      h: 'Stopping, steering & suspension',
      items: [
        'Brake pedal sinking, fading, or going soft',
        'ABS or stability-control warnings',
        'Premature brake wear or pulsation',
        'Electronic parking brake failure',
        'Power steering loss or assist warnings',
        'Steering wheel vibration or pull',
        'Suspension knocks, clunks, or strut failure',
        'Air suspension leaks or compressor failure',
      ],
    },
    {
      tag: 'Safety / ADAS',
      h: 'Driver assistance & safety systems',
      items: [
        'Automatic emergency braking false activations',
        'Lane-keep or lane-departure malfunctions',
        'Adaptive cruise dropping out unexpectedly',
        'Blind-spot or rear cross-traffic sensor faults',
        'Airbag warning lights or non-deploy concerns',
        'Seatbelt pretensioner faults',
        '360 camera or parking sensor failures',
        'Auto-pilot / hands-free driving disengagements',
      ],
    },
    {
      tag: 'Climate & cabin',
      h: 'HVAC, glass & comfort',
      items: [
        'A/C blowing warm or compressor failure',
        'Heater core failure, no heat, or coolant smell',
        'Sunroof / panoramic roof leaks or shattering',
        'Water leaks into cabin or trunk',
        'Heated/cooled seat failures',
        'Wind noise, door seal, or weatherstrip defects',
        'Climate control fan or actuator failures',
      ],
    },
    {
      tag: 'Diesel / emissions',
      h: 'Emissions & exhaust',
      items: [
        'DEF system warnings and countdowns',
        'DPF regeneration failures or limp mode',
        'EGR valve failures or check-engine codes',
        'Catalytic converter failure under warranty',
        'Repeated emissions-related no-starts',
      ],
    },
    {
      tag: 'Body & paint',
      h: 'Body, paint & fit-and-finish',
      items: [
        'Premature paint peeling, bubbling, or fading',
        'Clear-coat failure',
        'Body panel misalignment or rattles',
        'Door, trunk, or tailgate latch failures',
        'Frame, weld, or structural defects',
        'Excessive corrosion under warranty',
      ],
    },
  ];

  // Manufacturers selling new vehicles in the U.S. market.
  const manufacturers = [
    'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley',
    'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler',
    'Dodge', 'Ferrari', 'Fiat', 'Fisker', 'Ford',
    'Genesis', 'GMC', 'Honda', 'Hyundai', 'Infiniti',
    'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Land Rover',
    'Lexus', 'Lincoln', 'Lotus', 'Lucid', 'Maserati',
    'Mazda', 'McLaren', 'Mercedes-Benz', 'Mercedes-AMG', 'MINI',
    'Mitsubishi', 'Nissan', 'Polestar', 'Porsche', 'Ram',
    'Rivian', 'Rolls-Royce', 'Subaru', 'Tesla', 'Toyota',
    'Volkswagen', 'Volvo', 'VinFast',
  ];

  // All 58 California counties.
  const counties = [
    'Alameda', 'Alpine', 'Amador', 'Butte', 'Calaveras', 'Colusa', 'Contra Costa',
    'Del Norte', 'El Dorado', 'Fresno', 'Glenn', 'Humboldt', 'Imperial', 'Inyo',
    'Kern', 'Kings', 'Lake', 'Lassen', 'Los Angeles', 'Madera', 'Marin', 'Mariposa',
    'Mendocino', 'Merced', 'Modoc', 'Mono', 'Monterey', 'Napa', 'Nevada', 'Orange',
    'Placer', 'Plumas', 'Riverside', 'Sacramento', 'San Benito', 'San Bernardino',
    'San Diego', 'San Francisco', 'San Joaquin', 'San Luis Obispo', 'San Mateo',
    'Santa Barbara', 'Santa Clara', 'Santa Cruz', 'Shasta', 'Sierra', 'Siskiyou',
    'Solano', 'Sonoma', 'Stanislaus', 'Sutter', 'Tehama', 'Trinity', 'Tulare',
    'Tuolumne', 'Ventura', 'Yolo', 'Yuba',
  ];

  // All 88 incorporated cities in Los Angeles County.
  const laCities = [
    'Agoura Hills', 'Alhambra', 'Arcadia', 'Artesia', 'Avalon', 'Azusa',
    'Baldwin Park', 'Bell', 'Bell Gardens', 'Bellflower', 'Beverly Hills',
    'Bradbury', 'Burbank', 'Calabasas', 'Carson', 'Cerritos', 'Claremont',
    'Commerce', 'Compton', 'Covina', 'Cudahy', 'Culver City', 'Diamond Bar',
    'Downey', 'Duarte', 'El Monte', 'El Segundo', 'Gardena', 'Glendale',
    'Glendora', 'Hawaiian Gardens', 'Hawthorne', 'Hermosa Beach',
    'Hidden Hills', 'Huntington Park', 'Industry', 'Inglewood', 'Irwindale',
    'La Cañada Flintridge', 'La Habra Heights', 'La Mirada', 'La Puente',
    'La Verne', 'Lakewood', 'Lancaster', 'Lawndale', 'Lomita', 'Long Beach',
    'Los Angeles', 'Lynwood', 'Malibu', 'Manhattan Beach', 'Maywood',
    'Monrovia', 'Montebello', 'Monterey Park', 'Norwalk', 'Palmdale',
    'Palos Verdes Estates', 'Paramount', 'Pasadena', 'Pico Rivera',
    'Pomona', 'Rancho Palos Verdes', 'Redondo Beach', 'Rolling Hills',
    'Rolling Hills Estates', 'Rosemead', 'San Dimas', 'San Fernando',
    'San Gabriel', 'San Marino', 'Santa Clarita', 'Santa Fe Springs',
    'Santa Monica', 'Sierra Madre', 'Signal Hill', 'South El Monte',
    'South Gate', 'South Pasadena', 'Temple City', 'Torrance', 'Vernon',
    'Walnut', 'West Covina', 'West Hollywood', 'Westlake Village',
    'Whittier',
  ];

  return (
    <div>
      <section style={{ background: '#FFFDF5', padding: '72px 0 48px', borderBottom: '3px solid #000' }}>
        <div className="container">
          <Eyebrow>What we cover</Eyebrow>
          <h1 style={{ font: "800 60px/1 'Sora'", letterSpacing: '-0.03em', margin: '14px 0 0', maxWidth: 900 }}>
            Every defect. Every <span style={{ background: '#FFE600', padding: '0 10px' }}>manufacturer</span>.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: '#262622', maxWidth: 760, marginTop: 18 }}>
            If your vehicle has a recurring problem the dealer can't fix, you may have a lemon law claim. Below is a working catalog of issues we see — and the manufacturers we go up against on behalf of California drivers.
          </p>
        </div>
      </section>

      <section style={{ background: '#000', color: '#fff', padding: '48px 0' }}>
        <div className="container grid-4">
          {[
            { big: 'CA-wide', small: 'Lemon law claims handled across California' },
            { big: 'Pre-trial', small: 'Most cases resolved without going to trial' },
            { big: '< 24 hrs', small: 'Average first response from a case manager' },
            { big: '$0', small: 'Out of pocket for you — manufacturer pays our fees' },
          ].map((s, i) => (
            <div key={i} style={{ borderLeft: i === 0 ? 'none' : '2px solid #3F3F3A', paddingLeft: i === 0 ? 0 : 24 }}>
              <div style={{ font: "800 36px/1 'Sora'", letterSpacing: '-0.02em', color: '#FFE600' }}>{s.big}</div>
              <div style={{ fontSize: 14, color: '#E8E8E4', marginTop: 6, fontWeight: 500 }}>{s.small}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#FFFDF5', padding: '80px 0' }}>
        <div className="container">
          <Eyebrow>Issues that qualify</Eyebrow>
          <h2 className="h2-title" style={{ font: "800 40px/1.05 'Sora'", letterSpacing: '-0.02em', margin: '10px 0 12px', maxWidth: 720 }}>
            The full catalog of defects we see.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: '#4A4A44', maxWidth: 720, marginBottom: 32 }}>
            Not exhaustive — if a problem keeps coming back after multiple repair attempts, it likely belongs on this list. When in doubt, run the estimator.
          </p>
          <div className="grid-3" style={{ alignItems: 'stretch' }}>
            {issueGroups.map((g, i) => (
              <div key={i} style={{
                background: '#fff', border: '3px solid #000', borderRadius: 22, boxShadow: '5px 5px 0 #000',
                padding: 22, display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <Badge kind={i % 3 === 0 ? 'lemon' : i % 3 === 1 ? 'leaf' : 'ink'}>{g.tag}</Badge>
                <h3 style={{ font: "700 20px/1.25 'Sora'", margin: 0 }}>{g.h}</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {g.items.map((it, j) => (
                    <li key={j} style={{ fontSize: 14, lineHeight: 1.5, color: '#262622', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ flex: '0 0 6px', width: 6, height: 6, borderRadius: 6, background: '#FFE600', border: '1.5px solid #000', marginTop: 7 }}></span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#FFFDF5', padding: '24px 0 80px' }}>
        <div className="container">
          <Eyebrow>Manufacturers we handle</Eyebrow>
          <h2 className="h2-title" style={{ font: "800 40px/1.05 'Sora'", letterSpacing: '-0.02em', margin: '10px 0 12px', maxWidth: 720 }}>
            Every manufacturer selling vehicles in the U.S.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: '#4A4A44', maxWidth: 720, marginBottom: 28 }}>
            We've handled lemon law claims against the major automakers and the long tail of luxury, EV, and import brands. If your badge isn't here, ask us — we likely cover it.
          </p>
          <div style={{
            background: '#fff', border: '3px solid #000', borderRadius: 22, boxShadow: '6px 6px 0 #000',
            padding: 22,
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: 0,
              borderTop: '1px solid #E5E5DE',
              borderLeft: '1px solid #E5E5DE',
            }}>
              {manufacturers.map((m, i) => (
                <div key={i} style={{
                  padding: '14px 16px',
                  borderRight: '1px solid #E5E5DE',
                  borderBottom: '1px solid #E5E5DE',
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#1A1A17',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: 6, background: '#FFE600', border: '1.5px solid #000' }}></span>
                  {m}
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 12, color: '#6C6C65', marginTop: 20, maxWidth: 820, lineHeight: 1.6 }}>
            Coverage applies to vehicles sold or leased in California under an original or extended manufacturer warranty. Every case is evaluated on its own facts under the Song-Beverly Consumer Warranty Act.
          </p>
        </div>
      </section>

      <section style={{ background: '#FFFDF5', padding: '24px 0 80px', borderTop: '1px dashed #D6D6CC' }}>
        <div className="container">
          <Eyebrow>Service area</Eyebrow>
          <h2 className="h2-title" style={{ font: "800 40px/1.05 'Sora'", letterSpacing: '-0.02em', margin: '10px 0 12px', maxWidth: 720 }}>
            Where we work.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: '#4A4A44', maxWidth: 720, marginBottom: 28 }}>
            We represent California drivers statewide. Our practice is anchored in Los Angeles County and we handle claims in every California county, by phone, video, and e-signature — no in-person visits required.
          </p>

          <h3 style={{ font: "700 22px/1.25 'Sora'", margin: '8px 0 14px' }}>All 58 California counties</h3>
          <div style={{
            background: '#fff', border: '3px solid #000', borderRadius: 22, boxShadow: '6px 6px 0 #000',
            padding: 22, marginBottom: 36,
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              borderTop: '1px solid #E5E5DE',
              borderLeft: '1px solid #E5E5DE',
            }}>
              {counties.map((c, i) => (
                <div key={i} style={{
                  padding: '12px 14px',
                  borderRight: '1px solid #E5E5DE',
                  borderBottom: '1px solid #E5E5DE',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#1A1A17',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: 6, background: '#7BB661', border: '1.5px solid #000', flex: '0 0 6px' }}></span>
                  {c}
                </div>
              ))}
            </div>
          </div>

          <h3 style={{ font: "700 22px/1.25 'Sora'", margin: '8px 0 6px' }}>All 88 cities in Los Angeles County</h3>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: '#6C6C65', marginBottom: 14 }}>
            Plus every unincorporated neighborhood in between — Altadena, East LA, Marina del Rey, Topanga, Valencia, View Park-Windsor Hills, and the rest.
          </p>
          <div style={{
            background: '#fff', border: '3px solid #000', borderRadius: 22, boxShadow: '6px 6px 0 #000',
            padding: 22,
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              borderTop: '1px solid #E5E5DE',
              borderLeft: '1px solid #E5E5DE',
            }}>
              {laCities.map((c, i) => (
                <div key={i} style={{
                  padding: '12px 14px',
                  borderRight: '1px solid #E5E5DE',
                  borderBottom: '1px solid #E5E5DE',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#1A1A17',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: 6, background: '#FFE600', border: '1.5px solid #000', flex: '0 0 6px' }}></span>
                  {c}
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 12, color: '#6C6C65', marginTop: 20, maxWidth: 820, lineHeight: 1.6 }}>
            Office: 468 N. Camden Drive, Suite 210, Beverly Hills, CA 90210. We serve clients across California; in-person meetings by appointment only.
          </p>
        </div>
      </section>

      <section style={{ background: '#FFE600', borderTop: '3px solid #000', borderBottom: '3px solid #000', padding: '64px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <h2 className="h2-title" style={{ font: "800 36px/1.1 'Sora'", letterSpacing: '-0.02em', margin: 0, maxWidth: 640 }}>
            Don't see your issue or your make? Ask us anyway.
          </h2>
          <Button kind="ink" size="lg" onClick={onEstimator}>Start my case <Icon name="arrowRight" size={18}/></Button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HowItWorksPage, QualifyPage, ResultsPage });
