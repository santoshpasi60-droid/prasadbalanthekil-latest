import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

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
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        <Header />
        {children}
        <footer className="border-t border-white/10 mt-24">
          <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>&copy; {new Date().getUTCFullYear()} Prasad Balan Thekil — Arrey Waah Entertainment Test.</p>
            <p className="uppercase tracking-widest text-red-600">The New Age Mantra</p>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
