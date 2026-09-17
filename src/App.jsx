import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SmoothScrollProvider } from '@/context/SmoothScroll'
import { ThemeProvider } from '@/context/ThemeContext'
import { ProjectProvider } from '@/context/ProjectContext'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SmoothScrollProvider>
          <ProjectProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Layout>
          </ProjectProvider>
        </SmoothScrollProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
