interface PixelScanlinesProps {
  className?: string
}

export default function PixelScanlines({ className = "opacity-20" }: PixelScanlinesProps) {
  return <div className={`scanlines fixed inset-0 pointer-events-none z-50 ${className}`}></div>
}
