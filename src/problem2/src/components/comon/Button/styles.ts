import styled from "styled-components";

export const StyledButton = styled.button<{
  $isFullWidth?: boolean;
  $size?: "big" | "small";
}>`
  width: ${(props) => (props.$isFullWidth ? "100%" : "fit-content")};
  ${(props) =>
    props.$size === "big"
      ? `font-size: 20px; padding: 16px;`
      : `font-size: 16px; padding: 10px 12px;`}
  box-sizing: border-box;
  color: rgb(252, 114, 255);
  font-weight: 535;
  cursor: pointer;
  text-align: center;
  border-radius: 16px;
  outline: none;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  will-change: transform;
  transition: transform 450ms ease 0s;
  transform: perspective(1px) translateZ(0px);
  background-color: rgb(49, 28, 49);
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
    border-radius: 16px;
  }
  &:hover {
    background-color: rgb(49, 28, 49);
    &::after {
      background-color: rgba(152, 161, 192, 0.08);
    }
  }
`;
