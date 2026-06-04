"use client";

import { motion } from "framer-motion";
import { Course } from "@/types";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import StatsTile from "./StatsTile";

interface BentoGridProps {
  courses: Course[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 md:p-6 pb-24 md:pb-6"
    >
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-auto">

        {/* Hero Tile — full width on large screens */}
        <motion.div variants={tileVariants} className="lg:col-span-8">
          <HeroTile />
        </motion.div>

        {/* Stats Tile */}
        <motion.div variants={tileVariants} className="lg:col-span-4">
          <StatsTile />
        </motion.div>

        {/* Course Cards — dynamic from Supabase */}
        {courses.map((course) => (
          <motion.div
            key={course.id}
            variants={tileVariants}
            className="lg:col-span-4 md:col-span-1"
          >
            <CourseCard course={course} />
          </motion.div>
        ))}

        {/* Fill remaining cols if fewer courses */}
        {courses.length === 0 && (
          <motion.div variants={tileVariants} className="lg:col-span-12">
            <div className="rounded-2xl border border-border-subtle bg-bg-card p-8 text-center">
              <p className="text-text-secondary text-sm">
                No courses found. Add rows to your Supabase{" "}
                <code className="text-accent-cyan font-mono text-xs">courses</code> table.
              </p>
            </div>
          </motion.div>
        )}

        {/* Activity Tile */}
        <motion.div variants={tileVariants} className="lg:col-span-12">
          <ActivityTile />
        </motion.div>
      </div>
    </motion.div>
  );
}
