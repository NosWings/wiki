import React from 'react';
import GameIcon from './gameicon.js';

export default ({itemId, amount, chance, name}) => (
    <span>
        There is {chance}% chance to get {amount}x <GameIcon iconId={itemId}/> <b>{name}</b>
    </span>
);