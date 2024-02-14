import "./navbar.scss"
import React from "react"
import picanas from '../../public/picanas.jpg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>iamadmin</span>
            </div>

            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://media.licdn.com/dms/image/D4E35AQFdsRc1CQw-lg/profile-framedphoto-shrink_100_100/0/1668095481914?e=1703887200&v=beta&t=d1aD8DNW_u1M-kn2Dgev_ofGAgglQlIBqm3ezVoKm8Q" alt="" className="icon" />
                    <span>Jane</span>
                </div>
                <img src="/settings.svg" alt="" className="icon" />
            </div>
        </div>
    )
}

export default Navbar

