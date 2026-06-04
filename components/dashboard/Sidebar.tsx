"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { id: "courses", label: "Courses", icon: BookOpen, href: "/dashboard/courses" },
  { id: "achievements", label: "Achievements", icon: Trophy, href: "/dashboard/achievements" },
  { id: "analytics", label: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
  { id: "settings", label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeId, setActiveId] = useState("dashboard");
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 68 : 220 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative hidden md:flex flex-col h-full bg-bg-subtle border-r border-border-subtle z-20 overflow-hidden"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 h-16 border-b border-border-subtle flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center flex-shrink-0">
            <Zap size={14} className="text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}
                className="font-display text-sm font-bold text-text-primary whitespace-nowrap"
              >
                LearnOS
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveId(item.id)}
                className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer group"
              >
                {/* Active background with layoutId for snapping animation */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-bg"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-cyan/10 to-accent-violet/10 border border-accent-cyan/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <Icon
                  size={18}
                  className={clsx(
                    "relative z-10 flex-shrink-0 transition-colors",
                    isActive ? "text-accent-cyan" : "text-text-muted group-hover:text-text-secondary"
                  )}
                />

                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      className={clsx(
                        "relative z-10 text-sm font-medium whitespace-nowrap transition-colors",
                        isActive ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                      )}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>

        {/* User section */}
        <div className="p-2 border-t border-border-subtle">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-violet to-accent-rose flex items-center justify-center flex-shrink-0">
              <User size={14} className="text-white" />
            </div>
            <AnimatePresence>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <p className="text-xs font-medium text-text-primary whitespace-nowrap">Shyam Kumar</p>
                  <p className="text-xs text-text-muted whitespace-nowrap">sk5859915@gmail.com</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-[4.5rem] w-6 h-6 rounded-full bg-bg-elevated border border-border-muted flex items-center justify-center hover:border-accent-cyan/40 transition-colors z-30"
        >
          {collapsed ? (
            <ChevronRight size={12} className="text-text-secondary" />
          ) : (
            <ChevronLeft size={12} className="text-text-secondary" />
          )}
        </button>
      </motion.aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-subtle/95 backdrop-blur-md border-t border-border-subtle px-2 py-2 flex justify-around">
        {navItems.slice(0, 4).map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveId(item.id)}
              className="relative flex flex-col items-center gap-1 p-2 rounded-xl"
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-active-bg"
                  className="absolute inset-0 rounded-xl bg-accent-cyan/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon size={18} className={clsx("relative z-10", isActive ? "text-accent-cyan" : "text-text-muted")} />
              <span className={clsx("relative z-10 text-[10px] font-medium", isActive ? "text-accent-cyan" : "text-text-muted")}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
