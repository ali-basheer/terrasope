import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0A0B0D",
  bgCard: "#111318",
  bgCardHover: "#181B22",
  border: "#1E2028",
  borderLight: "#2A2D38",
  text: "#E8E9EC",
  textMuted: "#8B8F9E",
  textDim: "#5C6070",
  gold: "#C9923E",
  goldLight: "#E4B565",
  goldDim: "rgba(201,146,62,0.12)",
  cyan: "#3BA4B5",
  cyanLight: "#5CC5D6",
  cyanDim: "rgba(59,164,181,0.10)",
  white: "#FFFFFF",
};

const styles = {
  global: `
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    
    body {
      background: ${COLORS.bg};
      color: ${COLORS.text};
      font-family: 'DM Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    ::selection {
      background: ${COLORS.gold};
      color: ${COLORS.bg};
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideRight {
      from { opacity: 0; transform: translateX(-24px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }
    @keyframes scanline {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(400%); }
    }
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    .stagger-1 { animation-delay: 0.1s; }
    .stagger-2 { animation-delay: 0.2s; }
    .stagger-3 { animation-delay: 0.3s; }
    .stagger-4 { animation-delay: 0.4s; }
    .stagger-5 { animation-delay: 0.5s; }
    .stagger-6 { animation-delay: 0.6s; }
  `,
};

// ─── REUSABLE COMPONENTS ─────────────────────────────────────
function SectionLabel({ children, color = COLORS.gold }) {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 16,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: color,
    }}>
      <span style={{
        width: 24,
        height: 1,
        background: color,
        display: "inline-block",
      }} />
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: "'DM Serif Display', serif",
      fontSize: "clamp(28px, 4vw, 44px)",
      fontWeight: 400,
      lineHeight: 1.15,
      color: COLORS.white,
      marginBottom: 20,
    }}>
      {children}
    </h2>
  );
}

function Container({ children, style = {} }) {
  return (
    <div style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 24px",
      ...style,
    }}>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div style={{
      height: 1,
      background: `linear-gradient(90deg, transparent, ${COLORS.border}, transparent)`,
      margin: "0 auto",
      maxWidth: 1200,
    }} />
  );
}

// ─── GEOLOGICAL PATTERN BG ─────────────────────────────────
function StrataBackground() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 0,
      opacity: 0.35,
    }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="strata" x="0" y="0" width="100%" height="200" patternUnits="userSpaceOnUse">
            <line x1="0" y1="48" x2="100%" y2="52" stroke={COLORS.border} strokeWidth="0.5" />
            <line x1="0" y1="98" x2="100%" y2="95" stroke={COLORS.border} strokeWidth="0.3" />
            <line x1="0" y1="147" x2="100%" y2="151" stroke={COLORS.border} strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#strata)" />
      </svg>
    </div>
  );
}

// ─── NAV ────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "Platform", href: "#platform" },
    { label: "CoreSight", href: "#coresight" },
    { label: "SortStack", href: "#sortstack" },
    { label: "Team", href: "#team" },
    { label: "Careers", href: "#careers" },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "0 24px",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: scrolled ? "rgba(10,11,13,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
      transition: "all 0.4s ease",
    }}>
      <div style={{
        maxWidth: 1200,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <a href="#" style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 22,
          color: COLORS.white,
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}>
          <span style={{ color: COLORS.gold }}>Terra</span>sope
        </a>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              color: COLORS.textMuted,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.02em",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = COLORS.white}
            onMouseLeave={e => e.target.style.color = COLORS.textMuted}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" style={{
            padding: "8px 20px",
            background: COLORS.gold,
            color: COLORS.bg,
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.target.style.background = COLORS.goldLight; }}
          onMouseLeave={e => { e.target.style.background = COLORS.gold; }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ───────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      paddingTop: 64,
    }}>
      {/* Radial glow */}
      <div style={{
        position: "absolute",
        top: "-20%",
        right: "-10%",
        width: 800,
        height: 800,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.goldDim} 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-10%",
        left: "-5%",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.cyanDim} 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <Container>
        <div style={{ maxWidth: 820 }}>
          <div style={{
            animation: "fadeUp 0.8s ease both",
          }}>
            <SectionLabel>British Columbia, Canada</SectionLabel>
          </div>

          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 400,
            lineHeight: 1.08,
            color: COLORS.white,
            marginBottom: 28,
            animation: "fadeUp 0.8s ease both",
            animationDelay: "0.15s",
          }}>
            Mine-site intelligence,{" "}
            <span style={{
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              from core to concentrate.
            </span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: COLORS.textMuted,
            maxWidth: 620,
            marginBottom: 44,
            animation: "fadeUp 0.8s ease both",
            animationDelay: "0.3s",
          }}>
            Terrasope deploys ruggedized AI sensor platforms at exploration and production sites — 
            replacing weeks of laboratory turnaround with real-time geological intelligence 
            that cuts drill program waste by 20–30% and makes sub-economic deposits viable.
          </p>

          <div style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            animation: "fadeUp 0.8s ease both",
            animationDelay: "0.45s",
          }}>
            <a href="#coresight" style={{
              padding: "14px 32px",
              background: COLORS.gold,
              color: COLORS.bg,
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.25s",
            }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 8px 32px ${COLORS.goldDim}`; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
            >
              Explore Products
            </a>
            <a href="#careers" style={{
              padding: "14px 32px",
              background: "transparent",
              color: COLORS.text,
              border: `1px solid ${COLORS.borderLight}`,
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.25s",
            }}
            onMouseEnter={e => { e.target.style.borderColor = COLORS.gold; e.target.style.color = COLORS.gold; }}
            onMouseLeave={e => { e.target.style.borderColor = COLORS.borderLight; e.target.style.color = COLORS.text; }}
            >
              Join the Team
            </a>
          </div>
        </div>

        {/* Stat bar */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 1,
          marginTop: 80,
          background: COLORS.border,
          borderRadius: 12,
          overflow: "hidden",
          animation: "fadeUp 0.8s ease both",
          animationDelay: "0.6s",
        }}>
          {[
            { value: "$4.2B", label: "Canadian exploration spend (2024)" },
            { value: "$50–100", label: "Per meter, real-time analysis" },
            { value: "40–70%", label: "Waste mass reduction" },
            { value: "Jan 2027", label: "AME Roundup launch" },
          ].map((s, i) => (
            <div key={i} style={{
              background: COLORS.bgCard,
              padding: "24px 20px",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 24,
                color: COLORS.gold,
                marginBottom: 6,
              }}>{s.value}</div>
              <div style={{
                fontSize: 12,
                color: COLORS.textDim,
                lineHeight: 1.4,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── PLATFORM THESIS ────────────────────────────────────────
function Platform() {
  return (
    <section id="platform" style={{ padding: "120px 0" }}>
      <Container>
        <div style={{ maxWidth: 700, marginBottom: 64 }}>
          <SectionLabel>Platform Thesis</SectionLabel>
          <SectionTitle>The integration gap in mining technology</SectionTitle>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: COLORS.textMuted }}>
            Sensor manufacturers sell instruments. Software companies sell modelling tools. 
            Consultants sell expertise by the hour. Nobody follows the mineral from discovery 
            through production with an integrated hardware+AI platform that gets smarter at every stage.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 48px 1fr",
          alignItems: "center",
          gap: 0,
          background: COLORS.bgCard,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 16,
          overflow: "hidden",
        }}>
          {/* CoreSight side */}
          <div style={{ padding: "48px 40px" }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: COLORS.cyan,
              letterSpacing: "0.1em",
              marginBottom: 12,
            }}>EXPLORATION</div>
            <div style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 28,
              color: COLORS.white,
              marginBottom: 12,
            }}>CoreSight</div>
            <p style={{ fontSize: 14, color: COLORS.textMuted, lineHeight: 1.6 }}>
              Multi-sensor drill core analysis at the rig site. Hyperspectral SWIR, pXRF, optical, 
              and magnetic susceptibility — fused by edge AI for real-time lithological classification 
              and grade estimation.
            </p>
          </div>

          {/* Data flywheel center */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: `2px solid ${COLORS.gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "float 3s ease-in-out infinite",
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3v14M3 10h14" stroke={COLORS.gold} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 8,
              color: COLORS.textDim,
              textAlign: "center",
              lineHeight: 1.3,
              letterSpacing: "0.05em",
            }}>DATA<br/>FLYWHEEL</div>
          </div>

          {/* SortStack side */}
          <div style={{ padding: "48px 40px" }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: COLORS.gold,
              letterSpacing: "0.1em",
              marginBottom: 12,
            }}>PRODUCTION</div>
            <div style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 28,
              color: COLORS.white,
              marginBottom: 12,
            }}>SortStack</div>
            <p style={{ fontSize: 14, color: COLORS.textMuted, lineHeight: 1.6 }}>
              Containerized AI ore sorting at the mine face. XRT, optical, and hyperspectral 
              sensors classify and eject waste rock — reducing haulage mass by 40–70% and 
              making sub-economic deposits viable.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── PRODUCT SECTION (CORESIGHT) ────────────────────────────
function CoreSight() {
  const sensors = [
    { name: "Hyperspectral SWIR", desc: "Alteration & clay mineral ID via reflectance spectroscopy", icon: "◈" },
    { name: "Portable XRF", desc: "Multi-element geochemical grade estimation", icon: "◉" },
    { name: "Industrial RGB", desc: "High-res texture, structure & color analysis", icon: "◐" },
    { name: "Magnetic Susceptibility", desc: "Magnetic mineral ID & alteration zonation", icon: "◎" },
    { name: "Edge AI (Jetson AGX)", desc: "Real-time inference & multi-sensor fusion", icon: "⬡" },
  ];

  return (
    <section id="coresight" style={{ padding: "120px 0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <SectionLabel color={COLORS.cyan}>Product 1</SectionLabel>
            <SectionTitle>CoreSight</SectionTitle>
            <p style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: COLORS.textMuted,
              marginBottom: 12,
            }}>
              A ruggedized, field-deployable core analysis station that replaces weeks of 
              laboratory turnaround with seconds of AI-powered geological intelligence — 
              directly at the drill site.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: COLORS.textDim, marginBottom: 40 }}>
              Scans whole drill core through a multi-sensor array, producing real-time lithological 
              classification, mineral identification, alteration mapping, and element grade estimates. 
              Digital geological logs replace manual logging bottlenecks. Drill programs become 
              adaptive, not reactive.
            </p>

            {/* Pricing */}
            <div style={{
              display: "flex",
              gap: 16,
              marginBottom: 40,
            }}>
              <div style={{
                padding: "20px 24px",
                background: COLORS.bgCard,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 12,
                flex: 1,
              }}>
                <div style={{ fontSize: 11, color: COLORS.textDim, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", marginBottom: 8 }}>SERVICE MODEL</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: COLORS.cyan }}>$50–100</div>
                <div style={{ fontSize: 13, color: COLORS.textMuted }}>per meter analyzed</div>
              </div>
              <div style={{
                padding: "20px 24px",
                background: COLORS.bgCard,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 12,
                flex: 1,
              }}>
                <div style={{ fontSize: 11, color: COLORS.textDim, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", marginBottom: 8 }}>10,000m PROGRAM</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: COLORS.cyan }}>$0.5–1M</div>
                <div style={{ fontSize: 13, color: COLORS.textMuted }}>revenue per engagement</div>
              </div>
            </div>
          </div>

          {/* Sensor stack */}
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: COLORS.textDim,
              letterSpacing: "0.1em",
              marginBottom: 20,
              paddingLeft: 4,
            }}>SENSOR ARRAY</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {sensors.map((s, i) => (
                <div key={i} style={{
                  padding: "20px 24px",
                  background: COLORS.bgCard,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  transition: "all 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = COLORS.cyan;
                  e.currentTarget.style.background = COLORS.bgCardHover;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = COLORS.border;
                  e.currentTarget.style.background = COLORS.bgCard;
                }}
                >
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: COLORS.cyanDim,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    color: COLORS.cyan,
                    flexShrink: 0,
                  }}>{s.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.text, marginBottom: 2 }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: COLORS.textDim }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── SORTSTACK ──────────────────────────────────────────────
function SortStack() {
  return (
    <section id="sortstack" style={{ padding: "120px 0", background: `linear-gradient(180deg, transparent, ${COLORS.goldDim}, transparent)` }}>
      <Container>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", marginBottom: 64 }}>
          <SectionLabel color={COLORS.gold}>Product 2</SectionLabel>
          <SectionTitle>SortStack</SectionTitle>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: COLORS.textMuted }}>
            A containerized, truck-portable AI ore sorting plant that concentrates valuable 
            mineral at the mine face — transforming sub-economic deposits into viable operations 
            by eliminating 40–70% of waste mass before haulage.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginBottom: 48,
        }}>
          {[
            { label: "Throughput", value: "10–50 tph", sub: "Full-scale continuous operation" },
            { label: "Lease", value: "$50–80K", sub: "Per month, all-inclusive" },
            { label: "Purchase", value: "$500–700K", sub: "Plus $10–15K/mo AI subscription" },
          ].map((item, i) => (
            <div key={i} style={{
              padding: "36px 28px",
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 32,
                color: COLORS.gold,
                marginBottom: 6,
              }}>{item.value}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.text, marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 12, color: COLORS.textDim }}>{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Process flow */}
        <div style={{
          background: COLORS.bgCard,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 14,
          padding: "32px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}>
          {["Feed Hopper", "Conveyor", "XRT Sensor", "Hyperspectral", "AI Classification", "Pneumatic Ejection", "Concentrate"].map((step, i, arr) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, flex: i < arr.length - 1 ? 1 : "none" }}>
              <div style={{
                padding: "10px 14px",
                background: i === arr.length - 1 ? COLORS.goldDim : "rgba(255,255,255,0.04)",
                border: `1px solid ${i === arr.length - 1 ? COLORS.gold : COLORS.border}`,
                borderRadius: 8,
                fontSize: 11,
                fontFamily: "'JetBrains Mono', monospace",
                color: i === arr.length - 1 ? COLORS.gold : COLORS.textMuted,
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
              }}>
                {step}
              </div>
              {i < arr.length - 1 && (
                <span style={{ color: COLORS.textDim, fontSize: 14 }}>→</span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── TEAM ───────────────────────────────────────────────────
function Team() {
  const quals = [
    {
      icon: "🪨",
      title: "Environmental Geoscience — University of Toronto",
      desc: "Mineralogy, geochemistry, petrology, structural geology. Best Seminar Award for original research on industrial emissions bypass modelling."
    },
    {
      icon: "⚡",
      title: "Senior Data Quality Specialist — Cohere Inc.",
      desc: "Large-scale data pipeline architecture, AI model quality assurance, and multi-modal dataset management at one of Canada's leading enterprise AI companies."
    },
    {
      icon: "⚙️",
      title: "441-Unit Fleet Operations — Oman Oilfields",
      desc: "Designed and operated heavy equipment maintenance across six remote oilfield workshops. Drilling rigs, excavators, cranes, tankers. Six-year SLA, 53-page contractual framework."
    },
    {
      icon: "🚌",
      title: "300 Vehicle Reconfiguration — Dubai RTA",
      desc: "Led articulated bus reconfiguration programme including crashworthiness certification and fleet-wide deployment for a sovereign transport authority."
    },
  ];

  return (
    <section id="team" style={{ padding: "120px 0" }}>
      <Container>
        <div style={{ maxWidth: 700, marginBottom: 56 }}>
          <SectionLabel>Leadership</SectionLabel>
          <SectionTitle>Built at the intersection of geoscience, AI, and industrial operations</SectionTitle>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: COLORS.textMuted }}>
            Terrasope's founder combines geological domain expertise, applied AI engineering 
            from Cohere Inc., and a track record of designing and delivering complex industrial 
            service programmes in remote resource extraction environments.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}>
          {quals.map((q, i) => (
            <div key={i} style={{
              padding: "32px 28px",
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              transition: "border-color 0.25s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = COLORS.borderLight}
            onMouseLeave={e => e.currentTarget.style.borderColor = COLORS.border}
            >
              <div style={{ fontSize: 28, marginBottom: 16 }}>{q.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: COLORS.white, marginBottom: 8, lineHeight: 1.35 }}>{q.title}</div>
              <div style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6 }}>{q.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── CAREERS ────────────────────────────────────────────────
function Careers() {
  const roles = [
    {
      title: "Production Engineer — Mechanical",
      location: "South India (Remote)",
      type: "Full-time / Contract",
      tags: ["Mechanical Design", "Fabrication", "Conveyor Systems", "SolidWorks"],
      desc: "Design and fabricate sensor mounts, motorized core transport stages, ruggedized enclosures, and SortStack conveyor assemblies. You'll own the mechanical build from CAD through factory floor."
    },
    {
      title: "3D Visualization & Animation Artist",
      location: "South India (Remote)",
      type: "Contract",
      tags: ["Blender / 3ds Max", "Product Rendering", "Technical Animation"],
      desc: "Create photorealistic renders of CoreSight and SortStack deployed at mine sites, plus process animations showing AI-driven core scanning and ore sorting in action. This visual package drives our go-to-market."
    },
    {
      title: "ML / Computer Vision Engineer",
      location: "British Columbia, Canada",
      type: "Full-time (Month 6–9 start)",
      tags: ["PyTorch", "Hyperspectral", "Sensor Fusion", "Edge AI"],
      desc: "Build and deploy multi-sensor fusion models for lithological classification and grade estimation on NVIDIA Jetson. SR&ED-eligible R&D position with direct impact on product accuracy."
    },
    {
      title: "Full-Stack / Dashboard Developer",
      location: "South India (Remote)",
      type: "Full-time / Contract",
      tags: ["React", "Python", "Cloud Infra", "Real-time Data"],
      desc: "Build the customer-facing geological intelligence dashboard — real-time sensor feeds, AI classification visualizations, digital core logs, and drill targeting recommendations."
    },
    {
      title: "PCB & Embedded Systems Engineer",
      location: "South India (Remote)",
      type: "Contract",
      tags: ["PCB Layout", "Embedded Linux", "Sensor Integration", "Jetson"],
      desc: "Design custom PCBs for sensor interfacing, power management, and communications in a ruggedized field-deployable platform. Prototype through production."
    },
  ];

  return (
    <section id="careers" style={{
      padding: "120px 0",
      background: `linear-gradient(180deg, transparent, ${COLORS.cyanDim}, transparent)`,
    }}>
      <Container>
        <div style={{ maxWidth: 700, marginBottom: 56 }}>
          <SectionLabel color={COLORS.cyan}>Careers</SectionLabel>
          <SectionTitle>Build mine-site intelligence with us</SectionTitle>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: COLORS.textMuted }}>
            We're assembling a world-class engineering team across Canada and India. 
            You'll work at the intersection of ruggedized hardware, AI, and real-world 
            geological problems — shipping systems that deploy at remote drill sites 
            and transform how minerals are discovered and extracted.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {roles.map((r, i) => (
            <div key={i} style={{
              padding: "28px 32px",
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 24,
              alignItems: "start",
              transition: "all 0.25s",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = COLORS.cyan;
              e.currentTarget.style.background = COLORS.bgCardHover;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = COLORS.border;
              e.currentTarget.style.background = COLORS.bgCard;
            }}
            >
              <div>
                <div style={{ fontSize: 17, fontWeight: 600, color: COLORS.white, marginBottom: 6 }}>{r.title}</div>
                <div style={{ fontSize: 13, color: COLORS.textMuted, marginBottom: 12 }}>{r.desc}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {r.tags.map((t, j) => (
                    <span key={j} style={{
                      padding: "4px 10px",
                      background: "rgba(255,255,255,0.04)",
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 6,
                      fontSize: 11,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: COLORS.textDim,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{
                  fontSize: 12,
                  color: COLORS.cyan,
                  fontWeight: 600,
                  marginBottom: 4,
                }}>{r.location}</div>
                <div style={{
                  fontSize: 11,
                  color: COLORS.textDim,
                }}>{r.type}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── CONTACT / FOOTER ───────────────────────────────────────
function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 0 60px" }}>
      <Container>
        <div style={{
          background: COLORS.bgCard,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 20,
          padding: "64px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.gold})`,
          }} />
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(24px, 3.5vw, 38px)",
            color: COLORS.white,
            marginBottom: 16,
          }}>
            Exploration company? Investor? Engineer?
          </h2>
          <p style={{ fontSize: 15, color: COLORS.textMuted, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.6 }}>
            Whether you're planning a 2027 drill program, exploring investment in mine-site AI, 
            or looking to join a team building at the frontier of geological intelligence — we'd like to hear from you.
          </p>
          <a href="mailto:hello@terrasope.com" style={{
            display: "inline-flex",
            padding: "14px 36px",
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            color: COLORS.bg,
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 600,
            textDecoration: "none",
            transition: "all 0.25s",
          }}
          onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 12px 40px ${COLORS.goldDim}`; }}
          onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
          >
            hello@terrasope.com
          </a>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 64,
          paddingTop: 32,
          borderTop: `1px solid ${COLORS.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 18,
            color: COLORS.textDim,
          }}>
            <span style={{ color: COLORS.gold }}>Terra</span>sope
          </div>
          <div style={{ fontSize: 12, color: COLORS.textDim }}>
            © 2026 Terrasope Inc. · British Columbia, Canada
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {["Platform", "CoreSight", "SortStack", "Careers"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                fontSize: 12,
                color: COLORS.textDim,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = COLORS.textMuted}
              onMouseLeave={e => e.target.style.color = COLORS.textDim}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── APP ────────────────────────────────────────────────────
export default function TerrasopeSite() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <style>{styles.global}</style>
      <StrataBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav />
        <Hero />
        <Divider />
        <Platform />
        <Divider />
        <CoreSight />
        <SortStack />
        <Divider />
        <Team />
        <Careers />
        <Contact />
      </div>
    </div>
  );
}
