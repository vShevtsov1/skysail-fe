import Header from "../../main-page-service/components/header";
import Footer from "../../main-page-service/components/footer";
import "../stylesheets/flight-reservation.css";
import Ticket from "../../ticket-reservation-service/components/ticket";
import FlightReservationForm from "./flight-reservation-form";


const FlightReservation = () => {
    return(
        <div>
            <Header/>

            <div className={"container-for-ticket"}>
                <div className={'ticket'}>
                    <Ticket/>
                </div>
            </div>
            <form className={"flights-reservation-container"}>
                <div className={'flights-reservation-forms'}>
                    <FlightReservationForm/>
                    <FlightReservationForm/>
                </div>

                    <button className='flights-reservation-button'>kk</button>

            </form>
            <Footer/>
        </div>
    )
}
export default FlightReservation;