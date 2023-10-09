import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  width: 461.806px;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 12px 8px 8px;
  box-shadow:
    rgba(252, 114, 255, 0.08) 0px 0px 10px 0px,
    rgba(252, 114, 255, 0.18) 0px 40px 120px 0px;
  z-index: 1;
  transition: transform 250ms ease 0s;
`;

export const StyledTitle = styled.p`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  font-weight: 485;
  color: #fff;
  height: 36.6493px;
  margin: 0;
  margin-bottom: 10px;
  padding: 0px 12px;
`;

export const StyledForm = styled.form`
  position: relative;
  background: rgb(19, 19, 19);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 4px;
`;

export const StyledButtonSwap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 40px;
  width: 40px;
  background-color: rgb(27, 27, 27);
  border: 4px solid rgb(19, 19, 19);
  border-radius: 12px;
  top: 34%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;
