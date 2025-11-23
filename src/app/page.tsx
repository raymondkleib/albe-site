// src/app/page.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'

function Reveal(props: { children: React.ReactNode; className?: string }) {
  const { children, className } = props
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  const scrollToPreorder = () => {
    const el = document.getElementById('preorder')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="page">
      {/* FULLSCREEN HERO WITH VIDEO BACKGROUND */}
      <section className="hero-full">
        <video
          className="hero-video-bg"
          src="/media/albe-hero.mp4"      // put your video file here
          poster="/media/albe-hero.jpg"   // fallback image
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="hero-overlay">
          {/* HEADER OVER VIDEO */}
          <div className="max-width hero-header">
            <div className="brand">
              <div className="brand-mark" />
              <div className="brand-text">ALBE</div>
            </div>
            <div className="hero-header-cta">
              <div className="header-pill">Founding batch · 50–100 units</div>
              <button className="button-primary" onClick={scrollToPreorder}>
                Pre-order now
              </button>
            </div>
          </div>

          {/* BOTTOM-LEFT TEXT OVER VIDEO */}
          <div className="max-width hero-bottom">
            <div className="hero-bottom-inner">
              <div className="hero-kicker">Sleep band • AI wake-up window</div>
              <h1 className="hero-title">
                Wake up when your body is ready,
                <br />
                <span className="hero-highlight">
                  not when your alarm screams.
                </span>
              </h1>
              <p className="hero-body">
                ALBE is a screenless sleep band on your wrist that learns your
                sleep and uses AI to choose the best moment in your wake-up
                window. Your alarm becomes a calm nudge, not a shock.
              </p>

              <div className="hero-actions">
                <button className="button-primary" onClick={scrollToPreorder}>
                  Pre-order ALBE
                </button>
                <a href="#how-it-works" className="button-ghost">
                  How it works
                </a>
              </div>

              <div className="hero-meta">
                <span>Founding price: $149</span> · Future price: $199 · Fully
                refundable before shipping
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING BELOW = NORMAL SCROLLING PAGE */}
      <main>
        {/* PAIN SECTION */}
        <section className="section" id="problem">
          <Reveal>
            <div className="max-width">
              <div className="section-header">
                <div className="section-kicker">The problem</div>
                <h2 className="section-title">
                  Waking up is already hard. Fixed alarms make it worse.
                </h2>
                <p className="section-body">
                  You don&apos;t live with a perfect sleep schedule. Some nights
                  run late, some mornings come too fast. A normal alarm
                  doesn&apos;t care. It drags you out of sleep at the exact worst
                  moment, and you spend the day trying to fully &quot;boot up&quot; but
                  never quite do.
                </p>
              </div>

              <div className="card-grid">
                <div className="card">
                  <div className="card-title">Set-and-hope alarms</div>
                  <p className="card-body">
                    You pick a time the night before and hope you&apos;re not in
                    deep sleep when it hits. If you are, your body panics and
                    the whole day starts on hard mode.
                  </p>
                </div>
                <div className="card">
                  <div className="card-title">
                    Schedules that never stay perfect
                  </div>
                  <p className="card-body">
                    School, work, gym, life—your bedtime shifts. Most sleep
                    tools assume discipline you don&apos;t always have. Reality is
                    messier.
                  </p>
                </div>
                <div className="card">
                  <div className="card-title">Data overload or no data at all</div>
                  <p className="card-body">
                    Either you get no feedback, or you get 50 graphs and no
                    clear change in how you actually feel in the morning.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SOLUTION: MEET ALBE */}
        <section className="section" id="solution">
          <Reveal>
            <div className="max-width">
              <div className="section-header">
                <div className="section-kicker">The sleep buddy</div>
                <h2 className="section-title">Meet ALBE — calm on your wrist.</h2>
                <p className="section-body">
                  ALBE stays on your wrist all day and night. No screen, no
                  notifications, no noise. Just quiet sensors and an AI model
                  focused on one job: helping you wake up better and protect
                  your rest.
                </p>
              </div>

              <div className="card-grid">
                <div className="card">
                  <div className="card-title">AI wake-up window</div>
                  <p className="card-body">
                    You set a window, like 06:30–07:00. ALBE watches your heart
                    rate and movement through the night and chooses a lighter
                    moment to wake you—so you don&apos;t get ripped out of deep
                    sleep.
                  </p>
                </div>
                <div className="card">
                  <div className="card-title">Gentle wrist vibration</div>
                  <p className="card-body">
                    Instead of a phone screaming across the room, ALBE uses a
                    calm vibration on your wrist. Enough to wake you, not enough
                    to spike your stress.
                  </p>
                </div>
                <div className="card">
                  <div className="card-title">Learns you over time</div>
                  <p className="card-body">
                    As you wear ALBE, its AI learns your patterns—how you move,
                    when you settle, how your nights change. That feedback turns
                    into smarter timing and better mornings.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* HOW IT WORKS */}
        <section className="section" id="how-it-works">
          <Reveal>
            <div className="max-width">
              <div className="section-header">
                <div className="section-kicker">How it works</div>
                <h2 className="section-title">
                  Three simple steps to easier mornings.
                </h2>
              </div>

              <div className="steps">
                <div className="step">
                  <div className="step-index">1</div>
                  <div>
                    <div className="step-content-title">Wear ALBE to sleep</div>
                    <p className="step-content-body">
                      The band tracks heart rate and movement quietly through
                      the night. No screen, no buzzing, just data.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-index">2</div>
                  <div>
                    <div className="step-content-title">
                      Set your wake-up window
                    </div>
                    <p className="step-content-body">
                      Instead of a single time, you choose a window—like
                      06:30–07:00. ALBE picks the best moment inside it based on
                      how your body is actually sleeping.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-index">3</div>
                  <div>
                    <div className="step-content-title">Wake up calm</div>
                    <p className="step-content-body">
                      A gentle vibration on your wrist wakes you when you&apos;re
                      lighter in sleep. You get up with more clarity, less
                      grogginess, and a better shot at a good day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* COMPARISON */}
        <section className="section" id="comparison">
          <Reveal>
            <div className="max-width">
              <div className="section-header">
                <div className="section-kicker">Why ALBE</div>
                <h2 className="section-title">Not another noisy wearable.</h2>
              </div>

              <div className="comparison">
                <div className="comparison-block">
                  <div className="comparison-label">Phone alarms</div>
                  <div className="comparison-heading">Loud. Fixed. Brutal.</div>
                  <p className="section-body">
                    They ignore what your body is doing and yank you out of
                    whatever sleep stage you&apos;re in. You wake up stressed
                    before you even stand up.
                  </p>
                </div>

                <div className="comparison-block">
                  <div className="comparison-label">Typical wearables</div>
                  <div className="comparison-heading">
                    Data overload, unclear impact.
                  </div>
                  <p className="section-body">
                    Charts, scores, graphs—but no real change in how you feel
                    when the alarm hits. Many are built for elite athletes, not
                    normal people with messy schedules.
                  </p>
                </div>

                <div className="comparison-block">
                  <div className="comparison-label">ALBE Sleep Band</div>
                  <div className="comparison-heading">
                    Rich, calm, modern—and focused.
                  </div>
                  <p className="section-body">
                    ALBE is built around one mission: help you wake up better
                    and protect your rest. Screenless, wearable all day, and
                    priced lower than most performance wearables.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* PREORDER SECTION */}
        <section className="section" id="preorder">
          <Reveal>
            <div className="max-width">
              <div className="section-header">
                <div className="section-kicker">Founding batch</div>
                <h2 className="section-title">Reserve your ALBE band.</h2>
                <p className="section-body">
                  We&apos;re producing a limited first run of 50–100 bands as we
                  finalize our CAD and firmware. Your pre-order helps bring ALBE
                  to life—and you get the calmest version of mornings we can
                  build.
                </p>
              </div>

              <div className="card-grid">
                <div className="card">
                  <div className="card-title">What you get</div>
                  <ul className="card-body" style={{ paddingLeft: '1.1rem' }}>
                    <li>1× ALBE Sleep Band from the founding batch</li>
                    <li>Early access to ALBE&apos;s AI sleep features</li>
                    <li>
                      Founding price of <strong>$149</strong> (future $199)
                    </li>
                    <li>Direct feedback channel to shape the product</li>
                  </ul>
                </div>
                <div className="card">
                  <div className="card-title">Risk-free pre-order</div>
                  <p className="card-body">
                    Your pre-order is fully refundable any time before your band
                    ships. After you receive ALBE, you&apos;ll have 30 days to
                    try it. If your mornings don&apos;t feel better, send it
                    back.
                  </p>
                  {/* TODO: connect this button to Stripe / payment later */}
                  <button
                    className="button-primary"
                    style={{ marginTop: '0.8rem' }}
                  >
                    Pre-order for $149
                  </button>
                  <p className="card-body" style={{ marginTop: '0.6rem' }}>
                    <em>
                      Estimated shipping: Spring 2026. You&apos;ll get honest
                      updates as we build.
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FOUNDER STORY + FAQ */}
        <section className="section">
          <Reveal>
            <div className="max-width">
              <div className="founder">
                <div className="section-header">
                  <div className="section-kicker">The founder</div>
                  <h2 className="section-title">
                    Built by someone who needed it first.
                  </h2>
                  <p className="section-body">
                    I&apos;m an engineering student who lifts, works, and
                    studies—and still woke up feeling destroyed most mornings. I
                    didn&apos;t want another screen screaming at me. I wanted a
                    calm, smart band that actually changed how my mornings felt.
                  </p>
                  <p className="section-body">
                    ALBE started as sketches and sensor tests on my own wrist.
                    This first batch is for people just like me—students,
                    workers, lifters, anyone who needs better mornings without
                    pretending their sleep schedule is perfect.
                  </p>
                </div>

                <div>
                  <div className="section-header">
                    <div className="section-kicker">Questions</div>
                    <h2 className="section-title">FAQ</h2>
                  </div>
                  <div className="faq-grid">
                    <div className="faq-item">
                      <div className="faq-q">When will my pre-order ship?</div>
                      <div className="faq-a">
                        We&apos;re targeting Spring 2026 for the founding batch.
                        As we finish design and firmware, we&apos;ll send clear
                        updates. You can cancel for a full refund any time
                        before your band ships.
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-q">Is ALBE a medical device?</div>
                      <div className="faq-a">
                        No. ALBE is not a medical device and doesn&apos;t
                        diagnose any condition. It&apos;s built to help you wake
                        up better and understand your patterns, not replace your
                        doctor.
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-q">Do I need a subscription?</div>
                      <div className="faq-a">
                        For the founding batch, no. Early buyers get AI sleep
                        features included. We may add subscription options
                        later, but you&apos;ll keep the features you pre-ordered
                        with.
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-q">Can I wear ALBE all day?</div>
                      <div className="faq-a">
                        Yes. ALBE is designed to live on your wrist. During the
                        day it learns your patterns and keeps tracking rest, so
                        wake timing gets smarter over time.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="max-width">
          ALBE Sleep Band · 2025 · Not a medical device.
        </div>
      </footer>
    </div>
  )
}
