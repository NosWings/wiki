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

function getElementName(elementType){
    switch(elementType){
        case '1':
            return 'Fire';
        case '2':
            return 'Water';
        case '3':
            return 'Light';
        case '4':
            return 'Shadow';
      }
}

export default ({spId, name, specialistNumber, className, elementType}) => (
    <span>
    </span>,

    <table>
        <tr>
            <th rowSpan="3">
                <img src={'https://nosapki.nostale.club/images/Ikona/' + (32500 + (+spId)*2) + '.png'} />
            </th>
            <td>
                {name}
            </td>
        </tr>
        <tr>
            <td>
                SP {specialistNumber} - {className}
            </td>
        </tr>
        <tr>
            <td>
                <img src={'https://nosapki.nostale.club/images/element' + elementType + '.png'} /> <span style={{ color: getElementType(elementType) }}> {getElementName(elementType)} </span>
            </td>
        </tr>
    </table>
);