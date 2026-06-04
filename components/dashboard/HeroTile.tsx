"use client";

import { motion } from "framer-motion";
import { Flame, Star, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const streakDays = [true, true, true, false, true, true, false];
const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

export default function HeroTile() {
  const [dateString, setDateString] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    const greetingText =
      hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
    const dateText = now.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
    
    setGreeting(greetingText);
    setDateString(dateText);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle p-6 h-full min-h-[180px] grain-overlay">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-violet/8 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-accent-violet/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Greeting */}
        <div>
          <p>Welcome back</p>
          <p className="text-text-secondary text-sm font-medium mb-1">{greeting} 👋</p>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient-cyan mb-3">
            Shyam Kumar
          </h1>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-accent-cyan" />
              {dateString || "Loading..."}
            </span>
            <span className="flex items-center gap-1.5">
              <Star size={14} className="text-accent-amber" />
              Level 7 Learner
            </span>
          </div>
        </div>

        {/* Streak Indicator */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <Flame size={18} className="text-orange-400" />
            <span className="font-display text-sm font-bold text-text-primary">
              12 Day Streak 🔥
            </span>
          </div>
          <div className="flex gap-1.5">
            {dayLabels.map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 400 }}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border transition-all ${
                    streakDays[i]
                      ? "bg-gradient-to-br from-orange-500/30 to-red-500/30 border-orange-500/40 text-orange-300"
                      : "bg-bg-muted border-border-subtle text-text-muted"
                  }`}
                >
                  {streakDays[i] ? "🔥" : "·"}
                </motion.div>
                <span className="text-[10px] text-text-muted font-mono">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
