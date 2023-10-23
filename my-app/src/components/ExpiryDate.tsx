import { useState } from 'react';

function ExpiryDate() {
    const [expiryDateValid, setExpiryDateValid] = useState(true);

    const handleExpiryDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
        const isValidExpiryDate = expiryDateRegex.test(event.target.value);
        if (isValidExpiryDate) {
            const [month, year] = event.target.value.split('/');
            const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-indexed month
            const currentYear = new Date().getFullYear() % 100; // get last two digits of current year
            if (parseInt(year) > currentYear || (parseInt(year) === currentYear && parseInt(month) >= currentMonth)) {
                console.log('Expiry date is valid');
                setExpiryDateValid(true);
            } else {
                console.log('Expiry date is invalid');
                setExpiryDateValid(false);
            }
        } else {
            console.log('Expiry date is invalid');
            setExpiryDateValid(false);
        }
    };

    return (
        <div>
            <label>Expiry Date</label>
            <input type="text" placeholder="MM/YY" onChange={handleExpiryDateChange} />
            {!expiryDateValid && <p style={{ color: 'red' }}>Invalid expiry date</p>}
        </div>
    );
}

export default ExpiryDate;