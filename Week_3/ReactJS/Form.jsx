import React, { useState } from 'react';

function Form() {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Input Value: ${inputValue}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter something..."
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
