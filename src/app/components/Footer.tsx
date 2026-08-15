"use client";

import { Bot, Heart, Mail } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main footer */}
        <div className="flex flex-col justify-between gap-8 py-10 sm:flex-row sm:items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/supportAi_logo.png"
                alt="Support AI"
                width={40}
                height={40}
              />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-tight text-zinc-900">
                Support <span className="text-zinc-400">AI</span>
              </p>

              <p className="mt-0.5 text-[11px] text-zinc-400">
                AI-powered customer support
              </p>
            </div>
          </motion.div>

          {/* Links */}
          <div className="flex items-center gap-5 text-xs font-medium text-zinc-500">
            <a
              href="#feature"
              className="transition-colors hover:text-zinc-950"
            >
              Features
            </a>

            <a
              href="mailto:support@example.com"
              className="flex items-center gap-1.5 transition-colors hover:text-zinc-950"
            >
              <Mail size={13} />
              Contact
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-3 border-t border-zinc-100 py-5 text-[11px] text-zinc-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} SupportAI. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Built with
            <Heart size={11} className="fill-current text-zinc-500" />
            for better customer support.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
