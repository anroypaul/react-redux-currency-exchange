import { TOGGLE_BUY_SALE, SWITCH_CURRENCY, CurrencyExchangeActionTypes } from './types'

export function toggleModeAction(newMode: string): CurrencyExchangeActionTypes {
  return {
    type: TOGGLE_BUY_SALE,
    payload: newMode
  }
}

export function switchCurrencyAction(newCurrency: string): CurrencyExchangeActionTypes {
  return {
    type: SWITCH_CURRENCY,
    payload: newCurrency
  }
}