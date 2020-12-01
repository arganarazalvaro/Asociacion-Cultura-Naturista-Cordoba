import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Inicio</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Nosotros</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/principios">Vida Naturista</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/yoga">Yoga & Tai Chí</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/organica">Huerta & Cocina</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#contact" className="button special fit">Contacto</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
