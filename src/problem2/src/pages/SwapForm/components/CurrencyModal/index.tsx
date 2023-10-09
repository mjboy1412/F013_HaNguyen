import React, { useState, useCallback, FormEvent } from "react";
import { debounce } from "lodash";

import CryptoIcon from "components/comon/CryptoIcon";
import { ReactComponent as CrossIcon } from "assets/icons/svg/others/cross.svg";
import { ReactComponent as SearchIcon } from "assets/icons/svg/others/search.svg";
import { ReactComponent as TickIcon } from "assets/icons/svg/others/tick.svg";
import { mostPopularCurrencies } from "./constants";
import { useCurrencies } from "./hooks";
import {
  StyledModal,
  StyledOverlay,
  StyledHeader,
  StyledInputWraper,
  StyledMostPopularConcurrencies,
  StyledCurrencyButton,
  StyledCurrencies,
  StyledCurrencyListItemButton,
  StyledLoadingMessage,
} from "./styles";

interface CurrencyModalProps {
  currentCurrency?: string | null;
  onSelectCurrency: (currency: string, price: number) => void;
  closeModal: () => void;
}
const CurrencyModal: React.FunctionComponent<CurrencyModalProps> = ({
  currentCurrency = "",
  closeModal,
  onSelectCurrency,
}) => {
  const [search, setSearch] = useState<string>("");
  const currencies = useCurrencies();

  const debounceSetSearch = useCallback(
    debounce((value) => setSearch(value), 1000),
    [],
  );

  const handleSearch = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    debounceSetSearch(value);
  };
  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    closeModal();
  };
  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { currentTarget } = event;
    const currency = currentTarget.getAttribute("data-currency");
    const price = currentTarget.getAttribute("data-price");
    if (currency && price) onSelectCurrency(currency, Number(price));
    closeModal();
  };

  return (
    <StyledOverlay>
      <StyledModal>
        <StyledHeader>
          <span>Select a token</span>
          <button onClick={handleClose}>
            <CrossIcon />
          </button>
        </StyledHeader>
        <StyledInputWraper>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search name or paste address"
            onChange={handleSearch}
          />
        </StyledInputWraper>
        <StyledMostPopularConcurrencies>
          {mostPopularCurrencies.map((currency) => (
            <StyledCurrencyButton
              data-currency={currency.code}
              data-price={currency.price}
              key={currency.code}
              onClick={handleClickButton}
            >
              <CryptoIcon name={currency.code} />
              {currency.code}
            </StyledCurrencyButton>
          ))}
        </StyledMostPopularConcurrencies>
        <StyledCurrencies>
          {currencies.length === 0 && (
            <StyledLoadingMessage>
              Fetching currencies information...
            </StyledLoadingMessage>
          )}
          {currencies.map((currency) => {
            const regExp = new RegExp(`[${currency.code}]`, "gi");
            return regExp.test(search) || search === "" ? (
              <StyledCurrencyListItemButton
                data-currency={currency.code}
                data-price={currency.price}
                $isCurrentCurrency={currency.code === currentCurrency}
                key={currency.code}
                onClick={handleClickButton}
              >
                <CryptoIcon name={currency.code} />
                <p>{currency.code}</p>
                <span>{currency.code}</span>
                {currency.code === currentCurrency && <TickIcon />}
              </StyledCurrencyListItemButton>
            ) : (
              <></>
            );
          })}
        </StyledCurrencies>
      </StyledModal>
    </StyledOverlay>
  );
};

export default CurrencyModal;
