import React from 'react';

import { MinCardContainer, MinCardContainerH4Flex} from './CardPequenoStyled'

const Cardpequeno = (props) => {
    return (
        
        <MinCardContainer>
            <MinCardContainerH4Flex>{props.icon}{props.nome}: {props.text}</MinCardContainerH4Flex>
        </MinCardContainer>
        
    );
}

export default Cardpequeno;
