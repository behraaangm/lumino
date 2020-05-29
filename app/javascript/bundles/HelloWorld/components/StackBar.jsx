import React from 'react'
import docker from '../../../assets/images/icons8-docker-100.png'
import git from '../../../assets/images/icons8-git-100.png'
import html from '../../../assets/images/icons8-html-5-100.png'
import css3 from '../../../assets/images/icons8-css3-100.png'
import python from '../../../assets/images/icons8-python-100.png'
import amazon from '../../../assets/images/icons8-amazon-web-services-100.png'
import phoenix from '../../../assets/images/icons8-phoenix-framework-100.png'
import react from '../../../assets/images/icons8-react-100.png'
import api from '../../../assets/images/icons8-rest-api-100.png'
import ruby from '../../../assets/images/icons8-ruby-programming-language-100.png'

class StackBar extends React.Component {
    render() {
        return(
            <div className={this.props.className}>
                <img style={{padding: '10px', inline: true}} src={amazon} />
                <img style={{padding: '10px', inline: true}} src={ruby} />
                <img style={{padding: '10px', inline: true}} src={phoenix} />
                <img style={{padding: '10px', inline: true}} src={react} />
                <img style={{padding: '10px', inline: true}} src={python} />
                <img style={{padding: '10px', inline: true}} src={docker} />
            </div>
        )
    }

}

export default StackBar
