import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Phone, Globe, Send, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
          <p className="text-neutral-400 mb-6">
            Thanks for reaching out. Prasad will get back to you as soon as possible.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="font-display text-5xl text-red-600 tracking-wide mb-2">Contact</h1>
          <p className="text-neutral-400 mb-8">
            Have a project in mind or want to talk shop? Reach out directly.
          </p>

          <div className="space-y-4 text-neutral-300">
            <a
              href="mailto:prasad.balan@arreywaah.com"
              className="flex items-center gap-3 hover:text-red-500 transition-colors"
            >
              <Mail size={18} className="text-red-600" />
              prasad.balan@arreywaah.com
            </a>
            <a
              href="tel:+919819297333"
              className="flex items-center gap-3 hover:text-red-500 transition-colors"
            >
              <Phone size={18} className="text-red-600" />
              +91-9819297333
            </a>
            <a
              href="tel:+928169268796"
              className="flex items-center gap-3 hover:text-red-500 transition-colors"
            >
              <Phone size={18} className="text-red-600" />
              +91-8169268796
            </a>
            <a
              href="https://www.arreywaah.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-red-500 transition-colors"
            >
              <Globe size={18} className="text-red-600" />
              arreywaah.com
            </a>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.currentTarget
            const formData = new FormData(form)
            fetch('/contact.html', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams(
                formData as unknown as Record<string, string>,
              ).toString(),
            }).then(() => setSubmitted(true))
          }}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors text-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors text-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors resize-none text-white"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            <Send size={16} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
