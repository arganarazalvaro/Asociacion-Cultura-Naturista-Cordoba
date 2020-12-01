import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>ACUNAC Nosotros</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Sobre Nostros</h2>
                    </header>
                    <p>Somos la Asociación de Cultura Naturista de Córdoba, una organización sin fines de lucro que cuenta con más de 85 años de trayectoria defendiendo los principios de una vida sana y en armonía con el medio ambiente. Nuestra fundación fue el 27 de agosto de 1933, cuando un grupo de pioneros pusieron en marcha esta importantísima institución que hoy tiene su sede en 9 de julio 1143 de nuestro querido barrio Alberdi. Desde entonces, estamos comprometidos con la tarea de docencia y difusión de los principios y doctrina naturista, aspirando a seguir creciendo para enfrentar los desafíos que los nuevos tiempos nos imponen. Es notable el aporte que nuestra asociación viene realizando todos estos años en materia de salud y de una mejor calidad de vida para la población. </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Yoga y Taichi</h3>
                            </header>
                            <p>La práctica del Yoga y del Tai Chi genera un sinfín de beneficios para la salud, dado que ambos son muy buenos para mejorar la flexibilidad, disminuir el estrés, obtener más fuerza y calmar la mente. Además, con la práctica diaria de estas disciplinas, el sistema inmunológico mejora y la presión arterial se regula.</p>
                            <ul className="actions">
                                <li><Link to="/yoga" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Huerta y Cocina Orgánica</h3>
                            </header>
                            <p>Cultivar una huerta es también un modo de dar, la naturaleza es pródiga y enseña a compartir. Por eso, cuando compartimos sus frutos cocinando una gran cena para la familia o los amigos, el placer es doble. Sentimos que se cierra un ciclo que siempre vuelve a recomenzar.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Charlas Informativas</h3>
                            </header>
                            <p>Aprender sobre el naturismo puede cambiar tu vida para bien en muy poco tiempo si abrazas sus principios fundamentales. Puedes escuchar sobre cómo mantenerse en contacto con la naturaleza hace que las personas se sientan más vivas y felices, aumenta nuestro potencial y humor.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing