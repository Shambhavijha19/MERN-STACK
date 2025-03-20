import React, { useState } from 'react';

function TextUpdater() {
    const [text, setText] = useState('');

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
            <p>{text}</p>
        </div>
    );
}

export default TextUpdater;
