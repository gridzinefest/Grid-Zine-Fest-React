import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div data-tq-el="1fn97e" className="home-container10">
      <Helmet>
        <title>Grid Zine Fest</title>
        <meta
          name="description"
          content="The coolest, queerest zine fest in Salt Lake City, Utah"
        />
        <meta property="og:title" content="Grid Zine Fest" />
        <meta
          property="og:description"
          content="The coolest, queerest zine fest in Salt Lake City, Utah"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Grid Zine Fest" />
        <meta
          name="twitter:description"
          content="The coolest, queerest zine fest in Salt Lake City, Utah"
        />
        <link
          rel="canonical"
          href="https://heatcheck-goiccy.teleporthq.site/"
        />
        <meta
          property="og:url"
          content="https://heatcheck-goiccy.teleporthq.site/"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              '[{"@context":"https://schema.org","@type":"Organization","@id":"https://heatcheck-goiccy.teleporthq.site/#organization","name":"Grid Zine Fest","url":"https://heatcheck-goiccy.teleporthq.site","sameAs":["https://www.instagram.com/gridzinefest","https://www.instagram.com/thingfromthesky/","http://www.instagram.com/donnaramone"]},{"@context":"https://schema.org","@type":"WebSite","@id":"https://heatcheck-goiccy.teleporthq.site/#website","name":"Grid Zine Fest","url":"https://heatcheck-goiccy.teleporthq.site","publisher":{"@id":"https://heatcheck-goiccy.teleporthq.site/#organization"}},' +
              JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                '@id': 'https://heatcheck-goiccy.teleporthq.site/#webpage',
                url: 'https://heatcheck-goiccy.teleporthq.site/',
                name: 'Grid Zine Fest',
                description:
                  'The coolest, queerest zine fest in Salt Lake City, Utah',
                isPartOf: {
                  '@id': 'https://heatcheck-goiccy.teleporthq.site/#website',
                },
              }).replace(/</g, '\\u003c') +
              ']',
          }}
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
th, td {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
}
thead th {
  font-weight: var(--font-weight-medium);
  background-color: color-mix(in srgb, var(--color-on-surface) 6%, transparent);
}
tbody tr {
  border-bottom: 1px solid color-mix(in srgb, var(--color-on-surface) 12%, transparent);
}
[data-tq-dead-link="true"], [data-tq-dead-link] {
  opacity: 0.5;
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  box-shadow: none;
}
input.input, select.input, textarea.input {
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  border-color: var(--color-border);
}
</style>`}
            id="tq-main"
          ></Script>
        </div>
      </div>
      <section
        data-tq-el="zuvlz4"
        className="home-thq-home-hero-elm hc-dots home-hero"
      >
        <div data-tq-el="p6qaw6" className="home-hero-inner hc-wrap">
          <div className="home-hero-copy home-thq-home-hero-copy-elm">
            <span className="hc-kicker">
              the coolest, queerest zine fest in Salt Lake City, Utah
            </span>
            <h1 data-tq-el="1378d6" className="home-hero-title hero-title"></h1>
            <p className="hc-lede home-hero-lede">
              Registration opens late November 2026. Subscribe to the newsletter
              or follow us on Instagram for updates!
            </p>
            <div className="hc-actions">
              <Link
                to="/newsletter"
                data-thq-link-box="true"
                className="hc-cta btn btn-primary"
              >
                <span>Newsletter</span>
              </Link>
              <a
                href="https://www.instagram.com/gridzinefest"
                data-thq-link-box="true"
                className="home-thq-btn-elm2 btn-outline hc-ghost btn"
              >
                <span>Grid&apos;s Instagram</span>
              </a>
            </div>
          </div>
          <div className="home-hero-stage home-thq-home-hero-stage-elm">
            <div className="hc-tape home-hero-tape-a"></div>
            <div className="hc-tape-orange home-hero-tape-b hc-tape"></div>
            <div className="home-hero-frame">
              <div className="home-hero-shot">
                <img
                  loading="eager"
                  decoding="async"
                  alt="image"
                  src="/gzf-church-400h.jpg"
                  data-tq-el="zyg143"
                  className="home-image1"
                />
              </div>
              <div data-drop-countdown="" className="home-hero-count">
                <div className="home-hero-count-head">
                  <span className="home-hero-count-label">
                    GRID ZINE FEST COUNTDOWN
                  </span>
                </div>
                <div className="home-hero-digits">
                  <div className="home-hero-unit">
                    <span data-unit="d" className="home-hero-num">
                      02
                    </span>
                    <span className="home-hero-unit-name">days</span>
                  </div>
                  <span className="home-hero-colon">:</span>
                  <div className="home-hero-unit">
                    <span data-unit="h" className="home-hero-num">
                      14
                    </span>
                    <span className="home-hero-unit-name">hrs</span>
                  </div>
                  <span className="home-hero-colon">:</span>
                  <div className="home-hero-unit">
                    <span data-unit="m" className="home-hero-num">
                      30
                    </span>
                    <span className="home-hero-unit-name">min</span>
                  </div>
                  <span className="home-hero-colon">:</span>
                  <div className="home-hero-unit">
                    <span data-unit="s" className="home-hero-num">
                      00
                    </span>
                    <span className="home-hero-unit-name">sec</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-hero-stickers">
              <motion-node
                preset="pop-in"
                trigger="in-view"
                duration={0.6}
                delay={0}
                easing="back"
                repeat={0}
                repeatType="loop"
                inViewOnce
                inViewAmount={0.3}
                stagger={0}
                distance={40}
                scrub={0}
                scrollOffset="pass"
                className="home-motion-node1"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  alt="image"
                  src="/grid_logo_2024-200h.png"
                  data-tq-el="k7ik9n"
                  className="home-image2"
                />
              </motion-node>
            </div>
          </div>
        </div>
      </section>
      <section data-tq-el="1omyge" className="home-thq-home-drops-elm">
        <div
          aria-hidden="true"
          data-tq-el="1unxcl"
          className="home-drops-ticker"
        >
          <div className="home-drops-ticker-track">
            <span>★</span>
            <span>March 27-28 2027</span>
            <span>★</span>
            <span>
              50 tablers each day
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>★</span>
            <span>100 Zine Makers</span>
            <span>★</span>
            <span>One weekend</span>
            <span>★</span>
            <span>10th anniversary of grid</span>
            <span>★</span>
          </div>
        </div>
      </section>
      <section data-tq-el="1jovqj" className="home-cal">
        <div data-tq-el="1anb85" className="home-cal-inner hc-wrap">
          <div aria-hidden="true" className="home-cal-under"></div>
          <motion-node
            preset="slide-up"
            trigger="in-view"
            duration={0.6}
            delay={0}
            easing="ease-out"
            repeat={0}
            repeatType="loop"
            inViewOnce
            inViewAmount={0.25}
            stagger={0}
            distance={24}
            scrub={0}
            scrollOffset="pass"
            className="home-motion-node2"
          >
            <Link
              to="/drop-calendar"
              data-thq-link-box="true"
              className="home-cal-card"
            >
              <span className="home-thq-home-cal-kicker-elm home-cal-kicker">
                Save the date
              </span>
              <span className="home-cal-title">
                SAT &amp; SUN March 27-28, 2027 12-5pm each day
              </span>
              <span className="home-thq-home-cal-row-elm">
                <span>
                  Held at
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text24">Church &amp; State</span>
                <span> – 370 S 300 E, Salt Lake City</span>
              </span>
            </Link>
          </motion-node>
        </div>
      </section>
      <div className="home-container13">
        <div className="home-container14">
          <Script
            html={`<script defer data-name="drop-countdown">
(function(){
(function () {
  var box = document.querySelector('[data-drop-countdown]');
  if (!box) { return; }
  var units = ['d', 'h', 'm', 's'];
  var els = {};
  units.forEach(function (u) { els[u] = box.querySelector('[data-unit="' + u + '"]'); });
  var OFFSET = 7 * 3600000;
  function nextDrop() {
    var now = Date.now();
    var local = new Date(now - OFFSET);
    var add = (6 - local.getUTCDay() + 7) % 7;
    var target = Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate() + add, 10, 0, 0) + OFFSET;
    if (now >= target) { target += 7 * 86400000; }
    return target;
  }
  function pad(n) { return (n > 9 ? '' : '0') + n; }
  function tick() {
    var left = Math.max(0, nextDrop() - Date.now());
    var s = Math.floor(left / 1000);
    var v = { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
    units.forEach(function (u) {
      var el = els[u];
      if (!el) { return; }
      var txt = pad(v[u]);
      if (el.textContent !== txt) {
        el.textContent = txt;
        el.classList.remove('is-flip');
        void el.offsetWidth;
        el.classList.add('is-flip');
      }
    });
  }
  tick();
  setInterval(tick, 1000);
})();
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="home-container15">
        <div className="home-container16">
          <Script
            html={`<script defer data-name="bag-feedback">
(function(){
document.querySelectorAll('.kick-card .add').forEach(function (b) {
  b.addEventListener('click', function () {
    if (b.classList.contains('is-added')) { return; }
    var label = b.textContent;
    b.classList.add('is-added');
    b.textContent = 'Added ✓';
    setTimeout(function () { b.classList.remove('is-added'); b.textContent = label; }, 1500);
  });
});
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="home-container17">
        <div className="home-container18">
          <Script
            html={`<style>
@keyframes hc-pop {
0% {
  scale: 0.55;
}
70% {
  scale: 1.08;
}
100% {
  scale: 1;
}
}
@keyframes home-flip {
0% {
  transform: translateY(-30%);
}
100% {
  transform: translateY(0);
}
}
@keyframes home-blink {
0% {
  opacity: 1;
}
100% {
  opacity: 0.55;
}
}
@keyframes home-marquee {
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-50%);
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="home-container19">
        <div className="home-container20">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.kick-card, .kick-img, .kick-btn {
  transition: none;
}
.kick-btn.is-added {
  animation: none;
}
}
@media (prefers-reduced-motion: reduce) {
.home-hero-sticker, .home-hero-num.is-flip, .home-hero-live, .home-drops-ticker-track {
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <Footer
        home="Home"
        sponsor="Grid Zine Fest is sponsored in part by the generous support of Salt Lake City Arts Council"
        footertext="GRID ZINE FEST"
      ></Footer>
    </div>
  )
}

export default Home
