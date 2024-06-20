import React, { useState } from 'react';
import Select, { MultiValue, StylesConfig } from 'react-select';

// Define the type for the options
interface OptionType {
  value: string;
  label: string;
}

// Custom styles for react-select
const customStyles: StylesConfig<OptionType, true> = {
  control: (provided) => ({
    ...provided,
    boxShadow: 'none', // Removes the default box shadow (focus ring)
    border: '1px solid #ccc', // Keeps the outer border as a solid border
    '&:hover': {
      border: '1px solid #aaa' // Change border color on hover if needed
    }
  }),
  // Optionally customize other parts of the component as needed
};

const KeywordSelector: React.FC = () => {
  // Define the type for the state
  const [selectedKeywords, setSelectedKeywords] = useState<MultiValue<OptionType>>([]);

  // Define the options
  const options: OptionType[] = [
    { value: 'keyword1', label: 'Keyword 1' },
    { value: 'keyword2', label: 'Keyword 2' },
    { value: 'keyword3', label: 'Keyword 3' },
    // Add more keyword options as needed
  ];

  // Define the type for the handleChange function
  const handleChange = (selectedOptions: MultiValue<OptionType>) => {
    setSelectedKeywords(selectedOptions);
  };

  return (
    <div className="keyword-selector">
      <label htmlFor="keywords">Linked Keywords</label>
      <Select
        id="keywords"
        isMulti
        options={options}
        value={selectedKeywords}
        onChange={handleChange}
        placeholder="To add keywords, type your keyword and press enter"
        styles={customStyles} // Apply custom styles
      />
    </div>
  );
};

export default KeywordSelector;
