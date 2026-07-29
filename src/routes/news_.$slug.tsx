import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar } from 'lucide-react'

export const Route = createFileRoute('/news/$slug')({
  component: NewsPost,
})

function NewsPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
          <Link to="/news" className="text-red-500 hover:underline">
            Back to News
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-red-500 mb-8"
        >
          <ArrowLeft size={16} />
          Back to News
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="font-display text-4xl text-white mb-4 tracking-wide">{post.title}</h1>
            <div className="flex items-center gap-3 text-neutral-500 mb-4">
              <Calendar size={16} />
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>&middot;</span>
              <span>{post.author}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div
            className="prose prose-invert max-w-none prose-a:text-red-500"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </div>
  )
}
