import React from 'react'
import Messaging from 'react-cssfx-loading/lib/Messaging'

const Loading = Child => {
    const LoadingChild = (props) => {
        if (props.isLoading) {
            return (
                <div className="min-vh-100 d-flex justify-content-center">
                    <Messaging width="20px" height="20px" duration=".5s" color="#FF9800"></Messaging>
                </div>
            )
        }
        return <Child {...props} />
    }
    return LoadingChild
}

// const Loading = props => {
//     return (
//         <div className="min-vh-100 d-flex justify-content-center">
//             <Messaging width="20px" height="20px" duration=".5s" color="#FF9800"></Messaging>
//         </div>
//     )
// }

export default Loading

// const Loading = Child => {
//     return (
//         class extends Component {
//             constructor(props) {
//                 super(props);
//                 this.state = {
//                     loading: true
//                 };
//             }

//             handleLoading = kondisi => {
//                 if (kondisi)
//                     this.setState({
//                         loading: true
//                     })
//                 else
//                     this.setState({
//                         loading: false
//                     })
//             }

//             componentDidMount() {
//                 console.log('Selesai mounting: ', this);
//                 this.handleLoading(false);
//                 // setTimeout(() => {
//                 //     this.handleLoading(false);
//                 // }, 3000);
//                 // this.handleLoading(false);
//             }

//             componentDidUpdate() {
//                 console.log('Selesai update: ', this);
//             }

//             render() {
//                 return (
//                     <Fragment>
//                         { this.state.loading ?
//                             <div className="min-vh-100 d-flex justify-content-center">
//                                 <Messaging width="20px" height="20px" duration=".5s" color="#FF9800"></Messaging>
//                             </div>
//                             :
//                             <Child {...this.props} setLoading={this.handleLoading}/>
//                         }
//                     </Fragment>
//                 )
//             }
//         }
//     )
// }

// export default Loading;
