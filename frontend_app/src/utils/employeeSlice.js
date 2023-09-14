import { createSlice } from '@reduxjs/toolkit'

const saveEmployeeData = (fieldName, value) => {
    localStorage.setItem(fieldName, value)
}

const initialState = {
    firstName: localStorage.getItem('firstName') || '', 
}

const slice = createSlice({
    name: 'employeeSlice',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
            saveEmployeeData('firstName', action.payload)
        },
    },
}
);


export const { setFirstName } = slice.actions

export const set = (firstName) => async dispatch => {
    try {

        dispatch(setFirstName(firstName));
    } catch (e) {
        return console.error(e.message);
    }
}


export default slice.reducer