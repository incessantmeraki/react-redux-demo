// Error in fetching API
export const itemsFetchError = (bool) => ({
    type: 'ITEMS_FETCH_ERROR',
    fetchError: bool
});

// Fetching process initiated
export const itemsLoading = (bool) => ({
    type: 'ITEMS_ARE_LOADING',
    isLoading:bool
});

// Items successfully fetched
export const itemsFetchSuccess =(items) => ({
    type: 'ITEMS_FETCH_SUCCESS',
    items: items
});

// Start the fetching process
export const startItemsFetch = (url) => {
    return (dispatch) => {
        dispatch(itemsLoading(true))

        return fetch(url)
            .then ((res) => {
                if (!res.ok) {
                    throw Error (res.statusText);
                }

                dispatch(itemsLoading(false));
                return res;
            })
            .then ((res) => res.json())
            .then((items) => dispatch(itemsFetchSuccess(items)))
            .catch(()=> dispatch(itemsFetchError(true)))
    }
};

