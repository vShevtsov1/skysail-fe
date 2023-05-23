import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import MainPage from "./main-page-service/components/mainPage";
import Header from "./main-page-service/components/header";
import TicketsForm from "./main-page-service/components/ticketsForm";
import Footer from "./main-page-service/components/footer";
import AboutUs from "./main-page-service/components/aboutUs";
import Newsletter from "./main-page-service/components/newsletter";









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
            </Routes>
          </BrowserRouter>

        </div>
  );
}

export default App;

