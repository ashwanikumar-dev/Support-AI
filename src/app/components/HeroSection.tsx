"use client";

import { ArrowRight, Bot, Check, MessageCircle, Zap } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  email?: string | null;
}

const HeroSection = ({ email }: HeroSectionProps) => {
  const navigate = useRouter();

  const handlePrimaryAction = () => {
    if (email) {
      navigate.push("/dashboard");
      return;
    }

    window.location.href = "/api/auth/login";
  };

  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-28 sm:pb-36 sm:pt-36">
      {/* Hero glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-125 w-175 -translate-x-1/2 rounded-full bg-zinc-200/40 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3.5 py-2 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 text-white">
                <Bot size={11} />
              </span>
              AI-powered customer support
            </motion.div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-zinc-950 sm:text-5xl md:text-6xl lg:text-[64px]">
              Your customers ask.
              <br />
              <span className="text-zinc-400">Your AI answers.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
              Build an AI support assistant that understands your business,
              answers customer questions instantly, and works around the clock.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handlePrimaryAction}
                className="group flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-zinc-950/10 transition-colors hover:bg-zinc-800"
              >
                {email ? "Go to Dashboard" : "Get Started"}

                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </motion.button>

              <a
                href="#feature"
                className="flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-zinc-300 hover:bg-zinc-50"
              >
                See how it works
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check size={10} strokeWidth={3} />
                </span>
                No complex setup
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check size={10} strokeWidth={3} />
                </span>
                Business-aware AI
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check size={10} strokeWidth={3} />
                </span>
                24/7 support
              </div>
            </div>
          </motion.div>

          {/* RIGHT — CHAT DEMO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-130"
          >
            {/* Back glow */}
            <div className="absolute inset-10 rounded-[40px] bg-zinc-300/30 blur-3xl" />

            {/* Main window */}
            <div className="relative overflow-hidden rounded-[26px] border border-zinc-200 bg-white shadow-[0_35px_90px_-35px_rgba(0,0,0,0.3)]">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 transition-transform duration-200 group-hover:scale-105">
                    <Image
                      src="/supportAi_logo.png"
                      alt="Support AI"
                      width={40}
                      height={40}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      Support AI
                    </p>

                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[10px] text-zinc-400">Online</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-medium text-zinc-500">
                  AI Assistant
                </div>
              </div>

              {/* Chat body */}
              <div className="min-h-[390px] bg-[#fafafa] p-5 sm:p-6">
                {/* Date */}
                <div className="mb-6 flex justify-center">
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-zinc-400 shadow-sm">
                    Today
                  </span>
                </div>

                {/* Customer */}
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="mb-4 flex justify-end"
                >
                  <div className="max-w-[78%] rounded-2xl rounded-br-md bg-zinc-950 px-4 py-3 text-sm leading-5 text-white shadow-sm">
                    Do you offer cash on delivery?
                  </div>
                </motion.div>

                {/* AI */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="mb-5 flex items-end gap-2"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-950 transition-transform duration-200 group-hover:scale-105">
                    <Image
                      src="/supportAi_logo.png"
                      alt="Support AI"
                      width={40}
                      height={40}
                    />
                  </div>

                  <div className="max-w-[78%] rounded-2xl rounded-bl-md border border-zinc-100 bg-white px-4 py-3 text-sm leading-5 text-zinc-700 shadow-sm">
                    Yes! Cash on Delivery is available for eligible orders.
                    Would you like to know the available delivery options?
                  </div>
                </motion.div>

                {/* Customer second message */}
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                  className="mb-4 flex justify-end"
                >
                  <div className="max-w-[70%] rounded-2xl rounded-br-md bg-zinc-950 px-4 py-3 text-sm leading-5 text-white shadow-sm">
                    How long does delivery take?
                  </div>
                </motion.div>

                {/* Typing */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-950 transition-transform duration-200 group-hover:scale-105">
                    <Image
                      src="/supportAi_logo.png"
                      alt="Support AI"
                      width={40}
                      height={40}
                    />
                  </div>

                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-zinc-100 bg-white px-4 py-3 shadow-sm">
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        delay: 0,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                    />

                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        delay: 0.15,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                    />

                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        delay: 0.3,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Input preview */}
              <div className="border-t border-zinc-100 bg-white p-4">
                <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5">
                  <span className="flex-1 text-xs text-zinc-400">
                    Ask anything about this business...
                  </span>

                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-950 text-white">
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.4,
                duration: 0.5,
              }}
              className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Zap size={17} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Instant responses
                  </p>

                  <p className="text-[10px] text-zinc-400">
                    Powered by your knowledge
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating chat icon */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute -right-4 -top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-xl"
            >
              <MessageCircle size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
