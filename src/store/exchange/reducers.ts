import {
  CurrencyExchangeState,
  CurrencyExchangeActionTypes,
  TOGGLE_BUY_SALE,
  BUY_MODE,
  UAH_CURRENCY,
  SWITCH_CURRENCY,
} from './types'

const initialState: CurrencyExchangeState = {
  sum: 0,
  mode: BUY_MODE,
  currentCurrency: UAH_CURRENCY
}

export function currencyExchangeReducer(
  state = initialState,
  action: CurrencyExchangeActionTypes
): CurrencyExchangeState {
  switch (action.type) {
    case TOGGLE_BUY_SALE:
      return {
        ...state,
        mode: action.payload
      }
    case SWITCH_CURRENCY:
      return {
        ...state,
        currentCurrency: action.payload
      }
    default:
      return state
  }
}