import "./Overview.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import overviewImg from "../../assets/images/svg/empty-RBIL0twm1B.svg";
import newCamIcon from "../../assets/images/svg/sidebarIcons/material-symbols_add.svg";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const Overview: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start ?? undefined);
    setEndDate(end ?? undefined);
  };

  return (
    <div className="overview">
      <div className="overview-container">
        <div className="overview-top-section">
          <div className="top-right">
            <h3>Overview</h3>
          </div>
          <div className="top-left">
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              placeholderText="DateRange |"
              aria-label="Select date range"
            />
            <button className="export_btn" onClick={() => { /* Export functionality here */ }}>Export</button>
          </div>
        </div>
        <div className="overview-bottom-section">
          <img src={overviewImg} alt="No activity illustration" />
          <p>No activity yet. Create a new campaign to get started.</p>
          <Link to='/new-campaign' className="overviewBtn_link">
            <button className="overview_bottom_btn">
              <img src={newCamIcon} alt="New Campaign Icon" /> New Campaign
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
