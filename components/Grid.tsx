import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { TracingBeam } from './ui/tracing-beam'

const Grid = () => {
  return (
    <section id="about">
      <TracingBeam className='mx-0 px-6'>
        <BentoGrid>
            {[{ title: 'Title1', description: 'Desc1', id: 1 }].map((item) => (
                <BentoGridItem 
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}           
                />
            ))}
        </BentoGrid>
      </TracingBeam>
    </section>
  )
}

export default Grid
