<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Terrasope — Mine-Site Intelligence Platform</title>
<meta name="description" content="AI sensor platforms for critical mineral exploration and production. From drill core to concentrate.">
<meta property="og:title" content="Terrasope — Mine-Site Intelligence">
<meta property="og:description" content="Ruggedized AI sensor platforms for critical mineral exploration and production.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://terrasope.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --font-display: 'Newsreader', Georgia, serif;
  --font-body: 'Instrument Sans', system-ui, sans-serif;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --radius: 14px;
  --radius-sm: 10px;
  --radius-xs: 6px;
}

/* ═══════════════════════════════════════════
   LIGHT THEME
   ═══════════════════════════════════════════ */
[data-theme="light"] {
  --bg: #ffffff;
  --bg-page: #f8f9fa;
  --bg-subtle: #f1f3f5;
  --bg-card: #ffffff;
  --bg-card-hover: #fcfcfd;
  --accent: #0d6e4f;
  --accent-light: #10a06c;
  --accent-soft: rgba(13,110,79,0.07);
  --accent-softer: rgba(13,110,79,0.03);
  --accent-border: rgba(13,110,79,0.12);
  --accent-glow: rgba(13,110,79,0.06);
  --text: #0f1419;
  --text-secondary: #525a65;
  --text-tertiary: #98a1ad;
  --border: rgba(0,0,0,0.06);
  --border-subtle: rgba(0,0,0,0.03);
  --shadow-xs: 0 1px 2px rgba(0,0,0,0.03);
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04);
  --shadow-card: 0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04);
  --shadow-card-hover: 0 0 0 1px rgba(13,110,79,0.08), 0 8px 24px rgba(0,0,0,0.08);
  --nav-bg: rgba(255,255,255,0.82);
  --nav-border: rgba(0,0,0,0.05);
  --hero-gradient: radial-gradient(ellipse 80% 50% at 70% 40%, rgba(13,110,79,0.04), transparent 70%),
                   radial-gradient(ellipse 60% 60% at 10% 80%, rgba(13,110,79,0.02), transparent);
  --tag-bg: #ecfdf5;
  --tag-color: #065f46;
  --tag2-bg: #eff6ff;
  --tag2-color: #1e40af;
  --grain-opacity: 0.018;
  --scan-color: rgba(13,110,79,0.25);
  --stat-bg: rgba(13,110,79,0.02);
  --stat-border: rgba(13,110,79,0.06);
  --glow-1: rgba(13,110,79,0.04);
  --glow-2: rgba(56,189,248,0.03);
}

/* ═══════════════════════════════════════════
   DARK THEME
   ═══════════════════════════════════════════ */
[data-theme="dark"] {
  --bg: #080c14;
  --bg-page: #0b1120;
  --bg-subtle: #111b2e;
  --bg-card: #0f1728;
  --bg-card-hover: #152036;
  --accent: #34d399;
  --accent-light: #6ee7b7;
  --accent-soft: rgba(52,211,153,0.08);
  --accent-softer: rgba(52,211,153,0.03);
  --accent-border: rgba(52,211,153,0.15);
  --accent-glow: rgba(52,211,153,0.06);
  --text: #e8ecf1;
  --text-secondary: #8994a6;
  --text-tertiary: #4a556a;
  --border: rgba(255,255,255,0.06);
  --border-subtle: rgba(255,255,255,0.03);
  --shadow-xs: 0 1px 2px rgba(0,0,0,0.2);
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.25);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.35);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.45);
  --shadow-card: 0 0 0 1px rgba(255,255,255,0.04), 0 2px 8px rgba(0,0,0,0.3);
  --shadow-card-hover: 0 0 0 1px rgba(52,211,153,0.12), 0 8px 24px rgba(0,0,0,0.4);
  --nav-bg: rgba(8,12,20,0.85);
  --nav-border: rgba(255,255,255,0.05);
  --hero-gradient: radial-gradient(ellipse 80% 50% at 70% 40%, rgba(52,211,153,0.05), transparent 70%),
                   radial-gradient(ellipse 60% 60% at 10% 80%, rgba(56,189,248,0.03), transparent);
  --tag-bg: rgba(52,211,153,0.08);
  --tag-color: #34d399;
  --tag2-bg: rgba(96,165,250,0.08);
  --tag2-color: #60a5fa;
  --grain-opacity: 0.035;
  --scan-color: rgba(52,211,153,0.3);
  --stat-bg: rgba(52,211,153,0.03);
  --stat-border: rgba(52,211,153,0.08);
  --glow-1: rgba(52,211,153,0.04);
  --glow-2: rgba(56,189,248,0.03);
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--bg-page);
  color: var(--text);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  transition: background 0.5s var(--ease), color 0.5s var(--ease);
}

/* ── Grain overlay ── */
body::before {
  content: ''; position: fixed; inset: 0; z-index: 9999;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 128px 128px;
  opacity: var(--grain-opacity);
  transition: opacity 0.5s;
}

.container { max-width: 1140px; margin: 0 auto; padding: 0 2.5rem; }
section { padding: 7rem 0; position: relative; }

/* ═══════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════ */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: var(--nav-bg);
  backdrop-filter: blur(28px) saturate(1.4); -webkit-backdrop-filter: blur(28px) saturate(1.4);
  border-bottom: 1px solid var(--nav-border);
  transition: all 0.5s var(--ease);
}
.nav-inner {
  max-width: 1140px; margin: 0 auto; padding: 0 2.5rem;
  display: flex; align-items: center; justify-content: space-between;
  height: 64px;
}
.logo {
  font-family: var(--font-display); font-weight: 600;
  font-size: 1.3rem; letter-spacing: -0.02em;
  color: var(--text); text-decoration: none;
  transition: color 0.3s;
}
.logo span { color: var(--accent); transition: color 0.3s; }
.nav-links { display: flex; gap: 1.75rem; align-items: center; }
.nav-links a {
  color: var(--text-secondary); text-decoration: none;
  font-size: 0.875rem; font-weight: 500;
  transition: color 0.25s;
  position: relative;
}
.nav-links a:not(.nav-cta):hover { color: var(--text); }
.nav-links a:not(.nav-cta)::after {
  content: ''; position: absolute; bottom: -4px; left: 0;
  width: 0; height: 1.5px; background: var(--accent);
  transition: width 0.3s var(--ease);
}
.nav-links a:not(.nav-cta):hover::after { width: 100%; }
.nav-links .nav-cta {
  background: var(--accent); color: #fff;
  padding: 0.5rem 1.3rem; border-radius: var(--radius-xs);
  font-weight: 600; font-size: 0.82rem;
  text-decoration: none; transition: all 0.25s; border: none;
  letter-spacing: 0.01em;
  box-shadow: 0 1px 3px rgba(13,110,79,0.15);
}
.nav-links .nav-cta:hover { transform: translateY(-1px); background: var(--accent-light); box-shadow: 0 4px 12px rgba(13,110,79,0.2); color: #fff; }

/* Theme toggle */
.theme-toggle {
  background: var(--accent-soft); border: none; border-radius: var(--radius-xs);
  padding: 0.4rem; cursor: pointer; display: flex; align-items: center;
  justify-content: center; color: var(--accent);
  transition: all 0.25s; width: 34px; height: 34px;
}
.theme-toggle:hover { background: var(--accent-border); transform: scale(1.05); }
.theme-toggle svg { width: 16px; height: 16px; }
[data-theme="light"] .icon-sun { display: none; }
[data-theme="dark"] .icon-moon { display: none; }

.menu-toggle { display: none; background: none; border: none; color: var(--text); cursor: pointer; padding: 0.25rem; }

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
.hero {
  min-height: 100vh; display: flex; align-items: center;
  padding-top: 64px; padding-bottom: 2rem; background: var(--bg);
  position: relative; overflow: hidden;
  transition: background 0.5s;
}
.hero-atmosphere {
  position: absolute; inset: 0; z-index: 0;
  background: var(--hero-gradient);
  transition: background 0.5s;
}

/* Floating glow orbs */
.hero-orb {
  position: absolute; border-radius: 50%;
  filter: blur(80px); z-index: 0;
  animation: orbFloat 20s ease-in-out infinite;
}
.hero-orb-1 {
  width: 500px; height: 500px; top: -10%; right: -5%;
  background: var(--glow-1);
}
.hero-orb-2 {
  width: 350px; height: 350px; bottom: 5%; left: -8%;
  background: var(--glow-2);
  animation-delay: -7s;
}
@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(30px, -20px); }
  66% { transform: translate(-15px, 15px); }
}

.hero-content { position: relative; z-index: 2; width: 100%; }
.hero-grid {
  display: flex; flex-direction: column;
}
.hero-inner { max-width: 700px; }
.hero-label {
  font-size: 0.78rem; font-weight: 600; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--accent);
  margin-bottom: 1.5rem;
  display: flex; align-items: center; gap: 0.75rem;
}
.hero-label::before {
  content: ''; width: 28px; height: 1.5px; background: var(--accent);
  border-radius: 1px;
}
.hero-title {
  font-family: var(--font-display); font-weight: 600;
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1.06; letter-spacing: -0.035em;
  color: var(--text); margin-bottom: 1.5rem;
  transition: color 0.5s;
}
.hero-title em {
  font-style: italic; color: var(--accent);
  transition: color 0.5s;
}
.hero-sub {
  font-size: 1.1rem; color: var(--text-secondary);
  max-width: 580px; margin-bottom: 2.5rem;
  line-height: 1.8; font-weight: 400;
  transition: color 0.5s;
}
.hero-buttons { display: flex; gap: 0.75rem; flex-wrap: wrap; }

/* Buttons */
.btn-primary {
  background: var(--accent); color: #ffffff;
  padding: 0.8rem 1.8rem; border-radius: var(--radius-sm);
  font-family: var(--font-body); font-weight: 600;
  font-size: 0.9rem; text-decoration: none;
  transition: all 0.3s var(--ease); display: inline-flex;
  align-items: center; gap: 0.5rem;
  box-shadow: 0 1px 3px rgba(13,110,79,0.2);
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(13,110,79,0.25); background: var(--accent-light); }
[data-theme="dark"] .btn-primary:hover { box-shadow: 0 6px 20px rgba(52,211,153,0.2); }
.btn-primary svg { width: 16px; height: 16px; transition: transform 0.3s; }
.btn-primary:hover svg { transform: translateX(3px); }
.btn-ghost {
  background: transparent; color: var(--text);
  padding: 0.8rem 1.8rem; border-radius: var(--radius-sm);
  font-family: var(--font-body); font-weight: 500;
  font-size: 0.9rem; text-decoration: none;
  transition: all 0.3s var(--ease); display: inline-block;
  border: 1px solid var(--border);
}
.btn-ghost:hover { border-color: var(--accent-border); background: var(--accent-softer); }

/* ═══════════════════════════════════════════
   HERO METRICS
   ═══════════════════════════════════════════ */
.hero-metrics {
  display: flex; gap: 2.5rem; margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}
.hero-metric {}
.hero-metric-value {
  font-family: var(--font-display); font-weight: 600;
  font-size: 1.5rem; color: var(--text); letter-spacing: -0.02em;
  line-height: 1.2;
}
.hero-metric-label {
  font-size: 0.75rem; color: var(--text-tertiary); margin-top: 0.15rem;
  font-weight: 500; line-height: 1.4;
}

/* Hero product cards */
.hero-products {
  display: flex; flex-direction: column; gap: 1rem;
}
.hero-product-card {
  background: var(--bg-card);
  border-radius: var(--radius);
  padding: 1.75rem;
  box-shadow: var(--shadow-card);
  transition: all 0.4s var(--ease);
  border: 1px solid transparent;
  position: relative; overflow: hidden;
}
.hero-product-card::before {
  content: ''; position: absolute; top: 0; left: 0;
  width: 3px; height: 100%; border-radius: 0 2px 2px 0;
  transition: opacity 0.3s;
}
.hero-product-card:first-child::before { background: var(--tag-color); opacity: 0.4; }
.hero-product-card:last-child::before { background: var(--tag2-color); opacity: 0.4; }
.hero-product-card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-3px);
  border-color: var(--accent-border);
}
.hero-product-card:hover::before { opacity: 1; }
.hero-card-tag {
  display: inline-block; font-size: 0.65rem; font-weight: 600;
  letter-spacing: 0.07em; text-transform: uppercase;
  padding: 0.2rem 0.6rem; border-radius: 4px; margin-bottom: 0.6rem;
}
.hero-card-tag.t1 { background: var(--tag-bg); color: var(--tag-color); }
.hero-card-tag.t2 { background: var(--tag2-bg); color: var(--tag2-color); }
.hero-product-card h3 {
  font-family: var(--font-display); font-weight: 600;
  font-size: 1.15rem; margin-bottom: 0.4rem; letter-spacing: -0.01em;
}
.hero-product-card p {
  font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;
}

/* ═══════════════════════════════════════════
   SECTION HEADINGS
   ═══════════════════════════════════════════ */
.section-eyebrow {
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem;
  display: flex; align-items: center; gap: 0.6rem;
}
.section-eyebrow::before {
  content: ''; width: 20px; height: 1.5px; background: var(--accent);
  border-radius: 1px;
}
.section-heading {
  font-family: var(--font-display); font-weight: 600;
  font-size: clamp(2rem, 3.5vw, 2.8rem); line-height: 1.12;
  letter-spacing: -0.025em; color: var(--text); margin-bottom: 1rem;
  transition: color 0.5s;
}
.section-heading em { font-style: italic; }
.section-lead {
  font-size: 1.05rem; color: var(--text-secondary);
  max-width: 540px; line-height: 1.8; margin-bottom: 3rem;
  transition: color 0.5s;
}

/* ═══════════════════════════════════════════
   PRODUCT SECTIONS
   ═══════════════════════════════════════════ */
.product-section {
  background: var(--bg); transition: background 0.5s;
  overflow: hidden;
}
.product-section.alt { background: var(--bg-page); }
/* Subtle corner glow per section */
.product-section::before {
  content: ''; position: absolute; width: 500px; height: 500px;
  border-radius: 50%; filter: blur(100px); z-index: 0;
  pointer-events: none; transition: background 0.5s;
}
.product-section:nth-of-type(1)::before {
  top: -20%; right: -10%; background: var(--glow-1);
}
.product-section:nth-of-type(2)::before {
  bottom: -20%; left: -10%; background: var(--glow-2);
}
.product-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 4.5rem;
  align-items: start; position: relative; z-index: 1;
}
.product-tag {
  display: inline-block; font-size: 0.7rem; font-weight: 600;
  letter-spacing: 0.07em; text-transform: uppercase;
  padding: 0.3rem 0.8rem; border-radius: var(--radius-xs);
  margin-bottom: 0.75rem; transition: all 0.3s;
}
.tag-core { background: var(--tag-bg); color: var(--tag-color); }
.tag-sort { background: var(--tag2-bg); color: var(--tag2-color); }

.product-body {
  font-size: 0.92rem; color: var(--text-secondary);
  line-height: 1.75; margin-bottom: 1.5rem;
}

/* Meta cards */
.product-meta { display: flex; gap: 1rem; margin-top: 2rem; }
.meta-card {
  background: var(--stat-bg); border-radius: var(--radius-sm);
  padding: 1.3rem 1.5rem; flex: 1;
  border: 1px solid var(--border-subtle);
  transition: all 0.35s var(--ease);
  position: relative; overflow: hidden;
}
.meta-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0;
  height: 2px; background: var(--accent);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s var(--ease);
}
.meta-card:hover { box-shadow: var(--shadow-md); border-color: var(--accent-border); }
.meta-card:hover::before { transform: scaleX(1); }
.meta-label {
  font-size: 0.65rem; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--text-tertiary); margin-bottom: 0.3rem;
}
.meta-value {
  font-family: var(--font-display); font-weight: 600;
  font-size: 1.4rem; color: var(--text); letter-spacing: -0.01em;
}
.meta-sub { font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.1rem; }

/* ── SENSOR STACK ── */
.sensor-stack { display: flex; flex-direction: column; gap: 0.6rem; }
.sensor-card {
  background: var(--bg-card); border-radius: var(--radius-sm);
  padding: 1.15rem 1.3rem; display: flex; align-items: center; gap: 1rem;
  box-shadow: var(--shadow-card);
  transition: all 0.35s var(--ease);
  border: 1px solid transparent;
}
.sensor-card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-2px) translateX(4px);
  border-color: var(--accent-border);
}
.sensor-icon {
  width: 40px; height: 40px; border-radius: var(--radius-xs);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; font-size: 0.95rem;
  transition: transform 0.3s var(--ease);
}
.sensor-card:hover .sensor-icon { transform: scale(1.1); }
.si-1 { background: var(--tag-bg); color: var(--tag-color); }
.si-2 { background: var(--tag2-bg); color: var(--tag2-color); }
.si-3 { background: #fefce8; color: #92400e; }
[data-theme="dark"] .si-3 { background: rgba(234,179,8,0.08); color: #fbbf24; }
.si-4 { background: #fdf2f8; color: #9d174d; }
[data-theme="dark"] .si-4 { background: rgba(236,72,153,0.08); color: #f472b6; }
.si-5 { background: #f0f9ff; color: #075985; }
[data-theme="dark"] .si-5 { background: rgba(14,165,233,0.08); color: #38bdf8; }
.sensor-text h4 { font-weight: 600; font-size: 0.88rem; margin-bottom: 0.1rem; }
.sensor-text p { font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4; }

/* ── FEATURE GRID ── */
.feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
.feature-card {
  background: var(--bg-card); border-radius: var(--radius-sm);
  padding: 1.5rem; box-shadow: var(--shadow-card);
  transition: all 0.35s var(--ease);
  border: 1px solid transparent;
  position: relative; overflow: hidden;
}
.feature-card::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0;
  height: 2px; background: linear-gradient(90deg, var(--accent), transparent);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s var(--ease);
}
.feature-card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-2px);
  border-color: var(--accent-border);
}
.feature-card:hover::after { transform: scaleX(1); }
.feature-card h4 { font-weight: 600; font-size: 0.9rem; margin-bottom: 0.35rem; }
.feature-card p { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6; }

/* ═══════════════════════════════════════════
   PLATFORM / FLYWHEEL
   ═══════════════════════════════════════════ */
.platform-section {
  background: var(--bg-page); transition: background 0.5s;
  position: relative; overflow: hidden;
}
.platform-section::before {
  content: ''; position: absolute;
  width: 600px; height: 600px; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%; border: 1px solid var(--border);
  opacity: 0.4; pointer-events: none;
}
.platform-section::after {
  content: ''; position: absolute;
  width: 400px; height: 400px; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%; border: 1px dashed var(--border);
  opacity: 0.3; pointer-events: none;
  animation: spinSlow 60s linear infinite;
}
@keyframes spinSlow { to { transform: translate(-50%, -50%) rotate(360deg); } }

.flywheel-row {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem;
  position: relative; z-index: 1;
}
.flywheel-card {
  background: var(--bg-card); border-radius: var(--radius);
  padding: 2.25rem; box-shadow: var(--shadow-card);
  transition: all 0.4s var(--ease);
  border: 1px solid transparent;
  position: relative; overflow: hidden;
}
.flywheel-card::before {
  content: ''; position: absolute; top: 0; left: 0;
  width: 3px; height: 0; background: var(--accent);
  transition: height 0.5s var(--ease);
  border-radius: 0 0 2px 0;
}
.flywheel-card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-4px);
  border-color: var(--accent-border);
}
.flywheel-card:hover::before { height: 100%; }
.flywheel-num {
  font-family: var(--font-display); font-weight: 700;
  font-size: 2.5rem; color: var(--accent); opacity: 0.15;
  line-height: 1; margin-bottom: 1rem;
}
.flywheel-card h4 { font-weight: 600; font-size: 1rem; margin-bottom: 0.5rem; }
.flywheel-card p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7; }

/* Connector arrows between flywheel cards */
.flywheel-connector {
  display: flex; align-items: center; gap: 1.25rem;
  position: relative; z-index: 1;
}

/* ═══════════════════════════════════════════
   TEAM
   ═══════════════════════════════════════════ */
.team-section { background: var(--bg); transition: background 0.5s; }
.cred-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.cred-card {
  background: var(--bg-card); border-radius: var(--radius);
  padding: 1.85rem; box-shadow: var(--shadow-card);
  transition: all 0.35s var(--ease);
  border: 1px solid transparent;
  position: relative;
}
.cred-card::before {
  content: ''; position: absolute; top: 1.5rem; left: 0;
  width: 3px; height: 20px; background: var(--accent);
  border-radius: 0 2px 2px 0;
  transition: height 0.3s var(--ease);
}
.cred-card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-2px);
  border-color: var(--accent-border);
}
.cred-card:hover::before { height: 35px; }
.cred-eyebrow {
  font-size: 0.68rem; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--accent); margin-bottom: 0.5rem;
  padding-left: 0.15rem;
}
.cred-card h4 {
  font-family: var(--font-display); font-weight: 500;
  font-size: 0.95rem; margin-bottom: 0.45rem; line-height: 1.35;
}
.cred-card p { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.7; }

/* ═══════════════════════════════════════════
   MARKET
   ═══════════════════════════════════════════ */
.market-section { background: var(--bg-page); transition: background 0.5s; }
.market-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4.5rem; align-items: start; }
.market-list { display: flex; flex-direction: column; gap: 1.75rem; }
.market-stat {
  padding-left: 1.5rem; border-left: 2px solid var(--border);
  transition: all 0.35s var(--ease);
}
.market-stat:hover { border-color: var(--accent); padding-left: 1.75rem; }
.market-val {
  font-family: var(--font-display); font-weight: 600;
  font-size: 1.7rem; color: var(--text); letter-spacing: -0.01em;
}
.market-desc { font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.15rem; }

/* ═══════════════════════════════════════════
   CAREERS
   ═══════════════════════════════════════════ */
.careers-section { background: var(--bg); transition: background 0.5s; }
.roles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.role-card {
  background: var(--bg-card); border-radius: var(--radius);
  padding: 1.85rem; box-shadow: var(--shadow-card);
  transition: all 0.35s var(--ease);
  border: 1px solid transparent; cursor: default;
  position: relative; overflow: hidden;
}
.role-card::after {
  content: '→'; position: absolute; top: 1.85rem; right: 1.85rem;
  font-size: 1.1rem; color: var(--accent); opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s var(--ease);
}
.role-card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-3px);
  border-color: var(--accent-border);
}
.role-card:hover::after { opacity: 1; transform: translateX(0); }
.role-card h4 { font-weight: 600; font-size: 0.95rem; margin-bottom: 0.25rem; }
.role-loc { font-size: 0.78rem; color: var(--accent); font-weight: 500; margin-bottom: 0.6rem; }
.role-card p { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.65; }

/* ═══════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════ */
.cta-section {
  padding: 8rem 0; background: var(--bg-page);
  transition: background 0.5s;
  position: relative; overflow: hidden;
}
.cta-section::before {
  content: ''; position: absolute;
  width: 600px; height: 300px; bottom: -20%; right: -10%;
  background: var(--glow-1); filter: blur(120px);
  border-radius: 50%; pointer-events: none;
}
.cta-inner { max-width: 520px; position: relative; z-index: 1; }
.cta-buttons { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 2rem; }

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
footer {
  padding: 2.5rem 0; border-top: 1px solid var(--border);
  background: var(--bg); transition: all 0.5s;
}
.footer-inner { display: flex; justify-content: space-between; align-items: center; }
.footer-copy { font-size: 0.78rem; color: var(--text-tertiary); }
.footer-links { display: flex; gap: 1.5rem; }
.footer-links a {
  font-size: 0.78rem; color: var(--text-tertiary);
  text-decoration: none; transition: color 0.25s;
}
.footer-links a:hover { color: var(--accent); }

/* ═══════════════════════════════════════════
   ANIMATIONS
   ═══════════════════════════════════════════ */
.reveal {
  opacity: 0; transform: translateY(24px);
  transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out);
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.d1 { transition-delay: 0.06s; }
.d2 { transition-delay: 0.12s; }
.d3 { transition-delay: 0.18s; }
.d4 { transition-delay: 0.24s; }

/* Stagger children in grids */
.stagger-children .reveal:nth-child(1) { transition-delay: 0s; }
.stagger-children .reveal:nth-child(2) { transition-delay: 0.06s; }
.stagger-children .reveal:nth-child(3) { transition-delay: 0.12s; }
.stagger-children .reveal:nth-child(4) { transition-delay: 0.18s; }
.stagger-children .reveal:nth-child(5) { transition-delay: 0.24s; }

/* ═══════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════ */
@media (max-width: 900px) {
  .container { padding: 0 1.5rem; }
  .nav-inner { padding: 0 1.5rem; }
  .product-grid, .market-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .flywheel-row, .cred-grid, .roles-grid, .feature-grid { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .nav-links.open {
    display: flex; flex-direction: column;
    position: absolute; top: 64px; left: 0; right: 0;
    background: var(--nav-bg); backdrop-filter: blur(28px);
    padding: 1.5rem 2rem; gap: 1rem;
    border-bottom: 1px solid var(--nav-border);
  }
  .menu-toggle { display: block; }
  section { padding: 5rem 0; }
  .hero { min-height: auto; padding-top: 120px; padding-bottom: 4rem; }
  .hero-orb { display: none; }
  .platform-section::before, .platform-section::after { display: none; }
}
@media (max-width: 600px) {
  .product-meta { flex-direction: column; }
  .footer-inner { flex-direction: column; gap: 1rem; text-align: center; }
  .hero-title { font-size: 2.5rem; }
}
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-inner">
    <a href="#" class="logo">Terra<span>sope</span></a>
    <div class="nav-links" id="navLinks">
      <a href="#coresight">CoreSight</a>
      <a href="#sortstack">SortStack</a>
      <a href="#platform">Platform</a>
      <a href="#team">Team</a>
      <a href="#careers">Careers</a>
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
        <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      </button>
      <a href="mailto:info@terrasope.com" class="nav-cta">Get in Touch</a>
    </div>
    <button class="menu-toggle" id="menuToggle" aria-label="Menu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
      </svg>
    </button>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-atmosphere"></div>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="container hero-content">
    <div class="hero-grid">
      <div class="hero-inner">
        <div class="hero-label">British Columbia, Canada</div>
        <h1 class="hero-title">Mine-site intelligence,<br><em>from core to concentrate.</em></h1>
        <p class="hero-sub">Terrasope deploys ruggedized AI sensor platforms at exploration and production sites — replacing weeks of laboratory turnaround with real-time geological intelligence that cuts drill program waste by 20–30% and makes sub-economic deposits viable.</p>
        <div class="hero-buttons">
          <a href="#coresight" class="btn-primary">
            Explore Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#careers" class="btn-ghost">Join the Team</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CORESIGHT -->
<section id="coresight" class="product-section">
  <div class="container">
    <div class="product-grid">
      <div>
        <div class="product-tag tag-core reveal">Product 1</div>
        <h2 class="section-heading reveal">CoreSight</h2>
        <p class="section-lead reveal">A ruggedized, field-deployable core analysis station that replaces weeks of laboratory turnaround with seconds of AI-powered geological intelligence — directly at the drill site.</p>
        <p class="product-body reveal">Scans whole drill core through a multi-sensor array, producing real-time lithological classification, mineral identification, alteration mapping, and element grade estimates. Digital geological logs replace manual logging bottlenecks. Drill programs become adaptive, not reactive.</p>
        <div class="product-meta reveal">
          <div class="meta-card">
            <div class="meta-label">Service Model</div>
            <div class="meta-value">$50–100</div>
            <div class="meta-sub">per meter analyzed</div>
          </div>
          <div class="meta-card">
            <div class="meta-label">10,000m Program</div>
            <div class="meta-value">$0.5–1M</div>
            <div class="meta-sub">revenue per engagement</div>
          </div>
        </div>
      </div>
      <div>
        <div class="section-eyebrow reveal" style="margin-bottom:0.85rem;">Sensor Array</div>
        <div class="sensor-stack stagger-children">
          <div class="sensor-card reveal">
            <div class="sensor-icon si-1">◇</div>
            <div class="sensor-text"><h4>Hyperspectral SWIR</h4><p>Alteration &amp; clay mineral ID via reflectance spectroscopy</p></div>
          </div>
          <div class="sensor-card reveal">
            <div class="sensor-icon si-2">◉</div>
            <div class="sensor-text"><h4>Portable XRF</h4><p>Multi-element geochemical grade estimation</p></div>
          </div>
          <div class="sensor-card reveal">
            <div class="sensor-icon si-3">◑</div>
            <div class="sensor-text"><h4>Industrial RGB</h4><p>High-res texture, structure &amp; color analysis</p></div>
          </div>
          <div class="sensor-card reveal">
            <div class="sensor-icon si-4">◎</div>
            <div class="sensor-text"><h4>Magnetic Susceptibility</h4><p>Magnetic mineral ID &amp; alteration zonation</p></div>
          </div>
          <div class="sensor-card reveal">
            <div class="sensor-icon si-5">○</div>
            <div class="sensor-text"><h4>Edge AI (Jetson AGX)</h4><p>Real-time inference &amp; multi-sensor fusion</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SORTSTACK -->
<section id="sortstack" class="product-section alt">
  <div class="container">
    <div class="product-grid">
      <div>
        <div class="product-tag tag-sort reveal">Product 2</div>
        <h2 class="section-heading reveal">SortStack</h2>
        <p class="section-lead reveal">A containerized, truck-portable ore sorting and concentration plant. Multi-sensor AI classification separates valuable material from waste rock at the mine face.</p>
        <p class="product-body reveal">Deployed in standard shipping containers with 10–50 tph capacity. Reduces the mass requiring transport and processing by 40–70%. A deposit that can't support a $200–500M conventional plant becomes viable when only the highest-grade material enters the logistics chain.</p>
        <div class="product-meta reveal">
          <div class="meta-card">
            <div class="meta-label">Monthly Lease</div>
            <div class="meta-value">$50–80K</div>
            <div class="meta-sub">or purchase at $500–700K</div>
          </div>
          <div class="meta-card">
            <div class="meta-label">Lease Payback</div>
            <div class="meta-value">2–3 days</div>
            <div class="meta-sub">of operation at 500 tpd</div>
          </div>
        </div>
      </div>
      <div>
        <div class="section-eyebrow reveal" style="margin-bottom:0.85rem;">Capabilities</div>
        <div class="feature-grid stagger-children">
          <div class="feature-card reveal">
            <h4>XRT Sorting</h4>
            <p>X-ray transmission density classification identifies sulphides and oxides at 2+ m/s conveyor speed.</p>
          </div>
          <div class="feature-card reveal">
            <h4>Hyperspectral Surface</h4>
            <p>Optical and NIR cameras characterize mineral surfaces of individual ore fragments.</p>
          </div>
          <div class="feature-card reveal">
            <h4>Adaptive AI</h4>
            <p>Self-adjusting classification thresholds as ore feed changes — no manual recalibration.</p>
          </div>
          <div class="feature-card reveal">
            <h4>Containerized</h4>
            <p>Ships in 20/40-ft containers. Diesel or grid power. Deploys to remote sites in days, not years.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PLATFORM -->
<section id="platform" class="platform-section">
  <div class="container">
    <div class="section-eyebrow reveal">The Platform</div>
    <h2 class="section-heading reveal">One foundation. Two products. <em>One flywheel.</em></h2>
    <p class="section-lead reveal">CoreSight and SortStack share sensor fusion, AI classification, and edge computing infrastructure. Geological knowledge from exploration directly informs production sorting — a data advantage that compounds with every deployment.</p>
    <div class="flywheel-row stagger-children">
      <div class="flywheel-card reveal">
        <div class="flywheel-num">01</div>
        <h4>Explore</h4>
        <p>CoreSight scans drill core and builds a geological knowledge base — lithology, mineralogy, geochemistry — for every meter of every deposit.</p>
      </div>
      <div class="flywheel-card reveal">
        <div class="flywheel-num">02</div>
        <h4>Characterize</h4>
        <p>AI models learn the spectral and geochemical signatures of each ore type, building proprietary calibration datasets paired with lab assay.</p>
      </div>
      <div class="flywheel-card reveal">
        <div class="flywheel-num">03</div>
        <h4>Sort</h4>
        <p>SortStack inherits the geological intelligence. Sorting parameters are pre-tuned to the deposit before a single tonne hits the conveyor.</p>
      </div>
    </div>
  </div>
</section>

<!-- TEAM -->
<section id="team" class="team-section">
  <div class="container">
    <div class="section-eyebrow reveal">Founder</div>
    <h2 class="section-heading reveal">Built for the field. <em>Trained in AI and rock.</em></h2>
    <p class="section-lead reveal">Terrasope is founded by someone who has both designed AI data systems at scale and operated heavy equipment fleets in remote oilfields. That combination is the product.</p>
    <div class="cred-grid stagger-children">
      <div class="cred-card reveal">
        <div class="cred-eyebrow">Geoscience</div>
        <h4>B.Sc. Environmental Geoscience — University of Toronto</h4>
        <p>Mineralogy, petrology, geochemistry, structural geology. Best Seminar Award for original research on industrial emissions bypass modelling.</p>
      </div>
      <div class="cred-card reveal">
        <div class="cred-eyebrow">AI Engineering</div>
        <h4>Senior Data Quality Specialist — Cohere Inc.</h4>
        <p>Large-scale data pipelines, AI model QA, multi-modal dataset management at one of Canada's leading enterprise AI companies.</p>
      </div>
      <div class="cred-card reveal">
        <div class="cred-eyebrow">Industrial Operations</div>
        <h4>441-Unit Fleet Program — Oman Oilfields</h4>
        <p>Six-year SLA across six remote workshops. Drilling rigs, excavators, cranes, tankers. Authored the 53-page contractual framework with KPI-governed SLAs.</p>
      </div>
      <div class="cred-card reveal">
        <div class="cred-eyebrow">Scale Delivery</div>
        <h4>300 Vehicle Reconfiguration — Dubai RTA</h4>
        <p>Led reconfiguration of 300 articulated transit buses including homologation and crashworthiness certification for a sovereign transport authority.</p>
      </div>
    </div>
  </div>
</section>

<!-- MARKET -->
<section class="market-section">
  <div class="container">
    <div class="market-grid">
      <div>
        <div class="section-eyebrow reveal">The Moment</div>
        <h2 class="section-heading reveal">Unprecedented government <em>capital in play.</em></h2>
        <p class="section-lead reveal">Canada has committed generational investment to critical minerals. Terrasope builds the technology that makes that investment productive — faster exploration, cheaper processing, domestic supply chain security.</p>
      </div>
      <div class="market-list">
        <div class="market-stat reveal">
          <div class="market-val">$18.5B</div>
          <div class="market-desc">Critical Minerals Production Alliance — mobilized project capital</div>
        </div>
        <div class="market-stat reveal d1">
          <div class="market-val">$2B</div>
          <div class="market-desc">Critical Minerals Sovereign Fund</div>
        </div>
        <div class="market-stat reveal d2">
          <div class="market-val">$192M</div>
          <div class="market-desc">NRCan Critical Minerals R&D Program</div>
        </div>
        <div class="market-stat reveal d3">
          <div class="market-val">$4B</div>
          <div class="market-desc">BDC Defence Platform — dual-use technology financing</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CAREERS -->
<section id="careers" class="careers-section">
  <div class="container">
    <div class="section-eyebrow reveal">Join Us</div>
    <h2 class="section-heading reveal">Build what mines <em>should have had</em> a decade ago.</h2>
    <p class="section-lead reveal">We're assembling a team across Canada and India to build mine-site intelligence infrastructure. If you work at the intersection of hardware, AI, and the physical world — we want to talk.</p>
    <div class="roles-grid stagger-children">
      <div class="role-card reveal">
        <h4>ML / Computer Vision Engineer</h4>
        <div class="role-loc">Remote — Canada or India</div>
        <p>Sensor fusion, spectral classification, real-time inference on edge hardware. Train and deploy models that identify minerals from raw sensor data.</p>
      </div>
      <div class="role-card reveal">
        <h4>Mechanical / Mechatronics Engineer</h4>
        <div class="role-loc">South India — Production Team</div>
        <p>Conveyor systems, sensor mounts, ruggedized enclosures, containerized plant design. SolidWorks/Fusion 360, fabrication oversight.</p>
      </div>
      <div class="role-card reveal">
        <h4>3D Visualization Artist</h4>
        <div class="role-loc">South India — Production Team</div>
        <p>Photorealistic product renders, process animations, and a company sizzle reel. Industrial visualization for a mining-industry audience.</p>
      </div>
      <div class="role-card reveal">
        <h4>Full-Stack / Embedded Developer</h4>
        <div class="role-loc">Remote — Canada or India</div>
        <p>Dashboard UI, NVIDIA Jetson integration, cloud data pipelines. The software layer that ties sensors to intelligence.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <div class="container">
    <div class="cta-inner">
      <div class="section-eyebrow reveal">Get Started</div>
      <h2 class="section-heading reveal">Let's <em>talk.</em></h2>
      <p class="reveal" style="font-size:1.05rem; color:var(--text-secondary); line-height:1.8;">Whether you're an exploration company planning your 2027 drill season, a funder backing critical minerals technology, or an engineer who wants to build something that matters.</p>
      <div class="cta-buttons reveal">
        <a href="mailto:info@terrasope.com" class="btn-primary">
          info@terrasope.com
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#careers" class="btn-ghost">View Open Roles</a>
      </div>
      <p class="reveal" style="margin-top:2.5rem; font-size:0.78rem; color:var(--text-tertiary);">British Columbia, Canada · Incorporated 2026 · CCPC</p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-copy">&copy; 2026 Terrasope Inc. All rights reserved.</div>
      <div class="footer-links">
        <a href="#coresight">CoreSight</a>
        <a href="#sortstack">SortStack</a>
        <a href="#careers">Careers</a>
        <a href="mailto:info@terrasope.com">Contact</a>
      </div>
    </div>
  </div>
</footer>

<script>
// Theme
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;
const saved = localStorage.getItem('terrasope-theme');
if (saved) html.setAttribute('data-theme', saved);

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('terrasope-theme', next);
});

// Scroll reveal with stagger
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Mobile menu
const menuBtn = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Smooth parallax on hero orbs
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const orbs = document.querySelectorAll('.hero-orb');
      orbs.forEach((orb, i) => {
        const speed = i === 0 ? 0.03 : -0.02;
        orb.style.transform = `translateY(${y * speed}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
});
</script>
</body>
</html>