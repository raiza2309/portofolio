// Library
import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Component
import { GlobalConsumerComponent } from '../context/context'
import Loading from '../../pages/loading/loading'
import Header from '../header/header'
import Home from '../../pages/home/home'
import Awards from '../../pages/awards/awards'
import Projects from '../../pages/projects/projects'
import Detail from '../../pages/projects/detail/detail'
import NotFound from '../../pages/notFound/notFound'

const Controllers = props => {
    return (
        <Fragment>
            {(props.globalValue.isLoading ? <Loading /> : '')}
            <div className={(props.globalValue.isLoading ? 'visually-hidden' : 'd-block')}>
                <BrowserRouter>
                    <Header />
                    <main className='mb-3'>
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                            <Route path='/awards' element={<Awards />} />
                            <Route path='/projects' element={<Projects />} />
                            <Route path='/projects/:id' element={<Detail />} />
                            <Route path='/404' element={<NotFound />} />
                            <Route path='*' element={<Navigate to={'/404'} replace={true} />} />
                        </Routes>
                    </main>
                </BrowserRouter>
            </div>
        </Fragment>
    )
}

export default GlobalConsumerComponent(Controllers)
