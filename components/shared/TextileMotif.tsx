interface Props {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * SVG herringbone weave motif — used decoratively at low opacity.
 * The pattern echoes a traditional twill weave structure.
 */
export default function TextileMotif({
  size = 120,
  color = "#0A2A3A",
  className = "",
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Outer border diamond */}
      <rect
        x="2"
        y="2"
        width="116"
        height="116"
        stroke={color}
        strokeWidth="0.75"
        fill="none"
      />

      {/* Inner border diamond */}
      <rect
        x="10"
        y="10"
        width="100"
        height="100"
        stroke={color}
        strokeWidth="0.5"
        strokeDasharray="3 3"
        fill="none"
      />

      {/* Warp threads — vertical */}
      {[30, 40, 50, 60, 70, 80, 90].map((x) => (
        <line key={`v${x}`} x1={x} y1="10" x2={x} y2="110" stroke={color} strokeWidth="0.4" opacity="0.6" />
      ))}

      {/* Weft threads — horizontal */}
      {[30, 40, 50, 60, 70, 80, 90].map((y) => (
        <line key={`h${y}`} x1="10" y1={y} x2="110" y2={y} stroke={color} strokeWidth="0.4" opacity="0.6" />
      ))}

      {/* Diagonal herringbone accent lines */}
      <line x1="10" y1="10" x2="60" y2="60" stroke={color} strokeWidth="0.6" />
      <line x1="60" y1="60" x2="110" y2="10" stroke={color} strokeWidth="0.6" />
      <line x1="10" y1="110" x2="60" y2="60" stroke={color} strokeWidth="0.6" />
      <line x1="60" y1="60" x2="110" y2="110" stroke={color} strokeWidth="0.6" />

      {/* Center cross-stitch */}
      <circle cx="60" cy="60" r="3" fill={color} opacity="0.8" />
      <circle cx="30" cy="30" r="1.5" fill={color} opacity="0.5" />
      <circle cx="90" cy="30" r="1.5" fill={color} opacity="0.5" />
      <circle cx="30" cy="90" r="1.5" fill={color} opacity="0.5" />
      <circle cx="90" cy="90" r="1.5" fill={color} opacity="0.5" />

      {/* Corner flourishes */}
      <path d="M10,20 Q15,10 20,10" stroke={color} strokeWidth="0.6" fill="none" />
      <path d="M100,10 Q110,10 110,20" stroke={color} strokeWidth="0.6" fill="none" />
      <path d="M110,100 Q110,110 100,110" stroke={color} strokeWidth="0.6" fill="none" />
      <path d="M20,110 Q10,110 10,100" stroke={color} strokeWidth="0.6" fill="none" />
    </svg>
  );
}
