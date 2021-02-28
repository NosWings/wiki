import React from 'react';
import GameIcon from '../../src/components/gameicon.js';

export default ({oldPercentage, newPercentage, icon, name}) => (
    <span>
        There is a <s>{oldPercentage}%</s> 🡒 {newPercentage}% chance of causing: [{<GameIcon iconId={icon}/>} {name}]
    </span>
);