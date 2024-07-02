import { projects } from '@/data'
import React from 'react'

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-pink-500'>recent projects</span>
      </h1>

      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {projects.map((project) => (
            <div>
                {project.title}
            </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
