import { useEffect, useState } from 'react';

type Palette = {
  id: string;
  name: string;
  description: string;
  colors: {
    bg: string;
    surface: string;
    surfaceSoft: string;
    surfaceStrong: string;
    text: string;
    textSoft: string;
    heading: string;
    line: string;
    primary: string;
    primaryStrong: string;
    primarySoft: string;
    secondary: string;
    accent: string;
    accentSoft: string;
    shadow: string;
    heroGradient: string;
    pageGradient: string;
    sectionAltGradient: string;
    sectionSoftGradient: string;
    cardGradient: string;
    cardFeatureGradient: string;
    ctaGradient: string;
    imageOverlay: string;
  };
};

const palettes: Palette[] = [
  {
    id: 'classic-navy',
    name: 'Classic Navy',
    description: 'Bright white with classic navy depth.',
    colors: {
      bg: '#f4f7fb',
      surface: '#ffffff',
      surfaceSoft: '#eef3f8',
      surfaceStrong: '#d9e4f0',
      text: '#20344f',
      textSoft: '#475b74',
      heading: '#10233f',
      line: 'rgba(16, 35, 63, 0.11)',
      primary: '#173a67',
      primaryStrong: '#0d2447',
      primarySoft: 'rgba(23, 58, 103, 0.12)',
      secondary: '#5f7fa3',
      accent: '#7da4bf',
      accentSoft: 'rgba(125, 164, 191, 0.16)',
      shadow: 'rgba(13, 36, 71, 0.16)',
      heroGradient: 'linear-gradient(135deg, #0f2747 0%, #173a67 45%, #5f7fa3 100%)',
      pageGradient: 'linear-gradient(180deg, #f6f9fc 0%, #edf3f9 100%)',
      sectionAltGradient: 'linear-gradient(135deg, #14345d 0%, #29517f 52%, #7695b2 100%)',
      sectionSoftGradient: 'linear-gradient(135deg, #edf3fa 0%, #dfe8f3 100%)',
      cardGradient: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, #f1f6fb 100%)',
      cardFeatureGradient: 'linear-gradient(180deg, #f8fbff 0%, #eef4fa 100%)',
      ctaGradient: 'linear-gradient(135deg, #102645 0%, #1c426f 55%, #5d7ca0 100%)',
      imageOverlay: 'linear-gradient(180deg, rgba(16,38,69,0.18) 0%, rgba(16,38,69,0.44) 100%)',
    },
  },
  {
    id: 'soft-navy',
    name: 'Soft Navy',
    description: 'Muted blue-grey with a softer finish.',
    colors: {
      bg: '#f5f8fb',
      surface: '#ffffff',
      surfaceSoft: '#eff4f8',
      surfaceStrong: '#dfe8ef',
      text: '#24384c',
      textSoft: '#506476',
      heading: '#183046',
      line: 'rgba(24, 48, 70, 0.10)',
      primary: '#375d7f',
      primaryStrong: '#26435e',
      primarySoft: 'rgba(55, 93, 127, 0.13)',
      secondary: '#7f9db8',
      accent: '#8eb3c8',
      accentSoft: 'rgba(142, 179, 200, 0.16)',
      shadow: 'rgba(38, 67, 94, 0.15)',
      heroGradient: 'linear-gradient(135deg, #23415f 0%, #375d7f 52%, #86a5bf 100%)',
      pageGradient: 'linear-gradient(180deg, #f7fafc 0%, #eef4f8 100%)',
      sectionAltGradient: 'linear-gradient(135deg, #25425f 0%, #426b8d 54%, #91adc5 100%)',
      sectionSoftGradient: 'linear-gradient(135deg, #eef5fa 0%, #e2ecf4 100%)',
      cardGradient: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, #f2f7fb 100%)',
      cardFeatureGradient: 'linear-gradient(180deg, #f8fbfd 0%, #edf4f8 100%)',
      ctaGradient: 'linear-gradient(135deg, #25405e 0%, #3d6588 58%, #89a7bf 100%)',
      imageOverlay: 'linear-gradient(180deg, rgba(36,65,95,0.16) 0%, rgba(36,65,95,0.42) 100%)',
    },
  },
  {
    id: 'warm-navy',
    name: 'Navy + Warm White',
    description: 'Warm ivory backgrounds with tailored navy.',
    colors: {
      bg: '#faf6ef',
      surface: '#fffdf9',
      surfaceSoft: '#f6efe6',
      surfaceStrong: '#eadfce',
      text: '#2a3648',
      textSoft: '#5f635f',
      heading: '#182842',
      line: 'rgba(24, 40, 66, 0.10)',
      primary: '#21426d',
      primaryStrong: '#142c4e',
      primarySoft: 'rgba(33, 66, 109, 0.11)',
      secondary: '#8d9bb0',
      accent: '#a8bfd0',
      accentSoft: 'rgba(168, 191, 208, 0.16)',
      shadow: 'rgba(20, 44, 78, 0.15)',
      heroGradient: 'linear-gradient(135deg, #142c4e 0%, #21426d 46%, #8d9bb0 100%)',
      pageGradient: 'linear-gradient(180deg, #fdfaf4 0%, #f5efe6 100%)',
      sectionAltGradient: 'linear-gradient(135deg, #173153 0%, #32557f 50%, #95a6ba 100%)',
      sectionSoftGradient: 'linear-gradient(135deg, #f8f1e8 0%, #ece4d9 100%)',
      cardGradient: 'linear-gradient(180deg, rgba(255,253,249,0.98) 0%, #f6efe7 100%)',
      cardFeatureGradient: 'linear-gradient(180deg, #fffaf4 0%, #f4ede4 100%)',
      ctaGradient: 'linear-gradient(135deg, #173153 0%, #2b4d78 56%, #8a99ad 100%)',
      imageOverlay: 'linear-gradient(180deg, rgba(23,49,83,0.16) 0%, rgba(23,49,83,0.42) 100%)',
    },
  },
  {
    id: 'bright-structured',
    name: 'Bright White + Structured Navy',
    description: 'Structured, bright, and client-friendly.',
    colors: {
      bg: '#f9fbff',
      surface: '#ffffff',
      surfaceSoft: '#f3f7fc',
      surfaceStrong: '#e2e9f2',
      text: '#223349',
      textSoft: '#56697f',
      heading: '#13243a',
      line: 'rgba(19, 36, 58, 0.09)',
      primary: '#294d7a',
      primaryStrong: '#193657',
      primarySoft: 'rgba(41, 77, 122, 0.12)',
      secondary: '#83a0c2',
      accent: '#a4bfda',
      accentSoft: 'rgba(164, 191, 218, 0.16)',
      shadow: 'rgba(25, 54, 87, 0.15)',
      heroGradient: 'linear-gradient(135deg, #193657 0%, #294d7a 50%, #88a6c8 100%)',
      pageGradient: 'linear-gradient(180deg, #fcfdff 0%, #f0f5fb 100%)',
      sectionAltGradient: 'linear-gradient(135deg, #1a395d 0%, #35628e 54%, #96b1cf 100%)',
      sectionSoftGradient: 'linear-gradient(135deg, #edf4fc 0%, #dde8f3 100%)',
      cardGradient: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, #f4f8fd 100%)',
      cardFeatureGradient: 'linear-gradient(180deg, #fbfdff 0%, #eef4fb 100%)',
      ctaGradient: 'linear-gradient(135deg, #173353 0%, #315682 56%, #8aa6c6 100%)',
      imageOverlay: 'linear-gradient(180deg, rgba(23,51,83,0.16) 0%, rgba(23,51,83,0.42) 100%)',
    },
  },
  {
    id: 'premium-contrast',
    name: 'Premium Navy Contrast',
    description: 'Sharper navy contrast with cool blue accents.',
    colors: {
      bg: '#f3f6fa',
      surface: '#ffffff',
      surfaceSoft: '#edf1f7',
      surfaceStrong: '#d8e0ec',
      text: '#16263b',
      textSoft: '#4d6279',
      heading: '#091729',
      line: 'rgba(9, 23, 41, 0.10)',
      primary: '#112f56',
      primaryStrong: '#08192f',
      primarySoft: 'rgba(17, 47, 86, 0.12)',
      secondary: '#6f86a7',
      accent: '#91acc8',
      accentSoft: 'rgba(145, 172, 200, 0.16)',
      shadow: 'rgba(8, 25, 47, 0.17)',
      heroGradient: 'linear-gradient(135deg, #08192f 0%, #112f56 46%, #7288a8 100%)',
      pageGradient: 'linear-gradient(180deg, #f5f8fc 0%, #eaf0f7 100%)',
      sectionAltGradient: 'linear-gradient(135deg, #0a1d37 0%, #21456f 52%, #8398b6 100%)',
      sectionSoftGradient: 'linear-gradient(135deg, #edf3fa 0%, #dbe5f0 100%)',
      cardGradient: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, #eff3f9 100%)',
      cardFeatureGradient: 'linear-gradient(180deg, #fafcff 0%, #ebf1f8 100%)',
      ctaGradient: 'linear-gradient(135deg, #08192f 0%, #16385f 54%, #7f95b3 100%)',
      imageOverlay: 'linear-gradient(180deg, rgba(8,25,47,0.18) 0%, rgba(8,25,47,0.46) 100%)',
    },
  },
];

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
  { icon: 'EN', text: 'English Language Learning support available upon request' },
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
  const [selectedPaletteId, setSelectedPaletteId] = useState<string>(palettes[0].id);

  useEffect(() => {
    const storedPalette = window.localStorage.getItem('crabtree-palette');

    if (storedPalette && palettes.some((palette) => palette.id === storedPalette)) {
      setSelectedPaletteId(storedPalette);
    }
  }, []);

  useEffect(() => {
    const palette = palettes.find((item) => item.id === selectedPaletteId) ?? palettes[0];
    const root = document.documentElement;

    Object.entries(palette.colors).forEach(([key, value]) => {
      const cssKey = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
      root.style.setProperty(`--${cssKey}`, value);
    });

    window.localStorage.setItem('crabtree-palette', palette.id);
  }, [selectedPaletteId]);

  const selectedPalette = palettes.find((palette) => palette.id === selectedPaletteId) ?? palettes[0];

  return (
    <div className="site-shell text-[color:var(--text)]">
      <ThemeSwitcher
        palettes={palettes}
        selectedPaletteId={selectedPaletteId}
        onSelect={setSelectedPaletteId}
      />

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

          <a
            href="#contact"
            className="hidden rounded-full bg-[color:var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--primary-strong)] sm:inline-flex"
          >
            Book an Open House
          </a>
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
                Warm, attentive Montessori preschool for ages 2.5-6
              </span>
              <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                A calm and personal preschool experience where every child is truly known.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
                Crabtree Montessori offers a gentle morning program with a maximum of six
                children, giving families a thoughtful alternative to much larger classes.
                Children learn in a warm, carefully guided setting with space to grow in
                confidence, independence, and curiosity.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[color:var(--primary-strong)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)]"
                >
                  Attend an Open House
                </a>
                <a
                  href="mailto:crabtreemontessori@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/8 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/14"
                >
                  Email for Details
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/95">
                <span className="rounded-full border border-white/20 bg-white/14 px-4 py-2 backdrop-blur">
                  Monday-Friday | 9:00 AM-12:00 PM
                </span>
                <span className="rounded-full border border-white/20 bg-white/14 px-4 py-2 backdrop-blur">
                  Grants and subsidies available
                </span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="hero-media-frame rounded-[2rem] p-4 sm:p-6">
                <div className="hero-media-placeholder relative aspect-[5/4] overflow-hidden rounded-[1.6rem] border border-white/18 p-6">
                  <div className="absolute inset-0" style={{ backgroundImage: 'var(--image-overlay)' }} />
                  <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                  <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
                  <div className="relative flex h-full flex-col justify-between rounded-[1.25rem] border border-white/14 bg-white/8 p-6 backdrop-blur-sm">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                        Future Hero Photo
                      </p>
                      <h2 className="mt-4 max-w-sm font-display text-3xl leading-tight text-white">
                        Placeholder for a classroom, teacher, or welcoming entrance image
                      </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-7 text-white/86">
                      Alt text: Warm Montessori classroom or teacher welcoming families at
                      Crabtree Montessori.
                    </p>
                  </div>
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
          className="section-shell bg-[color:var(--surface)]"
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="section-card-deep rounded-[2rem] p-6 sm:p-8">
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
                Crabtree Montessori is designed for families who want a preschool
                experience that feels personal, steady, and thoughtfully guided. With a
                maximum of six children, the classroom can stay calm and responsive,
                giving each child more opportunities for encouragement, close observation,
                and meaningful daily connection.
              </p>
              <p className="mt-6 text-lg leading-8 text-[color:var(--text-soft)]">
                The program blends Montessori principles with a welcoming, family-focused
                approach. Children benefit from a clear routine, hands-on learning, and a
                nurturing environment that supports social growth, early independence, and
                school readiness.
              </p>
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
              <p className="mt-6 text-lg leading-8 text-[color:var(--text-soft)]">
                Meet Lexi. She brings a warm, steady presence to the classroom along with
                formal teaching credentials, Montessori training, and hands-on experience
                supporting young learners. Her goal is to create a calm, welcoming space
                where children feel safe, seen, and excited to learn.
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
            <div className="section-card section-card-deep rounded-[2rem] p-6 sm:p-8">
              <div className="max-w-2xl">
                <p className="section-eyebrow section-eyebrow-inverse">Introduction Video</p>
                <h2 className="mt-3 font-display text-3xl text-white">
                  Placeholder for a future home tour or welcome video
                </h2>
                <p className="mt-4 text-base leading-7 text-white/78">
                  Use this space later for a short introduction, classroom tour, or a
                  message to prospective families.
                </p>
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-dashed border-[color:var(--line)] bg-[color:var(--surface-soft)]/65 p-4 sm:p-6">
                <div className="video-shell relative aspect-video overflow-hidden rounded-[1.5rem] border border-[color:var(--line)]">
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-[color:var(--line)] bg-[color:color-mix(in_srgb,var(--surface)_84%,white_16%)] px-5 py-4">
                    <span className="text-sm font-semibold text-[color:var(--primary)]">
                      Intro / Home Tour Video
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-soft)]">
                      Placeholder Player
                    </span>
                  </div>
                  <div className="flex h-full items-center justify-center">
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--surface)] shadow-card ring-8 ring-white/40">
                        <div className="ml-1 h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-[color:var(--primary)]" />
                      </div>
                      <p className="max-w-sm text-sm leading-7 text-[color:var(--text-soft)]">
                        Alt text: Placeholder for a future embedded introduction or
                        classroom tour video.
                      </p>
                    </div>
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
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
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

            <div className="grid gap-4">
              <ContactCard title="Phone" value="403-477-7444" href="tel:4034777444" />
              <ContactCard
                title="Email"
                value="crabtreemontessori@gmail.com"
                href="mailto:crabtreemontessori@gmail.com"
              />
              <div className="section-card rounded-[1.5rem] p-6">
                <p className="section-eyebrow">Open House Invitation</p>
                <p className="mt-3 text-base leading-7 text-[color:var(--text-soft)]">
                  Interested families are invited to attend an open house and see whether
                  the program feels like the right fit. Reach out to receive upcoming
                  dates and details.
                </p>
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
      <p className="sr-only">Current palette: {selectedPalette.name}</p>
    </div>
  );
}

type ThemeSwitcherProps = {
  palettes: Palette[];
  selectedPaletteId: string;
  onSelect: (id: string) => void;
};

function ThemeSwitcher({ palettes, selectedPaletteId, onSelect }: ThemeSwitcherProps) {
  const selectedPalette = palettes.find((palette) => palette.id === selectedPaletteId);

  return (
    <aside className="fixed right-3 top-3 z-50 w-[18rem] max-w-[calc(100vw-1.5rem)] rounded-[1.5rem] border border-[color:var(--line)] bg-[color:color-mix(in_srgb,var(--surface)_90%,white_10%)] p-4 shadow-card backdrop-blur-xl sm:right-4 sm:top-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]">
            Theme Preview
          </p>
          <p className="mt-1 text-sm text-[color:var(--text-soft)]">
            Switch between five palette directions.
          </p>
        </div>
        <div className="rounded-full bg-[color:var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--primary)]">
          5
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        {palettes.map((palette) => {
          const isActive = palette.id === selectedPaletteId;

          return (
            <button
              key={palette.id}
              type="button"
              onClick={() => onSelect(palette.id)}
              className={`flex items-center justify-between rounded-2xl border px-3 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                isActive
                  ? 'border-[color:var(--primary)] bg-[color:var(--primary-soft)]'
                  : 'border-[color:var(--line)] bg-[color:var(--surface)] hover:border-[color:var(--primary-soft)]'
              }`}
              aria-pressed={isActive}
            >
              <div>
                <p className="text-sm font-semibold text-[color:var(--heading)]">{palette.name}</p>
                <p className="mt-1 text-xs leading-5 text-[color:var(--text-soft)]">
                  {palette.description}
                </p>
              </div>
              <div className="ml-3 flex shrink-0 items-center gap-1">
                <span
                  className="h-4 w-4 rounded-full border border-white/70"
                  style={{ backgroundColor: palette.colors.surface }}
                />
                <span
                  className="h-4 w-4 rounded-full border border-white/10"
                  style={{ backgroundColor: palette.colors.primary }}
                />
                <span
                  className="h-4 w-4 rounded-full border border-white/10"
                  style={{ backgroundColor: palette.colors.accent }}
                />
              </div>
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-xs leading-5 text-[color:var(--text-soft)]">
        Current selection:{' '}
        <span className="font-semibold text-[color:var(--heading)]">{selectedPalette?.name}</span>
      </p>
    </aside>
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
    <div className="qualification-card rounded-[1.5rem] px-5 py-4 text-base text-[color:var(--heading)] shadow-card">
      {text}
    </div>
  );
}

type ContactCardProps = {
  title: string;
  value: string;
  href: string;
};

function ContactCard({ title, value, href }: ContactCardProps) {
  return (
    <a
      href={href}
      className="contact-card rounded-[1.5rem] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">
        {title}
      </p>
      <p className="mt-3 text-lg text-[color:var(--heading)]">{value}</p>
    </a>
  );
}

export default App;
