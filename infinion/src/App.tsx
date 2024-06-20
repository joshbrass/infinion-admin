// import { ClassNames } from "@emotion/react";
import CampaignInfo from "./pages/campaign-information/CampaignInfo";
import Campaign from "./pages/campaign/Campaign";
import NewCampaign from "./pages/new-campaign/NewCampaign";
import Overview from "./pages/overview/Overview";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app bg-red-500">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/campaign-information" element={<CampaignInfo />} />
            <Route path="/new-campaign" element={<NewCampaign />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
