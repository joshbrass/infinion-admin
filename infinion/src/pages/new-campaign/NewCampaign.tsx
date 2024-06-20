import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './NewCampaign.css';
import Switch from '@mui/material/Switch';

// Define label for accessibility purposes for the Switch component
const label = { inputProps: { 'aria-label': 'Switch demo' } };

// Define an interface for the form data structure
interface FormData {
  campaignName: string;
  campaignDescription: string;
  startDate: string;
  endDate: string;
  receiveDigest: boolean;
  linkedKeywords: string;
  digestFrequency: string;
}

const NewCampaign: React.FC = () => {
  // Initialize state to manage form data using useState hook
  const [formData, setFormData] = useState<FormData>({
    campaignName: '',
    campaignDescription: '',
    startDate: '',
    endDate: '',
    receiveDigest: false,
    linkedKeywords: '',
    digestFrequency: ''
  });

  // Handle change in input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value, type } = e.target;
    // Handle checkbox input specifically
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Construct payload with form data to be sent to the server
    const payload = {
      campaignName: formData.campaignName,
      campaignDescription: formData.campaignDescription,
      startDate: formData.startDate,
      endDate: formData.endDate,
      digestCampaign: formData.receiveDigest,
      linkedKeywords: formData.linkedKeywords.split(',').map(keyword => keyword.trim()),
      dailyDigest: formData.digestFrequency
    };

    try {
      // Send POST request to the server with the payload
      const response = await axios.post('https://infinion-test-int-test.azurewebsites.net/api/Campaign', payload);
      alert('Campaign created successfully');
      console.log(response);
    } catch (error) {
      console.error('There was an error creating the campaign!', error);
    }
  };

  return (
    <div className="newcampaign">
      <div className="header">
        <h1>Create new campaign</h1>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="campaignName">Campaign Name</label>
            <input
              type="text"
              name="campaignName"
              placeholder="e.g The Future is now"
              value={formData.campaignName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="campaignDescription">Campaign Description</label>
            <input
              type="text"
              name="campaignDescription"
              placeholder="Please Add a description to your campaign"
              value={formData.campaignDescription}
              onChange={handleChange}
              required
            />
          </div>
          <div className="column">
            <div className="input-box">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                name="startDate"
                placeholder="dd/mm/yy"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                name="endDate"
                placeholder="dd/mm/yy"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-content">
            <p>Want to receive daily digest about the campaign?</p>
            <div>
              <Switch {...label} defaultChecked />
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="linkedKeywords">Linked Keywords</label>
            <input
              type="textarea"
              name="linkedKeywords"
              placeholder="To add keywords type your keyword and press enter"
              value={formData.linkedKeywords}
              onChange={handleChange}
              required
            />
          </div>
          <div className="timeframe-box">
            <label htmlFor="digestFrequency">Select how often you want to receive daily digest</label>
            <select
              name="digestFrequency"
              id="digestFrequency"
              value={formData.digestFrequency}
              onChange={handleChange}
              required
              className="select-box"
            >
              <option value="">Select</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div className="campaign-btn" style={{ marginTop: '20px' }}>
            <button type="button" className="campaign-btn1" style={{ cursor: 'pointer' }}>Cancel</button>
            <button type="submit" className="campaign-btn2" style={{ cursor: 'pointer' }}>Create campaign</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCampaign;
