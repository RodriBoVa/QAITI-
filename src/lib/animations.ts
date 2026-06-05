// Scroll-driven animation utilities
// All animations are tied directly to scroll position — Apple style.
// They play forward on scroll down, reverse on scroll up, and pause when scroll stops.

import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, RefObject } from "react";

export type ScrollConfig = {
  /** How far into the section before element starts animating in. Default 0.05 */
  start?: number;
  /** How far into the section the element is fully visible. Default 0.3 */
  end?: number;
  /** Extra Y distance (px) to travel. Default 50 */
  distance?: number;
  /** Spring stiffness — higher = snappier. Default 80 */
  stiffness?: number;
  /** Spring damping — higher = less bounce. Default 20 */
  damping?: number;
};

/**
 * Bind a section ref's scroll progress to motion values for children.
 * offset ["start end", "end start"] = animate from when top enters bottom of viewport
 * to when bottom leaves top of viewport.
 */
export function useSectionScroll(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return scrollYProgress;
}

/**
 * Returns springified opacity and y for an element based on the
 * parent section's scrollYProgress. The spring makes it feel physical
 * and smooth — exactly like Apple's marketing pages.
 */
export function useScrollReveal(
  progress: MotionValue<number>,
  cfg: ScrollConfig = {}
) {
  const {
    start = 0.05,
    end = 0.28,
    distance = 48,
    stiffness = 70,
    damping = 18,
  } = cfg;

  const rawOpacity = useTransform(progress, [start, end, 0.85, 0.95], [0, 1, 1, 0]);
  const rawY       = useTransform(progress, [start, end], [distance, 0]);

  const opacity = useSpring(rawOpacity, { stiffness, damping, restDelta: 0.001 });
  const y       = useSpring(rawY,       { stiffness, damping, restDelta: 0.001 });

  return { opacity, y };
}

/** Like useScrollReveal but slides from left */
export function useScrollRevealLeft(progress: MotionValue<number>, cfg: ScrollConfig = {}) {
  const { start = 0.05, end = 0.28, distance = 50, stiffness = 70, damping = 18 } = cfg;
  const rawOpacity = useTransform(progress, [start, end, 0.85, 0.95], [0, 1, 1, 0]);
  const rawX       = useTransform(progress, [start, end], [-distance, 0]);
  const opacity    = useSpring(rawOpacity, { stiffness, damping });
  const x          = useSpring(rawX,       { stiffness, damping });
  return { opacity, x };
}

/** Like useScrollReveal but slides from right */
export function useScrollRevealRight(progress: MotionValue<number>, cfg: ScrollConfig = {}) {
  const { start = 0.05, end = 0.28, distance = 50, stiffness = 70, damping = 18 } = cfg;
  const rawOpacity = useTransform(progress, [start, end, 0.85, 0.95], [0, 1, 1, 0]);
  const rawX       = useTransform(progress, [start, end], [distance, 0]);
  const opacity    = useSpring(rawOpacity, { stiffness, damping });
  const x          = useSpring(rawX,       { stiffness, damping });
  return { opacity, x };
}

/** Staggered reveal — pass an index to delay each child */
export function useScrollRevealStagger(
  progress: MotionValue<number>,
  index: number,
  cfg: ScrollConfig = {}
) {
  const step = 0.045;
  const { stiffness = 70, damping = 18 } = cfg;
  const s = (cfg.start ?? 0.08) + index * step;
  const e = s + (cfg.end ?? 0.18);
  const dist = cfg.distance ?? 40;

  const rawOpacity = useTransform(progress, [s, e, 0.88, 0.96], [0, 1, 1, 0]);
  const rawY       = useTransform(progress, [s, e], [dist, 0]);
  const opacity    = useSpring(rawOpacity, { stiffness, damping });
  const y          = useSpring(rawY,       { stiffness, damping });
  return { opacity, y };
}

/** Scale + opacity reveal (for images/cards) */
export function useScrollScale(progress: MotionValue<number>, cfg: ScrollConfig = {}) {
  const { start = 0.05, end = 0.3, stiffness = 60, damping = 18 } = cfg;
  const rawOpacity = useTransform(progress, [start, end, 0.85, 0.95], [0, 1, 1, 0]);
  const rawScale   = useTransform(progress, [start, end], [0.92, 1]);
  const opacity    = useSpring(rawOpacity, { stiffness, damping });
  const scale      = useSpring(rawScale,   { stiffness, damping });
  return { opacity, scale };
}

/** Parallax Y for background images */
export function useParallax(progress: MotionValue<number>, distance = 80) {
  const rawY = useTransform(progress, [0, 1], [-distance / 2, distance / 2]);
  return useSpring(rawY, { stiffness: 40, damping: 20 });
}
