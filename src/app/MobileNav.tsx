"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-toggle"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#practices" onClick={() => setOpen(false)}>Services</a>
        <a href="#approach" onClick={() => setOpen(false)}>Approach</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </>
  );
}
