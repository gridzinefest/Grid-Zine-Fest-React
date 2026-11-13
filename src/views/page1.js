import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './page1.css'

const Page1 = (props) => {
  return (
    <div data-tq-el="ndygdk" className="page1-container1">
      <Helmet>
        <title>The drop — Heatcheck</title>
        <meta
          name="description"
          content="All sneakers, hoodies, caps and cleaning kits in stock, priced in pesos, filtered by category."
        />
        <meta property="og:title" content="The drop — Heatcheck" />
        <meta
          property="og:description"
          content="All sneakers, hoodies, caps and cleaning kits in stock, priced in pesos, filtered by category."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="The drop — Heatcheck" />
        <meta
          name="twitter:description"
          content="All sneakers, hoodies, caps and cleaning kits in stock, priced in pesos, filtered by category."
        />
        <link
          rel="canonical"
          href="https://heatcheck-goiccy.teleporthq.site/page1"
        />
        <meta
          property="og:url"
          content="https://heatcheck-goiccy.teleporthq.site/page1"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              '[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://heatcheck-goiccy.teleporthq.site"},{"@type":"ListItem","position":2,"name":"Page1","item":"https://heatcheck-goiccy.teleporthq.site/page1"}]},' +
              JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                '@id': 'https://heatcheck-goiccy.teleporthq.site/page1#webpage',
                url: 'https://heatcheck-goiccy.teleporthq.site/page1',
                name: 'The drop — Heatcheck',
                description:
                  'All sneakers, hoodies, caps and cleaning kits in stock, priced in pesos, filtered by category.',
                isPartOf: {
                  '@id': 'https://heatcheck-goiccy.teleporthq.site/#website',
                },
              }).replace(/</g, '\\u003c') +
              ',{"@context":"https://schema.org","@type":"Organization","@id":"https://heatcheck-goiccy.teleporthq.site/#organization","name":"Grid Zine Fest","url":"https://heatcheck-goiccy.teleporthq.site","sameAs":["https://www.instagram.com/gridzinefest","https://www.instagram.com/thingfromthesky/","http://www.instagram.com/donnaramone"]},{"@context":"https://schema.org","@type":"WebSite","@id":"https://heatcheck-goiccy.teleporthq.site/#website","name":"Grid Zine Fest","url":"https://heatcheck-goiccy.teleporthq.site","publisher":{"@id":"https://heatcheck-goiccy.teleporthq.site/#organization"}}]',
          }}
        />
      </Helmet>
      <Navigation></Navigation>
      <section data-tq-el="1iq48j" id="tq-main" className="drops-hero">
        <div data-tq-el="ku0cv1" className="drops-hero-inner hc-wrap">
          <div className="drops-hero-copy">
            <h1 data-tq-el="7m1pvz" className="drops-hero-title hc-title">
              <span>2026 </span>
              <span className="page1-text2">GRID ZINE FEST</span>
            </h1>
          </div>
          <div className="drops-hero-side">
            <p className="hc-lede drops-hero-lede">
              Tablers for 2026 are listed by day and then alphabetically by
              name.
            </p>
          </div>
        </div>
      </section>
      <section data-tq-el="188ik7" className="drops-grid">
        <div data-tq-el="19hq7f" className="hc-wrap">
          <div className="page1-thq-drops-grid-bar-elm drops-grid-bar">
            <h3
              data-tq-el="18nabo"
              className="page1-thq-drops-grid-note-elm1 drops-grid-note"
            >
              ORGANIZERS
            </h3>
            <p className="page1-thq-drops-grid-note-elm2 drops-grid-note">
              If you need any help throughout the fest, keep your eye out for
              one of our organizers! They are all happy to help with anything
              you need. Some may be at their tables, others will be walking
              around to assist.
            </p>
          </div>
          <motion-node
            preset="slide-up"
            trigger="in-view"
            duration={0.6}
            delay={0}
            easing="ease-out"
            repeat={0}
            repeatType="loop"
            inViewOnce
            inViewAmount={0.1}
            stagger={0.03}
            distance={24}
            scrub={0}
            scrollOffset="pass"
          >
            <div className="drops-grid-list">
              <article data-cat="sneakers" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="White running shoe with a coral-orange swoosh and a red air bubble"
                    src="https://images.unsplash.com/photo-1600185365778-7875a359b924?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="1hzrnk"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Table #012 - SAT</span>
                <h3 data-tq-el="1fyc5f" className="kick-name">
                  Donna Ramone
                </h3>
                <p className="page1-thq-kick-price-elm10 kick-price">
                  She/They
                </p>
                <p className="kick-line">
                  Donna Ramone (she/they) is an Arab punk who believes
                  self-publishing is a beautiful and radical act. She’s been a
                  contributor for Razorcake, a DIY fanzine, since 2011. They
                  believe all punk shows should always be all-ages.
                </p>
                <button
                  type="button"
                  data-tq-el="ylb0iv"
                  className="add kick-btn"
                >
                  Website
                </button>
              </article>
              <article data-cat="sneakers" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Pair of all-white leather low-tops on a red ground"
                    src="https://images.unsplash.com/photo-1695073621086-aa692bc32a3d?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="nhkj59"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">TABLE #043 - Sun</span>
                <h3 data-tq-el="1pn4o8" className="kick-name">
                  Ricky Vigil
                </h3>
                <p className="page1-thq-kick-price-elm11 kick-price">
                  She/They
                </p>
                <p className="kick-line">
                  Ricky Vigil is an artist and educator from Salt Lake City. He
                  has been making the autobiographical comic zine Super Cool and
                  Stuff since 2011. He is in inspired by ska, pizza and Saturday
                  morning cartoons — but like, in a cool way.
                </p>
                <button
                  type="button"
                  data-tq-el="echyx5"
                  className="add kick-btn"
                >
                  Wesbite
                </button>
              </article>
              <article data-cat="sneakers" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Deep teal and white running shoe with grey lace loops"
                    src="https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="bjni5t"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Table #006 - Sun</span>
                <h3 data-tq-el="hh960e" className="kick-name">
                  TOPPIE
                </h3>
                <p className="page1-thq-kick-price-elm12 kick-price">
                  They/Them
                </p>
                <p className="kick-line">
                  Toppie loves books, trains, and rats, and they believe in the
                  powers of arts and crafts.
                </p>
                <button
                  type="button"
                  data-tq-el="1pe3ve"
                  className="add kick-btn"
                >
                  Website
                </button>
              </article>
              <article data-cat="sneakers" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Black, white and red high-top held up by its laces"
                    src="https://images.unsplash.com/photo-1611510338559-2f463335092c?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="11besr"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Table #038 - SAT</span>
                <h3 data-tq-el="13qevm" className="kick-name">
                  BONNIE KAYE VARGA COOPER
                </h3>
                <p className="page1-thq-kick-price-elm13 kick-price">She/Her</p>
                <p className="kick-line">
                  I love my community, stickers, thrifting and zines!
                </p>
              </article>
              <article data-cat="sneakers" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Sky blue high-top with an orange zip tie, standing on gravel"
                    src="https://images.unsplash.com/photo-1588099768550-4014589e03e0?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="1v7lzh"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Sneakers</span>
                <h3 data-tq-el="6r1ik0" className="kick-name">
                  Sky Tag High
                </h3>
                <p className="kick-price">MX$9,800</p>
                <p className="kick-line">MX 27 · deadstock, zip tie on</p>
                <button
                  type="button"
                  data-tq-el="ewzmon"
                  className="add kick-btn"
                >
                  Into the bag
                </button>
              </article>
              <article data-cat="sneakers" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Pair of grey suede high-tops with gold accents on black"
                    src="https://images.unsplash.com/photo-1542219550-37153d387c27?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="24ih08"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Sneakers</span>
                <h3 data-tq-el="x6ua46" className="kick-name">
                  Smoke Gold High
                </h3>
                <p className="kick-price">MX$7,400</p>
                <p className="kick-line">MX 26 and 27 · suede, deadstock</p>
                <button
                  type="button"
                  data-tq-el="1mrvo3"
                  className="add kick-btn"
                >
                  Into the bag
                </button>
              </article>
              <article data-cat="hoodies" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Black hoodie with a large back print reading I’ll See You Tomorrow"
                    src="https://images.unsplash.com/photo-1680292783974-a9a336c10366?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="1rfue7"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Hoodies</span>
                <h3 data-tq-el="zyo2s5" className="kick-name">
                  Tomorrow Back-Print Hoodie
                </h3>
                <p className="kick-price">MX$1,890</p>
                <p className="kick-line">480 g cotton fleece · S–XXL</p>
                <button
                  type="button"
                  data-tq-el="1ha3pi"
                  className="add kick-btn"
                >
                  Into the bag
                </button>
              </article>
              <article data-cat="hoodies" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Man wearing a sand-coloured hoodie with the hood up"
                    src="https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="1fzare"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Hoodies</span>
                <h3 data-tq-el="j698qp" className="kick-name">
                  Sand Heavyweight Hoodie
                </h3>
                <p className="kick-price">MX$1,650</p>
                <p className="kick-line">500 g brushed fleece · S–XL</p>
                <button
                  type="button"
                  data-tq-el="1elmc5"
                  className="add kick-btn"
                >
                  Into the bag
                </button>
              </article>
              <article data-cat="hoodies" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Man wearing a plain white pullover hoodie"
                    src="https://images.unsplash.com/photo-1688111421205-a0a85415b224?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="1xavo2"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Hoodies</span>
                <h3 data-tq-el="4hfi6i" className="kick-name">
                  Cloud White Hoodie
                </h3>
                <p className="kick-price">MX$1,450</p>
                <p className="kick-line">420 g cotton · S–XXL</p>
                <button
                  type="button"
                  data-tq-el="11h7wv"
                  className="add kick-btn"
                >
                  Into the bag
                </button>
              </article>
              <article data-cat="hoodies" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Man wearing a blue hoodie with a white brush-stroke print"
                    src="https://images.unsplash.com/photo-1728394604722-c1007e3edf09?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="hsm9qd"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Hoodies</span>
                <h3 data-tq-el="rxgz48" className="kick-name">
                  Brushstroke Blue Hoodie
                </h3>
                <p className="kick-price">MX$1,790</p>
                <p className="kick-line">450 g cotton fleece · M–XXL</p>
                <button
                  type="button"
                  data-tq-el="1lfkn7"
                  className="add kick-btn"
                >
                  Into the bag
                </button>
              </article>
              <article data-cat="caps" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Charcoal snapback with a white WORTHY patch and a mint brim"
                    src="https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="qut3qn"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Caps</span>
                <h3 data-tq-el="ikuet3" className="kick-name">
                  Worthy Patch Snapback
                </h3>
                <p className="kick-price">MX$790</p>
                <p className="kick-line">Wool blend · one size, snap back</p>
                <button
                  type="button"
                  data-tq-el="1gudjz"
                  className="add kick-btn"
                >
                  Into the bag
                </button>
              </article>
              <article data-cat="caps" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Faded blue snapback with Dope embroidered in script"
                    src="https://images.unsplash.com/photo-1483103068651-8ce44652c331?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="mmnnxc"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Caps</span>
                <h3 data-tq-el="1ob0ms" className="kick-name">
                  Dope Script Snapback
                </h3>
                <p className="kick-price">MX$690</p>
                <p className="kick-line">Cotton twill · one size, snap back</p>
                <button
                  type="button"
                  data-tq-el="bauznu"
                  className="add kick-btn"
                >
                  Into the bag
                </button>
              </article>
              <article data-cat="caps" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Black flat-brim cap resting on a window sill"
                    src="https://images.unsplash.com/photo-1737666636073-f15d9762cf83?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="15shf6"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Caps</span>
                <h3 data-tq-el="12lz7d" className="kick-name">
                  Blackout Flat Brim
                </h3>
                <p className="kick-price">MX$850</p>
                <p className="kick-line">Wool blend · fitted, 7 to 7⅝</p>
                <button
                  type="button"
                  data-tq-el="12ok16"
                  className="add kick-btn"
                >
                  Into the bag
                </button>
              </article>
              <article data-cat="care" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="White sneakers beside a cleaning brush and a bottle of cleaner"
                    src="https://images.unsplash.com/photo-1636262899511-dc5865c774dc?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="1ttni3"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Care</span>
                <h3 data-tq-el="2i1u5m" className="kick-name">
                  Deep Clean Kit
                </h3>
                <p className="kick-price">MX$590</p>
                <p className="kick-line">
                  Brush, 150 ml cleaner, microfibre cloth
                </p>
                <button
                  type="button"
                  data-tq-el="1nuc3m"
                  className="add kick-btn"
                >
                  Into the bag
                </button>
              </article>
              <article data-cat="care" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Wooden-handled shoe brushes and tins of balm on a dark table"
                    src="https://images.unsplash.com/photo-1577467014696-4e9de06ee188?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="1a0tke"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Care</span>
                <h3 data-tq-el="1dou3a" className="kick-name">
                  Brush &amp; Balm Set
                </h3>
                <p className="kick-price">MX$690</p>
                <p className="kick-line">
                  Horsehair and boar brushes, 60 g balm
                </p>
                <button
                  type="button"
                  data-tq-el="qgcyws"
                  className="add kick-btn"
                >
                  Into the bag
                </button>
              </article>
              <article data-cat="care" className="kick-card">
                <div className="kick-media">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt="Close-up of lavender flat shoelaces with a white tag"
                    src="https://images.unsplash.com/photo-1761651469905-afe386f45694?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                    data-tq-el="1emof5"
                    className="kick-img"
                  />
                </div>
                <span className="kick-cat">Care</span>
                <h3 data-tq-el="1c77zj" className="kick-name">
                  Flat Laces, Lavender
                </h3>
                <p className="kick-price">MX$190</p>
                <p className="kick-line">Cotton · 140 cm, one pair</p>
                <button
                  type="button"
                  data-tq-el="n44ciy"
                  className="add kick-btn"
                >
                  Into the bag
                </button>
              </article>
            </div>
          </motion-node>
        </div>
      </section>
      <section data-tq-el="lyzrtw" className="drops-grade">
        <div data-tq-el="z95cv8" className="drops-grade-inner hc-wrap">
          <div className="drops-grade-photo">
            <img
              loading="lazy"
              decoding="async"
              alt="Black and red basketball shoes on a box printed with a court"
              src="https://images.unsplash.com/photo-1710643301219-5efe52cd0238?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
              data-tq-el="rddeas"
              className="drops-grade-img"
            />
            <div className="hc-tape-orange drops-grade-tape hc-tape"></div>
          </div>
          <div className="drops-grade-copy">
            <h2 data-tq-el="1q15jf" className="hc-title drops-grade-title">
              Read the tag before you cop
            </h2>
            <p className="hc-lede">
              Every card says how a pair has lived. No guessing from blurry
              photos.
            </p>
            <ul className="drops-grade-list">
              <li className="drops-grade-row">
                <span className="drops-grade-code">DS</span>
                <span className="drops-grade-text">
                  Deadstock. Never worn, never laced, original box.
                </span>
              </li>
              <li className="drops-grade-row">
                <span className="drops-grade-code drops-grade-code-orange">
                  9.5
                </span>
                <span className="drops-grade-text">
                  Worn once or twice. Soles clean, no creasing you can see.
                </span>
              </li>
              <li className="drops-grade-row">
                <span className="drops-grade-code drops-grade-code-ink">9</span>
                <span className="drops-grade-text">
                  Light wear, deep cleaned by us. Photos of soles on request.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section data-tq-el="1kcurj" className="drops-sell">
        <div data-tq-el="ukgwyl" className="hc-wrap drops-sell-inner">
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
            className="page1-motion-node2"
          >
            <h2 data-tq-el="1xhebb" className="drops-sell-title hc-title">
              Got heat sitting in a closet?
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
            className="page1-motion-node3"
          >
            <p className="drops-sell-text">
              We consign at 85% to you. Bring the pair to Calle Garmendia or
              send photos first.
            </p>
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
            className="page1-motion-node4"
          >
            <Link
              to="/about"
              data-thq-link-box="true"
              className="hc-cta btn drops-sell-cta btn-primary"
            >
              <span>Sell a pair</span>
            </Link>
          </motion-node>
        </div>
      </section>
      <div className="page1-container2">
        <div className="page1-container3">
          <Script
            html={`<script defer data-name="drop-filter">
(function(){
(function () {
  var chips = document.querySelectorAll('.drops-chip');
  var cardsList = document.querySelectorAll('.drops-grid-list .kick-card');
  if (!chips.length) { return; }
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.classList.remove('is-on'); c.setAttribute('aria-pressed', 'false'); });
      chip.classList.add('is-on');
      chip.setAttribute('aria-pressed', 'true');
      cardsList.forEach(function (k) { k.hidden = !(f === 'all' || k.getAttribute('data-cat') === f); });
    });
  });
})();
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="page1-container4">
        <div className="page1-container5">
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
      <div className="page1-container6">
        <div className="page1-container7">
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
      <div className="page1-container8">
        <div className="page1-container9">
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
.drops-chip {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <Footer tqImageLoading="eager"></Footer>
    </div>
  )
}

export default Page1
