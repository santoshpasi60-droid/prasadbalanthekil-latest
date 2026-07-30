import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Play } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Showreel,
})

const showreelOrder = [
  'Arrey Waah — Company Showreel',
  'Editing Showreel',
  'BigRock Customer Spotlight',
  'Cinematic Brand Film',
  'Shemaroo — Brand Campaign',
]

function youtubeId(url: string | undefined) {
  if (!url) return undefined
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/)
  return match?.[1]
}

function Showreel() {
  const projects = [...allProjects].sort((firstProject, secondProject) => {
    const firstPosition = showreelOrder.indexOf(firstProject.title)
    const secondPosition = showreelOrder.indexOf(secondProject.title)

    if (firstPosition === -1 && secondPosition === -1) return 0
    if (firstPosition === -1) return 1
    if (secondPosition === -1) return -1
    return firstPosition - secondPosition
  })

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="font-display text-5xl text-red-600 tracking-wide mb-2">Showreel</h1>
        <p className="text-neutral-400 mb-10">
          Brand films, promos, and campaigns from Arrey Waah Entertainment and a 20-year
          broadcast career.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const id = youtubeId(project.liveUrl)
            return (
              <Card
                key={project._meta.path}
                className="flex flex-col bg-white/5 border-white/10 overflow-hidden group"
              >
                {id && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-video overflow-hidden"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play size={40} className="text-red-600" fill="currentColor" />
                    </div>
                  </a>
                )}
                <CardHeader>
                  <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-neutral-400 mb-4 flex-1 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-red-500 hover:text-red-400 transition-colors font-medium"
                    >
                      <Play size={14} fill="currentColor" />
                      Watch
                    </a>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
