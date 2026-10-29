import React from 'react'

export interface SocialChannel {
  letter: string
  label: string
  href: string
  icon: React.ReactNode
  external?: boolean
}

interface SocialFlipRowProps {
  channels: SocialChannel[]
  tone?: 'onLight' | 'onDark'
  className?: string
}

/**
 * Hovering the row flips every tile in sequence; hovering one tile reveals its
 * label. Stagger is a per-tile transition-delay, so no animation library is
 * involved. Touch devices get icon-side-up tiles because :hover never fires.
 */
export default function SocialFlipRow({ channels, tone = 'onLight', className = '' }: SocialFlipRowProps) {
  const onDark = tone === 'onDark'

  return (
    <div className={`group/row relative inline-flex items-center gap-2.5 rounded-2xl p-3 ${className}`}>
      {/* Plain <style>: styled-jsx renames @keyframes, breaking animate-[...] */}
      <style>{`
        @keyframes finlern-sheen-x {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }
        @keyframes finlern-sheen-x-reverse {
          from { transform: translateX(100%); }
          to   { transform: translateX(-100%); }
        }
        @media (hover: none) {
          .finlern-flip-inner { transform: rotateY(180deg); }
        }
      `}</style>

      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden rounded-2xl">
        <span
          className="h-px w-full animate-[finlern-sheen-x_2.8s_linear_infinite]"
          style={{
            background: `linear-gradient(90deg, transparent, ${onDark ? 'rgba(255,255,255,0.45)' : 'rgba(62,138,193,0.55)'}, transparent)`,
          }}
        />
      </span>
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden rounded-2xl">
        <span
          className="h-px w-full animate-[finlern-sheen-x-reverse_2.8s_linear_infinite]"
          style={{
            background: `linear-gradient(90deg, transparent, ${onDark ? 'rgba(255,255,255,0.45)' : 'rgba(71,167,106,0.55)'}, transparent)`,
          }}
        />
      </span>

      {channels.map((channel, index) => (
        <a
          key={channel.label}
          href={channel.href}
          target={channel.external ? '_blank' : undefined}
          rel={channel.external ? 'noopener noreferrer' : undefined}
          aria-label={channel.label}
          className="group/item relative h-10 w-10 cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1"
          style={{ perspective: '1000px' }}
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute -top-9 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-lg px-2.5 py-1 text-[11px] font-semibold opacity-0 shadow-lg transition-all duration-200 group-hover/item:-translate-y-1 group-hover/item:opacity-100 ${
              onDark ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'
            }`}
          >
            {channel.label}
          </span>

          <div
            className="finlern-flip-inner relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.45,0.64,1)] group-hover/row:[transform:rotateY(180deg)] motion-reduce:transition-none motion-reduce:group-hover/row:[transform:none]"
            style={{ transformStyle: 'preserve-3d', transitionDelay: `${index * 70}ms` }}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center rounded-xl text-base font-bold shadow-sm ${
                onDark
                  ? 'border border-white/15 bg-white/10 text-white/85'
                  : 'border border-slate-200 bg-white text-slate-800'
              }`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              {channel.letter}
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-aurora-blue to-aurora-purple text-white shadow-md transition-shadow duration-300 group-hover/item:shadow-[0_10px_26px_-8px_rgba(62,138,193,0.9)]"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <span className="h-[18px] w-[18px] transition-transform duration-300 ease-out group-hover/item:scale-125 [&>svg]:h-full [&>svg]:w-full">
                {channel.icon}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
