import React from 'react'
import "./footer.css"


/*  <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
    </li>  
*/

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Claudio</h1>

            <ul className="footer__list">
                <li>
                    <a href="#About" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
               
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/" className="footer__social-link" target="_black">
                <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/gabrielluxe_/" className="footer__social-link" target="_black">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://twitter.com/" className="footer__social-link" target="_black">
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>










            <span className='footer__copy'>

                &#169; Crypticalcoder. All rigths reserved

                </span>

        </div>

    </footer>

)

}



export default Footer