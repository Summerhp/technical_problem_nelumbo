import React from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                <div className="container-fluid navbar-nav-wrapper">
                    <div className="navbar-nav-top">
                        <a className="navbar-brand" href="#">
                            <img src="../Logotipo-Macropay.svg" alt="MacroPay"></img>
                        </a>
                        <div className="d-flex">
                            <button className="btn btn-warning me-2" type="button">Crea Tu Cuenta</button>
                            <button className="btn btn-outline-light" type="button">Iniciar sesión</button>
                            <a className="btn btn-outline-light ms-3" href="#">
                                <i className="bi bi-cart3"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar2">
                <div className="container-fluid navbar-nav-wrapper">
                    <div className="navbar-nav-bottom">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Celulares</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Motocicletas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Navbar;
