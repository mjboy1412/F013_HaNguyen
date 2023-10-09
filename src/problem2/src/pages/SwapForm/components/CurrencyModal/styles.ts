import styled from "styled-components";

export const StyledOverlay = styled.div`
  z-index: 1040;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  position: fixed;
`;

export const StyledModal = styled.div`
  background-color: rgb(19, 19, 19);

  width: 100%;
  overflow: hidden;
  display: grid;
  row-gap: 16px;
  box-sizing: border-box;
  padding: 20px 20px 0px 20px;
  flex-direction: column;
  position: relative;
  border-radius: 20px;
  width: 417.778px;
  grid-template-rows: 24px 40px 92px auto;
  height: 63vh;
  max-height: 670px;
  min-height: 356px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  color: #fff;
  span {
    font-weight: 535;
    font-size: 16px;
  }
  button {
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #fff;
  }
`;

export const StyledInputWraper = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  outline: none;
  border-radius: 12px;
  color: rgb(255, 255, 255);
  border: 1px solid rgba(255, 255, 255, 0.07);
  appearance: none;
  font-weight: 485;
  font-size: 16px;
  transition: border 100ms ease 0s;
  box-sizing: border-box;
  padding: 0px 12px;
  gap: 6px;
  input {
    flex-grow: 2;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 485;
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: start;
    padding: 0px;
    box-sizing: border-box;
  }
  svg {
    height: 20px;
    width: 20px;
  }
`;

export const StyledCurrencyButton = styled.button`
  background-color: rgb(19, 19, 19);
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
  align-items: center;
  opacity: 1;
  color: rgb(255, 255, 255);
  cursor: pointer;
  outline: none;
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
  align-self: center;
  margin: 4px;
`;

export const StyledMostPopularConcurrencies = styled.div`
  width: 100%;
  display: flex;
  padding: 0px;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  flex-wrap: wrap;
  margin: -4px;
`;

export const StyledCurrencies = styled.div`
  height: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin: 0px -20px;
  align-self: stretch;
  background-color: transparent;
  &::-webkit-scrollbar {
    background: transparent;
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffffff1f;
    border-radius: 8px;
  }
`;

export const StyledCurrencyListItemButton = styled.button<{
  $isCurrentCurrency: boolean;
}>`
  ${(props) =>
    props.$isCurrentCurrency &&
    `pointer-events: none;
    opacity: 0.4;`}
  background-color: transparent;
  padding: 4px 20px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) minmax(0px, 72px);
  grid-template-rows: 24px 24px;
  gap: 16px;
  cursor: pointer;
  border: none;
  outline: none;
  row-gap: 0px;
  &:hover {
    background-color: rgba(152, 161, 192, 0.08);
  }
  img {
    grid-row: 1 / span 2;
    align-self: center;
    height: 36px;
    width: 36px;
  }
  p {
    font-size: 16px;
    color: #fff;
    font-weight: 485;
    margin: 0;
    grid-row: 1/2;
    grid-column: 2/3;
    justify-self: start;
  }
  span {
    font-weight: 485;
    font-size: 12px;
    color: rgb(155, 155, 155);
    grid-row: 2/3;
    grid-column: 2/3;
    justify-self: start;
  }
  svg:last-child {
    grid-column: 3 / span 1;
    grid-row: 1 / span 2;
    align-self: end;
    height: 20px;
    width: 20px;
    color: rgb(252, 114, 255);
    align-self: center;
    justify-self: end;
  }
`;

export const StyledLoadingMessage = styled.p`
  font-weight: 485;
  font-size: 14px;
  color: rgb(155, 155, 155);
  text-align: center;
`;
