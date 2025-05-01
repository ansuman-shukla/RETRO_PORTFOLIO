import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PixelWindowProps {
  title: string
  children: ReactNode
  className?: string
}

export default function PixelWindow({ title, children, className }: PixelWindowProps) {
  return (
    <div className={cn("pixel-window", className)}>
      <div className="pixel-window-title">
        <div className="pixel-window-controls">
          <span className="pixel-window-control bg-[#FF0004]"></span>
          <span className="pixel-window-control bg-[#1E00FF]"></span>
          <span className="pixel-window-control bg-white"></span>
        </div>
        <div className="pixel-window-title-text">{title}</div>
      </div>
      <div className="pixel-window-content">{children}</div>
    </div>
  )
}
