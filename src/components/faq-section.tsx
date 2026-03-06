/* FAQ Section - accordion-style Q&A */
import { useState } from 'react'

const faqs = [
  {
    id: '01',
    question: 'What is CEXDEX?',
    answer: 'CEXDEX is a centralized crypto exchange offering secure, high-liquidity spot and derivatives trading for global users.',
  },
  {
    id: '02',
    question: 'Is CEXDEX secure to use?',
    answer: 'Yes, CEXDEX employs multi-layer security including cold wallets, multi-signature authentication, and regular security audits to protect your assets.',
  },
  {
    id: '03',
    question: 'What markets can I trade on CEXDEX?',
    answer: 'CEXDEX supports spot trading, futures trading, and AI-powered automated trading across 350+ trading pairs.',
  },
  {
    id: '04',
    question: 'How competitive are trading fees on CEXDEX?',
    answer: 'CEXDEX offers industry-leading low fees with maker/taker discounts and additional fee reductions for high-volume traders.',
  },
  {
    id: '05',
    question: 'How do I get started on CEXDEX?',
    answer: 'Simply create an account with your email, complete verification, deposit funds, and start trading in minutes.',
  },
]

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('01')

  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-purple-400 mb-2">● Support 24/7 ●</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            FAQs About CEXDEX
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-900/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-purple-400 text-sm font-mono">{faq.id}</span>
                  <span className="text-white text-sm font-medium">{faq.question}</span>
                </div>
                <span className="text-gray-500 text-lg">
                  {openId === faq.id ? '−' : '+'}
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-5 pb-5 pl-14">
                  <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
