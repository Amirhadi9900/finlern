import React, { useId, useState } from 'react'

export interface FaqEntry {
  question: string
  answer: React.ReactNode
}

interface FaqAccordionProps {
  items: FaqEntry[]
  className?: string
}

/**
 * Single-open accordion. Expansion animates grid-template-rows so panel height
 * is never hard-coded; the collapsed row is clipped by an inner overflow-hidden
 * wrapper.
 */
export default function FaqAccordion({ items, className = '' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const uid = useId().replace(/:/g, '')

  return (
    <ul className={`w-full space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `faq-q-${uid}-${index}`
        const panelId = `faq-a-${uid}-${index}`

        return (
          <li
            key={item.question}
            className={`overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 ${
              isOpen
                ? 'border-white/25 bg-white/[0.14] shadow-[0_18px_45px_-20px_rgba(0,0,0,0.55)]'
                : 'border-white/10 bg-white/[0.07] hover:border-white/20 hover:bg-white/[0.11]'
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-center gap-5 py-5 pl-6 pr-5 text-left md:pl-7"
              >
                <span
                  aria-hidden="true"
                  className={`h-7 w-[3px] shrink-0 rounded-full bg-gradient-to-b from-aurora-blue to-aurora-green transition-all duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-25 group-hover:opacity-60'
                  }`}
                />

                <span
                  className={`flex-1 text-base font-semibold leading-snug transition-colors duration-200 md:text-lg ${
                    isOpen ? 'text-white' : 'text-white/85 group-hover:text-white'
                  }`}
                >
                  {item.question}
                </span>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                    isOpen ? 'rotate-180 text-aurora-green-light' : 'text-white/50 group-hover:text-white/80'
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pl-[3.35rem] text-base leading-relaxed text-white/80 md:px-7 md:pl-[3.85rem] md:text-lg">
                  {item.answer}
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
