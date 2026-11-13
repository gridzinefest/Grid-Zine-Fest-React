import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import Logo from './logo'
import './navigation.css'

const Navigation = (props) => {
  return (
    <div data-tq-el="1jd5eg" role="banner" className="navigation-container1">
      <nav data-tq-el="1brzve" className="hc-nav">
        <div data-tq-el="1ljm9s" className="hc-nav-bar">
          <div className="hc-nav-left">
            <Link
              to="/"
              data-thq-link-wrapper="true"
              className="navigation-navlink1"
            >
              <Logo
                rootClassName="logoroot-class-name"
                isOnDarkBackground={false}
                tqImageLoading="eager"
                tqImageFetchPriority="high"
                className="navigation-component1"
              ></Logo>
            </Link>
          </div>
          <Link
            to="/"
            data-thq-link-box="true"
            className="navigation-thq-hc-nav-brand-elm1 hc-nav-brand"
          ></Link>
          <div className="hc-nav-right">
            <label
              aria-label="Open menu"
              htmlFor="hc-nav-toggle"
              className="hc-nav-burger"
            >
              <svg
                fill="none"
                width="26"
                height="26"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                strokeWidth="3"
                strokeLinecap="square"
              >
                <line x1="3" x2="21" y1="6" y2="6"></line>
                <line x1="3" x2="21" y1="12" y2="12"></line>
                <line x1="3" x2="21" y1="18" y2="18"></line>
              </svg>
            </label>
            <div data-thq="thq-dropdown" className="hc-nav-drop">
              <ul
                data-thq="thq-dropdown-list"
                className="navigation-thq-hc-nav-panel-elm hc-nav-panel"
              >
                <li className="hc-nav-item">
                  <Link
                    to="/past-fests"
                    data-thq-link-box="true"
                    className="hc-nav-tile"
                  >
                    <span className="hc-nav-tile-name">{props.sneakers}</span>
                    <span className="hc-nav-tile-note">
                      {props.deadstockAndNearNewPairs}
                    </span>
                  </Link>
                </li>
                <li className="hc-nav-item">
                  <Link
                    to="/past-fests"
                    data-thq-link-box="true"
                    className="hc-nav-tile"
                  >
                    <span className="hc-nav-tile-name">{props.hoodies}</span>
                    <span className="hc-nav-tile-note">
                      {props.heavyweightFleeceWashedBeforeShippin}
                    </span>
                  </Link>
                </li>
                <li className="hc-nav-item">
                  <Link
                    to="/past-fests"
                    data-thq-link-box="true"
                    className="hc-nav-tile"
                  >
                    <span className="hc-nav-tile-name">{props.caps}</span>
                    <span className="hc-nav-tile-note">
                      {props.snapbacksAndFittedOneSize}
                    </span>
                  </Link>
                </li>
                <li className="hc-nav-item">
                  <Link
                    to="/past-fests"
                    data-thq-link-box="true"
                    className="hc-nav-tile"
                  >
                    <span className="hc-nav-tile-name">{props.care}</span>
                    <span className="hc-nav-tile-note">
                      {props.brushesCleanerAndLaces}
                    </span>
                  </Link>
                </li>
                <li className="hc-nav-item hc-nav-item-wide">
                  <Link
                    to="/drop-calendar"
                    data-thq-link-box="true"
                    className="hc-nav-feature"
                  >
                    <span className="hc-nav-feature-kicker">
                      {props.upNext}
                    </span>
                    <span className="hc-nav-feature-title">
                      {props.highTopWeekSaturday10}
                    </span>
                    <span className="hc-nav-feature-go">
                      {props.seeTheCalendar}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              to="/about"
              data-thq-link-box="true"
              className="navigation-thq-hc-nav-link-elm1 hc-nav-link"
            >
              <span>{props.about}</span>
            </Link>
            <Link
              to="/newsletter"
              data-thq-link-box="true"
              className="hc-nav-link"
            >
              <span className="navigation-text2">{props.newsletter}</span>
            </Link>
            <Link
              to="/past-fests"
              data-thq="thq-dropdown-toggle"
              aria-haspopup="true"
              data-thq-link-wrapper="true"
              tabIndex="0"
              className="navigation-navlink2"
            >
              <div
                role="button"
                className="navigation-thq-hc-nav-toggle-elm hc-nav-toggle"
              >
                <span className="hc-nav-toggle-text">{props.past}</span>
                <div data-thq="thq-dropdown-arrow" className="hc-nav-chev">
                  <svg
                    fill="none"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    strokeWidth="3.5"
                    strokeLinecap="square"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <input
          type="checkbox"
          id="hc-nav-toggle"
          data-tq-el="15633p"
          className="navigation-thq-hc-nav-check-elm hc-nav-check"
        />
        <div data-tq-el="1g3ybu" className="hc-nav-overlay">
          <div className="hc-nav-overlay-head">
            <Link to="/" data-thq-link-box="true" className="hc-nav-brand">
              <Logo isOnDarkBackground={false} tqImageLoading="eager"></Logo>
            </Link>
            <label
              aria-label="Close menu"
              htmlFor="hc-nav-toggle"
              className="hc-nav-close"
            >
              <svg
                fill="none"
                width="26"
                height="26"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                strokeWidth="3"
                strokeLinecap="square"
              >
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
            </label>
          </div>
          <div className="hc-nav-overlay-links">
            <Link
              to="/"
              data-thq-link-box="true"
              className="hc-nav-overlay-link"
            >
              <span>{props.home}</span>
            </Link>
            <Link
              to="/past-fests"
              data-thq-link-box="true"
              className="hc-nav-overlay-link"
            >
              <span>{props.drops}</span>
            </Link>
            <Link
              to="/drop-calendar"
              data-thq-link-box="true"
              className="hc-nav-overlay-link"
            >
              <span>{props.dropCalendar1}</span>
            </Link>
            <Link
              to="/newsletter"
              data-thq-link-box="true"
              className="hc-nav-overlay-link"
            >
              <span>{props.authenticity1}</span>
            </Link>
            <Link
              to="/about"
              data-thq-link-box="true"
              className="hc-nav-overlay-link"
            >
              <span>{props.contact}</span>
            </Link>
          </div>
          <div className="hc-nav-overlay-foot">
            <Link
              to="/past-fests"
              data-thq-link-box="true"
              className="hc-nav-overlay-cta"
            >
              <span>{props.shopTheDrop1}</span>
            </Link>
            <p className="hc-nav-overlay-note">{props.nextDropSaturday10001}</p>
          </div>
        </div>
      </nav>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@keyframes hc-nav-panel-bridge-off {
to {
  visibility: hidden;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
@media (max-width: 1200px) {
.hc-nav-ghost {
  display: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Navigation.defaultProps = {
  authenticity1: 'Authenticity',
  upNext: 'Up next',
  heavyweightFleeceWashedBeforeShippin:
    'Heavyweight fleece, washed before shipping',
  highTopWeekSaturday10: 'High-top week, Saturday 10:00',
  hoodies: 'Hoodies',
  home: 'Home',
  about: 'About',
  care: 'Care',
  brushesCleanerAndLaces: 'Brushes, cleaner and laces',
  caps: 'Caps',
  shopTheDrop1: 'Shop the drop',
  drops: 'Drops',
  snapbacksAndFittedOneSize: 'Snapbacks and fitted, one size to 7⅝',
  past: 'Past Fests',
  seeTheCalendar: 'See the calendar →',
  newsletter: 'Newsletter',
  dropCalendar1: 'Drop calendar',
  deadstockAndNearNewPairs: 'Deadstock and near-new pairs, MX 24–30',
  sneakers: 'Sneakers',
  contact: 'Contact',
  nextDropSaturday10001: 'Next drop Saturday 10:00 · Calle Garmendia 118',
}

Navigation.propTypes = {
  authenticity1: PropTypes.string,
  upNext: PropTypes.string,
  heavyweightFleeceWashedBeforeShippin: PropTypes.string,
  highTopWeekSaturday10: PropTypes.string,
  hoodies: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string,
  care: PropTypes.string,
  brushesCleanerAndLaces: PropTypes.string,
  caps: PropTypes.string,
  shopTheDrop1: PropTypes.string,
  drops: PropTypes.string,
  snapbacksAndFittedOneSize: PropTypes.string,
  past: PropTypes.string,
  seeTheCalendar: PropTypes.string,
  newsletter: PropTypes.string,
  dropCalendar1: PropTypes.string,
  deadstockAndNearNewPairs: PropTypes.string,
  sneakers: PropTypes.string,
  contact: PropTypes.string,
  nextDropSaturday10001: PropTypes.string,
}

export default Navigation
