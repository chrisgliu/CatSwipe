import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    My first MERN Application
                </Link>
                    <ul>
                        <li>
                            <Link to="/list" className="nav-link">
                               See Cats
                            </Link>
                        </li>
                        <li>
                            <Link to="/create" className="nav-link">
                                Add Cats
                            </Link>
                        </li>
                    </ul>
            </React.Fragment>
        )
    }
}

class NavBar extends Component {
    render() {
        return (
            <div>
                <Links />
            </div>
        )
    }
}

export default NavBar