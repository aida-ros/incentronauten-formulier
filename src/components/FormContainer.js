import React, { Component } from 'react';
import Form from './Form'
import request from 'superagent'

class FormContainer extends Component  {
  state = {
    firstName: '',
    additives: '',
    lastName: '',
    postcode: '',
    city: '',
    name: '',
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
    fetch(`photon.komoot.de/api/?q=${postcode}`)
      .then(features => {
        const location = {
          city: features.properties.city,
          name: features.properties.city
        }
        console.log('the location',location)
        return location
      })
      .then(location => {
        this.setState({
          name: location.name,
          city: location.city
        })
      })
      .then(this.sendData(this.state))
      .catch(console.error)
  }

  sendData = (data) => {
    request
    .post(`http://mockbin.org/bin/abae3573-1d79-4e91-bc03-ad06e5596dcc/view`)
    .send(data)
  }

  render () {
    return (
      <div className="FormContainer">
        <Form
          fetchAdress={this.fetchAdress}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          locationDetails={this.state}
          />
      </div>
    );
  }  
}

export default FormContainer;