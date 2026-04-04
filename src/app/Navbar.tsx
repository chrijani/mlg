"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";

const services = [
  { label: "Wills & Estate Planning", href: "/estate-planning" },
  { label: "Estate Administration", href: "/estate-administration" },
  { label: "Mortgage Enforcement", href: "/mortgage-enforcement" },
  { label: "Private Lending", href: "/private-lending" },
  { label: "Real Estate Transactions", href: "#" },
  { label: "Real Estate Development", href: "/real-estate-development" },
  { label: "Corporate & Commercial", href: "/corporate-commercial" },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav id="navbar">
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          <Image
            src="/logo-horizontal-black.png"
            alt="Mariotti Law Group"
            width={200}
            height={45}
            priority
            style={{ height: "auto" }}
          />
        </a>
        <ul className="nav-links">
          <li><a href="/team">Team</a></li>
          <li
            ref={dropdownRef}
            className="nav-services-wrap"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a
              href="/#practices"
              className="nav-services-trigger"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={(e) => {
                if (window.innerWidth > 768) {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }
                if (e.key === "Escape") {
                  setDropdownOpen(false);
                }
              }}
            >
              Services
              <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className={`services-dropdown${dropdownOpen ? " services-dropdown-open" : ""}`} role="menu">
              {services.map((s) => (
                <a key={s.label} href={s.href} role="menuitem" onClick={() => setDropdownOpen(false)}>
                  {s.label}
                </a>
              ))}
            </div>
          </li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/contact" className="nav-cta">Contact</a></li>
        </ul>
        <MobileNav services={services} />
      </div>
    </nav>
  );
}
