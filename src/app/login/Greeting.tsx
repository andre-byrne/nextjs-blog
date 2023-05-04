'use client'

import { Display } from "@edvisor/product-language"
import { T, useTranslation } from "../../lib/i18n"
import { Trans } from "react-i18next"
import React, { Suspense } from "react"

export function Greeting () {
  const {t} = useTranslation()

  return (
    <Display>
      <Trans t={t} i18nKey={'STUDENT_PORTAL.LOGIN.GREETING'}>Welcome to your <strong>student portal</strong></Trans>
    </Display>
  )
}