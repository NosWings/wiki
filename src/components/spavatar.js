import React from 'react';

export default ({spId}) => (
    <img src={'https://friends111.nostale.club/list/ip/' + (32500 + (+spId)*2) + '.png'} />
);