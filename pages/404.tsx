import React from "react"
import { useTranslation } from "next-i18next"
import * as el from "./styled"

const NotSuchPage = () => {
  const { t } = useTranslation(["common"])
  return (
    <>
      <el.MainWrapper>
        <div>
          <el.ErrorNum>
              404
          </el.ErrorNum>
          <el.ErrorHead>
          {t("Error")}
          </el.ErrorHead>
        </div>
        <el.ErrorBody>
          {t("Oops... This page not Found")}
        </el.ErrorBody>
        <el.ReturnLink href="/">
            {t("RETURN HOME")}
        </el.ReturnLink>
      </el.MainWrapper>
    </>
  )
}
NotSuchPage.getLayout = (page: React.ReactNode) => <div>{page}</div>



export default NotSuchPage