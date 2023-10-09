import styled from "styled-components";

export const StyledInputWraper = styled.div`
  background-color: rgb(27, 27, 27);
  border-radius: 16px;
  color: rgb(155, 155, 155);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 16px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  display: grid;
  grid-template-rows: 20px 44px 24px;
  border: 1px solid rgb(27, 27, 27);
  &:hover,
  &:focus,
  &:active {
    border-color: rgba(152, 161, 192, 0.08);
  }
  &:focus-within {
    border-color: rgba(184, 192, 220, 0.24);
  }
`;

export const StyledLabel = styled.label`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 485;
  font-size: 14px;
  color: rgb(155, 155, 155);
  line-height: 20px;
  grid-row: 1 / 2;
  grid-column: 1 / -1;
`;

export const StyledInput = styled.input`
  filter: none;
  opacity: 1;
  transition: opacity 250ms ease-in-out 0s;
  text-align: left;
  font-size: 36px;
  font-weight: 485;
  height: 44px;
  display: flex;
  color: rgb(255, 255, 255);
  pointer-events: auto;
  position: relative;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: transparent;
  grid-row: 2 / 3;
  grid-column: 1 / -1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  appearance: textfield;
`;

export const StyledSelectCurrencyButton = styled.button<{
  $isCrytoChosen: boolean;
}>`
  ${(props) =>
    props.$isCrytoChosen
      ? ` background-color: rgb(19, 19, 19);
          padding: 4px 12px 4px 4px;
          border-radius: 16px;
          gap: 6px;
          svg:nth-child(2) {
            margin-left: 6px;
          }
          &:hover {
            background-color: rgb(27, 27, 27);
          }
          &:active {
            background-color: rgb(27, 27, 27);
          }
        `
      : ` background-color: rgb(252, 114, 255);
          padding: 6px 10px 6px 12px;
          border-radius: 18px;
          gap: 12px;
        `}
  align-items: center;
  opacity: 1;
  color: rgb(255, 255, 255);
  cursor: pointer;
  outline: none;
  user-select: none;
  border: 1px solid rgba(255, 255, 255, 0.07);
  font-size: 20px;
  font-weight: 535;
  width: auto;
  height: 36px;
  box-shadow: rgba(34, 34, 34, 0.04) 0px 0px 10px 0px;
  visibility: visible;
  animation: auto ease 0s 1 normal none running none;
  display: flex;
  line-height: 24px;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: center;
`;

export const StyledSpanUSD = styled.span`
  margin: 0px;
  min-width: 0px;
  font-weight: 485;
  font-size: 14px;
  color: rgb(155, 155, 155);
  line-height: 20px;
  grid-column: 1 / -1;
  grid-row: 3 / -1;
  margin-top: 8px;
`;
