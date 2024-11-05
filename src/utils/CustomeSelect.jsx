import React from 'react';
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
        ...provided,
        width: "70px", 
        padding: '0',
        fontSize : "10px",
        margin: "0px"
    }),
    menu: (provided) => ({
        ...provided,
        width: '300px',
        color: "black",
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        padding: '4px', 
        fontSize: '15px', 
        svg: {
            height: '15px', 
            width: '15px', 
        },
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
        placeholder="All"
    />
};

export default CustomSelect;
