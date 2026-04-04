export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo-text" style={{ color: "var(--timberwolf)" }}>
              Mariotti<span style={{ color: "var(--dim-gray)" }}>Law Group</span>
            </div>
            <p>Advising Ontario families, lenders, and businesses since 1965. Founded by Anthony &ldquo;Tony&rdquo; Mariotti.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/estate-planning">Wills &amp; Estate Planning</a></li>
              <li><a href="/estate-administration">Estate Administration</a></li>
              <li><a href="#">Mortgage Enforcement</a></li>
              <li><a href="#">Private Lending</a></li>
              <li><a href="#">Real Estate Transactions</a></li>
              <li><a href="#">Real Estate Development</a></li>
              <li><a href="/corporate-commercial">Corporate &amp; Commercial</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Firm</h4>
            <ul>
              <li><a href="#">Team</a></li>
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
