import React from "react"
import { useRouter } from "next/router"
import localFont from "@next/font/local"

const optima = localFont({
  src: "../../public/fonts/optima-cufonfonts/OPTIMA.woff2",
  declarations: [{ prop: "size-adjust", value: "80%" }]
})
const bookMan = localFont({
  src: "../../public/fonts/Bookman/URWBookman-Light.woff2",
  declarations: [{ prop: "size-adjust", value: "80%" }]
})
const caviar = localFont({
  src: "../../public/fonts/Caviar/CaviarDreams.woff2",
  declarations: [{ prop: "size-adjust", value: "80%" }]
})

enum Locales {
  EN = "en",
  RU = "ru",
  UK = "uk"
}

const fonts: Record<Locales, string> = {
  en: optima.className,
  ru: bookMan.className,
  uk: caviar.className,
}

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  const router = useRouter()
  const currentLocale = (router?.locale || Locales.EN) as Locales

  return (
    <div className={fonts[currentLocale]}>
      {children}
    </div>
  )
}

export default RootLayout
