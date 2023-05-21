import "../styleSheets/ticketsForm.css"
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Papa from 'papaparse';
import airportData from "../files/data.csv"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TicketsForm = () => {
    const [searchTermFrom, setSearchTermFrom] = useState('');
    const [optionsFrom, setOptionsFrom] = useState([]);

    const [searchTermTo, setSearchTermTo] = useState('');
    const [optionsTo, setOptionsTo] = useState([]);

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (searchTermFrom && searchTermFrom.length >= 3) {
                try {
                    const response = await fetch(airportData);
                    const csvText = await response.text();

                    const { data } = Papa.parse(csvText, { header: false });

                    const airports = data
                        .filter(
                            (row) =>
                                row[2]?.toLowerCase().includes(searchTermFrom.toLowerCase())||
                                row[3]?.toLowerCase().includes(searchTermFrom.toLowerCase())||
                                row[1]?.toLowerCase().includes(searchTermFrom.toLowerCase())
                        )
                        .map((row) => ({
                            value: row[4], // IATA column
                            label: `${row[4]} - ${row[1]}, ${row[2]}, ${row[3]}`,
                        }));

                    setOptionsFrom(airports);
                } catch (error) {
                    console.error('Error fetching airports:', error);
                }
            } else {
                setOptionsFrom([]);
            }
        };

        fetchData();
    }, [searchTermFrom]);

    const handleInputChangeFrom = (value) => {
        setSearchTermFrom(value);
    };

    const handleSelectChangeFrom = (selectedOption) => {
        setSearchTermFrom(selectedOption?.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (searchTermTo && searchTermTo.length >= 3) {
                try {
                    const response = await fetch(airportData);
                    const csvText = await response.text();

                    const { data } = Papa.parse(csvText, { header: false });

                    const airports = data
                        .filter(
                            (row) =>
                                row[2]?.toLowerCase().includes(searchTermTo.toLowerCase())||
                                row[3]?.toLowerCase().includes(searchTermTo.toLowerCase())||
                                row[1]?.toLowerCase().includes(searchTermTo.toLowerCase())
                        )
                        .map((row) => ({
                            value: row[4],
                            label: `${row[4]} - ${row[1]}, ${row[2]}, ${row[3]}`,
                        }));

                    setOptionsTo(airports);
                } catch (error) {
                    console.error('Error fetching airports:', error);
                }
            } else {
                setOptionsTo([]);
            }
        };

        fetchData();
    }, [searchTermTo]);

    const handleInputChangeTo = (value) => {
        setSearchTermTo(value);
    };

    const handleSelectChangeTo = (selectedOption) => {
        setSearchTermTo(selectedOption?.value);
    };

    const customNoOptionsMessage = () => {
        return 'Не знайдено аеропорту!';
    };

    const CustomDatePickerInput = ({ value, onClick }) => (
        <input
            type="text"
            value={value}
            onClick={onClick}
            placeholder="Дата вильоту"
            style={{ width: '15rem' }}
            className="small-select"
        />
    );

    return (
        <div className='ticketsForm-container'>

                <form className='ticketsForm'>
                    <div className='ticketsForm-phrase'>
                        Твої квитки в будь-якому напрямку
                    </div>
                    <div className='selects-container'>
                        <Select
                            value={optionsFrom.find((option) => option.value === searchTermFrom)}
                            options={optionsFrom}
                            onChange={handleSelectChangeFrom}
                            onInputChange={handleInputChangeFrom}
                            placeholder="Місто вильоту"
                            isSearchable={true}
                            className="small-select"
                            classNamePrefix="small-select"
                            noOptionsMessage={customNoOptionsMessage}
                            components={{
                                DropdownIndicator: () => null
                            }}
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    height: "3.5rem",
                                    width: '15rem'

                                }),
                            }}
                            required={true}
                        />

                        <Select
                            value={optionsTo.find((option) => option.value === searchTermTo)}
                            options={optionsTo}
                            onChange={handleSelectChangeTo}
                            onInputChange={handleInputChangeTo}
                            placeholder="Місто прильоту"
                            isSearchable={true}
                            className="small-select"
                            classNamePrefix="small-select"
                            noOptionsMessage={customNoOptionsMessage}
                            components={{
                                DropdownIndicator: () => null
                            }}
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    height: "3.5rem",
                                    width: '15rem',
                                }),
                            }}
                            required={true}
                        />

                        <div className='date-select'>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                customInput={<CustomDatePickerInput />}
                                dateFormat='dd.MM.yyyy'
                                required={true}
                            />
                        </div>
                        <input  type="number" className='numberOfPassengers' placeholder='Введіть кількість пасажирів' min='1' required={true}/>
                    </div>
                    <div >
                        <button className='search-button'>
                            Знайти
                        </button>
                    </div>

                </form>

        </div>
    )
}

export default TicketsForm;

