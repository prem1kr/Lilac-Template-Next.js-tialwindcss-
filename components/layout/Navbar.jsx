"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-8 lg:px-14 py-4 lg:py-2 relative z-50">

        {/* left side */}
        <div className="flex items-center">

          {/*hamburger */}
          <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1.5 p-2 z-50"  >
            <span className={`w-6 h-0.5 bg-[#1f2d1c] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-[#1f2d1c] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-[#1f2d1c] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          <h1 className="hidden lg:block text-4xl font-heading tracking-wide text-[#1f2d1c]">  Lilac Template  </h1>
        </div>

        {/* right side */}
        <div className="hidden lg:flex items-center gap-12 text-lg text-[#1f2d1c]">
          <a href="#" className="hover:opacity-70 transition"> Blog </a>
          <a href="#" className="hover:opacity-70 transition">+ Contact </a>
        </div>

        {/* mobile logo */}
        <h1 className="lg:hidden text-xl font-heading text-[#1f2d1c]">   Lilac Template </h1>
      </nav>

      {/* mobile full screen after humburger clicked */}
      <div className={`fixed inset-0 bg-[#e7e3dc] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${open ? "translate-y-0" : "-translate-y-full"}`}  >
        <div className="flex flex-col items-center gap-10 text-4xl font-heading text-[#1f2d1c]">
          <a href="#" onClick={() => setOpen(false)} className="hover:opacity-70 transition"  > Blog </a>
          <a href="#" onClick={() => setOpen(false)} className="hover:opacity-70 transition" >  Contact </a>
        </div>
      </div>
    </>
  );
}
