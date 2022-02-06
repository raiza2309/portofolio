// Library
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

// Component
import { GlobalConsumerComponent } from '../../components/context/context'

// Localization
import '../../localization/conf'

// CSS
import './projects.css'

// Images
import bloodMonitoring from './img/blood-monitoring.svg'
import hospital from './img/hospital.svg'
import puskesmas from './img/puskesmas.svg'

const Projects = props => {
    const { t } = useTranslation()

    useEffect(() => {
        setTimeout(() => {
            props.globalValue.setLoading(false)
        }, 1000);
    }, [props.globalValue.isLoading])

    return (
        <div className='container pb-3' id='projects'>
            <h2 className='text-center mb-4'>{t('my-projects')}</h2>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4 mb-3' id='si-mendut'>
                    <Link to={'1'} className='text-decoration-none text-body'>
                        <div className='card h-100'>
                            <div className='card-img-top'>
                                <img src={puskesmas} alt='Si Mendut' className='p-4 w-50 d-block mx-auto' />
                            </div>
                            <div className='card-body d-flex flex-column'>
                                <h4 className='fw-bold mb-3'>{t('projects.0.nama_project')}</h4>
                                <p className="card-subtitle mt-auto text-secondary">{t('projects.0.waktu_pengerjaan')}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-3' id='si-mendut'>
                    <Link to={'2'} className='text-decoration-none text-body'>
                        <div className='card h-100'>
                            <div className='card-img-top'>
                                <img src={bloodMonitoring} alt='Monitoring Tekanan Darah' className='p-4 w-50 d-block mx-auto' />
                            </div>
                            <div className='card-body d-flex flex-column'>
                                <h4 className='fw-bold mb-3'>{t('projects.1.nama_project')}</h4>
                                <p className="card-subtitle mt-auto text-secondary">{t('projects.0.waktu_pengerjaan')}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-3' id='si-mendut'>
                    <Link to={'3'} className='text-decoration-none text-body'>
                        <div className='card h-100'>
                            <div className='card-img-top'>
                                <img src={hospital} alt='SIRS' className='p-4 w-100 d-block mx-auto' />
                            </div>
                            <div className='card-body d-flex flex-column'>
                                <h4 className='fw-bold mb-3'>{t('projects.2.nama_project')}</h4>
                                <p className="card-subtitle mt-auto text-secondary">{t('projects.0.waktu_pengerjaan')}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GlobalConsumerComponent(Projects)