"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.gif" alt="dna" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
            <span className="hidden sm:inline text-sm sm:text-base text-gray-500">Holistic homeopathic care</span>
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <Link href="#" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="#blogs" className="text-gray-700 hover:text-gray-900">Blogs</Link>
          <Link href="#appointments" className="text-gray-700 hover:text-gray-900">Appointments</Link>
          <Link href="#location" className="text-gray-700 hover:text-gray-900">Location</Link>
          <Link href="#contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </div>

        <div className="sm:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-gray-700"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="sm:hidden bg-white/95 border-t">
          <div className="px-6 py-4 flex flex-col gap-3">
            <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
              <img src="/logo.gif" alt="Default Logo" className="h-20 w-20 object-contain" />
              <span className="text-sm text-gray-500">Holistic homeopathic care</span>
            </div>
            <Link href="/" className="text-gray-700">Home</Link>
            <Link href="#blogs" className="text-gray-700">Blogs</Link>
            <Link href="#appointments" className="text-gray-700">Appointments</Link>
            <Link href="#location" className="text-gray-700">Location</Link>
            <Link href="#contact" className="text-gray-700">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
