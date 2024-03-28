import { applyMiddleware, createStore, compose } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'

import { UserReducer } from './User/UserReducer';
import { ListingReducer } from './Listing/ListingReducer';
import { UserRoleReducer } from './UserRole/UserRoleReducer';
import { CompanyReducer } from './Company/CompanyReducer';
import { SaleReducer } from './Sale/SaleReducer';
import { PaymentStatusReducer } from './PaymentSatus/PaymentStatusReducer';
import { PersonalDataReducer } from './PersonalData/PersonalDataReducer';

const allReducers = combineReducers({
    user : UserReducer,
    listing : ListingReducer,
    user_role : UserRoleReducer,
    company : CompanyReducer,
    sale : SaleReducer,
    payment_status : PaymentStatusReducer,
    personal_data : PersonalDataReducer
})


const saveStoreToLS = state => {
    try {
        const stringified = JSON.stringify(state)
        localStorage.setItem("store", stringified)
    } catch (e) {
        console.log(e)
    }
}


const loadStoreFromLS = () => {
    try {
        const stringified = localStorage.getItem("store");
        return stringified ? JSON.parse(stringified) : undefined;
    } catch (e) {
        console.log(e);
        return undefined;
    }
};




export const store = createStore(
    allReducers,
    loadStoreFromLS(),
    composeWithDevTools(applyMiddleware(thunk))
)
store.subscribe(() => saveStoreToLS(store.getState()))