// Library
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

// Localization conf
import conf from '../../localization/conf'

// Component
import { GlobalConsumerComponent } from '../context/context'

// CSS
import './header.css'

// Images
import profile from './img/profile.jpg'
import github from './img/github.svg'
import gmail from './img/gmail.svg'
import instagram from './img/instagram.svg'
import linkedin from './img/linkedin.svg'
import whatsapp from './img/whatsapp.svg'
import youtube from './img/youtube.svg'

const Header = props => {
    const loc = useLocation()
    const { t } = useTranslation();    
    const [showHeader, setShowHeader] = useState(false)
    
    const page = props.globalValue.page

    const gantibahasa = _ => {
        props.globalValue.setLoading(true)
        if (props.globalValue.bahasa === 'id') {
            props.globalValue.setBahasa('en')
        } else if (props.globalValue.bahasa === 'en') {
            props.globalValue.setBahasa('id')
        }
    }

    const handlePindah = page => {
        props.globalValue.setLoading(true)
        props.globalValue.setPage(page)
    }

    useEffect(() => {
        props.globalValue.setPage(loc.pathname)
    }, [])

    useEffect(() => {
        conf.changeLanguage(props.globalValue.bahasa)
        setTimeout(() => {
            props.globalValue.setLoading(false)
        }, 1000)
    }, [props.globalValue.bahasa])

    useEffect(() => {
        if (loc.pathname === '/404') {
            setShowHeader(false)
        }
        else {
            setShowHeader(true)
        }
    }, [loc.pathname])

    if (showHeader) {
        return (
            <header className='cust-header'>
                <nav className='navbar navbar-expand-lg navbar-dark cust-navbar mb-3'>
                    <div className='container'>
                        <button className='navbar-toggler ms-auto' type='button' data-bs-toggle='collapse' data-bs-target='#navbar'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbar'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'><Link className={'nav-link' + (page === '/' ? ' active' : '')} to={'/'} onClick={() => handlePindah('/')}>Home</Link></li>
                                <li className='nav-item'><Link className={'nav-link' + (page === '/awards' ? ' active' : '')} to={'/awards'} onClick={() => handlePindah('/awards')}>{t('awards')}</Link></li>
                                <li className='nav-item'><Link className={'nav-link' + (page === '/projects' ? ' active' : '')} to={'/projects'} onClick={() => handlePindah('/projects')}>Project</Link></li>
                            </ul>
                            <ul className='navbar-nav ms-auto'>
                                <li className='nav-item px-2' onClick={(e) => { gantibahasa() }}>
                                    <span className='nav-link' style={{ cursor: 'pointer' }}>
                                        <img src={`https://flagcdn.com/80x60/${(props.globalValue.bahasa === 'id' ? 'id' : 'us')}.png`} width={15} className='me-2' />
                                        <span>{(props.globalValue.bahasa === 'id' ? 'ID' : 'EN')}</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <figure className='profile'>
                    <img src={profile} />
                </figure>
                <section className='header-content'>
                    <h1 className='name'>MOHAMAD PRADITA ANUGERAH RAMADHAN</h1>
                    <h4 className='desc'>WEB DEVELOPER, ANDROID DEVELOPER</h4>
                    <section className='row justify-content-center social-media mt-3 align-items-center text-center overflow-hidden'>
                        <div className='col-lg-1 col-md-2 col-3 mb-3'>
                            <a href='https://www.github.com/raiza2309' target={'_blank'} rel='noreferrer'>
                                <img src={github} className='w-50' />
                            </a>
                        </div>
                        <div className='col-lg-1 col-md-2 col-3 mb-3'>
                            <a href='https://www.youtube.com/channel/UCmBAo5TFaIVnWX5jCGdKPFQ' target={'_blank'} rel='noreferrer'>
                                <img src={youtube} className='w-50' />
                            </a>
                        </div>
                        <div className='col-lg-1 col-md-2 col-3 mb-3'>
                            <a href='http://wa.me/+6289619753756' target={'_blank'} rel='noreferrer'>
                                <img src={whatsapp} className='w-50' />
                            </a>
                        </div>
                        <div className='col-lg-1 col-md-2 col-3 mb-3'>
                            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=praditaramadhan00@gmail.com' target={'_blank'} rel='noreferrer'>
                                <img src={gmail} className='w-50' />
                            </a>
                        </div>
                        <div className='col-lg-1 col-md-2 col-3 mb-3'>
                            <a href='https://www.linkedin.com/in/mohamad-ramadhan/' target={'_blank'} rel='noreferrer'>
                                <img src={linkedin} className='w-50' />
                            </a>
                        </div>
                        <div className='col-lg-1 col-md-2 col-3 mb-3'>
                            <a href='https://www.instagram.com/raiza.id/' target={'_blank'} rel='noreferrer'>
                                <img src={instagram} className='w-50' />
                            </a>
                        </div>
                    </section>
                </section>
            </header>
        )
    }
    else {
        return null
    }
}

export default GlobalConsumerComponent(Header)
