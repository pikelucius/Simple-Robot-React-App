import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => async (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json()
        await dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: json })
   } catch (err) {
       dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err })
   }

// 