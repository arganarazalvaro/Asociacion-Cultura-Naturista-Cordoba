import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic14 from '../assets/images/pic14.jpg'
import pic15 from '../assets/images/pic15.jpg'
import pic16 from '../assets/images/pic16.jpg'

const Organica = (props) => (
    <Layout>
        <Helmet>
            <title>Orgánica</title>
            <meta name="description" content="Organica Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Huerta & Cocina Orgánica</h1>
                    </header>
                    <span className="image main"><img src={pic14} alt="" /></span>
                    <p>La principal característica de los productos orgánicos es que los ingredientes utilizados para su elaboración no han tenido contacto con químicos o procesos de ionización, ni son artificiales. No utilizan conservantes, ni colorantes, y tampoco fertilizantes químicos o pesticidas. Los pesticidas son susceptibles de dejar restos de residuos tóxicos perjudiciales para nuestra salud; de hecho, muchos especialistas los consideran causa de algunas enfermedades como dolor de cabeza, problemas cardíacos, asma, alergias, osteoporosis, y hasta hiperactividad o cáncer.</p>
                    <p>Los alimentos agroecológicos no tienen incidencia negativa en nuestro metabolismo porque, al no tener trazas sintéticas, se asimilan mejor. Además, tienen más nutrientes, gracias al uso de fertilizantes naturales, con más presencia de vitaminas, minerales y antioxidantes; y una mayor calidad en los hidratos de carbono.</p>
                    <p>Por este motivo los alimentos orgánicos son más saludables, ya que en su mayoría ayudan a fortalecer el sistema inmunológico, mejorar la calidad del sueño, reducir las posibilidades de desarrollar enfermedades y promueven la pérdida de peso.</p>

                    <div className="grid-wrapper">
                        <div className="col-6">
                            <h3>Huerta Orgánica</h3>
                            <span className="image main"><img src={pic15} alt="" /></span>
                            <p>La huerta orgánica es una forma de cultivo que se basa en la fertilidad del suelo y diversidad de especies. ¿Qué busca? Obtener plantas sanas que se conviertan en alimentos saludables.
                            Para producir suelo fértil se utilizan técnicas naturales. Se trata de aprovechar todos los recursos que brinda la naturaleza para producir vegetales sanos. Por ello se evita el uso de productos químicos como pesticidas o fertilizantes.La huerta orgánica es garantía de alimentos sanos, naturales y llenos de nutrientes. Al mismo tiempo, son fuente de satisfacción personal, alegría y bienestar. En esta época de tecnología, inmediatez y velocidad, la huerta urbana ayuda a las personas a ser más pacientes y comprensivas. Y les da la oportunidad única de conectarse a la naturaleza, promoviendo la salud.</p>
                        </div>
                        <div className="col-6">
                            <h3>Cocina Vegetariana</h3>
                            <span className="image main"><img src={pic16} alt="" /></span>
                            <p>Los talleres de cocina orgánica y vegetariana tienen el fin de dar la máxima difusión posible a una forma de vivir que cambia la realidad de las personas que los reciben, y al mismo tiempo, transforma a estas personas en piezas fundamentales de un cambio de conciencia. Es un hecho, nuestro consumo cambia el mundo. Conocer las técnicas de la alimentación naturista ayuda a despertar la creatividad y permite hacer de tu cocina un lugar saludable. Es fundamental aprender nociones básicas de nutrición, alimentación y combinación de alimentos. El sabor de los alimentos orgánicos es más intenso, resultando en platos aún más interesantes. Dirigido a aquellas personas que quieren aprender a cocinar de forma sana y nutritiva.</p>
                        </div>
                    </div>
                    <div className="box">
                        <p>"Nuestra comida debería ser nuestra medicina y nuestra medicina debería ser nuestra comida." - Hipócrates</p>
                        <p>"Nada beneficiará tanto la salud humana e incrementará las posibilidades de supervivencia de la vida sobre la Tierra, como la evolución hacia una dieta vegetariana." - Albert Einstein</p>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Organica