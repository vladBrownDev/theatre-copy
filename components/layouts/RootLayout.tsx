import React from "react"
import { Alumni_Sans } from "@next/font/google"

const alumniSans = Alumni_Sans()

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <div className={alumniSans.className}>
      {children}
    </div>
  )
}

export default RootLayout
