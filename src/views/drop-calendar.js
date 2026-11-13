import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './drop-calendar.css'

const DropCalendar = (props) => {
  return (
    <div data-tq-el="1rdprc" className="drop-calendar-container1">
      <Helmet>
        <title>Drop calendar — Heatcheck</title>
        <meta
          name="description"
          content="What lands the next five Saturdays at 10:00, and how drop day works in the shop and online."
        />
        <meta property="og:title" content="Drop calendar — Heatcheck" />
        <meta
          property="og:description"
          content="What lands the next five Saturdays at 10:00, and how drop day works in the shop and online."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Drop calendar — Heatcheck" />
        <meta
          name="twitter:description"
          content="What lands the next five Saturdays at 10:00, and how drop day works in the shop and online."
        />
        <link
          rel="canonical"
          href="https://heatcheck-goiccy.teleporthq.site/drop-calendar"
        />
        <meta
          property="og:url"
          content="https://heatcheck-goiccy.teleporthq.site/drop-calendar"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              '[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://heatcheck-goiccy.teleporthq.site"},{"@type":"ListItem","position":2,"name":"Drop-Calendar","item":"https://heatcheck-goiccy.teleporthq.site/drop-calendar"}]},' +
              JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                '@id':
                  'https://heatcheck-goiccy.teleporthq.site/drop-calendar#webpage',
                url: 'https://heatcheck-goiccy.teleporthq.site/drop-calendar',
                name: 'Drop calendar — Heatcheck',
                description:
                  'What lands the next five Saturdays at 10:00, and how drop day works in the shop and online.',
                isPartOf: {
                  '@id': 'https://heatcheck-goiccy.teleporthq.site/#website',
                },
              }).replace(/</g, '\\u003c') +
              ',{"@context":"https://schema.org","@type":"Organization","@id":"https://heatcheck-goiccy.teleporthq.site/#organization","name":"Grid Zine Fest","url":"https://heatcheck-goiccy.teleporthq.site","sameAs":["https://www.instagram.com/gridzinefest","https://www.instagram.com/thingfromthesky/","http://www.instagram.com/donnaramone"]},{"@context":"https://schema.org","@type":"WebSite","@id":"https://heatcheck-goiccy.teleporthq.site/#website","name":"Grid Zine Fest","url":"https://heatcheck-goiccy.teleporthq.site","publisher":{"@id":"https://heatcheck-goiccy.teleporthq.site/#organization"}}]',
          }}
        />
      </Helmet>
      <Navigation></Navigation>
      <section data-tq-el="ajc7vf" id="tq-main" className="cal-hero">
        <div data-tq-el="188q61" className="cal-hero-inner hc-wrap">
          <div className="cal-hero-copy">
            <span className="hc-kicker">Drop calendar</span>
            <h1 data-tq-el="1jdvfs" className="cal-hero-title hc-title">
              <span>
                Saturdays,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="drop-calendar-thq-hc-mark-elm">10:00 sharp</span>
            </h1>
            <p className="hc-lede">
              New pairs hit the site and the wall at the same minute. Here’s
              what’s lined up.
            </p>
          </div>
          <div className="cal-hero-shot">
            <img
              loading="eager"
              decoding="async"
              alt="Hand spinning a red and white high-top against a red ground"
              src="https://images.unsplash.com/photo-1761330461729-6e5aacbf11b8?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
              data-tq-el="422nh9"
              className="cal-hero-img"
            />
            <div className="hc-tape cal-hero-tape"></div>
          </div>
        </div>
      </section>
      <section data-tq-el="1s80tt" className="cal-list">
        <div data-tq-el="11mn6q" className="cal-list-inner hc-wrap">
          <div className="cal-list-rows">
            <div className="cal-row-on cal-row">
              <div className="cal-date">
                <span className="cal-date-day">Sat</span>
                <span className="cal-date-num">24 Oct</span>
              </div>
              <div className="cal-row-copy">
                <h3 data-tq-el="xgy1in" className="cal-row-title">
                  High-top week
                </h3>
                <p className="cal-row-text">
                  Sky blue zip-tie highs and grey suede pairs, sizes MX 25–29.
                </p>
              </div>
              <span className="cal-row-badge">Up next</span>
            </div>
            <div className="cal-row">
              <div className="cal-date">
                <span className="cal-date-day">Sat</span>
                <span className="cal-date-num">31 Oct</span>
              </div>
              <div className="cal-row-copy">
                <h3 data-tq-el="h2o4qe" className="cal-row-title">
                  Black and orange
                </h3>
                <p className="cal-row-text">
                  Night-themed runners and the washed black hoodie in XXL.
                </p>
              </div>
              <span className="cal-row-badge-soft cal-row-badge">
                Confirmed
              </span>
            </div>
            <div className="cal-row">
              <div className="cal-date">
                <span className="cal-date-day">Sat</span>
                <span className="cal-date-num">7 Nov</span>
              </div>
              <div className="cal-row-copy">
                <h3 data-tq-el="1kfz1l" className="cal-row-title">
                  Cap wall refill
                </h3>
                <p className="cal-row-text">
                  Snapbacks and fitted caps from three Sonora embroidery shops.
                </p>
              </div>
              <span className="cal-row-badge-soft cal-row-badge">
                Confirmed
              </span>
            </div>
            <div className="cal-row">
              <div className="cal-date">
                <span className="cal-date-day">Sat</span>
                <span className="cal-date-num">14 Nov</span>
              </div>
              <div className="cal-row-copy">
                <h3 data-tq-el="cqqk8c" className="cal-row-title">
                  Court classics
                </h3>
                <p className="cal-row-text">
                  Basketball pairs from local collectors, checked this week.
                </p>
              </div>
              <span className="cal-row-badge-soft cal-row-badge">Checking</span>
            </div>
            <div className="cal-row">
              <div className="cal-date">
                <span className="cal-date-day">Sat</span>
                <span className="cal-date-num">21 Nov</span>
              </div>
              <div className="cal-row-copy">
                <h3 data-tq-el="9lfbno" className="cal-row-title">
                  Clean kit day
                </h3>
                <p className="cal-row-text">
                  Free deep clean on any pair you buy, all day.
                </p>
              </div>
              <span className="cal-row-badge-soft cal-row-badge">
                Confirmed
              </span>
            </div>
          </div>
          <div className="cal-list-rail">
            <img
              loading="lazy"
              decoding="async"
              alt="Black and red basketball shoes on a box printed with a court"
              src="https://images.unsplash.com/photo-1710643301219-5efe52cd0238?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
              data-tq-el="1a5f2n"
              className="cal-list-img"
            />
            <p className="cal-list-cap">
              Court classics land 14 Nov. Collectors drop their pairs off this
              week.
            </p>
          </div>
        </div>
      </section>
      <section data-tq-el="ucn6o0" className="cal-rules">
        <div data-tq-el="qz1obe" className="cal-rules-inner hc-wrap">
          <div className="cal-rules-copy">
            <h2 data-tq-el="1q0ojn" className="cal-rules-title hc-title">
              How drop day works
            </h2>
            <ul className="cal-rules-list">
              <li className="cal-rules-row">
                <span className="cal-rules-time">09:30</span>
                <span className="cal-rules-text">
                  Line starts at the door on Calle Garmendia. Water and shade
                  provided.
                </span>
              </li>
              <li className="cal-rules-row">
                <span className="cal-rules-time">10:00</span>
                <span className="cal-rules-text">
                  Site and doors open together. One pair per style, per person.
                </span>
              </li>
              <li className="cal-rules-row">
                <span className="cal-rules-time">10:15</span>
                <span className="cal-rules-text">
                  Bags in the online checkout are held for 15 minutes, then
                  released.
                </span>
              </li>
              <li className="cal-rules-row">
                <span className="cal-rules-time">14:00</span>
                <span className="cal-rules-text">
                  Last call for Monday shipping anywhere in Mexico.
                </span>
              </li>
            </ul>
          </div>
          <div className="cal-rules-photo">
            <img
              loading="lazy"
              decoding="async"
              alt="Man in a black cap and grey hoodie, seen from behind"
              src="https://images.unsplash.com/photo-1525740615880-50bb88fe0b1f?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
              data-tq-el="1qsr5t"
              className="cal-rules-img"
            />
            <span className="cal-rules-sticker">See you at 10</span>
          </div>
        </div>
      </section>
      <section data-tq-el="rgi9xo" className="cal-faq">
        <div data-tq-el="1l4mvu" className="hc-wrap cal-faq-inner">
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
            className="drop-calendar-motion-node1"
          >
            <h2 data-tq-el="1ginwy" className="hc-title cal-faq-title">
              Before you set an alarm
            </h2>
          </motion-node>
          <motion-node
            preset="fade-in"
            trigger="in-view"
            duration={0.6}
            delay={0.08}
            easing="ease-out"
            repeat={0}
            repeatType="loop"
            inViewOnce
            inViewAmount={0.1}
            stagger={0}
            distance={0}
            scrub={0}
            scrollOffset="pass"
            className="drop-calendar-motion-node2"
          >
            <div className="cal-faq-list">
              <div
                data-thq="accordion"
                className="drop-calendar-thq-cal-faq-item-elm1 cal-faq-item"
              >
                <details
                  name="cal-faq"
                  data-thq="accordion-trigger"
                  className="drop-calendar-accordion-trigger1"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="drop-calendar-thq-cal-faq-q-elm1 cal-faq-q"
                  >
                    <span className="cal-faq-q-text">
                      Can I reserve a pair before Saturday?
                    </span>
                    <div
                      data-thq="accordion-icon"
                      className="drop-calendar-thq-cal-faq-icon-elm1 cal-faq-icon"
                    >
                      <svg
                        fill="none"
                        width="22"
                        height="22"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        strokeWidth="3"
                        strokeLinecap="square"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content" className="cal-faq-body">
                  <div className="cal-faq-pad">
                    <p className="cal-faq-a">
                      No holds before a drop. Everyone gets the same 10:00
                      start, online and at the door.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-thq="accordion"
                className="drop-calendar-thq-cal-faq-item-elm2 cal-faq-item"
              >
                <details
                  name="cal-faq"
                  data-thq="accordion-trigger"
                  className="drop-calendar-accordion-trigger2"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="drop-calendar-thq-cal-faq-q-elm2 cal-faq-q"
                  >
                    <span className="cal-faq-q-text">
                      How many pairs can I buy?
                    </span>
                    <div
                      data-thq="accordion-icon"
                      className="drop-calendar-thq-cal-faq-icon-elm2 cal-faq-icon"
                    >
                      <svg
                        fill="none"
                        width="22"
                        height="22"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        strokeWidth="3"
                        strokeLinecap="square"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content" className="cal-faq-body">
                  <div className="cal-faq-pad">
                    <p className="cal-faq-a">
                      One pair per style per person on drop day. Hoodies and
                      caps have no limit.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-thq="accordion"
                className="drop-calendar-thq-cal-faq-item-elm3 cal-faq-item"
              >
                <details
                  name="cal-faq"
                  data-thq="accordion-trigger"
                  className="drop-calendar-accordion-trigger3"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="drop-calendar-thq-cal-faq-q-elm3 cal-faq-q"
                  >
                    <span className="cal-faq-q-text">
                      What time is 10:00 for me?
                    </span>
                    <div
                      data-thq="accordion-icon"
                      className="drop-calendar-thq-cal-faq-icon-elm3 cal-faq-icon"
                    >
                      <svg
                        fill="none"
                        width="22"
                        height="22"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        strokeWidth="3"
                        strokeLinecap="square"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content" className="cal-faq-body">
                  <div className="cal-faq-pad">
                    <p className="cal-faq-a">
                      Hermosillo time, which stays on UTC−7 all year. The
                      countdown on our home page already does the maths for you.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-thq="accordion"
                className="drop-calendar-thq-cal-faq-item-elm4 cal-faq-item"
              >
                <details
                  name="cal-faq"
                  data-thq="accordion-trigger"
                  className="drop-calendar-accordion-trigger4"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="drop-calendar-thq-cal-faq-q-elm4 cal-faq-q"
                  >
                    <span className="cal-faq-q-text">
                      Do you ship drop-day orders right away?
                    </span>
                    <div
                      data-thq="accordion-icon"
                      className="drop-calendar-thq-cal-faq-icon-elm4 cal-faq-icon"
                    >
                      <svg
                        fill="none"
                        width="22"
                        height="22"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        strokeWidth="3"
                        strokeLinecap="square"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content" className="cal-faq-body">
                  <div className="cal-faq-pad">
                    <p className="cal-faq-a">
                      Orders placed by 14:00 on Saturday go out Monday morning
                      with tracking, anywhere in Mexico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion-node>
        </div>
      </section>
      <section data-tq-el="pfk9v9" className="cal-cta">
        <div data-tq-el="ohk6ce" className="hc-wrap cal-cta-inner">
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
            className="drop-calendar-motion-node3"
          >
            <h2 data-tq-el="xukfek" className="cal-cta-title hc-title">
              Can’t wait for Saturday?
            </h2>
          </motion-node>
          <motion-node
            preset="slide-up"
            trigger="in-view"
            duration={0.6}
            delay={0.08}
            easing="ease-out"
            repeat={0}
            repeatType="loop"
            inViewOnce
            inViewAmount={0.25}
            stagger={0}
            distance={24}
            scrub={0}
            scrollOffset="pass"
            className="drop-calendar-motion-node4"
          >
            <p className="cal-cta-text">Sixteen pieces are live right now.</p>
          </motion-node>
          <motion-node
            preset="slide-up"
            trigger="in-view"
            duration={0.6}
            delay={0.16}
            easing="ease-out"
            repeat={0}
            repeatType="loop"
            inViewOnce
            inViewAmount={0.25}
            stagger={0}
            distance={24}
            scrub={0}
            scrollOffset="pass"
            className="drop-calendar-motion-node5"
          >
            <Link
              to="/past-fests"
              data-thq-link-box="true"
              className="cal-cta-btn hc-cta btn btn-primary"
            >
              <span>Shop the drop</span>
            </Link>
          </motion-node>
        </div>
      </section>
      <div className="drop-calendar-container2">
        <div className="drop-calendar-container3">
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
</style>`}
          ></Script>
        </div>
      </div>
      <div className="drop-calendar-container4">
        <div className="drop-calendar-container5">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.cal-rules-sticker {
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DropCalendar
