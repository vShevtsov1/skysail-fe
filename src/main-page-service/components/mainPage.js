import Header from "./header";
import TicketsForm from "./ticketsForm";
import Footer from "./footer";
import AboutUs from "./aboutUs";
import Newsletter from "./newsletter";
import "../styleSheets/mainPage.css"

const MainPage = () => {


    return (<div className={"main-page-container"}>
        <Header />
        <TicketsForm />
        <Newsletter/>
        <AboutUs />

        <Footer />

    </div>)
}
export default MainPage;