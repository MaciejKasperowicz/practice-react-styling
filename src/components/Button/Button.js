import React from "react";
import { StyledButton } from "./Button.styled";


const Button = props => {
    const { children, variant, size = "sm", active, disabled } = props;
    return (
        <StyledButton variant={variant} size={size} active={active} disabled={disabled}>{children}</StyledButton>
    )
}

export default Button;