import PropTypes from 'prop-types';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import NavBar from './NavBar';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
    this.state = { name: this.props.name, content: this.props.content };
  }

  render() {
    return (
      <Container style={{textAlign: 'center'}}>
        <Header />
        <NavBar />
        <Main content={this.state.content} />
        <Footer />
      </Container>
    );
  }
}
