"use client";

import { useState } from "react";

interface Service {
  label: string;
  href: string;
}

export default function MobileNav({ services }: { services: Service[] }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

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
        <button className="mobile-close" aria-label="Close menu" onClick={close}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="2" x2="18" y2="18" stroke="#141414" strokeWidth="1.5"/>
            <line x1="18" y1="2" x2="2" y2="18" stroke="#141414" strokeWidth="1.5"/>
          </svg>
        </button>
        <a href="#" onClick={close}>Team</a>
        <button
          className="mobile-accordion-trigger"
          aria-expanded={servicesOpen}
          onClick={() => setServicesOpen(!servicesOpen)}
        >
          Services
          <svg className={`mobile-accordion-chevron${servicesOpen ? " rotated" : ""}`} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="#141414" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className={`mobile-accordion-panel${servicesOpen ? " mobile-accordion-open" : ""}`}>
          {services.map((s) => (
            <a key={s.label} href={s.href} onClick={close}>{s.label}</a>
          ))}
        </div>
        <a href="#" onClick={close}>Resources</a>
        <a href="/contact" onClick={close}>Contact</a>
      </div>
    </>
  );
}
