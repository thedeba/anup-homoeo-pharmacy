"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <Image src="/logo.gif" alt="Anup Homeo Hall" width={40} height={40} />
            </div>
            <div>
              <h4 className="font-extrabold text-xl leading-tight">Anup Homeo Pharmacy</h4>
              <p className="text-sm opacity-90">Holistic homeopathy care &amp; consultation</p>
            </div>
          </div>

          <p className="text-sm opacity-90">© {new Date().getFullYear()} Anup Homeo Pharmacy. All rights reserved.</p>
        </div>

        <div className="flex gap-12 md:gap-20">
          <div>
            <h5 className="font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#top" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
              <li>
                <a href="#blogs" className="hover:underline">Blogs</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Follow Us</h5>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="bg-white/20 hover:bg-white/30 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden>
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3v-2.9h2.3V9.1c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .1 2 .1v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4v1.7h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="bg-white/20 hover:bg-white/30 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden>
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A4.8 4.8 0 1016.8 13 4.8 4.8 0 0012 8.2zm6.4-3.6a1.1 1.1 0 11-1.1 1.1 1.1 1.1 0 011.1-1.1z" />
                </svg>
              </a>
              <a href="https://wa.me/+8801714623846" aria-label="WhatsApp" className="bg-white/20 hover:bg-white/30 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden>
                  <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .2 5.4.2 12c0 2 0.5 3.9 1.4 5.6L0 24l6.7-1.6a11.9 11.9 0 005.3 1.2c6.6 0 11.9-5.4 11.9-12 0-3.2-1.3-6.1-3.4-8.1zM12 21.2a9.1 9.1 0 01-4.6-1.2l-.3-.2-4 1 1-3.9-.2-.4A9 9 0 1121 12 9 9 0 0112 21.2zM17 14.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.6-.2-.9.2s-1 .9-1.2 1.1c-.2.3-.4.3-.7.1-.7-.4-1.4-1.3-2-2.4-.1-.2 0-.4.1-.6.1-.2.3-.6.4-.9.1-.3 0-.5-.1-.7-.2-.2-.9-2-1.3-2.7-.3-.7-.6-.6-.9-.6-.2 0-.5 0-.8 0-.3 0-.7.1-.9.3-.3.2-.8.8-.8 1.8s.9 2.1 1 2.2c.1.2 1.6 2.5 3.9 3.5 2.3 1 2.3.7 2.7.6.4-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.2 0-.1-.2-.2-.4-.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="min-w-[220px]">
          <h5 className="font-semibold mb-2">Subscribe</h5>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="Email address"
              className="w-full rounded-md px-3 py-2 text-gray-800 border-1 text-white"
            />
            <button className="bg-white text-indigo-600 font-semibold px-3 py-2 rounded-md">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
