import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import TopBar from "./components/TopBar";
import AboutPage from "./pages/AboutPage";
import FhaLoanPage from "./pages/FhaLoanPage";
import HomePage from "./pages/HomePage";
import RenovationLoanPage from "./pages/RenovationLoanPage";
import TeamProfile from "./pages/TeamProfile";
import VaLoanPage from "./pages/VaLoanPage";
// import MortgageRatePage from "./pages/MortgageRatePage";
import AffordabilityCalculatorPage from "./pages/AffordabilityCalculatorPage";
import RefinanceCalculatorPage from "./pages/RefinanceCalculatorPage";
import BuyingHomePage from "./pages/BuyingHomePage";

function App() {
  return (
    <div className="page">
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs/fha" element={<FhaLoanPage />} />
        <Route path="/programs/renovation" element={<RenovationLoanPage />} />
        <Route path="/programs/va" element={<VaLoanPage />} />
        {/* <Route path="/tools/mortgage-rate" element={<MortgageRatePage />} /> */}
        <Route
          path="/tools/affordability-calculator"
          element={<AffordabilityCalculatorPage />}
        />
        <Route
          path="/tools/refinance-calculator"
          element={<RefinanceCalculatorPage />}
        />
        <Route path="/tools/buying-home" element={<BuyingHomePage />} />
        <Route path="/team/:slug" element={<TeamProfile />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
