import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en.json'
import translationID from './locales/id.json'

const resources = {
    en: {
        translation: translationEN
    },
    id: {
        translation: translationID
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'id',
        interpolation: {
            escapeValue: false
        }
    })

export default i18next
