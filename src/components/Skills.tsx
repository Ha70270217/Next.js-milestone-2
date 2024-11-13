import React from 'react'
const Skills = () => {
  return (
    <div className='container pt-32'>
        <div className=' grid md:grid-cols-2 gap-20 items-center'>
            <div >
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-grey pt-2'>
                    I have solid foundation in webdevelopment,Specailizing in HTML,CSS and Javascript.
                    My experience to extends using frameworks like React and Next.js to create dynamic user-freindly appplications.im also profecient in tailwind.css
                    for efficient styling and design.I stay updated in latest technologies to enhance my skill set and contribute
                    effectively to projects.
                </p>

            </div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
                  <h2>Next.js</h2>
                  <h2>Typescript</h2>
                  <h2>React</h2>
            </div>

            <div className='space-y-2'>
                  <h2>Node.js</h2>
                  <h2>Tailwind</h2>
                  <h2>CSS</h2>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
