import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer mt-auto py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>OFERTAS Y PROMOCIONES</h5>
                        <form>
                            <h5>No te pierdas nuestras ofertas!</h5>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <input id="newsletter1" type="text" className="form-control" placeholder="Tu dirección de correo electrónico" />
                            </div>
                        </form>
                        <div className="d-flex align-items-center mt-3">
                            <img src="../Logotipo-Macropay.svg" alt="MacroPay" className="me-3"/>
                            <div>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Envios y devoluciones</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Preguntas frecuentes</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Aviso de privacidad</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Términos y condiciones</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 text-center">
                        <img src="../Happy_face.svg" alt="MacroPay" width="500" className="img-fluid"/>
                    </div>
                    <div className="col-md-4">
                        <h5>Conversemos</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Loren ipsum dolor sit amet</a></li>
                        </ul>
                        <div className="d-flex justify-content-center mt-3">
                            <a href="#" className="me-3"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="me-3"><i className="bi bi-linkedin"></i></a>
                            <a href="#"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
