import React from 'react';

export default ({oldValue, newValue}) => (
    <span>
        <s>{oldValue}</s> 🡒 <b>{newValue}</b>
    </span>
);