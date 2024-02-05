import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    }
    
    return (
<div className='alert alert-secondary'>
    <select className="custom-select" id={newCurrency} onChange={handleCurrencyChange}>
        <option defaultValue>Currency ({newCurrency}) </option>
        <option value="Dollar" name="Dollar"> Dollar</option>
        <option value="Pound" name="Pound">Pound</option>
        <option value="Euro" name="Euro">Euro</option>
        <option value="Rupee" name="Rupee">Rupee</option>        
    </select>
</div>
    );
};
export default Currency;