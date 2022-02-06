// Library
import React, { Fragment, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'

// Component
import { GlobalConsumerComponent } from '../../../components/context/context'

// CSS
import './detail.css'

// Localization
import '../../../localization/conf'

// Images
import bloodMonitoring1 from '../img/blood-monitoring1.png'
import bloodMonitoring2 from '../img/blood-monitoring2.png'
import bloodMonitoring3 from '../img/blood-monitoring3.png'
import siMendut1 from '../img/si-mendut1.png'
import siMendut2 from '../img/si-mendut2.png'
import siMendut3 from '../img/si-mendut3.png'
import sirs1 from '../img/sirs1.png'
import sirs2 from '../img/sirs2.png'
import sirs3 from '../img/sirs3.png'

const Detail = props => {
    const { id } = useParams('id')
    const { t } = useTranslation()

    useEffect(() => {
        props.globalValue.setPage('/projects')
    }, [])

    return (
        <Fragment>
            <div className="container" id='project'>
                <div className="card">
                    <div className="card-header d-flex flex-row align-items-center py-3">
                        <Link to={'/projects'} className='material-icons me-3 text-secondary text-decoration-none'>arrow_back</Link>
                        <h5 className="d-inline card-title m-0 fw-bold">{ t(`projects.${id - 1}.nama_project`) }</h5>
                    </div>
                    <div className="card-body">
                        <div className="card mx-3">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <img src={(id == 1 ? siMendut1 : (id == 2 ? bloodMonitoring1 : (id == 3 ? sirs1 : '')))} className="img-fluid" />
                                    </div>
                                    <div className="col-lg-9 col-md-8 col-12">
                                        <article>
                                            <p>{(id == 1 ? t('projects.0.deskripsi_1') : (id == 2 ? t('projects.1.deskripsi_1') : (id == 3 ? t('projects.2.deskripsi_1') : '')))}</p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mx-3 mt-3">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-9 col-md-8 col-12">
                                        <article>
                                            <p>{(id == 1 ? t('projects.0.deskripsi_2') : (id == 2 ? t('projects.1.deskripsi_2') : (id == 3 ? t('projects.2.deskripsi_2') : '')))}</p>
                                        </article>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <img src={(id == 1 ? siMendut2 : (id == 2 ? bloodMonitoring2 : (id == 3 ? sirs2 : '')))} className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mx-3 mt-3">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <img src={(id == 1 ? siMendut3 : (id == 2 ? bloodMonitoring3 : (id == 3 ? sirs3 : '')))} className="img-fluid" />
                                    </div>
                                    <div className="col-lg-9 col-md-8 col-12">
                                        <article>
                                            <p>{(id == 1 ? t('projects.0.deskripsi_3') : (id == 2 ? t('projects.1.deskripsi_3') : (id == 3 ? t('projects.2.deskripsi_3') : '')))}</p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GlobalConsumerComponent(Detail)