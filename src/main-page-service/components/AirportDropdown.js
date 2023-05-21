import "../styleSheets/test.css"
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Papa from 'papaparse';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import airportData from "../files/data.csv"

const AirportDropdown = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [options, setOptions] = useState([]);

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (searchTerm && searchTerm.length >= 3) {
                try {
                    const response = await fetch(airportData);
                    const csvText = await response.text();

                    const { data } = Papa.parse(csvText, { header: false });

                    const airports = data
                        .filter(
                            (row) =>
                                row[2]?.toLowerCase().includes(searchTerm.toLowerCase())||  // City column
                    row[3]?.toLowerCase().includes(searchTerm.toLowerCase())||  // Country column
                    row[1]?.toLowerCase().includes(searchTerm.toLowerCase()) // Name column
                )
                .map((row) => ({
                        value: row[4], // IATA column
                        label: `${row[4]} - ${row[1]}, ${row[2]}, ${row[3]}`, // Name, City, Country columns
                }));

                    setOptions(airports);
                } catch (error) {
                    console.error('Error fetching airports:', error);
                }
            } else {
                setOptions([]);
            }
        };

        fetchData();
    }, [searchTerm]);

    const handleInputChange = (value) => {
        setSearchTerm(value);
    };

    const handleSelectChange = (selectedOption) => {
        setSearchTerm(selectedOption?.value);
    };

    const customNoOptionsMessage = () => {
        return 'No matching airports found'; // Customize the message here
    };
    return (
        <div>
            <h1>Airport Dropdown</h1>
            <Select
                value={options.find((option) => option.value === searchTerm)}
                options={options}
                onChange={handleSelectChange}
                onInputChange={handleInputChange}
                placeholder="Search for an airport, city, or country..."
                isSearchable={true} // Disable the search input
                className="small-select" // Add a custom CSS class name
                classNamePrefix="small-select"
                components={{
                    DropdownIndicator: () => null // Remove the down arrow icon
                }}
            />
            <div className='date-select'>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText='Дата вильоту'
                    dateFormat='dd.MM.yyyy'
                    className='small-select'
                />
            </div>
            <p>Selected Airport: {searchTerm}</p>
        </div>
    );
};

export default AirportDropdown;