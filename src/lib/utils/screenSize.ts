/** enum representing the panda breakpoints */
export const PANDA_BREAKPOINTS = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
} as const;

/* width of screen in pixels */
const PANDA_BREAK_POINT_WIDTHS = {
  [PANDA_BREAKPOINTS.sm]: 640,
  [PANDA_BREAKPOINTS.md]: 768,
  [PANDA_BREAKPOINTS.lg]: 1024,
  [PANDA_BREAKPOINTS.xl]: 1280,
  [PANDA_BREAKPOINTS["2xl"]]: 1536,
} as const;

/** returns the enumerated screen size based on its width (in accordance with Panda breakpoints) */
export const getScreenSize = () => {
  const width = window.screen.width;
  if (width <= PANDA_BREAK_POINT_WIDTHS.sm) return PANDA_BREAKPOINTS.sm;
  if (width <= PANDA_BREAK_POINT_WIDTHS.md) return PANDA_BREAKPOINTS.md;
  if (width <= PANDA_BREAK_POINT_WIDTHS.lg) return PANDA_BREAKPOINTS.lg;
  if (width <= PANDA_BREAK_POINT_WIDTHS.xl) return PANDA_BREAKPOINTS.xl;
  return PANDA_BREAKPOINTS["2xl"];
};
