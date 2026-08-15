"use client";

import axios from "axios";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Bot,
  Check,
  FileText,
  Mail,
  Save,
  Sparkles,
} from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-200 hover:border-zinc-400 focus:border-zinc-950 focus:ring-4 focus:ring-zinc-100";

interface DashboardClientProps {
  ownerId: string;
}

const DashboardClient = ({ ownerId }: DashboardClientProps) => {
  const navigate = useRouter();

  const [businessName, setBusinessName] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [knowledge, setKnowledge] = useState("");

  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSettings = async () => {
    setLoading(true);

    try {
      const result = await axios.post("/api/settings", {
        ownerId,
        businessName,
        supportEmail,
        knowledge,
      });

      console.log(result.data);

      setSaved(true);
      setLoading(false);

      setTimeout(() => {
        setSaved(false);
      }, 5000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!ownerId) return;

    const handleGetDetails = async () => {
      try {
        const result = await axios.post("/api/settings/get", {
          ownerId,
        });

        setBusinessName(result.data.businessName || "");
        setSupportEmail(result.data.supportEmail || "");
        setKnowledge(result.data.knowledge || "");
      } catch (error) {
        console.log(error);
      }
    };

    handleGetDetails();
  }, [ownerId]);

  return (
    <div className="h-screen overflow-hidden bg-[#f5f5f5] text-zinc-950">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-zinc-200/40 blur-3xl" />

        <div className="absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-zinc-200/30 blur-3xl" />
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed left-0 right-0 top-0 z-50 h-[68px] border-b border-zinc-200 bg-white/90 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-5 sm:px-7">
          {/* Brand */}
          <button
            onClick={() => navigate.push("/")}
            className="group flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Bot size={18} strokeWidth={2} />
            </div>

            <div className="text-left">
              <p className="text-[15px] font-bold tracking-tight text-zinc-950">
                Support <span className="text-zinc-400">AI</span>
              </p>

              <p className="hidden text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400 sm:block">
                AI Support Platform
              </p>
            </div>
          </button>

          {/* Workspace status */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-[11px] font-semibold text-zinc-600 shadow-sm md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Workspace active
          </div>

          {/* Embed */}
          <button
            onClick={() => navigate.push("/embed")}
            className="flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-800 shadow-sm transition-all hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
          >
            <Sparkles size={14} />
            Embed Chatbot
          </button>
        </div>
      </motion.header>

      {/* =========================================================
          MAIN
      ========================================================= */}

      <main className="relative mx-auto h-screen max-w-[1500px] px-4 pb-5 pt-[84px] sm:px-6">
        <div className="flex h-full min-h-0 flex-col">
          {/* =====================================================
              PAGE HEADER
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 flex shrink-0 items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate.push("/")}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-600 shadow-sm transition-all hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
              >
                <ArrowLeft size={15} />
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-950">
                    Chatbot Settings
                  </h1>

                  <span className="hidden rounded-full border border-zinc-300 bg-white px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-zinc-500 sm:inline-flex">
                    Configuration
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-zinc-500">
                  Configure your business and teach your AI assistant.
                </p>
              </div>
            </div>

            {/* Save */}
            <div className="flex items-center gap-3">
              {saved && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="hidden items-center gap-2 text-xs font-semibold text-emerald-700 sm:flex"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
                    <Check size={13} />
                  </span>
                  Changes saved
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                onClick={handleSettings}
                className="flex items-center gap-2 rounded-xl bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-zinc-950/15 transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Save size={14} />

                {loading ? "Saving..." : "Save changes"}
              </motion.button>
            </div>
          </motion.div>

          {/* =====================================================
              WORKSPACE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[360px_minmax(0,1fr)]"
          >
            {/* =================================================
                LEFT — BUSINESS DETAILS
            ================================================= */}

            <section className="flex min-h-0 flex-col overflow-hidden rounded-3xl border border-zinc-300 bg-white shadow-[0_18px_50px_-25px_rgba(0,0,0,0.25)]">
              {/* Header */}
              <div className="shrink-0 border-b border-zinc-200 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white">
                    <Bot size={18} />
                  </div>

                  <div>
                    <h2 className="text-base font-bold tracking-tight text-zinc-950">
                      Business details
                    </h2>

                    <p className="mt-0.5 text-xs font-medium text-zinc-500">
                      Basic information about your business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="min-h-0 flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {/* Business name */}
                  <div>
                    <label
                      htmlFor="businessName"
                      className="mb-2 block text-sm font-bold text-zinc-900"
                    >
                      Business name
                    </label>

                    <input
                      id="businessName"
                      type="text"
                      className={inputClass}
                      placeholder="e.g. Gada Electronics"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />

                    <p className="mt-2 text-xs font-medium leading-5 text-zinc-500">
                      Your AI assistant will use this name when talking about
                      your business.
                    </p>
                  </div>

                  {/* Support email */}
                  <div>
                    <label
                      htmlFor="supportEmail"
                      className="mb-2 block text-sm font-bold text-zinc-900"
                    >
                      Support email
                    </label>

                    <div className="relative">
                      <Mail
                        size={15}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                      />

                      <input
                        id="supportEmail"
                        type="email"
                        className={`${inputClass} pl-11`}
                        placeholder="support@yourbusiness.com"
                        value={supportEmail}
                        onChange={(e) => setSupportEmail(e.target.value)}
                      />
                    </div>

                    <p className="mt-2 text-xs font-medium leading-5 text-zinc-500">
                      Used when customers need human assistance.
                    </p>
                  </div>

                  {/* Knowledge status */}
                  <div className="rounded-2xl border border-zinc-300 bg-zinc-50 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200">
                          <FileText size={15} />
                        </div>

                        <div>
                          <p className="text-xs font-bold text-zinc-900">
                            Knowledge base
                          </p>

                          <p className="mt-0.5 text-xs font-medium text-zinc-500">
                            AI context
                          </p>
                        </div>
                      </div>

                      <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Ready
                      </span>
                    </div>

                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-zinc-200">
                      <div className="h-full w-full rounded-full bg-zinc-950" />
                    </div>

                    <p className="mt-2 text-xs font-medium leading-5 text-zinc-500">
                      Your AI will use this information to answer customer
                      questions.
                    </p>
                  </div>

                  {/* What to include */}
                  <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-zinc-900" />

                      <p className="text-xs font-bold text-zinc-900">
                        What should I add?
                      </p>
                    </div>

                    <ul className="mt-3 space-y-2 text-sm font-medium leading-5 text-zinc-500">
                      <li>• Products and services</li>
                      <li>• Delivery and shipping information</li>
                      <li>• Return and refund policies</li>
                      <li>• Warranty and installation details</li>
                      <li>• FAQs and common customer questions</li>
                      <li>• Payment methods and support information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                RIGHT — KNOWLEDGE BASE
            ================================================= */}

            <section className="flex min-h-0 flex-col overflow-hidden rounded-3xl border border-zinc-300 bg-white shadow-[0_18px_50px_-25px_rgba(0,0,0,0.25)]">
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-zinc-200 px-6 py-4 sm:px-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white">
                    <Sparkles size={17} />
                  </div>

                  <div>
                    <h2 className="text-base font-bold tracking-tight text-zinc-950">
                      Knowledge base
                    </h2>

                    <p className="mt-0.5 text-sm font-medium text-zinc-500">
                      Give your AI the information it needs to support your
                      customers.
                    </p>
                  </div>
                </div>

                <div className="hidden items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-bold text-zinc-500 sm:flex">
                  <FileText size={12} />
                  BUSINESS KNOWLEDGE
                </div>
              </div>

              {/* Editor */}
              <div className="min-h-0 flex-1 p-5">
                <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-300 bg-zinc-50">
                  {/* Toolbar */}
                  <div className="flex shrink-0 items-center justify-between border-b border-zinc-200 bg-zinc-100 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                      </div>

                      <span className="ml-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Knowledge editor
                      </span>
                    </div>

                    <span className="rounded-md bg-white px-2 py-1 text-xs font-bold uppercase tracking-wide text-zinc-500 ring-1 ring-zinc-200">
                      Plain text
                    </span>
                  </div>

                  {/* Textarea */}
                  <textarea
                    value={knowledge}
                    onChange={(e) => setKnowledge(e.target.value)}
                    className="min-h-0 flex-1 resize-none overflow-y-auto bg-white px-6 py-5 font-mono text-sm leading-7 text-zinc-800 outline-none placeholder:text-zinc-400"
                    placeholder={`Tell your AI everything it needs to know about your business.

Products & services
Delivery & shipping
Payments & COD
Returns & refunds
Warranty & installation
Support hours
FAQs & common questions

Example:
Delivery: 3–5 working days
COD: Available on eligible orders
Returns: 7 days

Only add accurate business information.`}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex shrink-0 items-center justify-between border-t border-zinc-200 bg-zinc-50 px-6 py-3">
                <p className="text-xs font-medium text-zinc-500">
                  Keep your business information accurate and up to date.
                </p>

                <div className="hidden items-center gap-1.5 text-xs font-bold text-emerald-700 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  AI context ready
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DashboardClient;
