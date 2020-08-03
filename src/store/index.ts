import { combineReducers, createStore } from 'redux';
import { currencyExchangeReducer } from './exchange/reducers'

const rootReducer = combineReducers({
    currencyExchangeReducer: currencyExchangeReducer
})

export type RootState = ReturnType<typeof rootReducer>
export const exchangeStore = createStore(rootReducer)