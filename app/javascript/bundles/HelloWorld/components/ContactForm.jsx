import React from 'react'
import PropTypes from "prop-types";
import axios from 'axios';

class ContactForm extends React.Component {
    static propTypes = {
        state: PropTypes.string.isRequired, // this is passed from the Rails view
    };

    constructor(props) {
        super(props);
        this.state = { state: this.props.state, name: '', email: '', message: ''};
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmitClick = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        axios.get(`https://hooks.zapier.com/hooks/catch/6986515/o1wehak?name=${this.state.name}&email=${this.state.email}&body=${this.state.message}`)
            .then(res => {
                this.setState({ state: 'success' });
            })
    }

    render() {
        if (this.state.state === 'form') {
            return(
                <div className='mt-5'>
                    <label>Name: <input  name='name'  type='text' value={this.state.name} onChange={this.handleInputChange} /></label>
                    <br />
                    <label>Email: <input  name='email' type='text' value={this.state.email} onChange={this.handleInputChange} /></label>
                    <br />
                    <label>Message: <textarea name='message' value={this.state.message}  onChange={this.handleInputChange} /></label>
                    <br />
                    <button className='btn btn-primary' onClick={this.handleSubmitClick}>
                        Send
                    </button>
                </div>
            )
        } else {
            return(
                <button className='btn btn-lg btn-success'>{this.state.state}</button>
            )
        }
    }
}

export default ContactForm
