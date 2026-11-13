import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div data-tq-el="1vgmu7" role="contentinfo" className="footer-container">
      <footer data-tq-el="1nfd3b" className="hc-foot">
        <div data-tq-el="o8bixh" className="hc-foot-inner">
          <div className="hc-foot-top">
            <Link to="/" data-thq-link-box="true" className="hc-foot-brand">
              <img
                loading={props.tqImageLoading}
                decoding="async"
                alt="image"
                src="/slac-logo-800x800-1-200h.webp"
                data-tq-el="1ipcee"
                className="footer-image"
              />
            </Link>
            <p className="hc-foot-note">{props.sponsor}</p>
            <div className="hc-foot-links">
              <Link to="/" data-thq-link-box="true" className="hc-foot-link">
                <span>home</span>
              </Link>
              <Link
                to="/about"
                data-thq-link-box="true"
                className="hc-foot-link"
              >
                <span>About</span>
              </Link>
              <Link
                to="/newsletter"
                data-thq-link-box="true"
                className="hc-foot-link"
              >
                <span>{props.newsletter}</span>
              </Link>
              <Link
                to="/past-fests"
                data-thq-link-box="true"
                className="hc-foot-link"
              >
                <span>{props.authenticity}</span>
              </Link>
            </div>
          </div>
          <p aria-hidden="true" className="hc-foot-mark">
            {props.footertext}
          </p>
          <div className="hc-foot-bottom">
            <span className="hc-foot-legal">{props.copyright}</span>
            <a
              href="https://www.instagram.com/gridzinefest"
              data-thq-link-box="true"
              className="hc-foot-social"
            >
              <span>{props.instagram}</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

Footer.defaultProps = {
  home: 'home',
  instagram: 'Instagram ↗',
  authenticity: 'PAST FESTS',
  copyright: '© 2026 Grid Zine Fest',
  sponsor:
    'Grid Zine Fest is sponsored in part by the generous support of Salt Lake City Arts Council',
  footertext: 'GRID ZINE FEST',
  newsletter: 'NEWSLETTER',
  tqImageLoading: 'lazy',
}

Footer.propTypes = {
  home: PropTypes.string,
  instagram: PropTypes.string,
  authenticity: PropTypes.string,
  copyright: PropTypes.string,
  sponsor: PropTypes.string,
  footertext: PropTypes.string,
  newsletter: PropTypes.string,
  tqImageLoading: PropTypes.string,
}

export default Footer
