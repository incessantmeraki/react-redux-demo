import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import  {itemsFetchErrorReducer, itemsLoadingReducer, itemsReducer} from  './reducers'

export default () => {
    const store = createStore(
        combineReducers({
            itemsFetchError: itemsFetchErrorReducer,
            itemsLoading: itemsLoadingReducer,
            items: itemsReducer
        }),
        applyMiddleware(thunk)
    )

    return store
}