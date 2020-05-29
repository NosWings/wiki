import React from 'react';

export default ({firstText, secondText, oldValue, newValue}) => (
    <span>
        {firstText} <s>{oldValue}</s> 🡒 {newValue} {secondText}
    </span>
);