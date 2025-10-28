import type React from "react"
import Image from "next/image"

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <Image src="/logo.png" alt="RevUp Agency Group" width={240} height={80} className="h-24 md:h-40 w-auto" priority />
  )
}
