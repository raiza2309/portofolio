// Library
import React, { Fragment, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Component
import { GlobalConsumerComponent } from '../../components/context/context'

// Localization
import '../../localization/conf'

// CSS
import './awards.css'

// Images
import web from './img/web.jpg'
import web2 from './img/web2.jpg'
import pwa from './img/pwa.jpg'
import python from './img/python.jpg'
import ml from './img/ml.jpg'
import android from './img/android.jpg'
import bigData from './img/big-data.jpg'


const Awards = props => {
    const { t } = useTranslation()

    useEffect(() => {
        setTimeout(() => {
            props.globalValue.setLoading(false)
        }, 1000)
    }, [props.globalValue.isLoading])

    return (
        <Fragment>
            <div className='container' id='awards'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-12 mb-4'>
                        <div className='card h-100'>
                            <img src={web} alt='Sertifikat Web' className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title fw-bold'>Sertifikat Kelas Belajar Pemrograman Web {t('by')} Dicoding Indonesia</h5>
                                <a href='https://www.dicoding.com/certificates/QLZ914O1DP5D' className='btn btn-primary btn-sm  mt-auto mt-2' rel='noreferrer' target={'_blank'}>{t('see_more')}</a>
                            </div>
                            <div className='card-footer'>
                                <span className='text-subtitle text-secondary'>{t('given_on')} 9 Juni 2020</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 mb-4'>
                        <div className='card h-100'>
                            <img src={web2} alt='Sertifikat Web Fundamental' className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title fw-bold'>Sertifikat Kelas Belajar Fundamental Front-End Web Development {t('by')} Dicoding Indonesia</h5>
                                <a href='https://www.dicoding.com/certificates/2VX32OL2JPYQ' className='btn btn-primary btn-sm  mt-auto mt-2' rel='noreferrer' target={'_blank'}>{t('see_more')}</a>
                            </div>
                            <div className='card-footer'>
                                <span className='text-subtitle text-secondary'>{t('given_on')} 15 Juni 2020</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 mb-4'>
                        <div className='card h-100'>
                            <img src={pwa} alt='Sertifikat PWA' className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title fw-bold'>Sertifikat Kelas Membangun Progressive Web Apps {t('by')} Dicoding Indonesia</h5>
                                <a href='https://www.dicoding.com/certificates/1OP8D16G2PQK' className='btn btn-primary btn-sm  mt-auto mt-2' rel='noreferrer' target={'_blank'}>{t('see_more')}</a>
                            </div>
                            <div className='card-footer'>
                                <span className='text-subtitle text-secondary'>{t('given_on')} 22 November 2020</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 mb-4'>
                        <div className='card h-100'>
                            <img src={android} alt='Sertifikat Android' className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title fw-bold'>Sertifikat Kelas Belajar Membuat Aplikasi Android untuk Pemula {t('by')} Dicoding Indonesia</h5>
                                <a href='https://www.dicoding.com/certificates/L4PQ3QYMVPO1' className='btn btn-primary btn-sm  mt-auto mt-2' rel='noreferrer' target={'_blank'}>{t('see_more')}</a>
                            </div>
                            <div className='card-footer'>
                                <span className='text-subtitle text-secondary'>{t('given_on')} 11 Desember 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 mb-4'>
                        <div className='card h-100'>
                            <img src={python} alt='Sertifikat Python' className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title fw-bold'>Sertifikat Kelas Memulai Pemrograman dengan Python {t('by')} Dicoding Indonesia</h5>
                                <a href='https://www.dicoding.com/certificates/07Z65WD5MXQR' className='btn btn-primary btn-sm  mt-auto mt-2' rel='noreferrer' target={'_blank'}>{t('see_more')}</a>
                            </div>
                            <div className='card-footer'>
                                <span className='text-subtitle text-secondary'>{t('given_on')} 6 April 2020</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 mb-4'>
                        <div className='card h-100'>
                            <img src={ml} alt='Sertifikat Machine Learning' className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title fw-bold'>Sertifikat Kelas Belajar Machine Learning untuk Pemula {t('by')} Dicoding Indonesia</h5>
                                <a href='https://www.dicoding.com/certificates/KEXL38NG4PG2' className='btn btn-primary btn-sm  mt-auto mt-2' rel='noreferrer' target={'_blank'}>{t('see_more')}</a>
                            </div>
                            <div className='card-footer'>
                                <span className='text-subtitle text-secondary'>{t('given_on')} 11 Juni 2021</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 mb-4'>
                        <div className='card h-100'>
                            <img src={bigData} alt='Sertifikat Big Data' className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title fw-bold'>Sertifikat Big Data Analyst {t('by')} SOLUSI247</h5>
                            </div>
                            <div className='card-footer'>
                                <span className='text-subtitle text-secondary'>{t('given_on')} 1 September 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GlobalConsumerComponent(Awards)
