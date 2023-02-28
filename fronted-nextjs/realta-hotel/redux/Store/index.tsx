import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from '../Sagas';
import usersReducers from "../Reducers/Users/usersReducer";
import bankReducer from "../Reducers/Payment/bank";
import fintechReducer from "../Reducers/Payment/fintech";
import transactionReducer from "../Reducers/Payment/transaction";
import userAccountReducer from "../Reducers/Payment/userAccount";

const saga = createSagaMiddleware()
const reducer = combineReducers({
  //Master Reducer nya dibawah Comman masing" module

  //Users
  usersReducers: usersReducers,

  //HR

  //Hotels

  //Booking

  //Resto

  //Payment
  transactionReducer,
  bankReducer,
  userAccountReducer,
  fintechReducer

  //Purchase

});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(saga),
});
saga.run(rootSaga)

export default store;
