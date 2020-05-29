import React from 'react'

const NavBar = () => {
    return(
        <div className='d-lg-flex p-2 '>
            <div style={{backgroundColor: "rgba(78,76,60,0.53)", width: '100%', padding: '5px'}}  className="d-flex justify-content-around">
                <a className="text-white" href="#">Grati Dev <span className="sr-only">(current)</span></a>
                <a className="text-white" href="#">Grati Log</a>
                <a className="text-white" href="#">Grati Cast</a>
                <a className="text-white" href="#">Grati Team</a>
                <a className="text-white" href="#">Contact Us</a>
            </div>
        </div>
    )
}

export default NavBar
