interface PixelEducationCardProps {
  degree: string
  institution: string
  dates: string
  location: string
  isDarkMode?: boolean
}

export default function PixelEducationCard({
  degree,
  institution,
  dates,
  location,
  isDarkMode = true,
}: PixelEducationCardProps) {
  return (
    <div className="pixel-card">
      <h3 className="text-xl mb-1 text-[#1E00FF]">{degree}</h3>
      <h4 className="text-lg mb-2 text-[#FF0004]">{institution}</h4>
      <div className="pixel-divider-small mb-3"></div>
      <div className={`text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
        <div>{dates}</div>
        <div>{location}</div>
      </div>
    </div>
  )
}
