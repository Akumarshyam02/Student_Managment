"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Award, Target } from "lucide-react";

const stats = [
  { label: "Hours This Week", value: "14.5h", icon: Clock, color: "text-accent-cyan", bg: "bg-accent-cyan/10" },
  { label: "Completed", value: "3 / 8", icon: Target, color: "text-accent-emerald", bg: "bg-accent-emerald/10" },
  { label: "XP Earned", value: "2,480", icon: Award, color: "text-accent-amber", bg: "bg-accent-amber/10" },
  { label: "Avg. Score", value: "91%", icon: TrendingUp, color: "text-accent-violet", bg: "bg-accent-violet/10" },
];

export default function StatsTile() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle p-5 h-full grain-overlay">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-sm font-semibold text-text-primary mb-4">Quick Stats</h2>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.05, type: "spring", stiffness: 300 }}
                className="flex flex-col gap-2 rounded-xl bg-bg-elevated border border-border-subtle p-3"
              >
                <div className={`w-7 h-7 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  <Icon size={14} className={stat.color} />
                </div>
                <div>
                  <p className="text-xs text-text-muted leading-none mb-1">{stat.label}</p>
                  <p className={`text-base font-bold font-display ${stat.color}`}>{stat.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
