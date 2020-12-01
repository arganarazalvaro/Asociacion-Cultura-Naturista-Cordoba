import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="https://formspree.io/f/mqkgdwdl">
                    <div className="field half first">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Enviar Mensaje" className="special" /></li>
                        <li><input type="reset" value="Borrar" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">acunac.cordoba@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Teléfono</h3>
                        <span>(351) - 4227560</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Dirección</h3>
                        <span>9 de julio 1143<br />
                        Córdoba<br />
                        Córdoba, Argentina</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
