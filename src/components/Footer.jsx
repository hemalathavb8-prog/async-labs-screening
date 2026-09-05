import './Footer.css'

const NAV_LINKS = [
  { label: 'Product',    href: '#product'            },
  { label: 'Features',   href: '#features'           },
  { label: 'Use Cases',  href: '#use-cases-placement'},
]

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">

        {/* Brand + tagline */}
        <div className="footer__brand">
          <a href="#" className="footer__brand-name" aria-label="Async Labs home">
            ASYNC LABS
          </a>
          <p className="footer__tagline">
            Everything you need. At a glance.
          </p>
        </div>

        {/* Navigation */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <ul role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copy">
          &copy; 2026 Async Labs. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
