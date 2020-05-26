import React from 'react';

export default ({oldValue, newValue, name}) => (
    <span>
        {name}: <s>{oldValue}</s> 🡒 {newValue}
    </span>
);