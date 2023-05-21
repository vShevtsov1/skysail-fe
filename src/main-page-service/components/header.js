import "../styleSheets/header.css"
import {Link} from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {

    return (
        <header>
            <div className='header-container'>
                <div className='header-name'>
                    <Link to='/'><span >Sky</span>Sail</Link>
                </div>
                <div className='navigation'>
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
                        className='scrollLink'

                    >Про нас</ScrollLink>

                </div>

                <div className='loginText'>
                    <p> Увійти </p>
                </div>
            </div>
        </header>
    )
}

export default Header;

