import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="ACUNAC"
                    meta={[
                        { name: 'description', content: 'Asociación de Cultura Naturista de Córdoba' },
                        { name: 'keywords', content: 'ACUNAC, Naturismo' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Estilo de Vida</h3>
                                <p>Sentirse bien</p>
                            </header>
                            <Link to="/principios" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Principios Naturistas</h3>
                                <p>Armonía con la Naturaleza</p>
                            </header>
                            <Link to="/principios" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Yoga</h3>
                                <p>Cuerpo y mente conectados</p>
                            </header>
                            <Link to="/yoga" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Tai Chí</h3>
                                <p>Respiración, movimiento y concentración</p>
                            </header>
                            <Link to="/yoga" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Huérta Orgánica</h3>
                                <p>Producir alimentos saludables</p>
                            </header>
                            <Link to="/organica" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Cocina Vegetariana</h3>
                                <p>Que tu alimento sea tu medicina</p>
                            </header>
                            <Link to="/organica" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Abrazá el Naturismo</h2>
                            </header>
                            <p>El naturismo puede marcar un antes y un despues en todos los aspectos fundamentales de tu vida. Si te interesa saber más sobre este estilo de vida tan maravilloso, que puede beneficiar tu salud física y mental, te invitamos a que conozcas un poco más de nosotros y de las actividades que desarrollamos.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Conocenos</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex