import React,  { Component } from 'react';


class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
      text: props.text
    };
    this.log = this.log.bind(this);
    this.submit = this.submit.bind(this);
  }

  log() {
    console.log('Form values', this.props.formValues);
  }

  submit(event) {
    this.setState({ isClicked: true });
    this.log();
  }

  render(){
    return(
      <button
       disabled={this.state.isClicked}
       onClick={this.submit}
      >
        {this.state.text}
      </button>
    );
  }
}

export default Button;