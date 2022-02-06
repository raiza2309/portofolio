// Library
import React, { Fragment, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

// Component
import { GlobalConsumerComponent } from '../../components/context/context'

// Localization
import '../../localization/conf'

const NotFound = props => {
    const { t } = useTranslation()
    useEffect(() => {
        document.querySelector('main').classList.remove('mb-3')
        setTimeout(() => {
            props.globalValue.setLoading(false)
        }, 1000)
    }, [])

    return (
        <Fragment>
            <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className='m-0'>{ t('not_found') }</h1>
                <Link to={'/'} className="btn btn-primary mt-3">{ t('back_to_homepage') }</Link>
            </div>
        </Fragment>
    )
}

export default GlobalConsumerComponent(NotFound)