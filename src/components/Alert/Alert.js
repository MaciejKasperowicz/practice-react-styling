import React from 'react';

import { StyledAlert } from './Alert.styled';

const Alert = props => {
    const { variant, children } = props;
    return (
        <StyledAlert variant={variant}>{children}</StyledAlert>
    );
}

export default Alert;