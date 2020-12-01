import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import pic12 from '../assets/images/pic12.jpg'
import pic13 from '../assets/images/pic13.jpg'

const Yoga = (props) => (
    <Layout>
        <Helmet>
            <title>Yoga</title>
            <meta name="description" content="Yoga Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Yoga & Taichi</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>En la actualidad es muy común que debido a un estilo de vida desenfrenado nos encontremos cansados y faltos de vitalidad. Afortunadamente existen deportes considerados "suaves" que te ayudarán a conectar tu cuerpo y tu mente, y a conseguir recuperar la energía en un tiempo récord.</p>
                    <p>Dentro de esas prácticas destacan por mérito propio el yoga y el tai chi, doctrinas que sanan y que protegen de los efectos negativos de la vida moderna y que cuentan con millones de adeptos repartidos por todo el mundo. Si estás pensando en practicar alguna de estas disciplinas, pero aún no te has decidido por ninguna de ellas, a continuación te indicamos todos sus beneficios para que elijas cuál se adapta mejor a tus necesidades.</p>

                    <div className="grid-wrapper">
                        <div className="col-6">
                            <h3>Yoga</h3>
                            <span className="image main"><img src={pic13} alt="" /></span>
                            <p>El yoga engloba una serie de disciplinas físicas y mentales milenarias cuyo propósito es guiar al ser humano hacia un pleno y profundo conocimiento de sí mismo y encontrar, así, la felicidad física, psicológica y espiritual.Los movimientos corporales que se realizan en las clases de yoga se completan con técnicas de meditación y relajación profunda, que afectan a los centros de energía y permiten que fluya llevando a cuerpo y mente a un estado de introspección con múltiples beneficios como la reducción de estrés, aumento de la energía, del bienestar y la vitalidad y mejora del descanso, entre otros. El yoga, además, desarrolla la elasticidad y la flexibilidad, fortalece la musculatura a la vez que ayuda a reducir el peso, el dolor y la presión arterial y mantiene equilibrado el metabolismo.</p>
                        </div>
                        <div className="col-6">
                            <h3>Tai Chí</h3>
                            <span className="image main"><img src={pic12} alt="" /></span>
                            <p>El Tai Chí es una disciplina que se inició como un arte marcial y que ha evolucionado para convertirse en una práctica físico-espiritual que incide positivamente en el estado de salud general de quien lo practica. Sus movimientos sosegados y equilibrados, muy influenciados por la Naturaleza, se combinan con técnicas de respiración que aumentan la capacidad pulmonar y la flexibilidad corporal, mejoran la circulación sanguínea (con lo que se alivian los problemas de varices y de celulitis) y el equilibrio físico, controlan la presión arterial y reducen el dolor, el estrés y la ansiedad. El Tai Chí es de bajo impacto y ejerce un esfuerzo mínimo sobre los músculos y las articulaciones, lo que lo hace seguro para todas las edades y niveles de estado físico.</p>
                        </div>
                    </div>
                    <div className="box">
                        <p>"Para liberar el potencial de tu mente, cuerpo y alma, primero debes expandir tu imaginación. Las cosas siempre son creadas dos veces: primera en el taller de la mente y luego en la realidad." - Robin Sharma</p>
                        <p>"La meditación trae la sabiduría; la falta de meditación deja la ignorancia. Conoce bien qué te conduce hacia delante y qué te mantiene atrás, y elige el camino que conduce a la sabiduría." - Buda</p>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Yoga