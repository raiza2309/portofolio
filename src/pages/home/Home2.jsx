import React, { Fragment, useEffect, useState } from 'react'

// Localization
import i18next from '../../localization/conf'
import { useTranslation } from 'react-i18next'
import Loading from '../loading/Loading'
import { ConsumerComponent } from '../../components/context/context'

// const Home = props => {
//     const { t } = useTranslation();
//     return (
//         <Fragment>
//             <div className="mt-3 text-center">
//                 <h1 style={{fontSize: 20, fontWeight: "bold"}}>Pilih Bahasa:</h1>
//                 <div className="form-check form-check-inline">
//                     <input type="radio" name="bahasa" className="form-check-input" value="id"  />
//                     <label htmlFor="bahasa" className="form-check-label" >Indonesia</label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                     <input type="radio" name="bahasa" className="form-check-input" value="en" defaultChecked />
//                     <label htmlFor="bahasa" className="form-check-label" >Inggris</label>
//                 </div>
//             </div>
//             <div className="container">
//                 <div className="card mt-4 p-3">
//                     <h1 className="card-title mt-0 mb-4" style={{fontSize: 30}}>{t('intro_name')}</h1>
//                     <h3 className="card-subtitle" style={{fontSize: 20}}>{t('name')}</h3>
//                 </div>
//             </div>
//         </Fragment>
//     )
// }

// export default Home;

const Home = props => {
    const [loading, setLoading] = useState(true)
    const [bahasa, setBahasa] = useState('id')

    // const gantiBahasa = (e) => {
    //     const bahasa = e.target.value
    //     i18next.changeLanguage(bahasa)
    // }

    const handleBahasa = (e) => {
        if (bahasa === 'id') {
            i18next.changeLanguage('en')
            setBahasa('en')
        } else {
            i18next.changeLanguage('id')
            setBahasa('id')
        }
    }

    const LoadingComponent = Loading(HomeChild)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [loading])

    return (
        <LoadingComponent isLoading={loading} {...props} handleBahasa={handleBahasa} bahasa={bahasa} handleLoading={setLoading}/>
        // <HomeChild />
    )
}

const HomeChild = props => {
    const { t } = useTranslation()
    return (
        <Fragment>
            {/* <Header handleBahasa={props.handleBahasa} bahasa={props.bahasa} handleLoading={props.handleLoading} /> */}
            <div className="mt-3 text-center">
                <h1 style={{ fontSize: 20, fontWeight: 'bold' }}>Pilih Bahasa:</h1>
                {/* <div className="form-check form-check-inline">
                    <input type="radio" name="bahasa" className="form-check-input" value="id" onChange={props.gantiBahasa} />
                    <label htmlFor="bahasa" className="form-check-label" onClick={props.handleBahasa}>Indonesia</label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" name="bahasa" className="form-check-input" value="en" onChange={props.gantiBahasa} defaultChecked />
                    <label htmlFor="bahasa" className="form-check-label" onClick={props.handleBahasa}>Inggris</label>
                </div> */}
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

// export {
//     Home,
//     HomeChild
// }

// const TestConsumer = (props) => {
//     console.log(props)
//     return (
//         <h1>Test Consumer</h1>
//     )
// }

export default ConsumerComponent(Home)

// class Home extends Component {

//     gantiBahasa = (e) => {
//         const bahasa = e.target.value;
//         i18next.changeLanguage(bahasa);
//     }
//     render = () => {
//         const { t } = this.props;

//         return (
//             <Fragment>
//                 <div className="mt-3 text-center">
//                     <h1 style={{fontSize: 20, fontWeight: "bold"}}>Pilih Bahasa:</h1>
//                     <div className="form-check form-check-inline">
//                         <input type="radio" name="bahasa" className="form-check-input" value="id" onChange={this.gantiBahasa} />
//                         <label htmlFor="bahasa" className="form-check-label">Indonesia</label>
//                     </div>
//                     <div className="form-check form-check-inline">
//                         <input type="radio" name="bahasa" className="form-check-input" value="en" onChange={this.gantiBahasa} defaultChecked />
//                         <label htmlFor="bahasa" className="form-check-label">Inggris</label>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="card mt-4 p-3">
//                         <h1 className="card-title mt-0 mb-4" style={{fontSize: 30}}>{t('intro_name')}</h1>
//                         <h3 className="card-subtitle" style={{fontSize: 20}}>{t('name')}</h3>
//                     </div>
//                 </div>
//             </Fragment>
//         )
//     }
// }

// export default withTranslation()(Home);
