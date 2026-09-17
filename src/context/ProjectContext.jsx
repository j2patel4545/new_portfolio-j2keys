import { createContext, useContext, useState, useMemo } from 'react'
import { initialProjects } from '@/data/projectsData'

export const ProjectContext = createContext({
  projects: initialProjects,
  addProject: () => {},
  removeProject: () => {},
  getProjectById: () => null,
  categories: [],
})

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState(initialProjects)

  // Add a new project programmatically
  const addProject = (newProject) => {
    setProjects((prev) => [
      ...prev,
      {
        ...newProject,
        id: newProject.id || `project-${Date.now()}`,
      },
    ])
  }

  // Remove a project by id
  const removeProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id))
  }

  // Find project by id
  const getProjectById = (id) => {
    return projects.find((p) => p.id === id) || null
  }

  // Unique categories derived from current projects
  const categories = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))
  }, [projects])

  const value = useMemo(
    () => ({
      projects,
      setProjects,
      addProject,
      removeProject,
      getProjectById,
      categories,
    }),
    [projects, categories]
  )

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
}

// Custom hook for accessing projects anywhere in the application
export const useProjects = () => {
  const context = useContext(ProjectContext)
  if (!context) {
    return {
      projects: initialProjects,
      addProject: () => {},
      removeProject: () => {},
      getProjectById: () => null,
      categories: [],
    }
  }
  return context
}

export default ProjectProvider
