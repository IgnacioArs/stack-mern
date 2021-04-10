import React, { Component } from 'react'
//importamos react router para las rutas y la funcionalidad que va tener
//la barra de tareas y hay que remplazarlo por los harref
//agregando el ling de esta forma <Link to="/user" className="nav-link">Create User></Link>
//de esta forma la aplicacion funcionara de forma correcta 
//con la funcionalidad conrrecta de una api
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
          //las etiquetas class se deben cambiar por classname
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <i className="material-icons">
                            assignment </i> NotesApp
                    </Link>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Create Note</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user" className="nav-link">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}