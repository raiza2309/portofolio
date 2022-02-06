// Library
import React, { useState, createContext } from 'react'

const GlobalContext = createContext()
const Provider = GlobalContext.Provider
const Consumer = GlobalContext.Consumer

const GlobalProviderComponent = Child => {
    const ParentComponent = props => {
        const [page, setPage] = useState(null)
        const [bahasa, setBahasa] = useState('id')
        const [isLoading, setLoading] = useState(true)

        const globalValue = {
            bahasa: bahasa,
            setBahasa: setBahasa,
            isLoading: isLoading,
            setLoading: setLoading,
            page: page,
            setPage: setPage
        }
        return (
            <Provider value={{ globalValue }}>
                <Child {...props} />
            </Provider>
        )
    }
    return ParentComponent
    // return (
    //     class ParentComponent extends React.Component {
    //         constructor(props) {
    //             super(props)
    //             this.state = {}
    //         }
    //         render() {
    //             return (
    //                 <Provider value={this.state}>
    //                     <Child {...this.props} />
    //                 </Provider>
    //             )
    //         }
    //     }
    // )
}

const GlobalConsumerComponent = Child => {
    const ChildComponent = (props) => {
        return (
            <Consumer>
                { value => <Child {...props} {...value} /> }
            </Consumer>
        )
    }
    return ChildComponent
}

export {
    GlobalContext,
    GlobalProviderComponent,
    GlobalConsumerComponent
}
