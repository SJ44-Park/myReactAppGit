import  React from 'react'

class Customer extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.idnum}</p>
                <p>{this.props.hobby}</p>
                <p>{this.props.city}</p>
            </div>
        )
    }
}



export default Customer;