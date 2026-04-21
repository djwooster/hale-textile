interface Props {
  className?: string;
  variant?: "default" | "light" | "dark";
}

/**
 * Decorative section divider inspired by a woven textile selvage.
 * Three lines of varying weight mirror warp/weft thread density.
 */
export default function TextileDivider({ className = "", variant = "default" }: Props) {
  const colors = {
    default: { outer: "#D4C9B8", inner: "#d4614a", dot: "#0A2A3A" },
    light:   { outer: "#E8DECE", inner: "#EDD5CA", dot: "#D4C9B8" },
    dark:    { outer: "#133a50", inner: "#d4614a", dot: "#FBF9F6" },
  };

  const c = colors[variant];

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <div className="flex-1 h-px" style={{ background: c.outer }} />
      <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
        <line x1="0" y1="6" x2="14" y2="6" stroke={c.outer} strokeWidth="0.75" />
        <line x1="26" y1="6" x2="40" y2="6" stroke={c.outer} strokeWidth="0.75" />
        <circle cx="17" cy="6" r="1.2" fill={c.dot} />
        <circle cx="20" cy="6" r="2" fill={c.inner} />
        <circle cx="23" cy="6" r="1.2" fill={c.dot} />
      </svg>
      <div className="flex-1 h-px" style={{ background: c.outer }} />
    </div>
  );
}
