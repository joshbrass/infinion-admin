import { Link } from 'react-router-dom';
import './CampaignInfo.css';
import BackIcon from '../../assets/images/svg/eva_arrow-back-fill.svg'
import BarIcon from '../../assets/images/svg/navbarIcons/Rectangle 8.svg'
import KeywordSelector from '../../components/keywordSelector/KeywordSelector';


const CampaignInfo = () => {
  return (
    <div className='campaign_info'>
      <div className="campaign_navigation">
        <Link to='/campaign' className="campaign_link">
        
        <img src={BackIcon} alt="" />
         <h3>Back</h3>
        </Link>
      </div>
      <div className="campaign-formHeader">
        <h1>Campaign Information</h1>
        <div className="campaign_status">
          <h4 className='campaign_h4'>Campaign Status</h4>
          <img src={BarIcon} alt="" />
          <h4 className='active_h4'>Active</h4>
        </div>
      </div>
      <div className="campaign_info_form">
        <form action="" method='POST'>
          <div className="input_box">
            <label htmlFor="">Campaign Name</label>
            <input type="text" />
          </div>
          <div className="_column">
            <div className="input_box">
              <label htmlFor="">Start Date</label>
              <input type="data" />
            </div>
            <div className="input_box">
              <label htmlFor="">End date</label>
              <input type="data" />
            </div>
         </div>
            <div className="input_box">
              <KeywordSelector/>
            </div>
            <div className="input_box">
              <label htmlFor="">Want to receive daily digest about the campaign?</label>
              <input type="data" />
            </div>
            <div className="input_box">
              <label htmlFor="">Kindly select the time you want tio receive daily digest</label>
              <input type="data" />
            </div>
            
          
        </form>
        
      </div>
      <Link to='/' className='campaign_info_btnlink'>
        <div className='campaign_info_btn'>
            <button className='stopp_btn'>Stop Campaign</button>
            <button className='edit_btn'>Edit Information</button>
          </div>
      </Link>
      
    </div>
  )
}

export default CampaignInfo
