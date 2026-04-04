import Image from "next/image";
import MobileNav from "./MobileNav";

export default function Navbar() {
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
          <li><a href="/#about">About</a></li>
          <li><a href="/#practices">Services</a></li>
          <li><a href="/#approach">Approach</a></li>
          <li><a href="/#contact" className="nav-cta">Contact</a></li>
        </ul>
        <MobileNav />
      </div>
    </nav>
  );
}
