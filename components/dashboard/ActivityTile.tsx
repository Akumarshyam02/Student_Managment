"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";


function generateActivity() {
  return Array.from({ length: 52 }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => {
      const rand = Math.random();
      if (rand < 0.4) return 0;
      if (rand < 0.6) return 1;
      if (rand < 0.78) return 2;
      if (rand < 0.9) return 3;
      return 4;
    })
  );
}

const activity = generateActivity();

const intensityColors = [
  "bg-bg-muted border-border-subtle",
  "bg-accent-cyan/15 border-accent-cyan/20",
  "bg-accent-cyan/30 border-accent-cyan/30",
  "bg-accent-cyan/55 border-accent-cyan/50",
  "bg-accent-cyan/80 border-accent-cyan/70",
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function ActivityTile() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle p-5 grain-overlay">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/3 via-transparent to-accent-violet/3 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-accent-cyan" />
            <h2 className="text-sm font-semibold text-text-primary">Learning Activity</h2>
          </div>
          <span className="text-xs text-text-muted font-mono">Past 12 months</span>
        </div>

        {/* Month labels */}
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="flex gap-[3px] mb-1 pl-[18px]">
              {months.map((m, i) => (
                <div
                  key={m}
                  className="text-[10px] text-text-muted font-mono"
                  style={{ width: `calc(${(100 / 12)}%)`, minWidth: 28 }}
                >
                  {m}
                </div>
              ))}
            </div>

            {/* Grid */}
            <div className="flex gap-[3px]">
              {/* Day labels */}
              <div className="flex flex-col gap-[3px] mr-1">
                {["M", "", "W", "", "F", "", ""].map((d, i) => (
                  <div key={i} className="text-[9px] text-text-muted font-mono h-[11px] leading-[11px] w-3 text-right">
                    {d}
                  </div>
                ))}
              </div>

              {/* Weeks */}
              {activity.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((level, di) => (
                    <motion.div
                      key={di}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: wi * 0.005 + di * 0.002,
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      className={`w-[11px] h-[11px] rounded-[2px] border ${intensityColors[level]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="flex items-center gap-2 mt-3 justify-end">
          <span className="text-[10px] text-text-muted">Less</span>
          {intensityColors.map((cls, i) => (
            <div key={i} className={`w-[11px] h-[11px] rounded-[2px] border ${cls}`} />
          ))}
          <span className="text-[10px] text-text-muted">More</span>
        </div>
      </div>
    </section>
  );
}
