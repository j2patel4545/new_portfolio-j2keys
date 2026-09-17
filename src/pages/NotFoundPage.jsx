import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'

export const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <Card className="max-w-md w-full text-center p-8">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>
        <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest block mb-2">
          Error 404
        </span>
        <h1 className="text-3xl font-extrabold text-white mb-3">Page Not Found</h1>
        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          The page you are looking for might have been moved or doesn't exist. Let's get you back on track.
        </p>
        <Link to="/">
          <Button variant="primary" size="md" icon={ArrowLeft} iconPosition="left" className="w-full">
            Back to Home
          </Button>
        </Link>
      </Card>
    </div>
  )
}
