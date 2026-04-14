const navItems = [
  { label: 'Program', href: '#about' },
  { label: 'Highlights', href: '#includes' },
  { label: 'Teacher', href: '#teacher' },
  { label: 'Video', href: '#video' },
  { label: 'Contact', href: '#contact' },
];

const quickFacts = [
  { label: 'Tuition', value: '$230', detail: 'per month' },
  { label: 'Schedule', value: 'Mon-Fri', detail: '9:00 AM-12:00 PM' },
  { label: 'Ages', value: '2.5-6', detail: 'years old' },
  { label: 'Opening', value: 'September 2026', detail: 'First intake' },
  { label: 'Support', value: 'Grants available', detail: 'Subsidies supported' },
  { label: 'Class Size', value: '6 children', detail: 'Maximum enrolment' },
];

const programIncludes = [
  { icon: '✺', text: 'Field trips that extend learning beyond the classroom' },
  { icon: '❤', text: 'A Grandparent Program that welcomes family connection' },
  { icon: '♫', text: 'Concerts and an Art Show to celebrate student growth' },
  { icon: 'ESP', text: 'Spanish and music lessons built into the program' },
  { icon: '✔', text: 'Progress updates and report cards for families' },
  { icon: 'EAL', text: 'English as an Additional Language program available (ESL/EAL)' },
];

const montessoriPoints = [
  'Literature: letter sounds, story elements, comprehension, early reading, and writing',
  'Mathematics: numbers, patterns, measurement, time, geometry, and early operations',
  'Drama and culture: creative movement, art history, theatre, puppet shows, music, geography, biology, zoology, history, and science',
  'Montessori learning: hands-on materials, movement, child-led interest, independence, and a carefully prepared environment',
];

const teacherQualifications = [
  'Education Degree',
  'Theatre Degree',
  'Montessori Diploma',
  '6 years teaching Kindergarten to Grade 2',
  '3+ years of Pre-K experience',
  'First Aid Certified, Level 3',
  'Police Check completed',
];

function App() {
  return (
    <div className="site-shell text-[color:var(--text)]">
      <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--surface)] shadow-[0_10px_30px_-22px_var(--shadow)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="min-w-0">
            <div className="font-display text-2xl tracking-[0.02em] text-[color:var(--heading)]">
              Crabtree Montessori
            </div>
            <p className="mt-1 text-sm text-[color:var(--text-soft)]">
              Small-group preschool opening September 2026
            </p>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--text-soft)] md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-[color:var(--primary)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="tel:4034777444"
              className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface-soft)] px-4 py-2 text-sm font-semibold text-[color:var(--primary)] transition-colors duration-200 hover:text-[color:var(--primary-strong)]"
            >
              403-477-7444
            </a>
            <a
              href="mailto:crabtreemontessori@gmail.com"
              className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface-soft)] px-4 py-2 text-sm font-semibold text-[color:var(--primary)] transition-colors duration-200 hover:text-[color:var(--primary-strong)]"
            >
              Email Lexi
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section
          className="relative overflow-hidden"
          style={{ backgroundImage: 'var(--hero-gradient)' }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
          <div className="absolute -left-16 top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-20">
            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur">
                Montessori preschool ages 2.5-6
              </span>
              <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                A Hidden Gem Montessori Preschool with a Small Class Size of 6
              </h1>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[color:var(--primary-strong)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)]"
                >
                  Message Lexi for a Tour
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/95">
                <a
                  href="tel:4034777444"
                  className="rounded-full border border-white/20 bg-white/14 px-4 py-2 backdrop-blur transition-colors duration-200 hover:bg-white/20"
                >
                  403-477-7444
                </a>
                <a
                  href="mailto:crabtreemontessori@gmail.com"
                  className="rounded-full border border-white/20 bg-white/14 px-4 py-2 backdrop-blur transition-colors duration-200 hover:bg-white/20"
                >
                  crabtreemontessori@gmail.com
                </a>
              </div>
            </div>

            <div className="relative z-10">
              <div className="hero-media-frame rounded-[2rem] p-4 sm:p-6">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[1.6rem] border border-white/18">
                  <img
                    src="/hero.png"
                    alt="Miss Lexi guiding a child during a classroom activity"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ backgroundImage: 'var(--image-overlay)' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[color:var(--line)] bg-[color:var(--surface)]/55 md:hidden">
          <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-3 text-sm font-medium text-[color:var(--text-soft)] sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 shadow-card transition-colors duration-200 hover:text-[color:var(--primary)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section
          className="section-shell bg-[color:var(--bg)]"
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="quick-facts-panel rounded-[2rem] p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="section-eyebrow">Quick Facts</p>
                  <h2 className="mt-2 font-display text-3xl text-[color:var(--heading)]">
                    The essentials, at a glance
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[color:var(--text-soft)]">
                  A simple, approachable program with a small class size and a consistent
                  morning routine for young learners.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {quickFacts.map((fact) => (
                  <InfoCard
                    key={fact.label}
                    label={fact.label}
                    value={fact.value}
                    detail={fact.detail}
                    variant="tinted"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="section-shell section-shell-soft"
          style={{ backgroundImage: 'var(--section-soft-gradient)' }}
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
            <div className="section-card rounded-[2rem] p-8">
              <p className="section-eyebrow">About The Program</p>
              <h2 className="mt-3 font-display text-3xl text-[color:var(--heading)]">
                A smaller setting with room for real attention
              </h2>
              <div className="mt-8 flex gap-3">
                <span className="h-2.5 w-14 rounded-full bg-[color:var(--primary)]" />
                <span className="h-2.5 w-8 rounded-full bg-[color:var(--accent)]" />
                <span className="h-2.5 w-16 rounded-full bg-[color:var(--secondary)]" />
              </div>
            </div>

            <div className="section-card rounded-[2rem] p-8">
              <p className="border-l-4 border-[color:var(--primary)] pl-5 text-lg leading-8 text-[color:var(--text)]">
                Montessori is brilliant because children learn these outcomes through
                movement, hands-on materials, independence, and their own natural
                curiosity.
              </p>
              <ul className="mt-6 grid gap-4 text-base leading-7 text-[color:var(--text-soft)]">
                {montessoriPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--primary)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="includes"
          className="section-shell section-shell-deep"
          style={{ backgroundImage: 'var(--section-alt-gradient)' }}
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="section-card section-card-deep rounded-[2rem] p-6 sm:p-8">
              <div className="max-w-2xl">
                <p className="section-eyebrow section-eyebrow-inverse">Program Includes</p>
                <h2 className="mt-3 font-display text-3xl text-white">
                  Enriching experiences woven into a small, consistent routine
                </h2>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {programIncludes.map((item) => (
                  <FeatureItem key={item.text} icon={item.icon} text={item.text} variant="white" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="teacher"
          className="section-shell section-shell-soft"
          style={{ backgroundImage: 'var(--section-soft-gradient)' }}
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
            <div className="section-card rounded-[2rem] p-8">
              <p className="section-eyebrow">About The Teacher</p>
              <h2 className="mt-3 font-display text-3xl text-[color:var(--heading)]">
                Meet Lexi Crabtree
              </h2>
              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[color:var(--line)]">
                <img
                  src="/lexi2.png"
                  alt="Miss Lexi Crabtree"
                  className="aspect-[4/3] w-full object-cover object-[50%_34%]"
                />
              </div>
              <p className="mt-6 text-lg leading-8 text-[color:var(--text-soft)]">
                Miss Lexi went to school to be an Elementary Teacher at U of L and also got
                her theatre degree. Miss Lexi is considered a "Montessori wizard" and a
                "child whisperer"! She has many years of schooling to be a teacher because
                of her love and passion for children.
              </p>
            </div>

            <div className="grid gap-4">
              {teacherQualifications.map((item) => (
                <QualificationPill key={item} text={item} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="video"
          className="section-shell section-shell-deep"
          style={{ backgroundImage: 'var(--section-alt-gradient)' }}
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="section-card section-card-deep rounded-[2rem] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="max-w-xl pt-2 text-[color:var(--surface)] lg:pt-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--surface)]">
                    Introduction Video
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--surface)] sm:text-5xl">
                    Take a little tour of Crabtree Montessori
                  </h2>
                  <div className="mt-5 h-1.5 w-20 rounded-full bg-[color:var(--surface)]/70" />
                  <p className="mt-6 text-xl leading-9 text-[color:var(--surface)]">
                    A quick look inside the space where children will learn, play, and grow.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {['Classroom space', 'Montessori shelves', 'Prepared environment'].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/24 bg-white/12 px-4 py-2 text-sm font-semibold text-[color:var(--surface)] backdrop-blur"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="justify-self-center rounded-[1.75rem] border border-white/24 bg-white/12 p-4 shadow-[0_24px_60px_-34px_rgba(7,18,34,0.55)] sm:p-5">
                  <div className="video-shell relative aspect-[9/16] w-full max-w-md overflow-hidden rounded-[1.5rem] border border-white/24">
                    <video
                      src="/tour.mp4"
                      controls
                      preload="metadata"
                      className="h-full w-full bg-black object-contain"
                      aria-label="A little tour of Crabtree Montessori"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section-shell section-shell-soft"
          style={{ backgroundImage: 'var(--section-soft-gradient)' }}
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="cta-panel rounded-[2rem] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/78">
                Contact
              </p>
              <h2 className="mt-3 font-display text-3xl">
                Families are welcome to reach out, ask questions, or attend an open house
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/82">
                If you are looking for a more personal preschool setting, Crabtree
                Montessori would be glad to connect. Get in touch to learn more about the
                program, availability, and upcoming open house details.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:4034777444"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[color:var(--primary-strong)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Call 403-477-7444
                </a>
                <a
                  href="mailto:crabtreemontessori@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/24 bg-white/8 px-6 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/12"
                >
                  crabtreemontessori@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--line)] bg-[color:color-mix(in_srgb,var(--surface)_80%,white_20%)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-[color:var(--text-soft)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="font-medium text-[color:var(--heading)]">Crabtree Montessori</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <a href="tel:4034777444" className="transition-colors hover:text-[color:var(--primary)]">
              403-477-7444
            </a>
            <a
              href="mailto:crabtreemontessori@gmail.com"
              className="transition-colors hover:text-[color:var(--primary)]"
            >
              crabtreemontessori@gmail.com
            </a>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.35))]" />
    </div>
  );
}

type InfoCardProps = {
  label: string;
  value: string;
  detail: string;
  variant?: 'default' | 'tinted';
};

function InfoCard({ label, value, detail, variant = 'default' }: InfoCardProps) {
  return (
    <article
      className={`rounded-[1.5rem] p-5 transition-transform duration-200 hover:-translate-y-1 ${
        variant === 'tinted' ? 'info-card-tinted' : 'info-card'
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--primary)]">
        {label}
      </p>
      <p className="mt-4 text-2xl font-semibold leading-tight text-[color:var(--heading)]">
        {value}
      </p>
      <p className="mt-2 text-sm text-[color:var(--text-soft)]">{detail}</p>
    </article>
  );
}

type FeatureItemProps = {
  icon: string;
  text: string;
  variant?: 'default' | 'white';
};

function FeatureItem({ icon, text, variant = 'default' }: FeatureItemProps) {
  const letterIcon = icon.length > 1;

  return (
    <div
      className={`flex min-h-[6rem] items-center gap-4 rounded-[1.5rem] p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-card ${
        variant === 'white' ? 'feature-card-white' : 'feature-card'
      }`}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--primary)] shadow-sm ${
          letterIcon ? 'text-base font-bold tracking-[0.04em]' : 'text-2xl font-black'
        }`}
      >
        <span aria-hidden="true">{icon}</span>
      </div>
      <p className="flex-1 text-base leading-7 text-[color:var(--text)]">{text}</p>
    </div>
  );
}

type QualificationPillProps = {
  text: string;
};

function QualificationPill({ text }: QualificationPillProps) {
  return (
    <div className="qualification-card flex min-h-[5.75rem] items-center rounded-[1.5rem] px-6 py-6 text-xl font-semibold leading-snug text-[color:var(--heading)] shadow-card">
      {text}
    </div>
  );
}

export default App;
