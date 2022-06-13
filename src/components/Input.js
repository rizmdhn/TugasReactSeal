import React, { useState } from 'react';

const TextInput = ({ type = "text",placeholder="input here" , ...props}) => {
    const [text, setText] = useState("");

    return (
        <input type={type} placeholder={placeholder}
            {...props} />

    );
};


export default TextInput;
