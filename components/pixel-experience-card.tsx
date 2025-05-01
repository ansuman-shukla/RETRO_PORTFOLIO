interface PixelExperienceCardProps {
  title: string
  company: string
  duration: string
  location: string
  achievements: string[]
  isDarkMode?: boolean
}

export default function PixelExperienceCard({
  title,
  company,
  duration,
  location,
  achievements,
  isDarkMode = true,
}: PixelExperienceCardProps) {
  return (
    <div className="pixel-card">
      <h3 className="text-xl mb-1 text-[#1E00FF]">{title}</h3>
      <h4 className="text-lg mb-2 text-[#FF0004]">{company}</h4>
      <div className={`mb-3 text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
        <div>{duration}</div>
        <div>{location}</div>
      </div>
      <div className="pixel-divider-small mb-3"></div>
      <ul className={`text-sm space-y-2 ${isDarkMode ? "text-white" : "text-black"}`}>
        {achievements.map((achievement, index) => (
          <li key={index} className="flex">
            <span className="mr-2 text-[#1E00FF]">&gt;</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
