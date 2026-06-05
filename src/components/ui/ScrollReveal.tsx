"use client";
/**
 * ScrollReveal — wraps any child in a scroll-driven motion.div.
 * The element animates based on scroll position, not a one-shot trigger.
 * Reverses on scroll up. Pauses when scroll stops. Apple style.
 */
import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

type Direction = "up" | "left" | "right" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Which direction the element enters from. Default "up" */
  direction?: Direction;
  /** Scroll progress of the PARENT section to share (avoids creating multiple listeners) */
  progress: MotionValue<number>;
  /** When in [0,1] section progress the animation starts. Default 0.05 */
  start?: number;
  /** When in [0,1] section progress the animation finishes. Default 0.28 */
  end?: number;
  /** How far the element travels in px. Default 52 */
  distance?: number;
  /** Spring stiffness. Default 65 */
  stiffness?: number;
  /** Spring damping. Default 17 */
  damping?: number;
  /** Whether to fade out as section leaves viewport. Default true */
  fadeOut?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  style,
  direction = "up",
  progress,
  start = 0.05,
  end = 0.28,
  distance = 52,
  stiffness = 65,
  damping = 17,
  fadeOut = true,
}: ScrollRevealProps) {

  const outStart = fadeOut ? 0.82 : 1;
  const outEnd   = fadeOut ? 0.96 : 1;

  const rawOpacity = useTransform(progress, [start, end, outStart, outEnd], [0, 1, 1, fadeOut ? 0 : 1]);
  const opacity    = useSpring(rawOpacity, { stiffness, damping, restDelta: 0.001 });

  if (direction === "up") {
    const rawY = useTransform(progress, [start, end], [distance, 0]);
    const y    = useSpring(rawY, { stiffness, damping });
    return <motion.div className={className} style={{ ...style, opacity, y }}>{children}</motion.div>;
  }

  if (direction === "left") {
    const rawX = useTransform(progress, [start, end], [-distance, 0]);
    const x    = useSpring(rawX, { stiffness, damping });
    return <motion.div className={className} style={{ ...style, opacity, x }}>{children}</motion.div>;
  }

  if (direction === "right") {
    const rawX = useTransform(progress, [start, end], [distance, 0]);
    const x    = useSpring(rawX, { stiffness, damping });
    return <motion.div className={className} style={{ ...style, opacity, x }}>{children}</motion.div>;
  }

  if (direction === "scale") {
    const rawScale = useTransform(progress, [start, end], [0.88, 1]);
    const scale    = useSpring(rawScale, { stiffness, damping });
    return <motion.div className={className} style={{ ...style, opacity, scale }}>{children}</motion.div>;
  }

  return <motion.div className={className} style={{ ...style, opacity }}>{children}</motion.div>;
}

/**
 * ScrollRevealItem — for staggered grids. Pass index to offset the animation window.
 */
interface StaggerProps extends Omit<ScrollRevealProps, "start" | "end"> {
  index: number;
  baseStart?: number;
  step?: number;
  endOffset?: number;
}

export function ScrollRevealItem({
  index,
  baseStart = 0.1,
  step = 0.055,
  endOffset = 0.18,
  ...rest
}: StaggerProps) {
  const s = baseStart + index * step;
  const e = s + endOffset;
  return <ScrollReveal start={s} end={e} {...rest} />;
}
