import React from "react";

import { StyledButton } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isFullWidth?: boolean;
  size?: "big" | "small";
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  isFullWidth = false,
  size = "small",
  ...rest
}) => {
  return (
    <StyledButton $size={size} $isFullWidth={isFullWidth} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
