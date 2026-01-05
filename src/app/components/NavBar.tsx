"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#blogs", label: "Blogs" },
    { href: "/appointments", label: "Appointments" },
    { href: "/#location", label: "Location" },
    { href: "/#contact", label: "Contact" },
  ];

  const adminLinks = [
    { href: "/admin", label: "Admin" },
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.gif" alt="dna" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
            <div className="block sm:hidden justify-start items-center mb-2">
              <span className="text-lg font-poppins font-bold text-gray-800">Anup Homeo Pharmacy</span>
              <p className="text-xs text-gray-500">Holistic homeopathic care</p>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-poppins font-bold text-gray-800">Anup Homeo Pharmacy</span>
              <p className="text-xs text-gray-500">Holistic homeopathic care</p>
            </div>
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-700 hover:text-gray-900 hover:bg-white px-3 py-2 rounded-md ${
                pathname === link.href ? "font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          {user && adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-purple-700 hover:text-purple-900 hover:bg-purple-50 px-3 py-2 rounded-md ${
                pathname === link.href ? "font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Hi, {user.email?.split('@')[0]}</span>
              <button
                onClick={handleSignOut}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              href="/admin"
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm"
            >
              Login
            </Link>
          )}
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-gray-700 hover:text-gray-900 hover:bg-gray-300 px-3 py-2 rounded-md ${
                  pathname === link.href ? "font-bold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user && adminLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-purple-700 hover:text-purple-900 hover:bg-purple-100 px-3 py-2 rounded-md ${
                  pathname === link.href ? "font-bold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <div className="flex flex-col gap-2 pt-2 border-t">
                <div className="text-sm text-gray-600 px-3">Hi, {user.email?.split('@')[0]}</div>
                <button
                  onClick={() => {
                    handleSignOut();
                    setOpen(false);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm text-left"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
