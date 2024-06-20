import Table from '../../components/campaignTable/Table';
import './Campaign.css';




const Campaign = () => {


  const CampaignNav = ["All(90)", "Inactive(90)","Active(90)" ]

  return (
    <div className='campaign'>
      <div className="campaign-header">
        <h1>All Campaigns </h1>
      </div>
      <div className="campaign-wrapper">
        <div className="campaign-right">
            <div className="campaign_nav">  
               { CampaignNav.map((nav) => (
                <button className="campaign_nav_btn">
                  {nav}
                </button>  
                   ))}
            </div>
        </div>
        <div className="campaign-left">
            <div className='campaign-input'>   
               <input type="text" placeholder='Search...'/>
               <input type="text" placeholder='Filter by date,' />
            </div>
        </div>
      </div>
      <Table />
      
    </div>
  )
}

export default Campaign
