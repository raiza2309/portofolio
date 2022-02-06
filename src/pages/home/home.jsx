// Library
import React, { Fragment, useEffect/*, Fragment */ } from 'react'
import { useTranslation } from 'react-i18next'

// Localization config
import '../../localization/conf'

// Component
import { GlobalConsumerComponent } from '../../components/context/context'

// CSS
import './home.css'

// Images
import bs from './img/bootstrap.svg'
import css from './img/CSS.svg'
import html from './img/HTML5.svg'
import java from './img/java.svg'
import js from './img/JS.svg'
import kotlin from './img/kotlin.svg'
import mysql from './img/mysql.svg'
import php from './img/php.svg'
import python from './img/python.svg'
import laravel from './img/laravel.svg'
import react from './img/react.svg'
import jquery from './img/jquery.svg'

const Home = props => {
    const { t } = useTranslation()
    useEffect(() => {
        setTimeout(() => {
            props.globalValue.setLoading(false)
        }, 1000)
    }, [props.globalValue.isLoading])

    return (
        <Fragment>
            <div className='container'>
                <section className='introduction'>
                    <h2 className='text-center mb-3'>{t('about_me')}</h2>
                    <article className='mx-auto'>
                        <q>{t('intro')}</q>
                    </article>
                </section>
                <section id="skills">
                    <h2 className="text-center mb-4">{t('my_skills')}</h2>
                    <div className="row justify-content-center align-items-stretch">
                        <div className="col-lg-2 col-md-3 col-5 mb-3">
                            <div className="card h-100">
                                <img src={html} alt='HTML' className='card-img-top min-150 pt-3 px-3' />
                                <div className="card-body d-flex align-items-end justify-content-center">
                                    <h5 className="card-title text-center">HTML</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5 mb-3">
                            <div className="card h-100">
                                <img src={css} alt='CSS' className='card-img-top min-150 pt-3 px-3' />
                                <div className="card-body d-flex align-items-end justify-content-center">
                                    <h5 className="card-title text-center">CSS</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5 mb-3">
                            <div className="card h-100">
                                <img src={js} alt='JavaScript' className='card-img-top min-150 pt-3 px-3' />
                                <div className="card-body d-flex align-items-end justify-content-center">
                                    <h5 className="card-title text-center">JavaScript</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5 mb-3">
                            <div className="card h-100">
                                <img src={php} alt='PHP' className='card-img-top min-150 pt-3 px-3' />
                                <div className="card-body d-flex align-items-end justify-content-center">
                                    <h5 className="card-title text-center">PHP</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5 mb-3">
                            <div className="card h-100">
                                <img src={python} alt='Python' className='card-img-top min-150 pt-3 px-3' />
                                <div className="card-body d-flex align-items-end justify-content-center">
                                    <h5 className="card-title text-center">Python</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5 mb-3">
                            <div className="card h-100">
                                <img src={java} alt='Java' className='card-img-top min-150 pt-3 px-3' />
                                <div className="card-body d-flex align-items-end justify-content-center">
                                    <h5 className="card-title text-center">Java</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5 mb-3">
                            <div className="card h-100">
                                <img src={kotlin} alt='Kotlin' className='card-img-top min-150 pt-3 px-3' />
                                <div className="card-body d-flex align-items-end justify-content-center">
                                    <h5 className="card-title text-center">Kotlin</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5 mb-3">
                            <div className="card h-100">
                                <img src={mysql} alt='MySQL' className='card-img-top min-150 pt-3 px-3' />
                                <div className="card-body d-flex align-items-end justify-content-center">
                                    <h5 className="card-title text-center">MySQL</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5 mb-3">
                            <div className="card h-100">
                                <img src={bs} alt='Bootstrap' className='card-img-top min-150 pt-3 px-3' />
                                <div className="card-body d-flex align-items-end justify-content-center">
                                    <h5 className="card-title text-center">Bootstrap</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5 mb-3">
                            <div className="card h-100">
                                <img src={jquery} alt='JQuery' className='card-img-top min-150 pt-3 px-3' />
                                <div className="card-body d-flex align-items-end justify-content-center">
                                    <h5 className="card-title text-center">JQuery</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5 mb-3">
                            <div className="card h-100">
                                <img src={laravel} alt='Laravel' className='card-img-top min-150 pt-3 px-3' />
                                <div className="card-body d-flex align-items-end justify-content-center">
                                    <h5 className="card-title text-center">Laravel</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5 mb-3">
                            <div className="card h-100">
                                <img src={react} alt='ReactJS' className='card-img-top min-150 pt-3 px-3' />
                                <div className="card-body d-flex align-items-end justify-content-center">
                                    <h5 className="card-title text-center">ReactJS</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default GlobalConsumerComponent(Home)
