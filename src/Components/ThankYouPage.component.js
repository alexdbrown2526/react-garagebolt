import React from 'react';

class ThankYouPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            Service Address:
            {JSON.stringify(this.props.serviceValue)}
        </div>
    )
    }
}

export default ThankYouPage;