import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../../utils/types";

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

export const searchData = (data, action) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = (await fetch(`http://localhost:5000/api/v1/flight/getFlightData?flightNumber=${data?.flightNumber}`)).json(); // Replace with your API URL
            response.then((res) => {
                if (action)
                    action(res?.data)
                dispatch(fetchDataSuccess(res?.data));
            })
        } catch (error) {
            dispatch(fetchDataFailure(error.toString()));
        }
    };
};