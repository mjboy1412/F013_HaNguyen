import React, { useState, useEffect } from "react";

import { formatCash } from "services/utils";
import CryptoIcon from "components/comon/CryptoIcon";
import { ReactComponent as ArrowDownIcon } from "assets/icons/svg/arrows/arrow-down.svg";
import {
  StyledInputWraper,
  StyledLabel,
  StyledInput,
  StyledSpanUSD,
  StyledSelectCurrencyButton,
} from "./styles";
import { Amount } from "types";

interface CurrencyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  amount: Amount;
  onChangeNumber: (number: number) => void;
  onClickCurrency: () => void;
  onFocus: () => void;
}

const MAX_CURRENCY_INPUT_LENGTH = 15;
const FLOAT_STRING_REGEX = /^[+-]?([0-9]*[.{0,1}])?[0-9]*$/;

const CurrencyInput: React.FunctionComponent<CurrencyInputProps> = ({
  label = "",
  amount,
  onChangeNumber,
  onClickCurrency,
  onFocus,
  ...rest
}) => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    setInput(amount.number > 0 ? String(amount.number) : "");
  }, [amount.currency, amount.number]);

  const handleClickSelectCurrency = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    onClickCurrency();
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (
      value.length < MAX_CURRENCY_INPUT_LENGTH &&
      FLOAT_STRING_REGEX.test(value)
    ) {
      setInput(value);
      const formatedNumber = Number(value);
      onChangeNumber(formatedNumber);
    }
  };

  return (
    <StyledInputWraper onClick={onFocus}>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput
        id={label}
        type="text"
        placeholder="0"
        value={input}
        autoComplete="off"
        onChange={handleChange}
        onFocus={onFocus}
        {...rest}
      />
      <StyledSelectCurrencyButton
        onClick={handleClickSelectCurrency}
        $isCrytoChosen={!!amount.currency}
      >
        {amount.currency ? (
          <>
            <CryptoIcon name={amount.currency} />
            {amount.currency}
            <ArrowDownIcon />
          </>
        ) : (
          <>
            Select token
            <ArrowDownIcon />
          </>
        )}
      </StyledSelectCurrencyButton>
      {amount.currency && amount.number > 0 && amount.price && (
        <StyledSpanUSD>
          ${formatCash(amount.number * amount.price)}
        </StyledSpanUSD>
      )}
    </StyledInputWraper>
  );
};

export default CurrencyInput;
