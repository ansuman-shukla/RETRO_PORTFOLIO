interface PixelProjectCardProps {
  title: string
  tech: string
  description: string
  repoUrl: string
}

export default function PixelProjectCard({ title, tech, description, repoUrl }: PixelProjectCardProps) {
  return (
    <div className="pixel-card">
      <h3 className="text-xl mb-2 text-[#1E00FF]">{title}</h3>
      <div className="pixel-divider-small mb-3"></div>
      <div className="mb-3 text-[#FF0004] text-sm">{tech}</div>
      <p className="text-sm mb-4">{description}</p>
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pixel-button inline-block bg-[#1E00FF] hover:bg-[#FF0004] text-white px-3 py-1 text-xs"
      >
        SHOW MORE
      </a>
    </div>
  )
}
