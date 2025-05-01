"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PixelButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function PixelButton({ children, className, onClick }: PixelButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn("pixel-button bg-[#1E00FF] hover:bg-[#FF0004] text-white px-4 py-2 transition-colors", className)}
    >
      {children}
    </button>
  )
}
