// change fetchError state  according to itemsFetchError dispatch
export const itemsFetchErrorReducer = (defaultState = false, action) => {
    switch (action.type) {
        case 'ITEMS_FETCH_ERROR':
            return action.fetchError
        default:
            return defaultState
    }
}

// change itemsLoading state according to itemsLoading dispatch
export const itemsLoadingReducer = (defaultState = false, action) => {
    switch (action.type) {
        case 'ITEMS_LOADING':
            return action.isLoading
        default:
            return defaultState
    }
}

//change items state according to itemsFetchSuccess dispatch
export const itemsReducer = (defaultState = [], action) => {
    switch (action.type) {
        case 'ITEMS_FETCH_SUCCESS':
            return action.items
        default:
            return defaultState
    }
}// change fetchError state  according to itemsFetchError dispatch
export const itemsFetchErrorReducer = (defaultState = false, action) => {
    switch (action.type) {
        case 'ITEMS_FETCH_ERROR':
            return action.fetchError
        default:
            return defaultState
    }
}

// change itemsLoading state according to itemsLoading dispatch
export const itemsLoadingReducer = (defaultState = false, action) => {
    switch (action.type) {
        case 'ITEMS_LOADING':
            return action.isLoading
        default:
            return defaultState
    }
}

//change items state according to itemsFetchSuccess dispatch
export const itemsReducer = (defaultState = [], action) => {
    switch (action.type) {
        case 'ITEMS_FETCH_SUCCESS':
            return action.items
        default:
            return defaultState
    }
}