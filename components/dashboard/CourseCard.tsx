"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as Icons from "lucide-react";
import { Course } from "@/types";
import clsx from "clsx";

interface CourseCardProps {
  course: Course;
}

const gradients = [
  "from-accent-cyan/10 to-accent-violet/10",
  "from-accent-emerald/10 to-accent-cyan/10",
  "from-accent-violet/10 to-accent-rose/10",
  "from-accent-amber/10 to-accent-rose/10",
];

const glowColors = [
  "rgba(0,212,255,0.2)",
  "rgba(0,229,160,0.2)",
  "rgba(123,94,167,0.2)",
  "rgba(255,179,71,0.2)",
];

const iconColors = [
  "text-accent-cyan",
  "text-accent-emerald",
  "text-accent-violet",
  "text-accent-amber",
];

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // Capitalize first letter, camelCase icon name
  const iconName = name
    .split(/[-_\s]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("") as keyof typeof Icons;

  const IconComponent = Icons[iconName] as React.ElementType | undefined;
  if (!IconComponent) return <Icons.BookOpen className={className} size={20} />;
  return <IconComponent className={className} size={20} />;
}

function AnimatedProgressBar({ value, color }: { value: number; color: string }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="relative h-1.5 w-full rounded-full bg-bg-muted overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1], delay: 0.4 }}
      />
      {/* Shimmer on bar */}
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)`,
          width: `${width}%`,
        }}
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.5, delay: 1.4, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function CourseCard({ course }: CourseCardProps) {
  const router = useRouter();
  const index = Math.abs(course.id.charCodeAt(0)) % 4;
  const gradient = gradients[index];
  const glow = glowColors[index];
  const iconColor = iconColors[index];

  const handleCourseClick = () => {
    router.push(`/dashboard/${course.id}`);
  };

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        boxShadow: `0 8px 40px ${glow}, 0 0 0 1px ${glow}`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={handleCourseClick}
      className={clsx(
        "relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle p-5 h-full min-h-[160px] cursor-pointer grain-overlay",
        "transition-colors hover:border-opacity-60"
      )}
    >
      {/* Gradient mesh background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} />
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-50" />

      {/* Border glow on hover via framer */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{ boxShadow: `inset 0 0 0 1px ${glow}` }}
      />

      <div className="relative z-10 flex flex-col h-full gap-4">
        {/* Icon + Title */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-bg-elevated border border-border-muted flex items-center justify-center flex-shrink-0">
            <DynamicIcon name={course.icon_name} className={iconColor} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary leading-snug line-clamp-2">
              {course.title}
            </h3>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-text-muted font-medium">Progress</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className={clsx("text-xs font-bold font-mono", iconColor)}
            >
              {course.progress}%
            </motion.span>
          </div>
          <AnimatedProgressBar
            value={course.progress}
            color={
              index === 0
                ? "linear-gradient(90deg, #00D4FF, #7B5EA7)"
                : index === 1
                ? "linear-gradient(90deg, #00E5A0, #00D4FF)"
                : index === 2
                ? "linear-gradient(90deg, #7B5EA7, #FF6B8A)"
                : "linear-gradient(90deg, #FFB347, #FF6B8A)"
            }
          />
        </div>
      </div>
    </motion.article>
  );
}
