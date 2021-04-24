import React from 'react';

export class ServiceAddress extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                    firstName:   '',
                    lastName:    '',
                    phoneNumber: '',
                    email:       '',
                    address:     '',
                    city:        '',
                    state:       '',
                    zip:         '',
                    notes:       ''
                };
    }
  
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val})
    }
  
    handleSubmit = (event) => {
        if(this.state.phoneNumber.length !== 10) {
            alert("Invalid Phone Number")
        }
      event.preventDefault();
      console.log(this.state)
    }
  
    render() {
      return (
          <div>
        <form  onSubmit={this.handleSubmit}>
          <label className="information">
              <h2>Information</h2>
            <input type="text" required name="firstName" placeholder="First Name*" value={this.state.firstName} onChange={this.handleChange} />
            <input type="text" required name="lastName" placeholder="Last Name*" value={this.state.lastName}  onChange={this.handleChange} />
            <input type="number" required name="phoneNumber" placeholder="Phone Number*" value={this.state.phoneNumber}  onChange={this.handleChange} />
            <input type="email" required name="email" placeholder="Email*" value={this.state.email}  onChange={this.handleChange} />

          </label>
          <label className="Address">
              <h2>Address</h2>
          <input type="text" required name="address" placeholder="Address*" value={this.state.address} onChange={this.handleChange} />
          <input type="text" required name="city" placeholder="City*" value={this.state.city} onChange={this.handleChange} />
          <input type="text" required name="state" placeholder="State*" value={this.state.state} onChange={this.handleChange} />
          <input type="text" required name="zip" placeholder="Zip*" value={this.state.zip} onChange={this.handleChange} />
          <input type="text" name="notes" placeholder="Notes" value={this.state.notes} onChange={this.handleChange} />

          </label>
          <input type="submit" value="Next" />
        </form>
        </div>
      );
    }
  }