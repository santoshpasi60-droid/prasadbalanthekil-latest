import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar } from 'lucide-react'

export const Route = createFileRoute('/news')({
  component: News,
})

function News() {
  const posts = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="font-display text-5xl text-red-600 tracking-wide mb-2">News &amp; Recognition</h1>
        <p className="text-neutral-400 mb-10">
          Milestones from two decades of entertainment marketing and independent studio work.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post._meta.path}
              to="/news/$slug"
              params={{ slug: post._meta.path }}
              className="block"
            >
              <Card className="cursor-pointer bg-white/5 border-white/10 hover:border-red-600/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{post.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar size={14} />
                    <time>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300 mb-4">{post.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
