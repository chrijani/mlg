import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/logo-white-vertical.png"
              alt="Mariotti Law Group"
              width={160}
              height={80}
              style={{ maxHeight: "70px", width: "auto", height: "auto" }}
            />
            <div className="footer-address">
              625 Erie Street East<br />
              Windsor, Ontario N9A 3Y1
            </div>
            <div className="footer-contact-info">
              <a href="tel:+15199973775">519-997-3775</a>
              <span>226-620-1943 fax</span>
              <a href="mailto:info@mariottilaw.ca">info@mariottilaw.ca</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/estate-planning">Wills &amp; Estate Planning</a></li>
              <li><a href="/estate-administration">Estate Administration</a></li>
              <li><a href="/mortgage-enforcement">Mortgage Enforcement</a></li>
              <li><a href="/private-lending">Private Lending</a></li>
              <li><a href="/real-estate-transactions">Real Estate Transactions</a></li>
              <li><a href="/real-estate-development">Real Estate Development</a></li>
              <li><a href="/corporate-commercial">Corporate &amp; Commercial</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Firm</h4>
            <ul>
              <li><a href="/team">Team</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Clause &amp; Effect</a></li>
              <li><a href="#">SimplyClose Law</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-divider">
          <div className="footer-divider-line"></div>
          <div className="footer-divider-diamond"></div>
          <div className="footer-divider-line"></div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Mariotti Law Group. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
