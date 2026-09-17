import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#ecebe8] dark:bg-black text-[#18181b] dark:text-zinc-100 bg-radial-glow overflow-x-hidden transition-colors duration-300">
      {/* Subtle ambient lighting effects */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40 dark:opacity-25">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-rose-500/5 dark:bg-rose-500/10 blur-[160px] rounded-full" />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-amber-500/5 dark:bg-amber-500/10 blur-[160px] rounded-full" />
      </div>

      {/* Main header */}
      <Navbar />

      {/* Main page content container */}
      <main className="flex-grow z-10 relative">
        {children}
      </main>

      {/* Main footer */}
      <Footer />
    </div>
  )
}

export default Layout
