import { useEffect, useState } from "react";
import { getCurrencies } from "services/api/currency";
import { Currency } from "types";

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<Currency[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCurrencies();
      setCurrencies(data);
    };
    fetchData().catch(console.error);
  }, []);

  return currencies;
};
