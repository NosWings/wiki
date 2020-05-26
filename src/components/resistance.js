import React from 'react';

function getElementType(elementType){
    switch(elementType){
        case '1':
            return 'var(--fire-element)';
        case '2':
            return 'var(--water-element)';
        case '3':
            return 'var(--light-element)';
        case '4':
            return 'var(--shadow-element)';
        default:
          break;
      }
}

export default ({elementType, oldValue, newValue}) => (
    <span
    style={{
      color: getElementType(elementType)
    }}>
        <img src={'https://nosapki.nostale.club/images/element' + elementType + '.png'} /> <s>{oldValue}%</s> 🡒 {newValue}%
    </span>
);