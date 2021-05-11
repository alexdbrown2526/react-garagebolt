import React from 'react'
import { Card} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        background: 'white',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px',
        color: 'orange',
        height: 480,
        width: 400,
        padding: '50px 30px',
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }
});



 class BillingAddressForm extends React.Component {
    state = {
        firstName: '',
        lastName:  '',
        address:   '',
        city:      '',
        state:     '',
        zip:       ''
    }

    back = (event) => {
        event.preventDefault();
        this.props.previousView();
    }

    continue = (event) => {
        event.preventDefault();
        this.props.nextView();
        console.log(this.state);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val})
    } 

    render(){
        const {classes} = this.props;
        return(
            <Card className={classes.card}>
                <h1>Billing Address</h1>
                  <form onSubmit={this.handleSubmit}>
                      <label>
                        <h2 className="secondHeading">Information</h2>
                            <div className="information">
                                <input type="text" className="information-item" required name="firstName" placeholder="First Name*" value={this.state.firstName} onChange={this.handleChange} />
                                <input type="text" className="information-item"required name="lastName" placeholder="Last Name*" value={this.state.lastName}  onChange={this.handleChange} />
                                <input type="text"  required name="address" placeholder="Address*" value={this.state.address} onChange={this.handleChange} />
                                <input type="text"  required name="city" placeholder="City*" value={this.state.city} onChange={this.handleChange} />
                                <input type="text"  required name="state" placeholder="State*" value={this.state.state} onChange={this.handleChange} />
                                <input type="text"  required name="zip" placeholder="Zip*" value={this.state.zip} onChange={this.handleChange} />
                                    <button onClick={this.continue}>Submit</button>
                            </div>
                        </label>
                    </form>  
            </Card>
        )
    }
}

export default withStyles(styles)(BillingAddressForm)