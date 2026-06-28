import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoSrc from "@/imports/infrion-full-logo.png";

// ── Brand tokens ─────────────────────────────────────────────────────────────
const B = {
  white: "#FFFFFF",
  black: "#0E0E0E",
  ink: "#1A1A1A",
  red: "#E10600",
  redDeep: "#9E0400",
  redLite: "#FF3B30",
  grey50: "#F4F4F4",
  grey300: "#BDBDBD",
  grey700: "#2B2B2B",
};

const DISP = "'Outfit','Inter',sans-serif";
const BODY = "'Inter',sans-serif";

const SERVICES = ["Web Development", "App Development", "AI Solutions", "Cloud Services", "UI / UX Design", "ERP & CRM"];

// ── Vertical card: 2 × 3.5 in (portrait), rendered at 192dpi-equivalent ──────
const W = 384;
const H = 672;

// ── Edge micro-label (runs up an edge) ───────────────────────────────────────
function EdgeLabel({ side, color, bottom = 150 }: { side: "left" | "right"; color: string; bottom?: number }) {
  return (
    <div
      style={{
        position: "absolute",
        [side]: 16,
        bottom,
        writingMode: "vertical-rl",
        transform: side === "left" ? "rotate(180deg)" : "none",
        fontSize: 8.5,
        fontWeight: 600,
        letterSpacing: "0.42em",
        textTransform: "uppercase",
        color,
        fontFamily: DISP,
        userSelect: "none",
      }}
    >
      Software · AI · Cloud
    </div>
  );
}

// ── FRONT — white, oversized broken tagline, diagonal red wedge ──────────────
function CardFront({ flat = false }: { flat?: boolean }) {
  return (
    <div style={{ width: W, height: H, position: "relative", overflow: "hidden", borderRadius: flat ? 0 : 14, background: B.white, fontFamily: DISP, boxSizing: "border-box" }}>
      {/* left red spine */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 8, height: "100%", background: B.red, zIndex: 3 }} />

      {/* faint oversized mark watermark */}
      <ImageWithFallback
        src={logoSrc}
        alt=""
        aria-hidden
        style={{ position: "absolute", left: -60, top: 150, height: 230, width: "auto", objectFit: "contain", objectPosition: "left", opacity: 0.04, filter: "grayscale(1)", clipPath: "inset(0 66% 0 0)", pointerEvents: "none" }}
      />

      {/* logo */}
      <ImageWithFallback
        src={logoSrc}
        alt="Infrion Technolab logo"
        style={{ position: "absolute", left: 36, top: 52, width: 232, height: "auto", objectFit: "contain", zIndex: 2 }}
      />

      {/* hero tagline — broken across lines */}
      <div style={{ position: "absolute", left: 38, top: 246, zIndex: 2 }}>
        <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 54, lineHeight: 0.92, letterSpacing: "-0.02em", color: B.black }}>Build</div>
        <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 54, lineHeight: 0.92, letterSpacing: "-0.02em", color: B.black }}>What&rsquo;s</div>
        <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 54, lineHeight: 0.92, letterSpacing: "-0.02em", color: B.red, display: "inline-block", position: "relative" }}>
          Next.
          <span style={{ position: "absolute", left: 2, bottom: -10, width: 96, height: 5, background: B.red, borderRadius: 3 }} />
        </div>
      </div>

      {/* right edge micro-label (white area only) */}
      <EdgeLabel side="right" color={B.grey300} bottom={244} />

      {/* diagonal red wedge bottom */}
      <svg style={{ position: "absolute", left: 0, bottom: 0 }} width={W} height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <path d={`M0,560 L${W},468 L${W},${H} L0,${H} Z`} fill={B.redDeep} />
        <path d={`M0,602 L${W},510 L${W},${H} L0,${H} Z`} fill={B.red} />
        <line x1="0" y1="560" x2={W} y2="468" stroke={B.redLite} strokeWidth="2" opacity="0.6" />
      </svg>

      {/* domain on wedge */}
      <div style={{ position: "absolute", left: 36, bottom: 30, zIndex: 2, fontFamily: BODY, fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", color: B.white }}>
        infriontechnolab.com
      </div>
    </div>
  );
}

// ── BACK — black, contacts + big QR, diagonal echo ───────────────────────────
function CardBack({ flat = false }: { flat?: boolean }) {
  const rows = [
    { Icon: PhoneIcon, labels: ["+91 93289 64742", "+91 97227 21834"] },
    { Icon: MailIcon, labels: ["hello@infriontechnolab.com"] },
    { Icon: GlobeIcon, labels: ["infriontechnolab.com"] },
  ];
  return (
    <div style={{ width: W, height: H, position: "relative", overflow: "hidden", borderRadius: flat ? 0 : 14, background: B.black, fontFamily: BODY, boxSizing: "border-box" }}>
      {/* left red spine */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 8, height: "100%", background: B.red, zIndex: 3 }} />

      {/* top diagonal red wedge echo */}
      <svg style={{ position: "absolute", left: 0, top: 0 }} width={W} height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <path d={`M0,0 L${W},0 L${W},150 L0,210 Z`} fill={B.redDeep} />
        <path d={`M0,0 L${W},0 L${W},112 L0,168 Z`} fill={B.red} />
        <line x1="0" y1="168" x2={W} y2="112" stroke={B.redLite} strokeWidth="2" opacity="0.6" />
      </svg>

      {/* wordmark on wedge */}
      <div style={{ position: "absolute", left: 36, top: 44, zIndex: 2 }}>
        <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 26, letterSpacing: "-0.01em", color: B.white, lineHeight: 1 }}>
          Infrion<span style={{ fontWeight: 400, opacity: 0.85 }}> Technolab</span>
        </div>
        <div style={{ marginTop: 7, fontFamily: DISP, fontSize: 9.5, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>
          Build What&rsquo;s Next.
        </div>
      </div>

      {/* services (on black) */}
      <div style={{ position: "absolute", left: 36, top: 210, right: 32, zIndex: 2 }}>
        <div style={{ fontFamily: DISP, fontSize: 8.5, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: B.red, marginBottom: 12 }}>What we do</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 8px" }}>
          {SERVICES.map((s) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 6, padding: "5px 11px" }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: B.red, flexShrink: 0 }} />
              <span style={{ fontSize: 10.5, fontWeight: 400, color: "rgba(255,255,255,0.82)", letterSpacing: "0.02em", whiteSpace: "nowrap" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* contacts */}
      <div style={{ position: "absolute", left: 36, top: 340, right: 36, zIndex: 2 }}>
        {rows.map(({ Icon, labels }, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
            <span style={{ width: 28, height: 28, borderRadius: 8, background: B.red, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon />
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {labels.map((label) => (
                <span key={label} style={{ fontSize: 12.5, fontWeight: 500, color: "rgba(255,255,255,0.92)", letterSpacing: "0.01em", lineHeight: 1.2 }}>{label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* QR + GSTIN row (fills bottom, balances) */}
      <div style={{ position: "absolute", left: 36, right: 36, bottom: 40, zIndex: 2, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ background: B.white, borderRadius: 10, padding: 8, border: `2px solid ${B.red}` }}>
            <QRCodeSVG value="https://infriontechnolab.com" size={100} level="M" bgColor="#FFFFFF" fgColor={B.black} />
          </div>
          <span style={{ fontFamily: DISP, fontSize: 8.5, fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Scan to visit</span>
        </div>

        <div style={{ textAlign: "right", paddingBottom: 6 }}>
          <div style={{ fontFamily: DISP, fontSize: 9, fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase", color: B.red, marginBottom: 5 }}>GST No.</div>
          <div style={{ fontFamily: BODY, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.06em", color: "rgba(255,255,255,0.92)" }}>24AAMFI1235K1ZE</div>
        </div>
      </div>

      {/* right edge micro-label (black area only) */}
      <EdgeLabel side="right" color="rgba(255,255,255,0.26)" bottom={266} />
    </div>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────
function PhoneIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l1.1-1.1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

// ── Flip card (vertical) ──────────────────────────────────────────────────────
function FlipCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div onClick={() => setFlipped((f) => !f)} style={{ width: W, height: H, cursor: "pointer", perspective: 1600, userSelect: "none" }}>
      <div style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d", transition: "transform 0.7s cubic-bezier(0.4,0.2,0.2,1)", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)", boxShadow: "0 26px 60px rgba(0,0,0,0.22)", borderRadius: 14 }}>
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden" }}><CardFront /></div>
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}><CardBack /></div>
      </div>
    </div>
  );
}

function Thumb({ label, children }: { label: string; children: React.ReactNode }) {
  const scale = 0.42;
  return (
    <div>
      <p style={{ fontSize: 10, color: "rgba(0,0,0,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8, fontFamily: BODY, fontWeight: 600 }}>{label}</p>
      <div style={{ width: W * scale, height: H * scale, overflow: "hidden", borderRadius: 7, position: "relative", boxShadow: "0 4px 16px rgba(0,0,0,0.16)" }}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", position: "absolute", top: 0, left: 0 }}>{children}</div>
      </div>
    </div>
  );
}

export default function App() {
  const printMode = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("print") : null;
  if (printMode === "front") return <div style={{ position: "fixed", top: 0, left: 0, width: W, height: H }}><CardFront flat /></div>;
  if (printMode === "back") return <div style={{ position: "fixed", top: 0, left: 0, width: W, height: H }}><CardBack flat /></div>;
  return (
    <div style={{ minHeight: "100vh", background: B.grey50, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 34, padding: 48, fontFamily: BODY }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: B.white, border: `1px solid ${B.grey300}`, borderRadius: 999, padding: "6px 16px", marginBottom: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: B.red }} />
          <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: B.grey700 }}>Click to flip</span>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: B.red }} />
        </div>
        <p style={{ fontSize: 11, color: B.grey300, letterSpacing: "0.1em", margin: 0 }}>2 × 3.5 in · Portrait · Print Ready</p>
      </div>
      <FlipCard />
      <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
        <Thumb label="Front"><CardFront /></Thumb>
        <Thumb label="Back"><CardBack /></Thumb>
      </div>
    </div>
  );
}
