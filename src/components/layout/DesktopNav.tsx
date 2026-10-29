import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface NavLeaf {
  href: string
  label: string
  description: string
  icon: React.ReactNode
}

interface NavGroup {
  key: string
  label: string
  items: NavLeaf[]
}

const icon = (path: string) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px]"
    aria-hidden="true"
  >
    <path d={path} />
  </svg>
)

const GROUPS: NavGroup[] = [
  {
    key: 'courses',
    label: 'Courses',
    items: [
      {
        href: '/classes',
        label: 'Finnish Language',
        description: '€99 per 4-week course · private or small group',
        icon: icon('M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'),
      },
      {
        href: '/english-courses',
        label: 'English Language',
        description: '€19–29 private · €14–24 group, per session',
        icon: icon('M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'),
      },
      {
        href: '/violin-courses',
        label: 'Violin Lessons',
        description: '€35 per session · online, private',
        icon: icon('M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'),
      },
    ],
  },
  {
    key: 'company',
    label: 'Company',
    items: [
      {
        href: '/our-story',
        label: 'Our Story',
        description: 'The people, values and services behind Finlern',
        icon: icon('M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-8a4 4 0 11-4-4'),
      },
      {
        href: '/events',
        label: 'Events',
        description: 'Conversation Club and partner-company gatherings',
        icon: icon('M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'),
      },
    ],
  },
  {
    key: 'legal',
    label: 'Legal',
    items: [
      {
        href: '/privacy-policy',
        label: 'Privacy Policy',
        description: 'How we handle the data you send us',
        icon: icon('M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'),
      },
      {
        href: '/cookies',
        label: 'Cookie Policy',
        description: 'We set no analytics or tracking cookies',
        icon: icon('M21 12a9 9 0 11-9-9c.95 0 1.86.14 2.72.4A2.5 2.5 0 0115.5 6.5a2.5 2.5 0 003.36 2.36A8.63 8.63 0 0121 12z'),
      },
      {
        href: '/terms',
        label: 'Terms of Service',
        description: 'The site is an enquiry channel, not a contract',
        icon: icon('M9 12h6m-6 4h6M9 8h6M6 3h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z'),
      },
    ],
  },
]

interface DesktopNavProps {
  tone: 'onDark' | 'onLight'
  activePath: string
}

/**
 * Desktop mega menu. The panel lives inside the same mouse-tracking wrapper as
 * its trigger so the pointer can cross the gap without closing it.
 */
export default function DesktopNav({ tone, activePath }: DesktopNavProps) {
  const [openKey, setOpenKey] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const onDark = tone === 'onDark'

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenKey(null)
    }
    const onPointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenKey(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDown)
    }
  }, [])

  const textTone = onDark ? 'text-amber-50/90 hover:text-amber-100' : 'text-gray-700 hover:text-aurora-blue'
  const isSectionActive = (group: NavGroup) =>
    group.items.some((leaf) => activePath === leaf.href || (leaf.href !== '/classes' && activePath.startsWith(leaf.href)))

  return (
    <nav ref={navRef} className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpenKey(null)}>
      {GROUPS.map((group) => {
        const isOpen = openKey === group.key
        return (
          <div key={group.key} className="relative" onMouseEnter={() => setOpenKey(group.key)}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`mega-${group.key}`}
              onClick={() => setOpenKey(isOpen ? null : group.key)}
              onFocus={() => setOpenKey(group.key)}
              className={`relative flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${textTone} ${
                isOpen || isSectionActive(group)
                  ? onDark
                    ? 'bg-white/10 text-amber-100'
                    : 'bg-aurora-blue/5 text-aurora-blue'
                  : ''
              }`}
            >
              {group.label}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div
              id={`mega-${group.key}`}
              role="group"
              aria-label={`${group.label} links`}
              onMouseEnter={() => setOpenKey(group.key)}
              className={`absolute left-1/2 top-full z-50 w-[min(30rem,88vw)] -translate-x-1/2 pt-3 transition-all duration-200 ${
                isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
              }`}
            >
              <div
                className={`overflow-hidden rounded-2xl border p-2 shadow-[0_28px_60px_-28px_rgba(15,23,42,0.45)] ${
                  onDark ? 'border-white/10 bg-slate-900/95 backdrop-blur-2xl' : 'border-gray-200 bg-white'
                }`}
              >
                {group.items.map((leaf) => (
                  <Link
                    key={leaf.href}
                    href={leaf.href}
                    onClick={() => setOpenKey(null)}
                    aria-current={activePath === leaf.href ? 'page' : undefined}
                    className={`group/leaf flex items-start gap-3.5 rounded-xl p-3.5 transition-colors duration-200 ${
                      onDark ? 'hover:bg-white/[0.07]' : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-aurora-blue to-aurora-purple text-white transition-transform duration-200 group-hover/leaf:scale-105">
                      {leaf.icon}
                    </span>
                    <span className="min-w-0">
                      <span className={`block text-sm font-semibold ${onDark ? 'text-white' : 'text-slate-900'}`}>
                        {leaf.label}
                      </span>
                      <span className={`mt-0.5 block text-xs leading-relaxed ${onDark ? 'text-white/55' : 'text-gray-500'}`}>
                        {leaf.description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )
      })}

      <Link
        href="/contact"
        onMouseEnter={() => setOpenKey(null)}
        className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${textTone} ${
          activePath.startsWith('/contact') ? (onDark ? 'text-amber-100' : 'text-aurora-blue') : ''
        }`}
      >
        Contact
      </Link>

      <Link
        href="/classes"
        className="group relative ml-3 overflow-hidden rounded-xl px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green bg-[length:200%_100%]" />
        <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
        <span className="relative z-10">Start Learning</span>
      </Link>
    </nav>
  )
}
