import React from 'react';
import styled from 'styled-components';

import Hi from './Hi.jsx';

const Lightbox = () => {

    return (
        <LightboxStyled className='Lightbox'>
            <Hi /> 
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    
`;