import React from "react";

import Button from "components/comon/Button";
import { StyledHeader } from "./styles";

const Header: React.FunctionComponent<React.HTMLAttributes<HTMLElement>> = (
  props,
) => {
  return (
    <StyledHeader {...props}>
      <Button size="small">Connect</Button>
    </StyledHeader>
  );
};

export default Header;
