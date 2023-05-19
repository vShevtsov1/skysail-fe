import "../styleSheets/footer.css"
import telephoneCountry from "../images/pngegg.png"
import masterCard from "../images/MasterCard_early_1990s_logo.png"
import visa from "../images/Visa-Logo-PNG-Image.png"


const Footer = () => {

    return (
        <footer>
            <div className='footer-container'>
                <div className='aboutUs-footer'>
                    <div className='mainName-footer'>
                        <span style={{color: "#f54a7a"}}>Sky</span><span style={{color: "white"}}>Sail</span>
                    </div>
                    <div className='email-footer'>
                        ✉skysail@gmail.com
                    </div>
                    <div className='telephone-numbers'>
                        <span><img src={telephoneCountry}/> +380 55 555 5555</span>
                        <span><img src={telephoneCountry}/> +380 33 333 3333</span>
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

