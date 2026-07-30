import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Instagram, Linkedin, Youtube } from 'lucide-react'

import { Header } from '@/components/Header'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Prasad Balan Thekil | Creative Director & Promo Editor',
      },
      {
        name: 'description',
        content:
          'Prasad Balan Thekil — Creative Director, Senior Supervising Promo Editor, and Brand Storyteller with 20+ years crafting entertainment marketing, television promos, brand films, and AI-powered visual content.',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/arreywaah.com__?igsh=aDg2MzBiN3ljYTRt',
      icon: Instagram,
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@arreywaah',
      icon: Youtube,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/prasad-balan-39737122?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      icon: Linkedin,
    },
  ]

  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        <Header />
        {children}
        <footer className="border-t border-white/10 mt-24">
          <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-center sm:text-left">
              &copy; {new Date().getUTCFullYear()} Prasad Balan Thekil — Arrey Waah Entertainment.
            </p>
            <div className="flex items-center gap-4">
              <p className="uppercase tracking-widest text-red-600">The New Age Mantra</p>
              <div className="flex items-center gap-1" aria-label="Social media links">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
