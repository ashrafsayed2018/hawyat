import { Experiences } from '@/app/constants'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <div className="py-20 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 place-items-center">
        {Experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  )
}

export default Experience
