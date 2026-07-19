import { useState, useEffect } from "react";

/**
 * STUDENT DOSSIER — profile & daily-learning card
 * Design language: academic "index card" / dossier, ink-navy stage,
 * paper-cream card, teal + gold accents, monospace data labels.
 */

const FONT_IMPORT =
  "@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');";

const palette = {
  ink: "#141F2B",
  inkSoft: "#1E2C3A",
  paper: "#F8F4EA",
  paperLine: "#E7DFC9",
  teal: "#3E7C7B",
  tealDeep: "#2C5958",
  gold: "#B8933A",
  graphite: "#2B2F33",
  graphiteSoft: "#5B6167",
};

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{FONT_IMPORT}</style>
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          background:
            "radial-gradient(circle at 15% 10%, rgba(62,124,123,0.16) 0%, transparent 45%), " +
            "radial-gradient(circle at 85% 90%, rgba(184,147,58,0.10) 0%, transparent 50%), " +
            palette.ink,
          backgroundColor: palette.ink,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 20px",
          fontFamily: "'Inter', sans-serif",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "640px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0px)" : "translateY(14px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Folder tab */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginLeft: "28px",
            }}
          >
            <div
              style={{
                background: palette.tealDeep,
                color: palette.paper,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                padding: "7px 18px 9px",
                borderTopLeftRadius: "6px",
                borderTopRightRadius: "6px",
                boxShadow: "0 -1px 0 rgba(255,255,255,0.08) inset",
              }}
            >

            </div>
          </div>

          {/* Card */}
          <div
            style={{
              background: palette.paper,
              borderRadius: "4px 10px 10px 10px",
              boxShadow:
                "0 24px 60px -20px rgba(0,0,0,0.55), 0 2px 0 rgba(184,147,58,0.4)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* faint ruled-paper texture */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent, transparent 33px, " +
                  palette.paperLine +
                  " 33px, " +
                  palette.paperLine +
                  " 34px)",
                opacity: 0.5,
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", padding: "40px 44px 36px" }}>
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "26px",
                }}
              >
                {/* seal / monogram */}
                <div
                  style={{
                    flexShrink: 0,
                    width: "58px",
                    height: "58px",
                    borderRadius: "50%",
                    border: "1.5px solid " + palette.gold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "4px",
                      borderRadius: "50%",
                      border: "1px solid " + palette.gold,
                      opacity: 0.5,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "17px",
                      fontWeight: 600,
                      color: palette.tealDeep,
                      letterSpacing: "0.02em",
                    }}
                  >
                    JMC
                  </span>
                </div>

                <div style={{ minWidth: 0 }}>
                  <h1
                    style={{
                      margin: "0 0 6px",
                      fontFamily: "'Fraunces', serif",
                      fontSize: "27px",
                      fontWeight: 600,
                      color: palette.graphite,
                      lineHeight: 1.15,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Jess Marvin Carbonel
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "11.5px",
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                        color: palette.paper,
                        background: palette.teal,
                        padding: "3px 10px",
                        borderRadius: "3px",
                      }}
                    >
                      BSIS-3
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "11px",
                        color: palette.graphiteSoft,
                        letterSpacing: "0.04em",
                      }}
                    >

                    </span>
                  </div>
                </div>
              </div>

              <HR />

              <Section label="Fun Fact">
                One thing about me is that I really enjoy staying active
                outdoors. Basketball is my main sport, and I play it whenever
                I can find a free court and some friends to join me.
                Swimming is another activity I love, especially in the ocean
                or a river where the water feels natural and refreshing. I am
                also drawn to nature exploration, like hiking up a trail or
                discovering a new spot in the countryside. These hobbies keep
                me grounded and remind me to appreciate the simple things in
                life. I may not be the best player or the strongest swimmer,
                but that has never stopped me from enjoying every moment.
              </Section>

              <HR />

              <Section label="What I Learned Today">
                Today, we tackled React and learned that it is a declarative
                library with a rich ecosystem. Sir also taught us the rebase
                and merge Git commands, where merge is used to combine two
                branches while rebase is used to move or add the base of a
                branch. Learning these commands is important for working
                effectively in a team, since it helps in identifying which
                one to use when moving or combining branches. The most
                interesting part of today's class was the brief overview of
                Vite and how to create a project using it. Creating this
                project was also a refreshing exercise in using core HTML
                elements.
              </Section>

              {/* Footer */}
              <div
                style={{
                  marginTop: "30px",
                  paddingTop: "16px",
                  borderTop: "1px dashed " + palette.paperLine,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10.5px",
                    letterSpacing: "0.08em",
                    color: palette.graphiteSoft,
                    textTransform: "uppercase",
                  }}
                >

                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10.5px",
                    letterSpacing: "0.06em",
                    color: palette.gold,
                  }}
                >
                  01 / 01
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HR() {
  return (
    <div
      style={{
        height: "1px",
        background:
          "linear-gradient(to right, " +
          palette.gold +
          " 0%, " +
          palette.paperLine +
          " 40%, transparent 100%)",
        margin: "22px 0",
      }}
    />
  );
}

function Section({ label, children }) {
  return (
    <div style={{ marginBottom: "4px" }}>
      <h3
        style={{
          margin: "0 0 10px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: palette.tealDeep,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: palette.gold,
            display: "inline-block",
          }}
        />
        {label}
      </h3>
      <p
        style={{
          margin: 0,
          lineHeight: 1.75,
          fontSize: "15px",
          color: palette.graphite,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {children}
      </p>
    </div>
  );
}

export default App;