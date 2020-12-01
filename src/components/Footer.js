import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://mobile.twitter.com/ACUNAC4" target="_blank" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/acunac.cordoba.1" target="_blank" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/acunac.cordoba/" target="_blank" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/in/acunac/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; ACUNAC</li><li>Design: <a href="https://arganarazalvaro.netlify.app/">Argañaraz Alvaro</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
