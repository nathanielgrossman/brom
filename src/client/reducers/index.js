import { combineReducers } from 'redux';

const reducersFile = require('./transactionsReducer');

const reducers = combineReducers({
  transactions: reducersFile.transactionsReducer,
  transactionMethodFilter: reducersFile.transactionMethodFilterReducer,
  selectedTransactionIndex: reducersFile.selectedTransactionIndexReducer,
  transactionApiFilter: reducersFile.transactionApiFilterReducer,
  transactionFlagFilter: reducersFile.transactionFlagFilterReducer,
  transactionDomainFilter: reducersFile.transactionDomainFilterReducer
})

export default reducers;