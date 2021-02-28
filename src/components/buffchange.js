import React from 'react';
import GameIcon from '../../src/components/gameicon.js';

export default ({percentage, oldIcon, oldName, newIcon, newName}) => (
    <span>
        There is a {percentage} chance of causing: <s>[{<GameIcon iconId={oldIcon}/>} {oldName}]</s> 🡒 [{<GameIcon iconId={newIcon}/>} {newName}]
    </span>
);