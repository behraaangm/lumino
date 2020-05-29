import React from 'react'
import PropTypes from "prop-types";
import ContactForm from './ContactForm'

class ContactUs extends React.Component {
    static propTypes = {
        state: PropTypes.string.isRequired, // this is passed from the Rails view
    };

    constructor(props) {
        super(props);
        this.state = { state: this.props.state };
    }

    handleOnClick = () => {
        this.setState({ state: this.state.state === 'button' ? 'form' :  'button' })
    }

    render() {
      if (this.state.state === 'button') {
        return(
          <button className='btn btn-lg btn-dark mt-5'
                  onClick={this.handleOnClick}>
              Contact Us
          </button>
        )
      } else {
        return(
            <ContactForm state='form'/>
        )
      }
    }
}

export default ContactUs
