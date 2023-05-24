import "../stylesheets/ticket.css";
import logo from "../images/RYAAY-66486679.png"
import plane from "../images/plane.svg"
import React from "react";
const Ticket = () => {

    return(<div className={"ticket-container"}>
            <div className={"logo-container"}>
                <img src={logo}/>
            </div>
            <div className={"ticket-info-container"}>
                <div className={"flight-id-container"}>FR 7062</div>
                <div className={"flight-info-container"}>
                    <div className={"start-flight-container"}>
                        <div className={"flight-time"}>19:30</div>
                        <div className={"flight-city"}>Дублін</div>
                    </div>
                    <div className={"flight-container"}>
                        <div className={"hr-block"}><hr/></div>
                        <img src={plane}/>
                        <div className={"hr-block"}><hr/></div>
                    </div>
                    <div className={"end-flight-container"}>
                        <div className={"flight-time"}>23:20</div>
                        <div className={"flight-city"}>Агадір</div>
                    </div>
                </div>
                <div className={"flight-time-container"}>3 годин 50 хвилин</div>

            </div>
            <div className={"price-ticket-container"}>
                <div className={"empty-space-container"}> За цим рейсом залишилося місць: 2</div>
                <div className={"price-container"}>
                    <div className={"price"}>202,71 €</div>
                    <div className={"order"}>
                        <button className='search-button'>
                            Замовити
                        </button>
                    </div>
                </div>
            </div>
    </div>)
}
export default Ticket;