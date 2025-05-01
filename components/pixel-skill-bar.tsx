interface PixelSkillBarProps {
  name: string
  level: number
  isDarkMode?: boolean
}

export default function PixelSkillBar({ name, level, isDarkMode = true }: PixelSkillBarProps) {
  const blocks = 10
  const filledBlocks = Math.round(level / 10)

  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className={`text-sm ${isDarkMode ? "text-white" : "text-black"}`}>{name}</span>
        <span className="text-sm text-[#FF0004]">{level}%</span>
      </div>
      <div className="flex space-x-1">
        {Array.from({ length: blocks }).map((_, index) => (
          <div key={index} className={`h-4 w-full ${index < filledBlocks ? "bg-[#1E00FF]" : "bg-gray-800"}`}></div>
        ))}
      </div>
    </div>
  )
}
