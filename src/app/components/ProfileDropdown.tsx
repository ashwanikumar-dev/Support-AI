"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, LayoutDashboard, LogOut } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ProfileDropdownProps {
  email: string;
}

const ProfileDropdown = ({ email }: ProfileDropdownProps) => {
  const navigate = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const firstLetter = email.charAt(0).toUpperCase();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("api/auth/logout");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Profile Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2"
      >
        {firstLetter}
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute right-0 top-full z-50 mt-3 w-60 origin-top-right overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/95 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl"
            role="menu"
          >
            {/* Profile Header */}
            <div className="border-b border-zinc-100 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white">
                  {firstLetter}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-900">
                    Welcome back
                  </p>

                  <p className="truncate text-xs text-zinc-500">{email}</p>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="p-1.5">
              {/* Dashboard */}
              <button
                onClick={() => navigate.push("/dashboard")}
                type="button"
                role="menuitem"
                className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-white">
                  <LayoutDashboard className="h-4 w-4" />
                </div>

                <span>Dashboard</span>

                <ChevronRight className="ml-auto h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                type="button"
                role="menuitem"
                className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-zinc-700 transition-colors hover:bg-red-50"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 transition-colors group-hover:bg-red-100 group-hover:text-red-600">
                  <LogOut className="h-4 w-4" />
                </div>

                <span className="transition-colors group-hover:text-red-600">
                  Logout
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
