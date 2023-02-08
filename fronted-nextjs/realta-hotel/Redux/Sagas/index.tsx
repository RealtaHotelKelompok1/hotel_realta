import { all, takeEvery } from "redux-saga/effects";

function* watchAll():any{
    yield all([
    //Master Reducer nya dibawah Comman masing" module

    //Users

    //HR

    //Hotels

    //Booking

    //Resto

    //Payment

    //Purchase
    ])
}

export default watchAll