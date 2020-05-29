import React from 'react'
import background from "../../../assets/images/background.jpg";
import ContactUs from "./ContactUs";
import StackBar from "./StackBar";

class Main extends React.Component {
    render() {
        return(
            <div>
                <div className='mt-5' style={{ height: '500px', backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <div >
                        <h1 className="font-italic">
                            {this.props.content.slogan}
                        </h1>
                        <h5 className='mt-5' >
                            {this.props.content.description.first}
                        </h5>
                        <h5 className='mt-2' >
                            {this.props.content.description.second}
                        </h5>
                        <h5 className='mt-2' >
                            {this.props.content.description.third}
                        </h5>
                    </div>
                </div>
                <StackBar className='mt-5'/>
            </div>

        )
    }
}

export default Main
