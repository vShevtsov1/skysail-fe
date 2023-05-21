import "../styleSheets/footer.css"
import phoneCountry from "../images/pngegg.png"
import masterCard from "../images/MasterCard_early_1990s_logo.png"
import visa from "../images/Visa-Logo-PNG-Image.png"
import {Link as ScrollLink} from "react-scroll";


const Footer = () => {

    return (
        <footer>
            <div className='footer-container'>
                <div className='aboutUs-footer'>
                    <div className='footer-name'>
                        <span >Sky</span>Sail
                    </div>
                    <div className='email-footer'>
                        < a href="mailto:skysail@gmail.com"> ✉skysail@gmail.com< /a>
                    </div>
                    <div className='phone-numbers'>
                        <span><img src={phoneCountry}/> +380 55 555 5555</span>
                        <span><img src={phoneCountry}/> +380 33 333 3333</span>
                    </div>
                </div>
                <div className='navigation-footer-container'>
                    <div className='clients-info'>
                        ІНФОРМАЦІЯ ДЛЯ КЛІЄНТІВ
                    </div>
                    <div className='navigation-footer'>
                        <ScrollLink
                            to='ticketsForm-container'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1500}
                            className='scrollLink'
                        >Замовити квиток</ScrollLink>
                        <ScrollLink
                            to='newsletter-container'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1500}
                            className='scrollLink'
                        >Новини</ScrollLink>
                        <ScrollLink
                            to='aboutUs-container'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1500}
                            className='aboutUs-button'
                        >Про нас</ScrollLink>
                    </div>
                </div>
                <div className='paymentMethods'>
                    МЕТОДИ ОПЛАТИ
                    <div className='paymentImages'>
                        <img src={masterCard} className='masterCard'/>
                        <img src={visa} className='visa'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

