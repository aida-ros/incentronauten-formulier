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

  onSubmit = (event) => {
    event.preventDefault()
    this.fetchAdress(this.state.postcode)
    alert('Info sent!')
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
          onSubmit={this.onSubmit}
          />
      </div>
    );
  }  
}

export default FormContainer;