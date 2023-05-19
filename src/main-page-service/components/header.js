import "../styleSheets/header.css"


const Header = () => {

    return (
        <header>
            <div className='header-container'>
                <div className='mainName'>
                    <span style={{color: "#f54a7a"}}>Sky</span><span style={{color: "white"}}>Sail</span>
                </div>
                <div className='navigation'>
                    <p>Замовити квиток</p>
                    <p>Коллцентр</p>
                    <p>Про нас</p>
                </div>
                <div className='currencyAndLanguage'>
                    <select className="currency">
                        <option value="1">₴ UAH</option>
                        <option value="2">$ USD</option>
                    </select>

                </div>
                <div className='loginText'>
                    <p> Увійти </p>
                </div>
            </div>
        </header>
    )
}

export default Header;

