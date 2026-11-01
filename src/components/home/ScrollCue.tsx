import React from 'react'

/**
 * Hero scroll cue: a hairline draws itself downward, the arrowhead arrives, then
 * the loop resets.
 *
 * Two constraints that shaped this markup:
 *
 * 1. Keyframes live in a plain <style> element, because styled-jsx rewrites
 *    @keyframes names and the animation would silently stop.
 * 2. Centring is done by flex (items-center), never by translate. A running
 *    animation owns the transform property, so keyframes that set scaleY() or
 *    translateY() replace any Tailwind -translate-x-1/2 outright — which is how
 *    the line ended up half its width to the right of the arrowhead.
 *
 * Hover effects use filter for the same reason: transform and opacity are
 * already spoken for by the animation.
 */
export default function ScrollCue({ onClick }: { onClick: () => void }) {
  return (
    <>
      <style>{`
        .scroll-cue-line { animation: scroll-cue-draw 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite; }
        .scroll-cue-head { animation: scroll-cue-arrive 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite; }

        @keyframes scroll-cue-draw {
          0%   { transform: scaleY(0); opacity: 0.2; }
          45%  { transform: scaleY(1); opacity: 1; }
          70%  { transform: scaleY(1); opacity: 1; }
          100% { transform: scaleY(1); opacity: 0; }
        }

        @keyframes scroll-cue-arrive {
          0%, 40% { opacity: 0; transform: translateY(-6px); }
          55%     { opacity: 1; transform: translateY(0); }
          80%     { opacity: 1; transform: translateY(0); }
          100%    { opacity: 0; transform: translateY(4px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-cue-line,
          .scroll-cue-head { animation: none !important; }
          .scroll-cue-line { transform: scaleY(1); opacity: 1; }
          .scroll-cue-head { transform: none; opacity: 1; }
        }
      `}</style>

      <button
        type="button"
        onClick={onClick}
        aria-label="Scroll down to Finlern’s results"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
        className="group relative mx-auto mt-10 flex w-16 cursor-pointer flex-col items-center justify-center rounded-full py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-blue-light focus-visible:ring-offset-2 focus-visible:ring-offset-aurora-night sm:mt-12"
      >
        <span aria-hidden="true" className="flex w-5 flex-col items-center">
          <span className="scroll-cue-line h-[44px] w-[2px] origin-top bg-gradient-to-b from-white/90 via-white/55 to-aurora-blue-light/70 transition-[filter] duration-300 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.85)] sm:h-[58px]"></span>
          <svg
            viewBox="0 0 24 24"
            className="scroll-cue-head -mt-[3px] h-[18px] w-[18px] text-white transition-[filter] duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.6}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 10l6 6 6-6" />
          </svg>
        </span>
      </button>
    </>
  )
}
