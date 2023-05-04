import { isString } from 'lodash'
import * as React from 'react'
import i18n from 'i18next'

import Backend from 'i18next-http-backend'
import { initReactI18next, useTranslation as useTranslationBase } from 'react-i18next'
import { defaultTo, isNil } from './safe-navigation'

const NAMESPACES = ['shared', 'agents', 'legacy', 'translation']

export type TranslatableInput = [string, Record<string, unknown>]

type IPassthroughProps = {
  passthrough?: string
  key?: never
}

type ITranslatableProps = {
  key: string
  values?: Record<string, unknown>
  passthrough?: never
}

function isPassthroughProps (props: IPassthroughProps | ITranslatableProps): props is IPassthroughProps {
  return isString(props.passthrough)
}

export type Props = string | IPassthroughProps | ITranslatableProps

export function translatable (): TranslatableInput
export function translatable (props?: string): TranslatableInput
export function translatable (props?: IPassthroughProps): TranslatableInput
export function translatable (props?: ITranslatableProps): TranslatableInput
export function translatable (props?: Props): TranslatableInput {
  if (isNil(props)) {
    return ['GLOBAL.NOTHING', {}]
  }

  // if they called translate('SQB.SOMETHING')
  // return a simple translatable
  if (isString(props)) {
    return [props, {}]
  }

  if (isPassthroughProps(props)) {
    const values = defaultTo(props, {})
    return ['GLOBAL.PASSTHROUGH', values]
  }

  const values = defaultTo(props.values, {})

  return [props.key, values]
}

export type TranslationFunction = <T>(key: string, values?: T) => string

export function useTranslation () {
  const { t: _t, ready } = useTranslationBase(undefined, { useSuspense: false })

  return {
    t: function <T>(key: string, values?: T) {
      return ready ? _t(key, values) : ''
    }

  }
}

interface ITProps {
  values?: Record<string, string | number>
  children: string
}

function Words (props: ITProps) {
  const { t } = useTranslation()

  return (
    <>{t(props.children, { ...props.values })}</>
  ) 
}

export function T(props: ITProps) {
  return (
    <React.Suspense fallback={<></>}>
      <Words {...props} />
    </React.Suspense>
  )
}

export function changeLanguage(languageCode: string) {
  i18n.changeLanguage(languageCode)
}

export function dangerouslyInitI18next() {
  if (i18n.isInitialized) {
    return i18n
  }

  return i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      ns: NAMESPACES,
      defaultNS: 'agents', // if no namespace is defined, will default to the legacy namespace
      fallbackNS: 'translation',

      parseMissingKeyHandler(key: string) {
        if (process.env.NODE_ENV === 'development') {
          throw new Error(`The following key is missing from the en language file in the i18n repo, please add it there and then hard reload this page: ${key}`)
        }

        return key
      },
      // https://github.com/i18next/i18next-http-backend
      // this will lazy-load in the translations we need when necessary
      backend: {
        // If allowMultiLoading is false, lngs and namespaces will have only one element each
        loadPath(lngs: string[], namespaces: unknown[]) {
          return namespaces[0] === 'translation'
            ? makeEdvisorForAgentsURL(lngs)
            : makeI18nURL()
        },
        allowMultiLoading: false,
        crossDomain: true,
      },
    })
}

function makeI18nURL() {
  console.log(`${process.env.EDVISOR_I18N_URL}/recruit/{{lng}}/{{ns}}.json`)
  return `${process.env.EDVISOR_I18N_URL}/recruit/{{lng}}/{{ns}}.json`
}

function makeEdvisorForAgentsURL(lngs: string[]) {
  const lang = lngs[0]
  const langParts = lang.split('_')
  let langPath = lang
  // handle splitting of something like es_ES to es/es for legacy edvisor translations
  if (langParts.length === 2) {
    langPath = `${langParts[0]}/${langParts[1]}`
  }

  console.log(process.env)
  return `${process.env.EDVISOR_I18N_URL}/${langPath}/translations.json`
}
