import React, { Component } from 'react';
import Field from './Field';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      phoneNumber: '',
      subject: ''
    }

    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }


  updateField(field, value) {
    this.setState({[field]: value});
  }

  render() {
    return (
      <div>
        {/* Name field */}
        <Field
          onChange={(event) => this.updateField('name', event.target.value)}
          value={this.state.name}
          label='Name'
          placeHodler='John Doe'
        />
        {/* E-mail field */}
        <Field
          onChange={(event) => this.updateField('email', event.target.value)}
          value={this.state.email}
          label='Email Address'
          placeHodler='test@example.com'
        />
        {/* Phone Number field */}
        <Field
          onChange={(event) => this.updateField('phoneNumber', event.target.value)}
          value={this.state.phoneNumber}
          label='Phone Number'
          placeHodler='(000) 000-000'
        />
        {/* Subject field */}
        <Field
          onChange={(event) => this.updateField('subject', event.target.value)}
          value={this.state.subject}
          label='Subject'
          placeHodler='What is your question about'
        />
        {/* Message textarea */}
        <Field
          textarea={true}
          onChange={(event) => this.updateField('message', event.target.value)}
          value={this.state.message}
          label='Message'
          placeHodler='If you can include any details from your account, we will be able to get back faster'
        />
        {/* Submit button */}
        <Button
          formValues={this.state}
          text="Send your message"
        />
      </div>
    )
  }
}

export default Form;