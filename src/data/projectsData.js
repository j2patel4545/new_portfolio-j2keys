/**
 * =========================================================================
 * PROJECTS DATA REPOSITORY
 * =========================================================================
 * HOW TO ADD A NEW PROJECT:
 * Simply copy the template below and add it to the `initialProjects` array:
 * 
 * {
 *   id: 'unique-project-id',
 *   title: 'Your Project Name',
 *   domain: 'project-domain.com', // displayed in macOS window bar
 *   category: 'Web App',           // e.g. Full Stack, SaaS, Mobile, E-Commerce
 *   description: 'Clear summary of what the project does and key features.',
 *   technologies: ['React', 'Node.js', 'Tailwind CSS'],
 *   image: '/projects/your_image.webp', // place image in public/projects/
 *   liveUrl: 'https://example.com',     // optional
 *   githubUrl: 'https://github.com/...', // optional
 *   featured: true,                     // optional (adds featured badge)
 * },
 * =========================================================================
 */

export const initialProjects = [
  {
    id: 'nau-university-portal',
    title: 'NAU, Navsari Website',
    domain: 'v3.nau.in',
    category: 'Institutional Portal',
    description: 'Official web portal for Navsari Agricultural University (v3.nau.in) serving students and faculty with accessibility standards (GIGW), academic circulars, departmental directories, and digital university governance.',
    technologies: ['React', 'Accessibility (GIGW)', 'Tailwind CSS', 'Enterprise CMS'],
    image: '/projects/nau.in.webp',
    liveUrl: 'https://v3.nau.in',
    githubUrl: 'https://github.com/j2patel4545',
    featured: true,
  },
  {
    id: 'd2d-admission-portal',
    title: 'D2D Common Admission Portal',
    domain: 'd2d.admissions.ac.in',
    category: 'Enterprise Web App',
    description: 'Centralized state-wide admissions portal for Gujarat State Agricultural Universities featuring role-based verification, multi-college quota mapping, and student lifecycle workflows.',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    image: '/projects/D2D_dashbord.webp',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/j2patel4545',
    featured: true,
  },
  {
    id: 'lims-laboratory-system',
    title: 'LIMS Lab Analytics Dashboard',
    domain: 'lims.nau.in',
    category: 'Management System',
    description: 'Laboratory Information Management System for Navsari Agricultural University streamlining soil sample testing workflows, technician activity logs, and automated farmer test certificates.',
    technologies: ['React', 'Chart.js', 'Tailwind CSS', 'Dashboard UI', 'Analytics'],
    image: '/projects/LIMS_Dashbord (1).webp',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/j2patel4545',
    featured: true,
  },
  {
    id: 'exam-timetable-automation',
    title: 'Exam Timetable Automation',
    domain: 'timetable.nau.in',
    category: 'Automation Engine',
    description: 'Algorithmic exam timetable scheduling engine managing 1,400+ university courses across 16 colleges with zero-conflict slot generation and multi-role administrator access.',
    technologies: ['React', 'Algorithmic Scheduling', 'Tailwind CSS', 'Audit Logging'],
    image: '/projects/Timetable_dashbord (1).webp',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/j2patel4545',
    featured: true,
  },
  {
    id: 'click-heart-studio',
    title: 'Click Heart Studio Platform',
    domain: 'clickheartstudio.com',
    category: 'Creative Studio',
    description: 'High-end cinematography and photography showcase platform featuring full-screen trailer video playback, editorial portfolio galleries, and direct client inquiry funnels.',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Video Streaming', 'Framer Motion'],
    image: '/projects/click_hear3.webp',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/j2patel4545',
    featured: true,
  },
]

export default initialProjects
