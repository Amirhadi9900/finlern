import React, { useId } from 'react'

interface MorphWordsProps {
  words: string[]
  /** Milliseconds each word holds before the next takes over. */
  interval?: number
  /** Width reserved for the longest word, in ch units, to stop layout shift. */
  minWidthCh?: number
  /** CSS font-size. Keep this below the surrounding heading. */
  fontSize?: string
  /** Apply the SVG threshold filter that makes words fuse as they cross. */
  goo?: boolean
  className?: string
  textClassName?: string
}

/**
 * Gooey word rotator. It inherits Fraunces from the global heading stack rather
 * than importing a webfont, which the site's CSP would refuse anyway. Colour is
 * set explicitly so the text never depends on the inherited body colour.
 */
export default function MorphWords({
  words,
  interval = 3000,
  minWidthCh = 12,
  fontSize = 'clamp(2.5rem, 9vw, 6rem)',
  goo = true,
  className = '',
  textClassName = '',
}: MorphWordsProps) {
  const uid = useId().replace(/:/g, '')
  const filterId = `morph-goo-${uid}`
  const wordSeconds = interval / 1000
  const totalSeconds = wordSeconds * words.length

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Plain <style>: styled-jsx renames @keyframes, breaking animationName */}
      <style>{`
        @keyframes morph-word-rotate {
          0%   { opacity: 0; filter: blur(18px); transform: translate(-50%, -50%) scale(0.86); }
          5%   { opacity: 0.5; }
          15%, 35% { opacity: 1; filter: blur(0); transform: translate(-50%, -50%) scale(1); }
          45%  { opacity: 0.5; }
          50%, 100% { opacity: 0; filter: blur(18px); transform: translate(-50%, -50%) scale(1.12); }
        }
        @media (prefers-reduced-motion: reduce) {
          .morph-word { animation: none !important; opacity: 0 !important; }
          .morph-word:first-child { opacity: 1 !important; filter: none !important; }
        }
      `}</style>

      {goo && (
        <svg aria-hidden="true" focusable="false" className="absolute h-0 w-0" style={{ pointerEvents: 'none' }}>
          <defs>
            <filter id={filterId}>
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      )}

      <div
        className={`relative select-none font-heading text-slate-900 ${textClassName}`}
        style={{
          fontSize,
          fontWeight: 700,
          filter: goo ? `url(#${filterId})` : undefined,
        }}
      >
        <div className="relative flex items-center justify-center" style={{ height: '1.25em', minWidth: `${minWidthCh}ch` }}>
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              aria-hidden={index === 0 ? undefined : 'true'}
              className="morph-word absolute whitespace-nowrap"
              style={{
                top: '50%',
                left: '50%',
                opacity: 0,
                animationName: 'morph-word-rotate',
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationFillMode: 'both',
                animationDelay: `${index * wordSeconds}s`,
                animationDuration: `${totalSeconds}s`,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Static text for assistive tech and for reduced-motion users. */}
      <span className="sr-only">{words.join(', ')}</span>
    </div>
  )
}
