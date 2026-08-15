"use client";

import {
  Bot,
  Code2,
  Clock3,
  Database,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const FeatureSection = () => {
  const features = [
    {
      number: "01",
      icon: Code2,
      title: "Plug & Play",
      desc: "Add Support AI to any website with a lightweight script. No complex integration or frontend changes required.",
      tag: "Easy integration",
    },
    {
      number: "02",
      icon: Database,
      title: "Your Knowledge, Your Rules",
      desc: "Give the AI your business information, FAQs, policies, and support details so it answers from your own knowledge.",
      tag: "Full control",
    },
    {
      number: "03",
      icon: Clock3,
      title: "Always Available",
      desc: "Give customers instant answers around the clock, even when your team is offline or unavailable.",
      tag: "24 / 7 support",
    },
  ];

  return (
    <section
      id="feature"
      className="relative overflow-hidden border-t border-zinc-200/80 bg-white px-6 py-28 sm:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-zinc-100/70 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-medium text-zinc-500">
            <Sparkles size={13} />
            Built for modern businesses
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-4xl">
            Support that works
            <span className="text-zinc-400"> while you sleep.</span>
          </h2>

          <p className="mt-5 text-sm leading-6 text-zinc-500 sm:text-base">
            Everything you need to turn your business knowledge into an AI
            support assistant your customers can actually use.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_12px_40px_-25px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:shadow-[0_25px_60px_-30px_rgba(0,0,0,0.25)] sm:p-8"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-zinc-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top row */}
                <div className="relative flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-white shadow-sm">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <span className="font-mono text-xs font-medium text-zinc-300">
                    {feature.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <div className="mb-3 inline-flex rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                    {feature.tag}
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {feature.desc}
                  </p>
                </div>

                {/* Bottom indicator */}
                <div className="relative mt-8 flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors group-hover:text-zinc-700">
                  <span className="h-px w-8 bg-zinc-200 transition-all duration-300 group-hover:w-12 group-hover:bg-zinc-400" />
                  Learn more
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom product highlight */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950"
        >
          <div className="relative flex flex-col justify-between gap-8 px-7 py-8 sm:px-9 lg:flex-row lg:items-center">
            {/* Background glow */}
            <div className="pointer-events-none absolute right-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-zinc-700/30 blur-3xl" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-zinc-950">
                <Bot size={19} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  The result
                </p>

                <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
                  Less repetitive support. More time for your team.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                  Support AI handles common customer questions using the
                  knowledge you provide, while your team focuses on the
                  conversations that actually need a human.
                </p>
              </div>
            </div>

            <div className="relative flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-medium text-zinc-300">
              <Zap size={14} className="text-white" />
              Automated support
            </div>
          </div>
        </motion.div>

        {/* Mini capabilities */}
        <div className="mt-12 grid grid-cols-1 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-zinc-50/50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <Capability
            icon={MessageSquareText}
            title="Instant answers"
            description="Respond to common questions automatically."
          />

          <Capability
            icon={ShieldCheck}
            title="Controlled knowledge"
            description="The AI answers using information you provide."
          />

          <Capability
            icon={Bot}
            title="Human-ready"
            description="Keep your team focused on complex conversations."
          />
        </div>
      </div>
    </section>
  );
};

interface CapabilityProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Capability = ({ icon: Icon, title, description }: CapabilityProps) => {
  return (
    <div className="flex items-start gap-3 px-6 py-5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-zinc-700 shadow-sm ring-1 ring-zinc-200">
        <Icon size={15} />
      </div>

      <div>
        <p className="text-xs font-semibold text-zinc-800">{title}</p>

        <p className="mt-1 text-[11px] leading-5 text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
