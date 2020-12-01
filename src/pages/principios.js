import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic17 from '../assets/images/pic17.jpg'
import pic18 from '../assets/images/pic18.jpg'
import pic19 from '../assets/images/pic19.jpg'

const Principios = (props) => (
    <Layout>
        <Helmet>
            <title>Vida Naturista</title>
            <meta name="description" content="Principios Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Vida Naturista</h1>
                    </header>
                    <span className="image main"><img src={pic17} alt="" /></span>
                    <p>El naturismo es un modo de vivir de acuerdo a una óptica filosófica cuyo objetivo es la superación física, mental y espiritual del hombre mediante la armonía con la naturaleza, donde la salud se adquiere por añadidura. Comprendiendo la salud integral la salud física, mental, emocional, espiritual y social, en una armonía integral con la familia, la sociedad y la naturaleza.</p>
                    <p>Es muy importante tener presente que es principalmente un modo de vivir. Uno de sus efectos es la prevención de enfermedades y el alargamiento de la juventud. Pero también puede tener efectos terapéuticos o ayudar a una persona a una rápida mejoría en los tratamientos clínicos. </p>

                    <div className="grid-wrapper">
                        <div className="col-6">
                            <h3>Estilo de vida</h3>
                            <span className="image main"><img src={pic18} alt="" /></span>
                            <p>El naturismo se basa en una cosmovisión de la realidad entendida como la búsqueda una armonía total con la naturaleza. Una persona naturista entiende que para sentirse bien consigo mismo y con su entorno debe respetarse a uno mismo y los demás, cuidando los planos físico, mental y espiritual. El naturismo puro va más allá de la medicina natural, ya que busca un estilo de vida integral que a su vez funciona como medicina preventiva. El Naturismo se traduce como un estilo de vida a través del cual el hombre procure lograr la más completa armonía con las leyes que rigen su vida y las del universo.</p>
                            <p>El naturimsmo promueve entonces un estilo de vida saludable, es decir,  aquellos hábitos de nuestra vida diaria que nos ayudan a mantenernos más sanos y con menos limitaciones funcionales. Para llevar una vida más sana nos debemos enfoncar en nuestra dieta y el ejercicio físico. La dieta debe cubrir las necesidades vitales sin el uso de alimentos que pueden resultarnos nocivos a nuestro organismo. El ejercicio físico activa el sistema circulatorio y aumenta también nuestra flexibilidad.</p>
                        </div>
                        <div className="col-6">
                            <h3>Principios</h3>
                            <span className="image main"><img src={pic19} alt="" /></span>
                            <p>La filosofía naturista es milenaria, uno de sus precursores iniciales fue Pitágoras, reconocido vegetariano y fiel defensor de la naturaleza. También tiene sus orígenes muy ligados a oriente, cultivada por los verdaderos practicantes de artes marciales, donde la sabiduría se fundamentaba predominantemente en la autodisciplina para vencer aquellos malos hábitos que no sólo son los auténticos orígenes de nuestras enfermedades, sino que nos degradan, impidiéndonos avanzar física, mental y espiritualmente. Podemos ver que el naturismo tiene una gran tradición en la historia mundial y podemos establecer sus principipos fundamentales como los siguientes:</p>
                            <ul className="alt">
                                <li>El respeto por la vida, por uno mismo y por los demás</li>
                                <li>La armonía física, mental y espiritual con la naturaleza</li>
                                <li>El alimento y la actividad física como base para una vida saludable</li>
                                <li>El vegetarianismo</li>
                            </ul>
                        </div>
                    </div>
                    <div className="box">
                        <p>"Mira profundamente la naturaleza y entonces comprenderás todo mejor." - Albert Einstenin</p>
                        <p>"Si sirves a la naturaleza, ella te servirá a ti." - Confusio</p>

                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Principios