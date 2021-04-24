import React from 'react'
import Dropdown from 'react-dropdown'

const options = [
    'Residential Trash Service', 'Commercial Service', 'Dumpster Service'
];



export class Quote extends React.Component {

    // onSelect = () => {

    // }

    render(){

    
        return(
            <div>
                What type of quote are you looking for?
                <Dropdown options={options} onChange={this.onSelect} placeholder="Select contract type" />
                What type of Services are you looking for?
                <Dropdown options={options} onChange={this.onSelect} placeholder="" />

            </div>
        )
    }
}