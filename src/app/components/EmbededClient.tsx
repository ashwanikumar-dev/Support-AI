"use client";

import React, { useState } from "react";
import {
  Check,
  Copy,
  Code2,
  Globe2,
  MessageCircle,
  ShieldCheck,
  ArrowLeft,
  Bot,
} from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

function EmbededClient({ ownerId }: { ownerId: string }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const script = `<script
  src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js"
  data-owner-id="${ownerId}"
></script>`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(script);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="h-screen overflow-hidden bg-zinc-50 text-zinc-950">
      {/* ================= HEADER ================= */}
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div
            onClick={() => router.push("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="flex size-9 items-center justify-center rounded-xl bg-black text-white shadow-sm">
              <Bot className="size-4" />
            </div>

            <div>
              <p className="text-[15px] font-bold tracking-tight text-zinc-950">
                Support <span className="text-zinc-400">AI</span>
              </p>

              <p className="text-xs text-zinc-500">Embed your AI assistant</p>
            </div>
          </div>

          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900"
          >
            <ArrowLeft className="size-4" />
            Back
          </button>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="relative mx-auto h-[calc(100vh-4rem)] max-w-7xl px-6 py-4 lg:px-8">
        {/* ================= INTRO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pt-5"
        >
          <div className="flex items-end justify-between gap-8">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Add Support AI to your website
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 md:text-base">
                Add one small script to your website and your AI support
                assistant will appear automatically in the bottom-right corner.
              </p>
            </div>

            {/* Website Integration */}
            <div className="mb-1 hidden shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-sm md:inline-flex">
              <Code2 className="size-3.5" />
              Website Integration
            </div>
          </div>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="mt-6 grid min-h-0 gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* ================= LEFT ================= */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
          >
            {/* Section Header */}
            <div className="border-b border-zinc-200 px-7 py-6">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
                  <Code2 className="size-5 text-zinc-700" />
                </div>

                <div>
                  <h2 className="text-sm font-semibold">
                    Add the embed script
                  </h2>

                  <p className="mt-1.5 text-xs leading-5 text-zinc-500">
                    Paste this code before the closing{" "}
                    <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-[11px] text-zinc-700">
                      &lt;/body&gt;
                    </code>{" "}
                    tag of your website.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Left Content */}
            <div className="flex flex-col p-7">
              {/* Code */}
              <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-inner">
                {/* Code Header */}
                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-red-400" />
                    <span className="size-2 rounded-full bg-yellow-400" />
                    <span className="size-2 rounded-full bg-green-400" />

                    <span className="ml-2 text-[11px] text-zinc-500">HTML</span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded-lg border border-zinc-700 px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
                  >
                    {copied ? (
                      <>
                        <Check className="size-3.5" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                {/* Code */}
                <pre className="overflow-x-auto p-6 text-xs leading-6 text-zinc-300">
                  <code>{script}</code>
                </pre>
              </div>

              {/* Steps */}
              <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="flex gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-semibold text-white">
                    1
                  </div>

                  <div>
                    <p className="text-sm font-medium">Copy the script</p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Use the copy button above.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-semibold text-white">
                    2
                  </div>

                  <div>
                    <p className="text-sm font-medium">Paste it</p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Add it before the closing body tag.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-semibold text-white">
                    3
                  </div>

                  <div>
                    <p className="text-sm font-medium">You&apos;re live</p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Your chatbot appears automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ================= RIGHT ================= */}
          <div className="flex flex-col">
            {/* Preview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex h-full min-h-0 flex-col rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl bg-zinc-100">
                  <Globe2 className="size-5 text-zinc-700" />
                </div>

                <div>
                  <h2 className="text-base font-semibold text-zinc-900">
                    Widget preview
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    See how Support AI will appear on your website.
                  </p>
                </div>
              </div>

              <div className="relative mt-6 min-h-0 flex-1 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                {/* Fake Website Background */}
                <div className="absolute inset-0 bg-white">
                  <div className="flex h-9 items-center gap-2 border-b border-zinc-200 px-4">
                    <div className="h-2 w-12 rounded-full bg-zinc-200" />
                    <div className="h-2 w-7 rounded-full bg-zinc-100" />
                    <div className="h-2 w-9 rounded-full bg-zinc-100" />
                  </div>

                  <div className="p-5">
                    <div className="h-3 w-24 rounded-full bg-zinc-200" />
                    <div className="mt-3 h-2 w-40 rounded-full bg-zinc-100" />
                    <div className="mt-2 h-2 w-32 rounded-full bg-zinc-100" />

                    <div className="mt-7 grid grid-cols-3 gap-2">
                      <div className="h-14 rounded-lg bg-zinc-100" />
                      <div className="h-14 rounded-lg bg-zinc-100" />
                      <div className="h-14 rounded-lg bg-zinc-100" />
                    </div>
                  </div>
                </div>

                {/* Chat Window */}
                <div className="absolute bottom-16 right-3 flex h-48 w-56 flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="flex size-6 items-center justify-center rounded-md bg-zinc-950 text-white">
                        <Bot className="size-3" />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-zinc-900">
                          Support AI
                        </p>

                        <div className="flex items-center gap-1">
                          <span className="size-1 rounded-full bg-emerald-500" />

                          <span className="text-[8px] text-zinc-500">
                            Online
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="text-xs text-zinc-400">×</span>
                  </div>

                  {/* Messages */}
                  <div className="flex flex-1 flex-col gap-2 overflow-hidden bg-zinc-50 p-3">
                    {/* AI */}
                    <div className="flex items-start gap-1.5">
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-md bg-zinc-950 text-white">
                        <Bot className="size-2.5" />
                      </div>

                      <div className="max-w-[75%] rounded-lg rounded-tl-sm border border-zinc-200 bg-white px-2.5 py-1.5">
                        <p className="text-[9px] leading-3.5 text-zinc-700">
                          Hi! How can I help you today?
                        </p>
                      </div>
                    </div>

                    {/* User */}
                    <div className="flex justify-end">
                      <div className="max-w-[75%] rounded-lg rounded-tr-sm bg-zinc-950 px-2.5 py-1.5">
                        <p className="text-[9px] leading-3.5 text-white">
                          Do you offer cash on delivery?
                        </p>
                      </div>
                    </div>

                    {/* AI */}
                    <div className="flex items-start gap-1.5">
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-md bg-zinc-950 text-white">
                        <Bot className="size-2.5" />
                      </div>

                      <div className="max-w-[80%] rounded-lg rounded-tl-sm border border-zinc-200 bg-white px-2.5 py-1.5">
                        <p className="text-[9px] leading-3.5 text-zinc-700">
                          Yes, Cash on Delivery is available.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="border-t border-zinc-200 bg-white p-2">
                    <div className="flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1">
                      <span className="flex-1 text-[8px] text-zinc-400">
                        Ask anything...
                      </span>

                      <div className="flex size-5 items-center justify-center rounded bg-zinc-950 text-white">
                        <span className="text-[10px]">➤</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Chat Bubble */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full bg-zinc-950 text-white shadow-xl ring-4 ring-white"
                >
                  <MessageCircle size={20} />
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>

        {/* ================= BOTTOM NOTE ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-5 flex items-start gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-3"
        >
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100">
            <ShieldCheck className="size-4 text-zinc-600" />
          </div>

          <div>
            <p className="text-xs font-medium text-zinc-800">
              Your configuration is connected to this widget
            </p>

            <p className="mt-1 text-xs leading-5 text-zinc-500">
              The chatbot uses your business details and knowledge base to
              answer customer questions. Keep your knowledge base accurate and
              up to date.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default EmbededClient;
