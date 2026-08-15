"use client";

import { motion } from "motion/react";
import { ArrowRight, Bot } from "lucide-react";

import ProfileDropdown from "./ProfileDropdown";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";

const HomeClient = ({ email }: { email: string }) => {
  const handleLogin = () => {
    window.location.href = "/api/auth/login";
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa] text-zinc-900">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-125 w-125 rounded-full bg-zinc-200/40 blur-3xl" />

        <div className="absolute -right-45 top-[20%] h-125 w-125 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="absolute -bottom-50 left-[30%] h-112.5 w-112.5 rounded-full bg-purple-100/20 blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Navbar */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="fixed left-0 top-0 z-50 w-full"
      >
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
          <nav className="flex h-14 items-center justify-between rounded-2xl border border-zinc-200/70 bg-white/75 px-4 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.2)] backdrop-blur-2xl sm:px-5">
            {/* Brand */}
            <button
              onClick={() => {
                window.location.href = "/";
              }}
              className="group flex items-center gap-2.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Bot size={16} strokeWidth={2.2} />
              </div>

              <div className="text-left">
                <div className="text-[15px] font-semibold tracking-tight">
                  Support <span className="text-zinc-400">AI</span>
                </div>
              </div>
            </button>

            {/* Center status */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-3.5 py-1.5 text-[11px] font-medium text-zinc-500 shadow-sm md:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              AI support, automated
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              {email ? (
                <ProfileDropdown email={email} />
              ) : (
                <>
                  <button
                    onClick={handleLogin}
                    className="hidden rounded-xl px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 sm:block"
                  >
                    Login
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleLogin}
                    className="group flex items-center gap-2 rounded-xl bg-zinc-950 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
                  >
                    Get started
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </motion.button>
                </>
              )}
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Page content */}
      <main className="relative z-10 pt-5">
        <HeroSection email={email} />

        <FeatureSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomeClient;
