import "../stylesheets/flight-reservation-form.css";
const FlightReservationForm = () => {

    return(
        <div className={"ticket-reservation-form-container"}>
            <div className={'number-of-passenger'}>
                Пазажир 1
            </div>
            <div className={'passengersInfo'}>
                <div className={'appeal'}>
                    <label htmlFor="appealSelect">Звернення:</label>
                    <select required={true} className="appealSelect">
                        <option value="">-- Звернення --</option>
                        <option value="option1">Пан (Mr)</option>
                        <option value="option2">Пані (Mrs)</option>
                        <option value="option3">Пані (Ms)</option>
                    </select>
                </div>
                <div className={'passengerName'}>
                    <label htmlFor="passengerName">Name:</label>
                    <input
                        type="text"
                        id="passengerName"
                        name="passengerName"
                        required={true}
                    />

                </div>
                <div className={'passengerLastName'}>
                    <label htmlFor="passengerLastName">Last Name:</label>
                    <input
                        type="text"
                        id="passengerLastName"
                        name="passengerLastName"
                        required={true}
                    />
                </div>
                <div className={'passengerEmail'}>
                    <label htmlFor="passengerEmail">Email:</label>
                    <input
                        type="email"
                        id="passengerEmail"
                        name="passengerEmail"
                        required={true}
                    />
                </div>
                <div className={'passengersPassport'}>
                    <label htmlFor="passengersPassport">Passport:</label>
                    <input
                        type="text"
                        id="passengersPassport"
                        name="passengersPassport"
                        required={true}
                    />
                </div>

            </div>
        </div>
    )
}
export default FlightReservationForm;