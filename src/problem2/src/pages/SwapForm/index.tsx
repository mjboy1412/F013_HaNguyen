import React, { useState } from "react";

import Button from "components/comon/Button";
import CurrencyInput from "./components/CurrencyInput";
import CurrencyModal from "./components/CurrencyModal";
import { ReactComponent as SwapDownIcon } from "assets/icons/svg/arrows/swap-down.svg";
import { Amount } from "types";
import { amountTypes, amountsActions, useAmounts } from "./hooks";
import {
  StyledContainer,
  StyledForm,
  StyledTitle,
  StyledButtonSwap,
} from "./styles";

const SwapForm = () => {
  const { amountState, amountDipatch } = useAmounts();
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] =
    useState<boolean>(false);

  const openCurrencyModal = () => {
    setIsCurrencyModalOpen(true);
  };
  const closeCurrencyModal = () => {
    setIsCurrencyModalOpen(false);
  };
  const setPayAmount = (number: number) => {
    amountDipatch({ type: amountsActions.UPDATE_PAY_AMOUNT, payload: number });
  };
  const setReceiveAmount = (number: number) => {
    amountDipatch({
      type: amountsActions.UPDATE_RECEIVE_AMOUNT,
      payload: number,
    });
  };
  const setPayCurrency = (currency: string, price: number) => {
    amountDipatch({
      type: amountsActions.UPDATE_PAY_AMOUNT_CURRENCY,
      payload: { currency: currency, price: price },
    });
  };
  const swapAmounts = () => {
    amountDipatch({ type: amountsActions.SWAP_AMOUNTS });
  };

  const setReceiveCurrency = (currency: string, price: number) => {
    amountDipatch({
      type: amountsActions.UPDATE_RECEIVE_AMOUNT_CURRENCY,
      payload: { currency: currency, price: price },
    });
  };

  const handleFocusPayCurrency = () => {
    amountDipatch({
      type: amountsActions.UPDATE_CURRENT_FOCUS_AMOUNT_TYPE,
      payload: amountTypes.PAY,
    });
  };
  const handleFocusReceiveCurrency = () => {
    amountDipatch({
      type: amountsActions.UPDATE_CURRENT_FOCUS_AMOUNT_TYPE,
      payload: amountTypes.RECEIVE,
    });
  };
  const handleChangePayAmount = (number: number) => {
    const receiveAmount = caculateAmountCounterPartByItself(
      amountState.receiveAmount,
      { ...amountState.payAmount, number: number },
    );
    setReceiveAmount(receiveAmount);
    setPayAmount(number);
  };
  const handleChangeReceiveAmount = (number: number) => {
    const payAmount = caculateAmountCounterPartByItself(amountState.payAmount, {
      ...amountState.receiveAmount,
      number: number,
    });
    setPayAmount(payAmount);
    setReceiveAmount(number);
  };
  const handleSelectCurrency = (currency: string, price: number) => {
    if (amountState.currentFocusAmountType === amountTypes.PAY) {
      const calculatedPay = caculateAmountByItsCounterPart(
        {
          ...amountState.payAmount,
          currency: currency,
          price: price,
        },
        amountState.receiveAmount,
      );
      setPayAmount(calculatedPay);
      setPayCurrency(currency, price);
    }
    if (amountState.currentFocusAmountType === amountTypes.RECEIVE) {
      const calculatedReceive = caculateAmountByItsCounterPart(
        {
          ...amountState.receiveAmount,
          currency: currency,
          price: price,
        },
        amountState.payAmount,
      );
      setReceiveAmount(calculatedReceive);
      setReceiveCurrency(currency, price);
    }
  };
  const handleClickSwap = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    swapAmounts();
  };

  const caculateAmountByItsCounterPart = (
    amountToBeCaculated: Amount,
    amountToBeCaculatedBy: Amount,
  ): number => {
    const isAmountToBeCaculated =
      amountToBeCaculated.currency && amountToBeCaculated.price > 0;
    const isAmountToBeCaculatedBy =
      amountToBeCaculatedBy.currency &&
      amountToBeCaculatedBy.price > 0 &&
      amountToBeCaculatedBy.number > 0;

    if (isAmountToBeCaculated && isAmountToBeCaculatedBy)
      return Number(
        (
          (amountToBeCaculatedBy.number * amountToBeCaculatedBy.price) /
          amountToBeCaculated.price
        ).toFixed(10),
      );

    return 0;
  };

  const caculateAmountCounterPartByItself = (
    amountToBeCaculated: Amount,
    amountToBeCaculatedBy: Amount,
  ): number => {
    const isAmountToBeCaculated =
      amountToBeCaculated.currency && amountToBeCaculated.price > 0;
    const isAmountToBeCaculatedBy =
      amountToBeCaculatedBy.currency &&
      amountToBeCaculatedBy.price > 0 &&
      amountToBeCaculatedBy.number > 0;

    if (isAmountToBeCaculated && isAmountToBeCaculatedBy)
      return Number(
        (
          (amountToBeCaculatedBy.number * amountToBeCaculatedBy.price) /
          amountToBeCaculated.price
        ).toFixed(10),
      );

    return amountToBeCaculated.number;
  };

  return (
    <StyledContainer>
      <StyledTitle>Swap</StyledTitle>
      <StyledForm>
        <CurrencyInput
          label="You pay"
          amount={amountState.payAmount}
          onChangeNumber={handleChangePayAmount}
          onClickCurrency={openCurrencyModal}
          onFocus={handleFocusPayCurrency}
        />
        <CurrencyInput
          label="You receive"
          amount={amountState.receiveAmount}
          onChangeNumber={handleChangeReceiveAmount}
          onClickCurrency={openCurrencyModal}
          onFocus={handleFocusReceiveCurrency}
        />
        <Button isFullWidth size="big">
          Connect Wallet
        </Button>
        <StyledButtonSwap onClick={handleClickSwap}>
          <SwapDownIcon />
        </StyledButtonSwap>
      </StyledForm>
      {isCurrencyModalOpen && (
        <CurrencyModal
          currentCurrency={
            amountState[amountState.currentFocusAmountType].currency
          }
          onSelectCurrency={handleSelectCurrency}
          closeModal={closeCurrencyModal}
        />
      )}
    </StyledContainer>
  );
};

export default SwapForm;
