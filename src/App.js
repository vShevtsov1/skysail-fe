import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import MainPage from "./main-page-service/components/mainPage";
import Header from "./main-page-service/components/header";
import TicketsForm from "./main-page-service/components/ticketsForm";
import Footer from "./main-page-service/components/footer";
import AboutUs from "./main-page-service/components/aboutUs";
import Newsletter from "./main-page-service/components/newsletter";
import TicketChoose from "./ticket-reservation-service/components/ticket-choose";
import FlightReservation from "./flight-reservation-service/components/flight-reservation";
import FlightReservationForm from "./flight-reservation-service/components/flight-reservation-form";









function App() {

  return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/header" element={<Header/>}/>
              <Route path="/ticketsForm" element={<TicketsForm/>}/>
              <Route path="/footer" element={<Footer/>}/>
              <Route path="/aboutUs" element={<AboutUs/>}/>
              <Route path="/newsletter" element={<Newsletter/>}/>
                <Route path={"/choose"} element={<TicketChoose/>}/>
                <Route path={"/flight"} element={<FlightReservation/>}/>
                <Route path={"/ticketReservation"} element={<FlightReservationForm/>}/>
            </Routes>
          </BrowserRouter>

        </div>
  );
}

export default App;

