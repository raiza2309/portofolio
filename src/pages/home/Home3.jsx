// Library
import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

// Component
import Header from '../../components/header/header'
import Loading from '../loading/Loading'

const Home = props => {
    const { t } = useTranslation()
    const gantiBahasa = () => {
        console.log('A')
    }
    return (
        <Fragment>
            <Header/>
            <div className="mt-3 text-center">
                <h1 style={{ fontSize: 20, fontWeight: 'bold' }}>Pilih Bahasa:</h1>
                <div className="form-check form-check-inline">
                    <input type="radio" name="bahasa" className="form-check-input" value="id" onChange={gantiBahasa} />
                    <label htmlFor="bahasa" className="form-check-label">Indonesia</label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" name="bahasa" className="form-check-input" value="en" onChange={gantiBahasa} defaultChecked />
                    <label htmlFor="bahasa" className="form-check-label">Inggris</label>
                </div>
            </div>
            <div className="container">
                <div className="card mt-4 p-3">
                    <h1 className="card-title mt-0 mb-4" style={{ fontSize: 30 }}>{t('intro_name')}</h1>
                    <h3 className="card-subtitle" style={{ fontSize: 20 }}>{t('name')}</h3>
                </div>
            </div>
            {/* <Routes>
                <Route path="/ok" element={<CardIntro />}></Route>
            </Routes> */}
        </Fragment>
    )
}

export default Loading(Home)
