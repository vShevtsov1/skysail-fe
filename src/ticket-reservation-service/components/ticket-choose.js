import Header from "../../main-page-service/components/header";
import Footer from "../../main-page-service/components/footer";
import "../stylesheets/ticket-choose.css";
import TicketsForm from "../../main-page-service/components/ticketsForm";
import Ticket from "./ticket";

const TicketChoose = () => {

    return(
        <div>
            <Header/>
            <div className={"choose-container"}>
                <div className={"tickets-container"}>
                    <Ticket/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default TicketChoose;