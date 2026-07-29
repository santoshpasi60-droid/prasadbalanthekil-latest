import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Play, Award, Sparkles, Tv, Clapperboard } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const CORE_EXPERTISE = [
  'Creative Direction',
  'Entertainment Marketing',
  'Television Promotions',
  'OTT Campaigns',
  'Trailer Editing',
  'Brand Storytelling',
  'AI-Assisted Content Creation',
  'Motion Graphics',
  'Campaign Strategy',
  'Promo Packaging',
  'Team Leadership',
  'Post Production Supervision',
]

const ACHIEVEMENTS = [
  { icon: Award, text: 'Best Cinematography Award — Kala Ghoda Festival' },
  { icon: Sparkles, text: 'Featured by BigRock — Entrepreneur & Creative Storyteller' },
  { icon: Clapperboard, text: 'Core Creative Team — Launch of Movies Now, Romedy Now & MN+' },
  { icon: Tv, text: '20+ Years in Television Promotions & Entertainment Marketing' },
]

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 lg:py-32 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-red-600 text-sm mb-4">
              Mumbai, Maharashtra
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none mb-6">
              PRASAD BALAN THEKIL
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 mb-8 max-w-xl">
              Creative Director &middot; Senior Supervising Promo Editor &middot; Brand
              Storyteller &middot; AI Filmmaker
            </p>
            <p className="text-neutral-400 italic mb-10 max-w-xl">
              &ldquo;Crafting stories that don&rsquo;t just promote content&mdash;they create
              anticipation.&rdquo;
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 transition-colors font-semibold rounded"
              >
                <Play size={18} fill="currentColor" />
                Watch the Showreel
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-red-600 hover:text-red-500 transition-colors font-semibold rounded"
              >
                View Full Resume
              </Link>
            </div>
          </div>
          <div className="justify-self-center">
            <img
              src="/prasad-headshot.jpeg"
              alt="Prasad Balan Thekil"
              className="w-56 h-72 sm:w-64 sm:h-80 object-cover rounded-lg border-2 border-red-600 shadow-2xl shadow-red-900/30"
            />
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="max-w-4xl mx-auto px-4 py-16 border-t border-white/10">
        <h2 className="font-display text-3xl text-red-600 mb-6 tracking-wide">
          Professional Summary
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          Creative Director, Senior Supervising Promo Editor, and Brand Storyteller with over 20
          years of experience in entertainment marketing, television promotions, brand films,
          trailers, digital campaigns, and post-production.
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          The creative journey began in feature films before moving to MTV (Viacom18), working on
          iconic youth entertainment properties including Roadies, Splitsvilla, MTV Bakra, Style
          Check, Super Select, and several on-air campaigns. He later joined Times Television
          Network, becoming part of the core creative team responsible for launching Movies Now,
          Romedy Now, and MN+, leading the conceptualization, editing, and supervision of
          high-impact Hollywood movie promos and channel branding.
        </p>
        <p className="text-neutral-300 leading-relaxed">
          In 2020, he founded{' '}
          <a
            href="https://www.arreywaah.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            Arrey Waah Entertainment
          </a>
          , a creative studio specializing in premium brand films, corporate storytelling, music
          videos, social media campaigns, and AI-powered visual content — bringing broadcast
          excellence together with an entrepreneurial, innovation-first mindset.
        </p>
      </section>

      {/* Core Expertise */}
      <section className="max-w-4xl mx-auto px-4 py-16 border-t border-white/10">
        <h2 className="font-display text-3xl text-red-600 mb-6 tracking-wide">Core Expertise</h2>
        <div className="flex flex-wrap gap-3">
          {CORE_EXPERTISE.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="text-sm border-white/20 text-neutral-200 px-3 py-1"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="max-w-4xl mx-auto px-4 py-16 border-t border-white/10">
        <h2 className="font-display text-3xl text-red-600 mb-6 tracking-wide">Key Achievements</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <Icon className="text-red-600 shrink-0 mt-1" size={20} />
              <p className="text-neutral-200">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why JioHotstar */}
      <section className="max-w-4xl mx-auto px-4 py-16 border-t border-white/10">
        <h2 className="font-display text-3xl text-red-600 mb-6 tracking-wide">
          Why JioHotstar
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          For Prasad, this is more than a job application&mdash;it&rsquo;s a creative homecoming.
          Having been part of MTV during the Viacom18 era, joining JioHotstar represents an
          opportunity to reconnect with an ecosystem that helped shape his career. Over the years,
          he has grown from a promo editor into a Creative Director, entrepreneur, and
          storyteller, and now hopes to bring that broader perspective, leadership, and passion
          back to one of India&rsquo;s most influential entertainment platforms.
        </p>
        <blockquote className="border-l-4 border-red-600 pl-4 italic text-neutral-300 mt-8">
          &ldquo;Great promos don&rsquo;t simply announce what&rsquo;s next&mdash;they make
          audiences eager to experience it. Every frame is an opportunity to tell a story, build
          anticipation, and create an unforgettable connection.&rdquo;
        </blockquote>
      </section>
    </div>
  )
}
