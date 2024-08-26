import { Cairo } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cairo = Cairo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
})

const ExperienceCard = ({ experience }) => {
  return (
    <div className="flex flex-col gap-[5px] items-center justify-center border-[1px] border-gray-200 w-full py-8">
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center"
        style={{
          background: 'rgba(0, 210, 94,0.23)',
        }}
      >
        <FontAwesomeIcon
          icon={experience.icon}
          className="w-6 h-6 text-green-500"
        />
      </div>
      <div className={`flex flex-col items-center mt-2 ${cairo.className}`}>
        <h3 className="text-2xl font-bold">{experience.title}</h3>
        <p className="text-gray-700 mt-3 text-sm">{experience.description}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
