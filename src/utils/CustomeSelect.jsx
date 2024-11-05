import React from 'react';
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
        ...provided,
        width: '100px', // Width of the select button
        border: '2px solid #22c55e', // Green border
    }),
    menu: (provided) => ({
        ...provided,
        width: '300px',
      
    }),
};

const options = [
    { value: 'all', label: 'All' },
    { value: 'category', label: 'Category' },
    { value: 'other', label: 'Other' },
];

const CustomSelect = () => {
    return <Select 
    options={options} 
    styles={customStyles} 
    className=""
    />
};

export default CustomSelect;
