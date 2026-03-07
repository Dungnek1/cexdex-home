/* FAQ Section — Figma 1253:143221: Support 24/7 + FAQs About CEXDEX + accordion */

import { useState } from 'react'
import DiamondIcon from './diamond-icon'

const FAQS = [
  {
    id: '01',
    question: 'What is CEXDEX?',
    answer:
      'CEXDEX is a centralized crypto exchange offering secure, high-liquidity spot and derivatives trading for global users',
  },
  {
    id: '02',
    question: 'Is CEXDEX secure to use?',
    answer:
      'Yes, CEXDEX employs multi-layer security including cold wallets, multi-signature authentication, and regular security audits to protect your assets.',
  },
  {
    id: '03',
    question: 'What markets can I trade on CEXDEX?',
    answer:
      'CEXDEX supports spot trading, futures trading, and AI-powered automated trading across 350+ trading pairs.',
  },
  {
    id: '04',
    question: 'How competitive are trading fees on CEXDEX?',
    answer:
      'CEXDEX offers industry-leading low fees with maker/taker discounts and additional fee reductions for high-volume traders.',
  },
  {
    id: '05',
    question: 'How do I get started on CEXDEX?',
    answer: 'Simply create an account with your email, complete verification, deposit funds, and start trading in minutes.',
  },
]

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0" aria-hidden>
      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0" aria-hidden>
      <path d="M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section
      className="flex flex-col items-center w-full"
      style={{ background: 'var(--base-black, #000)' }}
    >
      {/* 1440: content 1200px; accordion max 800px centered (Figma 320+800) */}
      <div className="w-full px-6 md:px-10 xl:px-[120px] flex flex-col gap-10 items-center">
        {/* Header — diamond + "Support 24/7" + diamond, then title (Figma 1253:143222) */}
        <div className="flex flex-col gap-4 items-center justify-center w-full min-h-[106px]">
          <div className="flex items-center justify-center gap-4 h-[30px]">
            <DiamondIcon />
            <p
              className="text-[20px] leading-[30px] font-normal whitespace-nowrap"
              style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
            >
              Support 24/7
            </p>
            <DiamondIcon />
          </div>
          <p
            className="text-[48px] leading-[60px] tracking-[-0.96px] text-center whitespace-nowrap"
            style={{ fontFamily: 'inherit', color: 'var(--gray-10, #f1f1f1)' }}
          >
            FAQs About CEXDEX
          </p>
        </div>

        {/* Accordion — max 800px, gap 20px (Figma 1253:143230) */}
        <div className="w-full max-w-[800px] flex flex-col gap-5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="rounded-[12px] overflow-hidden w-full"
                style={{
                  background: isOpen ? 'var(--base-bg-2, #141414)' : 'transparent',
                  border: isOpen ? 'none' : '1px solid var(--gray-90, #303030)',
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className={`w-full flex flex-col text-left cursor-pointer border-b border-solid ${isOpen ? 'gap-2 px-[30px] py-5' : 'gap-3 p-[30px]'
                    }`}
                  style={{
                    borderColor: isOpen ? 'var(--gray-90, #303030)' : 'transparent',
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className="text-[16px] leading-[24px] font-normal"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--secondary-50, #a8bfff)',
                      }}
                    >
                      {faq.id}
                    </span>
                    <span className="text-[var(--gray-10,#f1f1f1)]">
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </div>
                  <p
                    className="text-[24px] leading-[32px] font-light w-full"
                    style={{
                      fontFamily: 'inherit',
                      color: 'var(--gray-10, #f1f1f1)',
                      fontWeight: 300,
                    }}
                  >
                    {faq.question}
                  </p>
                </button>
                {isOpen && (
                  <div id={`faq-answer-${faq.id}`} role="region" className="px-[30px] py-5">
                    <p
                      className="text-[16px] leading-[24px] font-light"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--gray-50, #939393)',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
