export const TOGGLE_BUY_SALE = "TOGGLE_BUY_SALE";
export const SWITCH_CURRENCY = "SWITCH_CURRENCY";

export const BUY_MODE = "BUY_MODE";
export const SALE_MODE = "SALE_MODE";

export const UAH_CURRENCY = "UAH";
export const USD_CURRENCY = "USD";
export const EUR_CURRENCY = "EUR";
export const RUB_CURRENCY = "RUB";
export const BTC_CURRENCY = "BTC";

interface ToggleBuySaleAction {
  type: typeof TOGGLE_BUY_SALE;
  payload: string;
}

interface SwitchCurrencyAction {
  type: typeof SWITCH_CURRENCY;
  payload: string;
}

export interface Currency {
  ccy: string;
  base_ccy: string;
  buy: number;
  sale: number;
}

export interface CurrencyExchangeState {
  sum: number;
  mode: string;
  currentCurrency: string;
}

export type CurrencyExchangeActionTypes =
  | ToggleBuySaleAction
  | SwitchCurrencyAction;
