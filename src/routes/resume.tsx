import { marked } from 'marked'

import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

const SOFTWARE = [
  'Adobe Premiere Pro',
  'Adobe Photoshop',
  'DaVinci Resolve',
  'Avid Media Composer',
  'Runway',
  'Gemini',
  'ChatGPT',
  'AI Creative Workflows',
]

const LANGUAGES = ['English', 'Hindi', 'Marathi', 'Tamil', 'Telugu', 'Malayalam']

function Resume() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )

  return (
    <div className="min-h-screen p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="font-display text-5xl text-red-600 tracking-wide">Resume</h1>
          <p className="text-lg text-neutral-400">
            Creative Direction, Promo Editing & Brand Storytelling &mdash; 20+ Years
          </p>
          <Separator className="mt-8 bg-white/10" />
        </div>

        {/* Career Timeline */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-white tracking-wide">Career Timeline</h2>
          <div className="relative border-l-2 border-red-600/40 pl-8 space-y-10">
            {jobs.map((job) => (
              <div key={job.jobTitle} className="relative">
                <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-red-600 border-2 border-black" />
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div className="space-y-1">
                        <CardTitle className="text-xl text-white">{job.jobTitle}</CardTitle>
                        <p className="font-medium text-red-500">
                          {job.company} &middot; {job.location}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-sm whitespace-nowrap">
                        {new Date(job.startDate).getFullYear()} &ndash;{' '}
                        {job.endDate ? new Date(job.endDate).getFullYear() : 'Present'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 leading-relaxed text-neutral-300">{job.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-white/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {job.content && (
                      <div
                        className="mt-6 prose prose-invert prose-sm max-w-none prose-a:text-red-500"
                        dangerouslySetInnerHTML={{
                          __html: marked(job.content),
                        }}
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-white tracking-wide">Education</h2>
          <div className="space-y-6">
            {allEducations.map((education) => (
              <Card key={education.school} className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{education.school}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-neutral-300">{education.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Software & Tools */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-white tracking-wide">Software &amp; Tools</h2>
          <div className="flex flex-wrap gap-3">
            {SOFTWARE.map((tool) => (
              <Badge key={tool} className="bg-red-600/20 text-red-400 border border-red-600/40">
                {tool}
              </Badge>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-white tracking-wide">Languages</h2>
          <div className="flex flex-wrap gap-3">
            {LANGUAGES.map((lang) => (
              <Badge key={lang} variant="outline" className="border-white/20">
                {lang}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
