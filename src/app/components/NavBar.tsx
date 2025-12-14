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
            <div className="block sm:hidden justify-start items-center mb-2">
              <span className="text-lg font-poppins font-bold text-gray-800">Anup Homoeo Pharmacy</span>
              <p className="text-xs text-gray-500">Holistic homeopathic care</p>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-poppins font-bold text-gray-800">Anup Homoeo Pharmacy</span>
              <p className="text-xs text-gray-500">Holistic homeopathic care</p>
            </div>
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900 hover:bg-white px-3 py-2 rounded-md">Home</Link>
          <Link href="#blogs" className="text-gray-700 hover:text-gray-900 hover:bg-white px-3 py-2 rounded-md">Blogs</Link>
          <Link href="/appointments" className="text-gray-700 hover:text-gray-900 hover:bg-white px-3 py-2 rounded-md">Appointments</Link>
          <Link href="#location" className="text-gray-700 hover:text-gray-900 hover:bg-white px-3 py-2 rounded-md">Location</Link>
          <Link href="#contact" className="text-gray-700 hover:text-gray-900 hover:bg-white px-3 py-2 rounded-md">Contact</Link>
          {/* <Link href="/post/blogs" className="text-gray-700 hover:text-gray-900 hover:bg-white px-3 py-2 rounded-md">Admin</Link> */}
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
            <Link href="/" className="text-gray-700 hover:text-gray-900 hover:bg-gray-300 px-3 py-2 rounded-md">Home</Link>
            <Link href="#blogs" className="text-gray-700 hover:text-gray-900 hover:bg-gray-300 px-3 py-2 rounded-md">Blogs</Link>
            <Link href="/appointments" className="text-gray-700 hover:text-gray-900 hover:bg-gray-300 px-3 py-2 rounded-md">Appointments</Link>
            <Link href="#location" className="text-gray-700 hover:text-gray-900 hover:bg-gray-300 px-3 py-2 rounded-md">Location</Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 hover:bg-gray-300 px-3 py-2 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
