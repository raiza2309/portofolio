// Library
import React from 'react'

// Component
import { GlobalProviderComponent } from './components/context/context'

// Style
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Controllers from './components/controllers/controllers'

const App = props => {
    return <Controllers />
}

export default GlobalProviderComponent(App)
