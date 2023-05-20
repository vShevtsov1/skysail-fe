import "../styleSheets/footer.css"
import phoneCountry from "../images/pngegg.png"
import masterCard from "../images/MasterCard_early_1990s_logo.png"
import visa from "../images/Visa-Logo-PNG-Image.png"


const Footer = () => {

    return (
        <footer>
            <div className='footer-container'>
                <div className='aboutUs-footer'>
                    <div className='footer-name'>
                        <span >Sky</span>Sail
                    </div>
                    <div className='email-footer'>
                        ✉skysail@gmail.com
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
                        <p>Замовити квиток</p>
                        <p>Коллцентр</p>
                        <p>Про нас</p>
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

