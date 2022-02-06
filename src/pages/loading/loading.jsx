// Library
import React from 'react'
import Messaging from 'react-cssfx-loading/lib/Messaging'

const Loading = props => {
    // useEffect(() => {
    //     console.log('Loading rendered')
    //     return () => {
    //         console.log('Loading removed')
    //     }
    // }, [])
    return (
        <div id='loading-page' className="min-vh-100 d-flex justify-content-center">
            <Messaging width="20px" height="20px" duration=".5s" color="#FF9800"></Messaging>
        </div>
    )
}

export default Loading
