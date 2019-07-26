import React, { Component } from 'react';
import Form from './Form'

class FormContainer extends Component  {
  state = {
    firstName: '',
    additives: '',
    lastName: '',
    postcode: '',
    housenumber: null,
    email: ''
  }
  
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }
  
  fetchAdress = (event) => {
    const postcode = event
    console.log('Received information!', postcode)
  }

  render () {
    return (
      <div className="FormContainer">
        <Form
          fetchAdress={this.fetchAdress}
          onChange={this.onChange}
          />
      </div>
    );
  }  
}

export default FormContainer;